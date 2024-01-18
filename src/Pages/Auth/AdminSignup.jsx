import React, { useState } from "react";

import BaseLayout from "../../Component/Layout/BaseLayout";
import {  toast } from 'react-toastify';

import { Button, Form } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";
import { Link, useNavigate } from "react-router-dom";


const inputs = [
  { name: "fName", label: "First Name", placeholder: "Enter First Name", required:true },
  { name: "lname", label: "Last Name", placeholder: "Enter Last Name", required:true },
  { name: "Phone", label: "Phone", placeholder: "Enter Phone",required:true},
  {name:"email", label:"Email", placeholder:"abc@gmail.com", required:true},
  {name:"password", label:"Password", placeholder:"********" , type:"password", required:true, minLength:6},
  {name:"confirmPassword", label:"Confirm Password", placeholder:"********" , type:"password", required:true}
];
function AdminSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({})
 
const handleChnage=(e)=>{
  const {name, value} =e.target;
    setFormData({...formData, [name]:value})
}
  const handleSubmit = (e) => {
    e.preventDefault()
    const {password, confirmPassword} = formData
    if(password!==confirmPassword){
      return toast.error("password didnot match")
    }
    toast.success("Admin form data submitted")



    
    
    
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
