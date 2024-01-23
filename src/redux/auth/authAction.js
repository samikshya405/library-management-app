import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { firestore } from "../../firebase-config";
import { setUserInfo } from "./authSlice";

export const getUserInfoAction = (uid)=> async(dispatch)=>{

    const docRef =doc(firestore, "users", uid);
      const docSnap =await getDoc(docRef)

      if(docSnap.exists()){
        const userData = docSnap.data()
        dispatch(setUserInfo(userData))
       

      }else{
        
        toast.error("No user found")
      }
}