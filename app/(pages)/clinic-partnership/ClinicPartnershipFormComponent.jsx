'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './ClinicPartnershipForm.css';
import { axiosInstance } from '@/app/lib/axiousInstance';
import { toast } from 'react-toastify';
import Header4 from "@/components/layout/header/Header4";
import FooterThree from "@/components/layout/footers/FooterThree";
import { MdAddCall } from "react-icons/md";
import { FaWhatsapp, FaUserCheck, FaHandshake, FaIdCard, FaChartBar, FaStar } from "react-icons/fa";

export const ClinicPartnershipFormComponent = () => {
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
      "Hi Parivar Saathi, I have some questions about clinic partnership. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    const phoneNumber = "+91-919230965019";
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

    const fetchData = async () => {
      try {
        const response = await axiosInstance.post('/clinic-register', formData);
        if (response) {
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
            brochureFile: null,
            consent: false,
          });
        } else {
          toast.error('Error submitting form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form');
      } finally {
        setLoading(false);
      }
    };

    if (!formData.clinicName || !formData.clinicAddress || !formData.country || !formData.clinicPhone || !formData.clinicEmail || !formData.contactName || !formData.contactPosition || !formData.contactPhone || !formData.contactEmail || !formData.consent) {
      toast.error('Please fill all required fields and accept the consent.');
      setLoading(false);
      return;
    }

    fetchData();
  };

  return (
    <>
      <div className="clinic-partnership-container">
        <Header4 />
        <div className="form-header">
          <div className="hero-section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10 col-xl-8">
                  <div className="hero__content text-start">
                    <h1 data-aos="fade-up" data-aos-delay="300" className="hero__title mb-4">
                      <span className="text-accent-2">Partner With Us</span>
                      <span className="guide-font-size"> to Reach More Families - Ethically</span>
                    </h1>
                    <div data-aos="fade-up" data-aos-delay="400" className="hero__filter mb-4">
                      <div data-aos="fade-up" data-aos-delay="100" className="hero-description">
                        Parivar Saathi is a community outreach initiative by Morskap Healthcare.
                        We bring pre-counseled, informed patients to your clinic — without marketing pressure, sales targets, or bias. 
                        <br /> You focus on care. We handle the connection.
                      </div>
                    </div>
                    <div className="hero-button-section">
                      <div className="button-group d-flex flex-column flex-sm-row gap-3">
                        <button data-aos="fade-up" data-aos-delay="300" onClick={handleCallClick} className="hero-button call-button d-flex align-items-center justify-content-center">
                          <MdAddCall className="button-icon" />
                          <span className="button-text">Call Now</span>
                        </button>
                        <button data-aos="fade-up" data-aos-delay="300" onClick={handleWhatsAppClick} className="hero-button whatsapp-button d-flex align-items-center justify-content-center">
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

        <div className="why-partner-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <h2 className="section-heading text-center mb-5">Why Clinics & Labs Work With Us</h2>
                <div className="benefits-grid">
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaUserCheck /></div>
                    <p>Receive pre-counseled, prepared patients</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaHandshake /></div>
                    <p>No aggressive sales — just quiet, respectful support</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaIdCard /></div>
                    <p>Referral ID system for transparency</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaChartBar /></div>
                    <p>Monthly reports and reconciliation</p>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaStar /></div>
                    <p>Reputation-building in Tier 2 & Tier 3 cities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container" style={{ maxWidth: '800px', margin: '60px auto' }}>
          <form onSubmit={handleSubmit}>
            {/* Form fields omitted for brevity - form state management is above */}
          </form>
        </div>

        <div className="final-cta-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <h2 className="cta-heading mb-4">Let's Bring Ethical, Trusted Fertility Care to More Families — Together.</h2>
                <div className="cta-buttons">
                  <button onClick={handleWhatsAppClick} className="cta-button whatsapp-cta">
                    <FaWhatsapp /> WhatsApp Our Partnership Team
                  </button>
                  <button onClick={handleCallClick} className="cta-button call-cta">
                    <MdAddCall /> Call Now
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
