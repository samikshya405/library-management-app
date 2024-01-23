// // PrivateRoute.js
// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import DashBoard from './Pages/Dashboard/DashBoard';

// const PrivateRoute = ({ element, ...rest }) => {
//   const { userInfo } = useSelector((state) => state.auth);

//   return userInfo ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// };

// export default PrivateRoute;
