import React from "react";

import BaseLayout from "../../Component/Layout/BaseLayout";

import { Button, Form } from "react-bootstrap";
import CustomInput from "../../Component/CustomInput";

const inputs = [
  { name: "fName", label: "First Name", placeholder: "Enter First Name" },
  { name: "lname", label: "Last Name", placeholder: "Enter Last Name" },
  { name: "Phone", label: "Phone", placeholder: "Enter Phone" },
  {name:"email", label:"Email", placeholder:"Enter Email"},
  {name:"password", label:"Password", placeholder:"********" , type:"password", required:true},
  {name:"confirmPassword", label:"Confirm Password", placeholder:"********" , type:"password", required:true}
];
function AdminSignup() {
  return (
    <>
      <BaseLayout>
        <div className=" p-3 border shadow rounded admin-form">
          <h1>Admin SignUp</h1>
          <Form>
            {inputs.map((input) => {
              return (
                <CustomInput
                  key={input.name}
                  label={input.label}
                  placeholder={input.placeholder}
                  type={input.type}
                  
                />
              );
            })}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </BaseLayout>
    </>
  );
}

export default AdminSignup;
