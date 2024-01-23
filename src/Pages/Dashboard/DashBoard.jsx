import React from "react";
import BaseLayout from "../../Component/Layout/BaseLayout";
import AdminLayout from "../../Component/Layout/AdminLayout";
// import { useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

function DashBoard() {
  // const location = useLocation();
  // console.log('Location state:', location?.state.username);
  // const username = location?.state?.username || "Guest";
  return (
    <>
      <AdminLayout>DashBoard component</AdminLayout>
    </>
  );
}

export default DashBoard;
