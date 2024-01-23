import React, { useEffect, useState } from "react";
import AdminSignup from "./AdminSignup";
import BaseLayout from "../../Component/Layout/BaseLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../firebase-config";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "../../redux/auth/authSlice";
import { doc, getDoc } from "firebase/firestore";
import { getUserInfoAction } from "../../redux/auth/authAction";

const inputs = [
  {
    name: "email",
    label: "Email",
    placeholder: "abc@gmail.com",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    placeholder: "********",
    type: "password",
    required: true,
    minLength: 6,
  },
];
function Login() {
  const [formData, setFormData] = useState({})
  const navigate = useNavigate();
  const dispatch =useDispatch()
  const {userInfo}= useSelector((state)=>state.auth)
  // const [username, setUsername] = useState(""); 
  const handleChnage=(e)=>{
    const {name, value} =e.target;
      setFormData({...formData, [name]:value})
  }
  const handleSubmit=async(e)=>{
    e.preventDefault()
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      //get the user information from database
      dispatch(getUserInfoAction(user.uid))
      toast("logged in")
     
    
    } catch (error) {
      const errorCode = error.code;
      if (errorCode.includes("auth/user-not-found") || errorCode.includes("auth/wrong-password")) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Invalid email or password");
        console.log(error.message);
      }
    }

  }
  useEffect(()=>{
    if(userInfo.uid){
      navigate('/dashboard')
    }

  },[userInfo])
  return (
    
    <>
      {/* <AdminSignup/> */}
      <BaseLayout>
        <div className=" p-3 border shadow rounded admin-form">
          <h1 className="text-center p-2">Login</h1>
          <Form onSubmit={handleSubmit}>
            {inputs.map((input) => {
              return (
                <CustomInput key={input.name} label={input.label} {...input} onChange={handleChnage} />
              );
            })}
            <div className="text-center p-2">
            <Button variant="primary" type="submit">
              Submit
            </Button>
              </div>
            <div className="text-center">
              <label>Do not have an account ?</label> <Link to={'/signUp'}>Register here</Link>
            </div>{" "}
          </Form>
        </div>
      </BaseLayout>
    </>
  );
}

export default Login;
