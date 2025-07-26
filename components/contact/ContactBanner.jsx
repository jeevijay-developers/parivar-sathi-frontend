"use client";
import Image from 'next/image'
import React from 'react'

const ContactBanner = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = process.env.NEXT_PUBLIC_COUNSELLOR_WHATSAPP_NUMBER;
        const message = encodeURIComponent(
            "Hi Parivar Sathi, I have a question and need assistance. Can you help?"
        );
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    };

    return (
        <section className="contact-banner">
            <div className="container">
                <div className="contact-banner__content">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-banner__text">
                                <h1 className="contact-banner__title">
                                    Contact Us
                                </h1>
                                <p className="contact-banner__subtitle">
                                    Have a question or need assistance? We're here to help you with care and clarity.
                                </p>
                                <button 
                                    className="contact-banner__cta-button"
                                    onClick={handleWhatsAppClick}
                                >
                                    💬 Talk to a Counselor
                                </button>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="contact-banner__image">
                                <Image
                                    src="/img/general/contact.jpg"
                                    width={600}
                                    height={400}
                                    alt="Woman using landline phone"
                                    className="contact-banner__main-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Styles */}
            <style jsx>{`
                .contact-banner {
                    background-color: #fbe6c9;
                    padding: 60px 0;
                    min-height: 500px;
                    display: flex;
                    align-items: center;
                }

                .contact-banner__content {
                    width: 100%;
                }

                .contact-banner__text {
                    padding-right: 40px;
                }

                .contact-banner__title {
                    font-size: 3.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    margin-bottom: 20px;
                    line-height: 1.2;
                }

                .contact-banner__subtitle {
                    font-size: 1.25rem;
                    color: #5a6c7d;
                    margin-bottom: 30px;
                    line-height: 1.6;
                    max-width: 500px;
                }

                .contact-banner__cta-button {
                    background: #28a745;
                    color: white;
                    border: none;
                    padding: 16px 32px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border-radius: 50px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(40, 167, 69, 0.3);
                }

                .contact-banner__cta-button:hover {
                    background: #218838;
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(40, 167, 69, 0.4);
                }

                .contact-banner__image {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .contact-banner__main-image {
                    width: 100%;
                    height: auto;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                }

                /* Tablet Layout */
                @media (max-width: 991px) {
                    .contact-banner {
                        padding: 60px 0;
                    }

                    .row {
                        flex-direction: column !important;
                        gap: 40px;
                    }

                    .col-md-12:first-child {
                        order: 2;
                    }

                    .col-md-12:last-child {
                        order: 1;
                    }

                    .contact-banner__text {
                        text-align: center;
                        padding: 0 30px;
                    }

                    .contact-banner__title {
                        font-size: 3rem;
                    }

                    .contact-banner__subtitle {
                        font-size: 1.15rem;
                        margin: 0 auto 30px auto;
                    }

                    .contact-banner__image {
                        padding: 0 30px;
                    }

                    .contact-banner__main-image {
                        max-width: 400px;
                    }
                }

                /* Mobile Layout */
                @media (max-width: 768px) {
                    .contact-banner {
                        padding: 40px 0;
                    }

                    .contact-banner__text {
                        padding: 0 20px;
                    }

                    .contact-banner__title {
                        font-size: 2.5rem;
                        margin-bottom: 15px;
                    }

                    .contact-banner__subtitle {
                        font-size: 1rem;
                        margin-bottom: 25px;
                    }

                    .contact-banner__cta-button {
                        padding: 14px 28px;
                        font-size: 1rem;
                        width: 100%;
                        max-width: 280px;
                    }

                    .contact-banner__image {
                        padding: 0 20px;
                    }

                    .contact-banner__main-image {
                        max-width: 350px;
                        max-height: 300px;
                        object-fit: cover;
                    }
                }

                /* Small Mobile */
                @media (max-width: 480px) {
                    .contact-banner {
                        padding: 30px 0;
                    }

                    .contact-banner__text {
                        padding: 0 15px;
                    }

                    .contact-banner__title {
                        font-size: 2rem;
                    }

                    .contact-banner__subtitle {
                        font-size: 0.9rem;
                    }

                    .contact-banner__cta-button {
                        padding: 12px 24px;
                        font-size: 0.9rem;
                        max-width: 100%;
                    }

                    .contact-banner__image {
                        padding: 0 15px;
                    }

                    .contact-banner__main-image {
                        max-width: 100%;
                        max-height: 250px;
                    }
                }
            `}</style>
        </section>
    )
}

export default ContactBanner