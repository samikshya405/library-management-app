import React from 'react'
import { Form } from 'react-bootstrap'


function CustomInput({label,placeholder,type, required}) {
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder}  />
            
          </Form.Group>
  )
}

export default CustomInput