import React, { useState } from "react";

import BaseLayout from "../../Component/Layout/BaseLayout";
import {  toast } from 'react-toastify';

import { Button, Form } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth,firestore } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";



const inputs = [
  { name: "fName", label: "First Name", placeholder: "Enter First Name", required:true },
  { name: "lName", label: "Last Name", placeholder: "Enter Last Name", required:true },
  { name: "Phone", label: "Phone", placeholder: "Enter Phone", type:'phone', required:true},
  {name:"email", label:"Email", placeholder:"abc@gmail.com", type:"email", required:true},
  {name:"password", label:"Password", placeholder:"********" , type:"password", required:true, minLength:6},
  {name:"confirmPassword", label:"Confirm Password", placeholder:"********" , type:"password", required:true}
];
function AdminSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({})
 
const handleChnage= (e)=>{
  const {name, value} =e.target;
    setFormData({...formData, [name]:value})
}
  const handleSubmit = async(e) => {
    e.preventDefault()
    const {password, confirmPassword, email, fName, lName, Phone} = formData
    if(password!==confirmPassword){
      return toast.error("password didnot match")
    }

    try{
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email, password
      );
      const uid = userCredential.user.uid;
  
      await setDoc(doc(firestore,"users",uid),{
        uid:uid,
        fName:fName,
        lName:lName,
        email:email,
        phone:Phone
      })
      toast("signUp successful")
      navigate('/')
     }catch(error){
      const errorCode = error.code
      if(errorCode.includes("auth/email-already-in-use")){
        toast.error("Account already exists!")
      }else{
        toast.error(error.message)
        console.log(error.message)
      }
  
     }
    };

    



    
    
    
  
  return (
    <>
      <BaseLayout>
        <div className=" p-3 border shadow rounded admin-form">
          <h1 className="text-center p-2">Admin SignUp</h1>
          <Form onSubmit={handleSubmit} >
            {inputs.map((input) => {
              return (
                <CustomInput
                

                  key={input.name}
                  label={input.label}
                  {...input}
                  onChange={handleChnage}
                  
                />
              );
            })}

            <div className="text-center p-2">
            <Button variant="primary" type="submit" >
              Submit
            </Button>
              </div>
              <div className="text-center">
                <label>Already have an account ? <Link to='/'>Login here</Link> </label>
              </div>
          </Form>
        </div>
      </BaseLayout>
    </>
  );
}

export default AdminSignup;
