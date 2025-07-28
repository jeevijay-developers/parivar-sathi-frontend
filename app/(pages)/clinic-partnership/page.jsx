'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './ClinicPartnershipForm.css';
import { axiosInstance } from '@/app/lib/axiousInstance';
import { toast } from 'react-toastify';
import Header4 from '@/components/layout/header/Header4';
import FooterThree from '@/components/layout/footers/FooterThree';
import { MdAddCall } from "react-icons/md";
import { FaWhatsapp, FaUserCheck, FaHandshake, FaIdCard, FaChartBar, FaStar } from "react-icons/fa";

const ClinicPartnershipForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    clinicName: '',
    clinicAddress: '',
    country: '',
    clinicPhone: '',
    clinicEmail: '',
    clinicWebsite: '',
    contactName: '',
    contactPosition: '',
    contactPhone: '',
    contactEmail: '',
    services: {
      generalPractice: false,
      pediatrics: false,
      gynecology: false,
      cardiology: false,
      dermatology: false,
      diagnostics: false,
      telemedicine: false,
      other: false,
      otherText: ''
    },
    interests: {
      marketing: false,
      opdSupport: false,
      callCenter: false,
      clinicManagement: false,
      other: false,
      otherText: ''
    },
    clinicDescription: '',
    brochureFile: null,
    consent: false
  });

  const countries = [
    "India", "Pakistan", "Bangladesh", "Nepal", "Sri Lanka",
    "Afghanistan", "Bhutan", "Maldives", "Other"
  ];
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    const phoneNumber = "+91-9876543210"; // Dummy number - replace with actual
    window.open(`tel:${phoneNumber}`, "_self");
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

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      brochureFile: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log('Form submitted:', formData);

    const fetchData = async () => {
      try {
        const response = axiosInstance.post('/clinic-register', formData)
        if (response) {
          setFormData(response.data);
          toast.success('Thank you for your interest. Our team will get in touch within 48 hours.');
          setFormData({
            clinicName: '',
            clinicAddress: '',
            country: '',
            clinicPhone: '',
            clinicEmail: '',
            clinicWebsite: '',
            contactName: '',
            contactPosition: '',
            contactPhone: '',
            contactEmail: '',
            services: {
              generalPractice: false,
              pediatrics: false,
              gynecology: false,
              cardiology: false,
              dermatology: false,
              diagnostics: false,
              telemedicine: false,
              other: false,
              otherText: ''
            },
            interests: {
              marketing: false,
              opdSupport: false,
              callCenter: false,
              clinicManagement: false,
              other: false,
              otherText: ''
            },
            clinicDescription: '',
            brochureFile: '',
            consent: false,
          })
        } else {
          toast.error('Error Submitting form');
        }
      } catch (error) {
        console.error('Error submitting form: ', error);
        toast.error('Error Submitting form');
      } finally {
        setLoading(false);
      }
    }
    if (!formData.clinicName || !formData.clinicAddress || !formData.country || !formData.clinicPhone || !formData.clinicEmail || !formData.contactName || !formData.contactPosition || !formData.contactPhone || !formData.contactEmail) {
      toast.error('Please fill all required fields.');
      return;
    } else {
      fetchData();
    }
  };

  return (
    <>
      <div className="clinic-partnership-container">
        <Header4 />
        <div className="form-header">
          {/* <div className="logo-container">
            <h1>
              <span className="parivar">Parivar </span>
              <span className="sathi">Sathi</span>
            </h1>
          </div> */}
          <div className="hero-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="hero__content text-start">
                  

                    <h1
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="hero__title mb-4"
                    >
                      <span className="text-accent-2">Partner With Us</span>
                      <span className="guide-font-size"> to Reach <br /> More Families - Ethically</span>
                    </h1>

                    <div
                      data-aos="fade-up"
                      data-aos-delay="400"
                      className="hero__filter mb-4"
                    >
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="hero-description"
                      >
                        Parivar Saathi is a community outreach initiative by Morskap Healthcare.
                        We bring pre-counseled, informed patients to your clinic — without marketing pressure, sales targets, or bias. 
                        <br />
                         You focus on care. We handle the connection.
                      </div>
                    </div>
                    
                    <div className="hero-button-section">
                      <div className="button-group d-flex flex-column flex-sm-row gap-3">
                        <button
                          data-aos="fade-up"
                          data-aos-delay="300"
                          onClick={handleCallClick}
                          className="hero-button call-button d-flex align-items-center justify-content-center"
                        >
                          <MdAddCall className="button-icon" />
                          <span className="button-text">Call Now</span>
                        </button>
                        
                        <button
                          data-aos="fade-up"
                          data-aos-delay="300"
                          onClick={handleWhatsAppClick}
                          className="hero-button whatsapp-button d-flex align-items-center justify-content-center"
                        >
                          <FaWhatsapp className="button-icon" />
                          <span className="button-text">Talk to Our Partnership Team Now</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Clinics Partner With Us Section */}
        <div className="why-partner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="section-heading text-center mb-5">Why Clinics & Labs Work With Us</h2>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <FaUserCheck />
                    </div>
                    <p>Receive pre-counseled, prepared patients</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <FaHandshake />
                    </div>
                    <p>No aggressive sales — just quiet, respectful support</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <FaIdCard />
                    </div>
                    <p>Referral ID system for transparency</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <FaChartBar />
                    </div>
                    <p>Monthly reports and reconciliation</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon">
                      <FaStar />
                    </div>
                    <p>Reputation-building in Tier 2 & Tier 3 cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="how-it-works-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="section-heading text-center mb-5">Our Process – Simple, Honest, Effective</h2>
                <div className="process-steps">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Patient Outreach</h4>
                      <p>A patient reaches out via call, OPD camp, or social media</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Counseling</h4>
                      <p>Our counselor explains their options and discusses comfort level</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Referral</h4>
                      <p>We refer them to your clinic with a clear Referral ID</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Care & Follow-up</h4>
                      <p>You offer care — and we support with post-referral follow-up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partnership-form">
          <div className="card mb-4">
            <div className="card-header">
              <h3>1. Clinic Information</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="clinicName" className="form-label">Clinic Name <span className="required">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="clinicName"
                    name="clinicName"
                    value={formData.clinicName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="country" className="form-label">Country <span className="required">*</span></label>
                  <select
                    className="form-select"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="clinicAddress" className="form-label">Clinic Address <span className="required">*</span></label>
                <textarea
                  className="form-control"
                  id="clinicAddress"
                  name="clinicAddress"
                  value={formData.clinicAddress}
                  onChange={handleInputChange}
                  rows="2"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-4 mb-3">
                  <label htmlFor="clinicPhone" className="form-label">Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    id="clinicPhone"
                    name="clinicPhone"
                    value={formData.clinicPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="clinicEmail" className="form-label">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="clinicEmail"
                    name="clinicEmail"
                    value={formData.clinicEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label htmlFor="clinicWebsite" className="form-label">Website (optional)</label>
                  <input
                    type="url"
                    className="form-control"
                    id="clinicWebsite"
                    name="clinicWebsite"
                    value={formData.clinicWebsite}
                    onChange={handleInputChange}
                    placeholder="https://"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3>2. Contact Person</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="contactName" className="form-label">Full Name <span className="required">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="contactPosition" className="form-label">Position/Title <span className="required">*</span></label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactPosition"
                    name="contactPosition"
                    value={formData.contactPosition}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="contactPhone" className="form-label">Phone Number <span className="required">*</span></label>
                  <input
                    type="tel"
                    className="form-control"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="contactEmail" className="form-label">Email Address <span className="required">*</span></label>
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3>3. Services Offered</h3>
            </div>
            <div className="card-body">
              <p>Select all that apply:</p>
              <div className="row">
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="generalPractice"
                      name="generalPractice"
                      checked={formData.services.generalPractice}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="generalPractice">
                      General Practice
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="pediatrics"
                      name="pediatrics"
                      checked={formData.services.pediatrics}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="pediatrics">
                      Pediatrics
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="gynecology"
                      name="gynecology"
                      checked={formData.services.gynecology}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="gynecology">
                      Gynecology
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="cardiology"
                      name="cardiology"
                      checked={formData.services.cardiology}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="cardiology">
                      Cardiology
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="dermatology"
                      name="dermatology"
                      checked={formData.services.dermatology}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="dermatology">
                      Dermatology
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="diagnostics"
                      name="diagnostics"
                      checked={formData.services.diagnostics}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="diagnostics">
                      Diagnostics (Lab/Radiology)
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="telemedicine"
                      name="telemedicine"
                      checked={formData.services.telemedicine}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="telemedicine">
                      Telemedicine
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-2">
                  <div className="form-check">
                    <input
                      className="form-check-input service-checkbox"
                      type="checkbox"
                      id="other"
                      name="other"
                      checked={formData.services.other}
                      onChange={(e) => handleCheckboxChange(e, 'services')}
                    />
                    <label className="form-check-label" htmlFor="other">
                      Other
                    </label>
                  </div>
                </div>
              </div>
              {formData.services.other && (
                <div className="mt-2">
                  <input
                    type="text"
                    className="form-control "
                    name="otherText"
                    value={formData.services.otherText}
                    onChange={(e) => handleNestedInputChange(e, 'services')}
                    placeholder="Please specify other services"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3>4. Partnership Interests</h3>
            </div>
            <div className="card-body">
              <p>Select the areas where you'd like support:</p>
              <div className="mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    checked={formData.interests.marketing}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                  />
                  <label className="form-check-label" htmlFor="marketing">
                    Marketing Support (branding, digital campaigns, local outreach)
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="opdSupport"
                    name="opdSupport"
                    checked={formData.interests.opdSupport}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                  />
                  <label className="form-check-label" htmlFor="opdSupport">
                    OPD Support (appointment management, patient flow optimization)
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="callCenter"
                    name="callCenter"
                    checked={formData.interests.callCenter}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                  />
                  <label className="form-check-label" htmlFor="callCenter">
                    Call Centre Support (inbound/outbound patient communication)
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="clinicManagement"
                    name="clinicManagement"
                    checked={formData.interests.clinicManagement}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                  />
                  <label className="form-check-label" htmlFor="clinicManagement">
                    Clinic Management Support (software, analytics, operations)
                  </label>
                </div>
              </div>
              <div className="mb-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="interestsOther"
                    name="other"
                    checked={formData.interests.other}
                    onChange={(e) => handleCheckboxChange(e, 'interests')}
                  />
                  <label className="form-check-label" htmlFor="interestsOther">
                    Other
                  </label>
                </div>
              </div>
              {formData.interests.other && (
                <div className="mt-2">
                  <input
                    type="text"
                    className="form-control"
                    name="otherText"
                    value={formData.interests.otherText}
                    onChange={(e) => handleNestedInputChange(e, 'interests')}
                    placeholder="Please specify other interests"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3>5. Additional Information</h3>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="clinicDescription" className="form-label">Brief Description of Your Clinic</label>
                <textarea
                  className="form-control"
                  id="clinicDescription"
                  name="clinicDescription"
                  value={formData.clinicDescription}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your clinic's specialties, size, patient base, etc."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="brochureFile" className="form-label">Upload Brochure or License (JPEG, JPG, PNG)</label>
                <input
                  type="file"
                  className="form-control file-upload"
                  id="brochureFile"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-header">
              <h3>6. Consent & Submission</h3>
            </div>
            <div className="card-body">
              <div className="mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    I confirm that the information provided is accurate and I agree to be contacted by Parivar Sathi
                  </label>
                  <span className="ms-1 required">*</span>
                </div>
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary btn-lg submit-btn"
                  disabled={!formData.consent}
                  onClick={handleSubmit}
                >
                  Submit Partnership Request
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="final-cta-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cta-heading mb-4">
                  Let's Bring Ethical, Trusted Fertility Care to More Families — Together.
                </h2>
                <div className="cta-buttons">
                  <button
                    onClick={handleWhatsAppClick}
                    className="cta-button whatsapp-cta"
                  >
                    <FaWhatsapp  />
                    WhatsApp Our Partnership Team
                  </button>
                  <button
                    onClick={handleCallClick}
                    className="cta-button call-cta"
                  >
                    <MdAddCall  />
                    Call Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterThree />
    </>
  );
};
export default ClinicPartnershipForm;