import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../styles/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
const SignUp = () => {
  // const formik = useFormik({
  //   initialValues : {
  //     name:"",
  //     email : "",
  //     password : ""
  //   }, 
  //   validate : (values) => {
  //         let errors = {}
  //         if(values.name === ""){
  //           errors.name = "please Enter Your name"
  //       }
  //         if(values.email === ""){
  //             errors.email = "please Enter Your email"
  //         }
  //         if(values.password === ""){
  //           errors.password = "please Enter your password"
  //         }
  //         return errors
  //   },
  //   onSubmit: async (values) =>{
  //     try {
  //       const loginData = await axios.post(`http://localhost:3002/login`,values);
  //       if (loginData.status === 200) {
  //         navigate("/portal/login")
  //         window.localStorage.setItem("app-token",loginData.data.token)
  //       } else {
          
  //       }
  //     } catch (error) {
  //       alert(error.response.data.message)
  //     }
  //   }
  // })
  return (
    <Container>
      <h1>Registration Form</h1>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            
            
            required
          />
        </Form.Group>
        <Link to={"/portal/login"}>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Link>
        <p>
          Already Have an account ? <Link to={"/portal/login"}>Login</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
