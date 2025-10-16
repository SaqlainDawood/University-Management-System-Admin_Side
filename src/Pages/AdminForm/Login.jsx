import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import API from '../../api'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
export default function AdminLogin() {
  const navigate = useNavigate();
 const [login , setLogin] = useState({
    email:'',
    password:'',
 })
 const handleClick = (e)=>{
    const {name , value} = e.target;
    setLogin({...login , [name]:value})

 }
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!login.email || !login.password){
        toast.error("Please Enter the Email Login Fields!!!");
        return;
    }
    try {
      const res = await API.post('/login',{
        email:login.email,
        password:login.password,
      })
      if(res.data.success){
         toast.success(res.data.message);
         localStorage.setItem("AdminToken" , res.data.token)
         localStorage.setItem("adminData", JSON.stringify(res.data.admin));
         setTimeout(() => {
          navigate('/admin/sidenav');
        }, 2000);
      }
      else{
          toast.error(res.data.message || "Login Failed");
      }
    } catch (error) {
       toast.error("Enter a valid Email and Password...");
            console.log("Login Error failed",error);
    }
    // Add your database fetch logic here
    console.log('Login data:', { email, password });
  };

  return (
    <MDBContainer fluid className="p-0">
      <MDBRow className="g-0" style={{ minHeight: '100vh' }}>
        <MDBCol lg="4" md="6" className="mx-auto my-auto">
          <MDBCard className="shadow-5" style={{ maxWidth: '400px', margin: 'auto' }}>
            <MDBCardBody className="p-5">
              <div className="text-center mb-4">
                <h4 className="fw-bold mb-0">Admin Login</h4>
                <p className="text-muted">Sign in to your account</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <MDBInput
                    label="Email address"
                    id="email"
                    type="email"
                    name='email'
                    value={login.email}
                    onChange={handleClick}
                    required
                  />
                </div>

                <div className="mb-3">
                  <MDBInput
                    label="Password"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    value={login.password}
                    onChange={handleClick}
                    required
                  />
                  <div className="form-text">
                    <small>
                      <a href="#!" className="text-decoration-none">
                        Forgot password?
                      </a>
                    </small>
                  </div>
                </div>

                <MDBBtn type="submit" color="primary" className="w-100 mb-3" size="lg">
                  Sign In
                </MDBBtn>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}