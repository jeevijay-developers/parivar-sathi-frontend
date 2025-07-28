"use client";
import { useState } from 'react';
import './RegisterOpdCampForm.css'; 
import { axiosInstance } from '@/app/lib/axiousInstance';
import { toast } from 'react-toastify';

export default function RegisterOpdCampForm() {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    gender: '',
    age: '',
    phoneNumber: '',
    email: '',
    city: '',
    state: '',
    
    // Medical Information
    primaryConcern: '',
    symptoms: '',
    department: '',
    preExistingConditions: {
      diabetes: false,
      hypertension: false,
      heartDisease: false,
      asthma: false,
      thyroid: false,
      other: false,
      otherText: ''
    },
    
    // Consent
    consent: false
  });

  const departments = [
    "General Medicine", "Pediatrics", "Obstetrics & Gynecology", 
    "Orthopedics", "Ophthalmology", "ENT", "Dermatology",
    "Cardiology", "Neurology", "Dentistry", "Physiotherapy", "Other"
  ];
  
  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra & Nagar Haveli and Daman & Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: checked
      }
    });
  };

  const handleNestedInputChange = (e, category) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log('Form submitted:', formData);
    // Form submission logic would go here
    const fetchData = async () => {
      try{
        const response = await axiosInstance.post('/opd-register', formData);
        // console.log("Form submitted successfully:", response.data);
        setFormData(response.data);
        toast.success("Registration successful!");
        setFormData({
          fullName: '',
          gender: '',
          age: '',
          phoneNumber: '',
          email: '',
          city: '',
          state: '',
          primaryConcern: '',
          symptoms: '',
          department: '',
          preExistingConditions: {
            diabetes: false,
            hypertension: false,
            heartDisease: false,
            asthma: false,
            thyroid: false,
            other: false,
            otherText: ''
          },
          consent: false
        })
      }catch(err){
        console.error("Error submitting form:", err);
        toast.error("Registration failed. Please try again.");
      }finally{
        setLoading(false);
      }
    }
    fetchData();
  };

  return (
    <section id='registration-form' className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8">
            <div className="text-center mb-30">
              <p className="text-18 fw-500 mb-10">What You Get:</p>
              <p className="text-16">
                You'll get a 1-on-1 conversation with a trained counselor, a
                referral to trusted clinics or doctors, and discount coupons for
                tests (if applicable).
              </p>
            </div>
            
            <h2 className="text-30 fw-700 text-center mb-20">
              Register for OPD Camp
            </h2>
            
            <div className="contactForm">
              <form
                onSubmit={handleSubmit}
                className="row y-gap-20"
              >
                {/* Personal Information Section */}
                <div className="col-12 mb-10">
                  <h4 className="text-18 fw-600">Personal Information</h4>
                </div>
                
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-6">
                  <select
                    className="form-control"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Gender *</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div className="col-md-6">
                  <input
                    type="number"
                    placeholder="Age *"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-6">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-12">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="City *"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                  />
                </div>
                
                <div className="col-md-6">
                  <select
                    className="form-control"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select State *</option>
                    {states.map((state, index) => (
                      <option key={index} value={state}>{state}</option>
                    ))}
                  </select>
                </div>

                {/* Medical Information Section */}
                <div className="col-12 mt-10 mb-10">
                  <h4 className="text-18 fw-600">Medical Information</h4>
                </div>
                
                <div className="col-md-12">
                  <select
                    className="form-control"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Department *</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div className="col-12">
                  <textarea
                    placeholder="Primary Concern / Chief Complaint *"
                    name="primaryConcern"
                    value={formData.primaryConcern}
                    onChange={handleInputChange}
                    rows="3"
                    required
                    className="form-control"
                  ></textarea>
                </div>
                
                <div className="col-12">
                  <textarea
                    placeholder="Symptoms & Duration (if any)"
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleInputChange}
                    rows="3"
                    className="form-control"
                  ></textarea>
                </div>
                
                <div className="col-12 mt-10">
                  <p className="text-16 mb-10">Pre-existing Medical Conditions (if any):</p>
                  <div className="row">
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="diabetes"
                          name="diabetes"
                          checked={!!formData.preExistingConditions?.diabetes}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="diabetes">
                          Diabetes
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="hypertension"
                          name="hypertension"
                          checked={!!formData.preExistingConditions?.hypertension}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="hypertension">
                          Hypertension
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="heartDisease"
                          name="heartDisease"
                          checked={!!formData.preExistingConditions?.heartDisease}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="heartDisease">
                          Heart Disease
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="asthma"
                          name="asthma"
                          checked={!!formData.preExistingConditions?.asthma}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="asthma">
                          Asthma
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="thyroid"
                          name="thyroid"
                          checked={!!formData.preExistingConditions?.thyroid}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="thyroid">
                          Thyroid Disorder
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4 mb-10">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="other"
                          name="other"
                          checked={!!formData.preExistingConditions?.other}
                          onChange={(e) => handleCheckboxChange(e, 'preExistingConditions')}
                        />
                        <label className="form-check-label" htmlFor="other">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  {formData.preExistingConditions?.other && (
                    <div className="mt-10">
                      <input
                        type="text"
                        className="form-control"
                        name="otherText"
                        value={formData.preExistingConditions.otherText}
                        onChange={(e) => handleNestedInputChange(e, 'preExistingConditions')}
                        placeholder="Please specify other conditions"
                      />
                    </div>
                  )}
                </div>

                {/* Consent Section */}
                <div className="col-12 mt-20">
                  <div className="form-check">
                    <input
                      className="form-check-input consent-checkbox"
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="consent">
                      I confirm that the information provided is accurate, and I consent to the collection and use of my personal health information for the purpose of receiving healthcare services at the OPD Camp.
                    </label>
                  </div>
                </div>
                
                <div className="col-12 mt-20">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-3-v text-white col-12"
                    disabled={!formData.consent || loading}
                  >
                    {loading ? "Registring..." : "Register Now"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}