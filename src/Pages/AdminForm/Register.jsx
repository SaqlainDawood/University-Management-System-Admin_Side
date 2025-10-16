import React, { useState } from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBInputGroup, // Import MDBInputGroup
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify'
import API from '../../api';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [confirmShowPass, setConfirmShowPass] = useState(false);

  const togglePass = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfrimPass = () => {
    setConfirmShowPass(!confirmShowPass);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword){
      toast.info("Password do not match. Please rewrite same password");
    }
    try {
      const res = await API.post('/register' ,{
      name:formData.name,
      email:formData.email,
      password:formData.password,
      })
      if(res.data.success){
        toast.success("Admin Register Successfully , Redirect to Login")
        setTimeout(()=>{
            navigate('/admin/login');
        } ,2000)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!!!!")
    }
    
    // console.log('Admin Registration Data:', formData);
  };

  return (
    <>
      <MDBContainer fluid className="p-4 bg-light" style={{ minHeight: '100vh' }}>
        <MDBRow className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <MDBCol md="6" lg="4">
            <MDBCard className="shadow-5">
              <MDBCardBody className="p-5">
                
                {/* Header */}
                <div className="text-center mb-4">
                  <h3 className="fw-bold text-primary">Admin Registration</h3>
                  <p className="text-muted">Create new admin account</p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Name Field */}
                  <div className="mb-3">
                    <MDBInput
                      label="Full Name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="mb-3">
                    <MDBInput
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <MDBInputGroup className="w-100">
                      <MDBInput
                        label="Password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                      <MDBBtn
                        color='primary'
                        type='button'
                        onClick={togglePass}
                        // className='input-group-text'
                        style={{cursor: 'pointer'}}
                      >
                        <MDBIcon icon={showPassword ? 'eye-slash' : 'eye'} />
                      </MDBBtn>
                    </MDBInputGroup>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-4">
                    <MDBInputGroup className="w-100">
                      <MDBInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type={confirmShowPass ? 'text' : 'password'}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <MDBBtn
                      type='button'
                        color='primary'
                        onClick={toggleConfrimPass}
                        // className='input-group-text'
                        style={{cursor: 'pointer'}}
                      >
                        <MDBIcon icon={confirmShowPass ? 'eye-slash' : 'eye'} />
                      </MDBBtn>
                    </MDBInputGroup>
                  </div>

                  {/* Submit Button */}
                  <MDBBtn type="submit" color="primary" className="w-100 mb-3" size="lg">
                    Register Admin
                  </MDBBtn>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="mb-0">
                      Already have an account?
                      <Link to="/admin/login" className="text-decoration-none">
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Register;


// 03417724614
// abdullah