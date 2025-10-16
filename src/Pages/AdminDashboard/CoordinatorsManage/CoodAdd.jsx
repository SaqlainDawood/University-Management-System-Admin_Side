import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CoodAdd = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    coordId: '',
    name: '',
    email: '',
    phone: '',
    department: '',
    role: '',
    assignedPrograms: [],
    joiningDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProgramsChange = (e) => {
    const options = Array.from(e.target.selectedOptions, option => option.value);
    setFormData(prev => ({
      ...prev,
      assignedPrograms: options
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Coordinator Data:', formData);
    alert('Coordinator added successfully!');
    navigate('/admin/dashboard/coordinators/list');
  };

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Software Engineering'
  ];

  const roles = [
    'Department Coordinator',
    'Semester Coordinator',
    'Examination Coordinator',
    'Admissions Coordinator'
  ];

  const programs = [
    'BS Computer Science',
    'MS Computer Science',
    'BS Electrical Engineering',
    'MS Electrical Engineering',
    'BS Mechanical Engineering',
    'BS Software Engineering',
    'BS Civil Engineering'
  ];

  return (
    <div className="cood-add-container">
      <div className="container-fluid">
        {/* Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">
              <i className="fas fa-user-plus me-3"></i>Add New Coordinator
            </h1>
            <p className="page-subtitle">
              Assign a coordinator to manage programs and students
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-4">
            <div className="col-12">
              {/* Personal Information */}
              <div className="form-section-card">
                <h3 className="section-title">
                  <i className="fas fa-user me-2"></i>Personal Information
                </h3>
                <div className="row g-3">
                  <div className="col-md-4">
                    <label className="form-label">Coordinator ID *</label>
                    <input
                      type="text"
                      name="coordId"
                      className="form-control"
                      placeholder="COORD-001"
                      value={formData.coordId}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-8">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="email@university.edu.pk"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Assignment Details */}
              <div className="form-section-card">
                <h3 className="section-title">
                  <i className="fas fa-tasks me-2"></i>Assignment Details
                </h3>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Department *</label>
                    <select
                      name="department"
                      className="form-control"
                      value={formData.department}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Coordinator Role *</label>
                    <select
                      name="role"
                      className="form-control"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Role</option>
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Assigned Programs *</label>
                    <select
                      name="assignedPrograms"
                      className="form-control"
                      multiple
                      value={formData.assignedPrograms}
                      onChange={handleProgramsChange}
                      size="5"
                      required
                    >
                      {programs.map(program => (
                        <option key={program} value={program}>{program}</option>
                      ))}
                    </select>
                    <small className="form-hint">Hold Ctrl/Cmd to select multiple programs</small>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Joining Date *</label>
                    <input
                      type="date"
                      name="joiningDate"
                      className="form-control"
                      value={formData.joiningDate}
                      onChange={handleChange}
                      required
                    />
                    
                    {/* Selected Programs Display */}
                    {formData.assignedPrograms.length > 0 && (
                      <div className="selected-programs-box">
                        <strong>Selected Programs:</strong>
                        <div className="selected-programs">
                          {formData.assignedPrograms.map((program, index) => (
                            <span key={index} className="program-tag">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Responsibilities Info */}
              <div className="info-card">
                <div className="info-header">
                  <i className="fas fa-info-circle"></i>
                  <h4>Coordinator Responsibilities</h4>
                </div>
                <div className="responsibilities-grid">
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Student Enrollment Management</span>
                  </div>
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Course Registration Oversight</span>
                  </div>
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Academic Progress Monitoring</span>
                  </div>
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Faculty Coordination</span>
                  </div>
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Examination Management</span>
                  </div>
                  <div className="responsibility-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Student Query Resolution</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => navigate('/admin/dashboard/coordinators/list')}
                >
                  <i className="fas fa-times me-2"></i>Cancel
                </button>
                <button type="submit" className="btn-submit">
                  <i className="fas fa-check me-2"></i>Add Coordinator
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CoodAdd;