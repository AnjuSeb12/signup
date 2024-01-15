import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Row,Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {
  const [validated, setValidated] = useState(false);


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
        let res = await axios.post('http://localhost:4000/api/v1/login', {
         
          email: userEmail,
          password: userPassword,
        });

        if (res.data.success) {
          toast.success(res.data.message, {
            autoClose: 2000
          });
          await new Promise((resolve) => setTimeout(resolve, 2000));
          navigate('/');
        }
        else {
          toast.error(res.data.message);
        }


      } catch (error) {
       toast.error(error.response.data.message);

      }

    }
    setValidated(true);
  }
  

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);

  }
  const handleUserPassword = (e) => {
    setUserPassword(e.target.value);

  }


  return (
    <Container>
      <Row>
        <Col>
          <h3 className='heading'>Login</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <ToastContainer position='top-center' autoClose={1000}/>
            
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="enter email" onChange={(e) => handleUserEmail(e)} required />
              <Form.Control.Feedback type='invalid'>Please Enter Valid Email</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" onChange={(e) => handleUserPassword(e)} required  />
              <Form.Control.Feedback type='invalid'>Please Enter Valid Password</Form.Control.Feedback>


            </Form.Group>

            <Button variant="primary" type="submit" className='buttonAlign'>
              Submit
            </Button>
          </Form>



        </Col>
      </Row>
    </Container>
  )
}

export default Login