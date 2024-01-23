import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer} from "redux-persist";

const persistConfig={
    key:'root',
    storage
}
const persistAuthReducer =persistReducer(persistConfig,authReducer)

export const store =configureStore({
    reducer:{
        auth:persistAuthReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})