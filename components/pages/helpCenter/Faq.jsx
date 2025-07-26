"use client";

import { faqData } from "@/data/tourSingleContent";
import React, { useState } from "react";
import { FaQuestionCircle, FaShieldAlt, FaCheckCircle, FaChevronDown, FaWhatsapp } from "react-icons/fa";
import { MdExpandMore, MdExpandLess, MdAddCall } from "react-icons/md";

export default function Faq() {
  const [currentActiveFaq, setCurrentActiveFaq] = useState(-1);

  // Function to get appropriate icon based on question content
  const getQuestionIcon = (question) => {

    return <FaQuestionCircle className="text-purple-600" />;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    const phoneNumber = "+919230965019";
    if (typeof window !== 'undefined') {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-30 md:text-24" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 'bold', color: '#5C2D91' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-16 mt-3" style={{ fontFamily: 'Open Sans, sans-serif', color: '#666' }}>
              Get answers to common questions about Parivar Saathi services
            </p>
          </div>
        </div>

        <div className="row justify-center pt-50">
          <div className="col-xl-10 col-lg-12">
            <div className="accordion-container">
              {faqData.map((elm, i) => (
                <div 
                  key={i} 
                  className="faq-item mb-4"
                  style={{
                    backgroundColor: i % 2 === 0 ? '#F7F3FF' : '#FFF9F2',
                    borderRadius: '16px',
                    padding: '24px',
                    boxShadow: '0 4px 12px rgba(92, 45, 145, 0.08)',
                    border: '1px solid rgba(92, 45, 145, 0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(92, 45, 145, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(92, 45, 145, 0.08)';
                  }}
                >
                  <div
                    className="faq-question d-flex align-items-center justify-content-between"
                    onClick={() => setCurrentActiveFaq(currentActiveFaq === i ? -1 : i)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="d-flex align-items-center" style={{ flex: 1 }}>
                      <div className="me-3" style={{ fontSize: '20px' }}>
                        {getQuestionIcon(elm.question)}
                      </div>
                      <h5 
                        className="mb-0 text-16 md:text-18"
                        style={{ 
                          fontFamily: 'Poppins, sans-serif', 
                          fontWeight: 'bold',
                          color: '#2C2C2C',
                          lineHeight: '1.4'
                        }}
                      >
                        {elm.question}
                      </h5>
                    </div>
                    
                    <div 
                      className="expand-icon ms-3"
                      style={{
                        fontSize: '20px',
                        color: '#5C2D91',
                        transition: 'transform 0.3s ease',
                        transform: currentActiveFaq === i ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      <MdExpandMore />
                    </div>
                  </div>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: currentActiveFaq === i ? '200px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, padding 0.3s ease',
                      paddingTop: currentActiveFaq === i ? '20px' : '0',
                      paddingLeft: '52px' // Align with question text after icon
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <FaCheckCircle style={{ color: '#F4B400', fontSize: '16px' }} />
                      </div>
                      <p 
                        className="mb-0 text-15"
                        style={{ 
                          fontFamily: 'Open Sans, sans-serif',
                          color: '#666',
                          lineHeight: '1.6',
                          fontWeight: '400'
                        }}
                      >
                        {elm.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row justify-center pt-60">
          <div className="col-12 text-center">
            <div 
              className="cta-section p-5 rounded-16"
              style={{ backgroundColor: '#F7F3FF', border: '2px solid #D6C9F0' }}
            >
              <h3 
                className="text-24 mb-3"
                style={{ 
                  fontFamily: 'Poppins, sans-serif', 
                  fontWeight: 'bold', 
                  color: '#5C2D91' 
                }}
              >
                Still have questions? Talk to a counselor.
              </h3>
              <p 
                className="text-16 mb-4"
                style={{ 
                  fontFamily: 'Open Sans, sans-serif', 
                  color: '#666' 
                }}
              >
                Get personalized guidance from our fertility experts
              </p>
              
              <div className="d-flex justify-content-center align-items-center w-100">
                <div className="hero5-buttons bg-transparent p-2 rounded-200 w-fit btnCouncelour">
                  <div className="d-flex call-wa-button flex-wrap justify-content-center align-items-center gap-3">
                    <div className="searchForm__button">
                      <button
                        data-aos="fade-up"
                        data-aos-delay="300"
                        onClick={handleWhatsAppClick}
                        className="button p-3 hero-5-buttons rounded-200 text-white"
                      >
                        <FaWhatsapp className="hero5-icon" />
                        <p className="text-white ms-2 mb-0">WhatsApp</p>
                      </button>
                    </div>
                    <div className="searchForm__button">
                      <button
                        data-aos="fade-up"
                        data-aos-delay="400"
                        onClick={handleCallClick}
                        className="button p-3 hero-5-buttons rounded-200 text-white"
                      >
                        <MdAddCall className="hero5-icon" />
                        <p className="text-white ms-2 mb-0">Call Now</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-item:hover .expand-icon {
          color: #F4B400 !important;
        }
        
        .faq-answer {
          opacity: ${currentActiveFaq >= 0 ? '1' : '0'};
        }
        
        @media (max-width: 768px) {
          .faq-item {
            padding: 20px !important;
          }
          
          .faq-answer {
            padding-left: 44px !important;
          }
          
          .trust-section .d-flex {
            flex-direction: column !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
