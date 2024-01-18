import React, { useState } from "react";
import AdminSignup from "./AdminSignup";
import BaseLayout from "../../Component/Layout/BaseLayout";
import { Button, Form } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";
import { Link } from "react-router-dom";

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
 
  const handleChnage=(e)=>{
    const {name, value} =e.target;
      setFormData({...formData, [name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    toast.success('logged in')

  }
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
