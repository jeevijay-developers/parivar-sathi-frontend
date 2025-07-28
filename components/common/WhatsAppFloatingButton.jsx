"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloatingButton = () => {
  const handleClick = () => {
    const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
    const message = encodeURIComponent(
      "Hi Parivar Sathi, I have some questions about fertility support. Can you help?"
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div
      className="toTopButton whatsapp-btn d-flex justify-content-center align-items-center"
      style={
        {
          backgroundColor: "#25D366",
          color: "white",
          
        }
      }
    >
      <button
        className=" rounded-circle p-3"
        onClick={handleClick}  
      >
        {" "}
        <FaWhatsapp size={32} color="white" />
      </button>
    </div>
  );
};

export default WhatsAppFloatingButton;
