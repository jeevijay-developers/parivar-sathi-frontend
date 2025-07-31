"use client";
import { useState } from "react";
import { FaWhatsapp, FaPaperclip, FaLinkedin } from "react-icons/fa";
import { axiosInstance } from "@/app/lib/axiousInstance";
import { toast } from "react-toastify";
import "./JoinUsForm.css";
import "./JoinUsForm.css";

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    cityState: "",
    preferredRole: "",
    otherRole: "",
    currentOccupation: "",
    yearsOfExperience: "",
    preferredWorkMode: [],
    resume: null,
    linkedInOrWebsite: "",
    reasonForJoining: "",
    anythingElse: ""
  });

  const [loading, setLoading] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      preferredRole: e.target.value,
    }));
  };

  const handleWorkModeChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          preferredWorkMode: [...prev.preferredWorkMode, value]
        };
      } else {
        return {
          ...prev,
          preferredWorkMode: prev.preferredWorkMode.filter(mode => mode !== value)
        };
      }
    });
  };

  const handleHowHeardChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      howHeard: e.target.value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
      setFileSelected(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Format work mode as a single string for submission
      const workModeString = formData.preferredWorkMode.length > 0 ? 
        formData.preferredWorkMode.join(",") : "";

      // Create FormData object for file upload
      const submissionData = new FormData();
      submissionData.append("fullName", formData.fullName);
      submissionData.append("phoneNumber", formData.phoneNumber);
      submissionData.append("emailAddress", formData.emailAddress);
      submissionData.append("cityState", formData.cityState);
      
      // Handle the case where "Other" is selected as role
      if (formData.preferredRole === "Other") {
        submissionData.append("preferredRole", formData.preferredRole);
        submissionData.append("otherRole", formData.otherRole);
      } else {
        submissionData.append("preferredRole", formData.preferredRole);
      }
      
      submissionData.append("currentOccupation", formData.currentOccupation);
      submissionData.append("yearsOfExperience", formData.yearsOfExperience);
      submissionData.append("preferredWorkMode", workModeString);
      submissionData.append("linkedInOrWebsite", formData.linkedInOrWebsite);
      submissionData.append("reasonForJoining", formData.reasonForJoining);
      submissionData.append("anythingElse", formData.anythingElse);
      
      // Append resume file if selected
      if (formData.resume) {
        submissionData.append("resume", formData.resume);
      }

      const response = await axiosInstance.post("/joinus", submissionData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Application submitted successfully! We'll be in touch soon.");
      
      // Reset form after successful submission
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        cityState: "",
        preferredRole: "",
        otherRole: "",
        currentOccupation: "",
        yearsOfExperience: "",
        preferredWorkMode: [],
        resume: null,
        linkedInOrWebsite: "",
        howHeard: "",
        reasonForJoining: "",
        anythingElse: ""
      });
      setFileSelected(false);
      
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was an error submitting your application. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-8 join-us-form-container">
            <h2 className="text-30 fw-700 text-center mb-10">
              Join Us – Parivar Saathi
            </h2>

            {/* Added Section: Why Clinics & Labs Work With Us */}
            {/* <div className="mb-30">
              <p className="text-16">
                Parivar Sathi partners with clinics and labs that want to grow
                ethically. Here’s why they choose to work with us:
              </p>
              <ul className="mt-10 text-16 list-disc list-inside">
                <li>Filtered, educated clients who are ready for next steps</li>
                <li>Discount system managed via our referral ID system</li>
                <li>Monthly reporting & reconciliation</li>
                <li>No pushy sales, just quiet support</li>
              </ul>
            </div> */}

            <div className="contactForm" style={{ background: "transparent" }}>
              <form
                onSubmit={handleSubmit}
                className="row y-gap-20"
                encType="multipart/form-data"
              >
                {/* Personal Information */}
                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Full Name<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your full name" 
                    required 
                  />
                </div>

                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Phone Number<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="tel" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Your phone number" 
                    required 
                  />
                </div>

                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Email Address<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="email" 
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    placeholder="Your email address" 
                    required 
                  />
                </div>

                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">City & State<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="text" 
                    name="cityState"
                    value={formData.cityState}
                    onChange={handleInputChange}
                    placeholder="City, State" 
                    required 
                  />
                </div>

                {/* Professional Interest */}
                <div className="col-12 mt-10">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Preferred Role / Area of Interest<span style={{color: 'red'}}>*</span></label>
                  <div className="d-grid" style={{ gap: "10px", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, auto)" }}>
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio"
                        id="role-fertility-counselor"
                        name="preferredRole" 
                        value="Fertility Counselor"
                        checked={formData.preferredRole === "Fertility Counselor"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-fertility-counselor">Fertility Counselor</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio"
                        id="role-doctor"
                        name="preferredRole"
                        value="Doctor (IVF/Gynae)" 
                        checked={formData.preferredRole === "Doctor (IVF/Gynae)"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-doctor">Doctor (IVF Specialist, Gynaecologist, etc.)</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="role-embryologist"
                        name="preferredRole"
                        value="Embryologist/Lab Technician"
                        checked={formData.preferredRole === "Embryologist/Lab Technician"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-embryologist">Embryologist / Lab Technician</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="role-opd-coordinator"
                        name="preferredRole"
                        value="OPD Camp Coordinator"
                        checked={formData.preferredRole === "OPD Camp Coordinator"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-opd-coordinator">OPD Camp Coordinator</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="role-patient-support"
                        name="preferredRole"
                        value="Patient Support/Telecaller"
                        checked={formData.preferredRole === "Patient Support/Telecaller"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-patient-support">Patient Support / Telecaller</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="role-other"
                        name="preferredRole"
                        value="Other"
                        checked={formData.preferredRole === "Other"} 
                        onChange={handleRoleChange}
                      />
                      <label className="ml-10" htmlFor="role-other">Other</label>
                    </div>
                  </div>
                  </div>
                  {formData.preferredRole === "Other" && (
                    <div className="mt-10">
                      <input 
                        type="text" 
                        name="otherRole"
                        value={formData.otherRole}
                        onChange={handleInputChange}
                        placeholder="Please specify" 
                      />
                    </div>
                  )}
                </div>

                {/* Work Experience */}
                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Current Occupation / Organization<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="text" 
                    name="currentOccupation"
                    value={formData.currentOccupation}
                    onChange={handleInputChange}
                    placeholder="Your current role" 
                    required 
                  />
                </div>

                <div className="col-md-6">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Experience in Healthcare (Years)<span style={{color: 'red'}}>*</span></label>
                  <input 
                    type="number" 
                    min="0"
                    name="yearsOfExperience"
                    value={formData.yearsOfExperience}
                    onChange={handleInputChange}
                    placeholder="Years of experience" 
                    required 
                  />
                </div>

                {/* Motivation */}
                <div className="col-12">
<label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Why would you like to work/associate with Parivar Saathi?<span style={{color: 'red'}}>*</span></label>
                  <textarea
                    name="reasonForJoining"
                    value={formData.reasonForJoining}
                    onChange={handleInputChange}
                    placeholder="Tell us why you're interested in joining us"
                    rows="4"
                    required
                  ></textarea>
                </div>

                {/* Work Preferences */}
                <div className="col-12 mt-10">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Preferred Work Mode<span style={{color: 'red'}}>*</span></label>
                  <select
                    name="preferredWorkMode"
                    required
                    className="form-select"
                    value={formData.preferredWorkMode[0] || ""}
                    onChange={e => {
                      setFormData(prev => ({ ...prev, preferredWorkMode: e.target.value ? [e.target.value] : [] }));
                    }}
                  >
                    <option value="">Select your preferred work mode</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote/Teleconsult">Remote / Teleconsult</option>
                    <option value="On-call">On-call (as needed)</option>
                  </select>
                </div>

                {/* Resume Upload */}
                <div className="col-12 mt-10">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Upload Resume / CV</label>
                  <div className="file-upload-wrap">
                    <label className="custom-file-upload">
                      <input 
                        type="file" 
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="d-none"
                      />
                      <div className="d-flex items-center">
                        <FaPaperclip className="mr-8" />
                        <span>{fileSelected ? "File selected" : "Choose file"}</span>
                      </div>
                    </label>
                    <div className="file-name mt-5 text-14 text-gray-500">
                      {formData.resume && formData.resume.name}
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">LinkedIn Profile or Website (if any)</label>
                  <div className="d-flex items-center">
                    <input 
                      type="text" 
                      name="linkedInOrWebsite"
                      value={formData.linkedInOrWebsite}
                      onChange={handleInputChange}
                      placeholder="LinkedIn URL or website" 
                    />
                  </div>
                </div>

                {/* How did you hear about us */}
                {/* <div className="col-12 mt-10">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">How did you hear about us?</label>
<div className="d-grid" style={{ gap: "10px", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, auto)" }}>
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="howheard-social"
                        name="howHeard" 
                        value="Social Media"
                        checked={formData.howHeard === "Social Media"} 
                        onChange={handleHowHeardChange}
                      />
                      <label className="ml-10" htmlFor="howheard-social">Social Media</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="howheard-referral"
                        name="howHeard" 
                        value="Referral"
                        checked={formData.howHeard === "Referral"} 
                        onChange={handleHowHeardChange}
                      />
                      <label className="ml-10" htmlFor="howheard-referral">Referral</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="howheard-camp"
                        name="howHeard" 
                        value="Camp / Event"
                        checked={formData.howHeard === "Camp / Event"} 
                        onChange={handleHowHeardChange}
                      />
                      <label className="ml-10" htmlFor="howheard-camp">Camp / Event</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="howheard-team"
                        name="howHeard" 
                        value="Existing Team Member"
                        checked={formData.howHeard === "Existing Team Member"} 
                        onChange={handleHowHeardChange}
                      />
                      <label className="ml-10" htmlFor="howheard-team">Existing Team Member</label>
                    </div>
                  </div>
                  
                  <div className="mt-5">
                    <div className="form-radio d-flex items-center">
                      <input 
                        type="radio" 
                        id="howheard-other"
                        name="howHeard" 
                        value="Other"
                        checked={formData.howHeard === "Other"} 
                        onChange={handleHowHeardChange}
                      />
                      <label className="ml-10" htmlFor="howheard-other">Other</label>
                    </div>
                  </div>
                  </div>
                </div> */}

                {/* Additional Information */}
                <div className="col-12 mt-10">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">Anything else you'd like to share?</label>
                  <textarea
                    name="anythingElse"
                    value={formData.anythingElse}
                    onChange={handleInputChange}
                    placeholder="Any additional information"
                    rows="4"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="col-12 mt-20">
                  <button
                    type="submit"
                    className="button -md -dark-1 bg-accent-3-v text-white col-12"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit Application"}
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
