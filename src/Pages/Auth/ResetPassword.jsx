import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import CustomInput from '../../Component/CustomInput'
import BaseLayout from '../../Component/Layout/BaseLayout'

function ResetPassword() {
  const inputs = [
    {
      name: "email",
      label: "Email",
      placeholder: "abc@gmail.com",
      required: true,
    }]
    const [formData, setFormData] = useState({})
 
    const handleChnage=(e)=>{
      const {name, value} =e.target;
        setFormData({...formData, [name]:value})
    }

    const handleSubmit=(e)=>{
      e.preventDefault()

    }
  return (
    <BaseLayout>
    <div className=" p-3 border shadow rounded admin-form">
          <h1 className="text-center p-2">Login</h1>
    <Form onSubmit={handleSubmit}>
{inputs.map((input) => {
              return (
                <CustomInput key={input.name} label={input.label} {...input} onChange={handleChnage} />
              );
            })}
            <div className='text-center'>
            <Button>Submit</Button>
            </div>
    </Form>
    </div>
    </BaseLayout>
  )
}

export default ResetPassword