"use client";
import { teamData } from "@/data/team";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import AOS from "aos";

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 100,
      once: true,
      easing: 'ease-out'
    });
  }, []);

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

      "Richa Joshi": "Rooted in empathy and guided by a commitment to service, She brings a nurturing perspective to the Parivar Saathi team—supporting families with sincerity and strength.",

      // Rutviz dalal
      "Dr. Rutviz  Dalal": "Dr. Dalal is a senior IVF specialist who has helped countless families on their path to parenthood. Along with his clinical practice, he is associated with Parivar Saathi in an honorary role, serving as IVF Expert & Mentor. Through this initiative, he contributes his knowledge and experience to guide the counselling framework and support couples with clarity and confidence. His involvement reflects his commitment to giving back to society by making fertility guidance more accessible, reliable, and compassionate",

      "Dr. Shalu Kashyap": "Dr. Shalu Kashyap has been associated with women’s healthcare since 2015 after completing her Bachelor of Ayurvedic Medicine & Surgery from the University of Punjab. With nearly a decade of experience, she has dedicated herself to guiding individuals and couples through the sensitive journey of infertility and reproductive health. She has conducted 600+ free health camps and OPDs, reflecting her commitment to community service and spreading awareness about women’s wellness. Specialized in gynaecology and infertility counselling, Dr. Shalu focuses on resolving queries with clarity, compassion, and practical guidance. At Parivar Saathi, she serves as Senior IVF Counsellor, bringing together her medical knowledge and empathetic approach to ensure every couple feels supported and informed as they move forward on their path to parenthood.",

      "Dr. Deeksha Goswami": "Dr. Deeksha Goswami is an MBBS graduate from Nanjing University of Chinese Medicine, China, with clinical training at Taikang Xianlin Drum Tower Hospital, Nanjing. She specializes in patient counselling for fertility treatments, offering guidance and emotional support throughout procedures like IVF, IUI, and ICSI. With strong communication skills and a compassionate approach, she helps couples navigate their fertility journey with clarity and confidence.",

      "Farhana Arshad": "Farhana Arshad is a seasoned professional with diverse experience in operations management, business consultancy, and international collaborations. She has successfully managed operations across hotels, resorts, and the IT industry, while also contributing her expertise to the field of medical tourism. Currently, she serves as Operations Manager of the United States-Bangladesh Chamber of Commerce and Industry (USBCCI), where she plays a key role in fostering cross-border business relationships. At Parivar Saathi, Farhana represents the platform in Bangladesh. In this role, she leverages her extensive network and experience to connect individuals and families seeking fertility solutions with trusted counselling support in India. Her strategic insight and professional background make her a vital bridge between Parivar Saathi and couples in Bangladesh who are looking for guidance and care on their fertility journey.",

      "Rohit Sinha": "Rohit leads Parivar Saathi’s efforts in Punjab and North India, connecting families with trusted fertility care. With his healthcare experience and people-first approach, he builds clinic partnerships, organizes OPD camps, and ensures every patient feels supported on their journey.",

      "Shikha": "Shikha has been associated with the IVF field since 2016. With her background as a trained nurse and years of experience, she brings deep knowledge and strong organizational skills to Parivar Saathi. As Senior Coordinator, she oversees the flow of activities, ensures smooth communication, and maintains efficiency across all processes. Her experience and leadership make her a key part of the platform’s operations.",

      "Pooja Sharma": "Pooja has over 4 years of experience in the IVF field. At Parivar Saathi, she manages coordination activities, ensuring timely scheduling, clear communication, and structured support for all processes. With her dedication and attention to detail, Pooja contributes to keeping operations organized and seamless.",
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

        <div className="row y-gap-20 pt-40 sm:pt-20 justify-content-center">
          {teamData.map((elm, i) => (
            <div 
              key={i} 
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center"
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="600"
            >
              <div
                className="d-flex flex-column h-100 team-card-content"
                style={{
                  cursor: "pointer",
                  maxWidth: "280px",
                  width: "100%"
                }}
                onClick={() => handleMemberClick(elm)}
              >
                <div className="ratio ratio-23:26" style={{ height: "350px", overflow: "hidden" }}>
                  <Image
                    width={345}
                    height={450}
                    src={elm.imgPath}
                    alt="image"
                    className="img-ratio bg-light-1 rounded-12"
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>

                <div className="flex-grow-1 d-flex flex-column justify-content-start">
                  <h3 className="text-16 fw-500 mt-20" style={{ minHeight: "24px", lineHeight: "1.2" }}>{elm.name}</h3>
                  <p className="text-14 lh-16" style={{ minHeight: "40px", marginBottom: "0" }}>{elm.position}</p>
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

      <style jsx>{`
        .team-card-content {
          /* No hover effect */
        }
        .team-card-content .img-ratio {
          /* No hover effect */
        }
      `}</style>
    </section>
  );
}