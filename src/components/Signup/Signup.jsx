import React, { useState } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';






function Signup() {
  const [validated, setValidated] = useState(false);

  const [userFullname, setUserFullname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }
    else {


      try {
        let res = await axios.post('http://localhost:4000/api/v1/register', {
          fullname: userFullname,
          email: userEmail,
          password: userPassword,
        });

        if (res.data.success) {
          toast.success(res.data.message, {
            autoClose: 2000
          });
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate('/login');
        }
        else {
          toast.error(res.data.message);
        }


      } catch (error) {
        console.log(error.message)

      }

    }
    setValidated(true);
  }
  
  const handleUserFullname = (e) => {
    setUserFullname(e.target.value);

  }
  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);

  }
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);

  }
  console.log("email",userEmail)

  return (
    <Container>
      <Row>
        <Col>
          <h3 className='heading'>SignUp</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <ToastContainer />
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Fullname:</Form.Label>
              <Form.Control type="text" placeholder="Enter Fullname" onChange={(e) => handleUserFullname(e)} required />
              <Form.Control.Feedback type='invalid'>Please enter Fullname</Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Entered Successfully</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" onChange={(e) => handleUserEmail(e)} required />
              <Form.Control.Feedback type='invalid'>Please Enter Valid Email</Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>successfully Entered</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e) => handleUserPassword(e)} required />
              <Form.Control.Feedback type='invalid'>Please enter Password</Form.Control.Feedback>
              <Form.Control.Feedback type='valid'>Entered Successfully</Form.Control.Feedback>


            </Form.Group>

            <Button variant="primary" type="submit" className='buttonAlign'>
              Register
            </Button>
          </Form>



        </Col>
      </Row>
    </Container>


  )
}

export default Signup