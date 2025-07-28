"use client";
import { teamData } from "@/data/team";
import Image from "next/image";
import React, { useState } from "react";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // Sample detailed descriptions for team members
  const getDescription = (member) => {
    const descriptions = {
      "Kaushal Joshi": "Kaushal Joshi is a healthcare entrepreneur, marketing strategist, and passionate changemaker. With an MBA in Marketing and credentials in Healthcare Analytics from IIM Kozhikode, Kaushal brings deep industry insight and a people-first vision to everything he does. Over the years, he has played a pivotal role in building and managing fertility care ecosystems across India. As the founder of Parivar Saathi, Kaushal envisions a supportive, ethical, and family-first approach to fertility guidance—where every couple feels heard, informed, and empowered. His belief in meaningful communication, respectful listening, and community-building drives the values of the organization.",
      "Dr. Sachidanand Tiwari": "With over a decade of experience in fertility counseling, Dr. Tiwari simplifies complex decisions with empathy. He has guided thousands of couples across leading fertility networks like Indira IVF, Nova IVF, and Crysta IVF. His patient-first approach makes him one of the most trusted names in the field. Dr. Tiwari's expertise lies in helping couples understand their fertility options through compassionate counseling, ensuring that every family receives personalized guidance tailored to their unique circumstances and needs.",
      "Urbashi Chandra": "Urbashi Chandra serves as the Coordinator at Parivar Saathi, where she expertly manages the logistics of our fertility counseling camps and ensures seamless communication between our team and the families we serve. With her background in healthcare administration and her natural ability to connect with people, Urbashi plays a crucial role in making our services accessible and comfortable for all participants. Her attention to detail and compassionate approach helps create a welcoming environment for families seeking fertility support.",
      "Santanu Dutta": "Santanu brings two decades of healthcare operations expertise. He ensures our camps, counseling sessions, and clinic partnerships run smoothly and compassionately. Known for his calm leadership and thorough understanding of patient care systems, Santanu plays a key role in operational excellence. His extensive experience in healthcare operations and business development ensures that our mission of providing quality fertility support reaches families in every corner of India while maintaining the highest standards of care and professionalism.",
      "Mr. Prakash": "Mr. Prakash is a dedicated Counsellor who brings warmth and understanding to every interaction with the families seeking fertility support. His patient and empathetic approach helps individuals and couples navigate the emotional challenges of their fertility journey. Mr. Prakash specializes in providing personalized counseling sessions that address both the practical and emotional aspects of fertility treatment decisions, ensuring that every family feels supported throughout their journey."
    };
    return descriptions[member.name] || "A dedicated team member committed to helping families navigate their fertility journey with compassion and expertise.";
  };

  return (
    <section className="layout-pt-xl">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-auto">
            <h2 className="text-30 text-center text-accent-2">Meet Our Team</h2>
          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20 justify-content-center">
          {teamData.map((elm, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
              <div 
                className="d-flex flex-column h-100"
                style={{ 
                  cursor: "pointer",
                  maxWidth: "280px",
                  width: "100%"
                }}
                onClick={() => handleMemberClick(elm)}
              >
                <div className="ratio ratio-23:26" style={{height: "350px", overflow: "hidden"}}>
                  <Image
                    width={345}
                    height={450}
                    src={elm.imgPath}
                    alt="image"
                    className="img-ratio bg-light-1 rounded-12"
                    style={{objectFit: "cover", width: "100%", height: "100%"}}
                  />
                </div>

                <div className="flex-grow-1 d-flex flex-column justify-content-start">
                  <h3 className="text-16 fw-500 mt-20" style={{minHeight: "24px", lineHeight: "1.2"}}>{elm.name}</h3>
                  <p className="text-14 lh-16" style={{minHeight: "40px", marginBottom: "0"}}>{elm.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && selectedMember && (
        <div 
          className="modal-overlay" 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={closeModal}
        >
          <div 
            className="modal-content"
            style={{
              backgroundColor: "#FFF9F2",
              borderRadius: "16px",
              padding: "30px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflowY: "auto",
              position: "relative",
              border: "3px solid #D6C9F0",
              boxShadow: "0 10px 30px rgba(92, 45, 145, 0.2)"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "none",
                border: "none",
                fontSize: "24px",
                color: "#5C2D91",
                cursor: "pointer",
                padding: "5px",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              ×
            </button>

            {/* Modal Content */}
            <div className="d-flex flex-column align-items-center text-center">
              <div 
                style={{
                  width: "200px",
                  height: "250px",
                  overflow: "hidden",
                  borderRadius: "12px",
                  border: "3px solid #D6C9F0",
                  marginBottom: "20px"
                }}
              >
                <Image
                  width={200}
                  height={250}
                  src={selectedMember.imgPath}
                  alt={selectedMember.name}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </div>

              <h2 
                style={{
                  color: "#5C2D91",
                  fontFamily: "Poppins, sans-serif",
                  marginBottom: "10px",
                  fontSize: "24px",
                  fontWeight: "600"
                }}
              >
                {selectedMember.name}
              </h2>

              <h4 
                style={{
                  color: "#2C2C2C",
                  fontFamily: "Poppins, sans-serif",
                  marginBottom: "20px",
                  fontSize: "18px",
                  fontWeight: "500"
                }}
              >
                {selectedMember.position}
              </h4>

              <p 
                style={{
                  color: "#666",
                  fontFamily: "Open Sans, sans-serif",
                  lineHeight: "1.6",
                  textAlign: "left",
                  fontSize: "15px"
                }}
              >
                {getDescription(selectedMember)}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}