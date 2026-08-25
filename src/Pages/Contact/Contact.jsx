import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import hii from '../../Assest/hi.png'

export default function Contact() {

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {

  // Check if any field is empty
  if (
    contact.name.trim() === "" ||
    contact.email.trim() === "" ||
    contact.message.trim() === ""
  ) {
    alert("Please fill all the fields.");
    return;
  }

  try {

    const response = await axios.post(
      "http://localhost:8080/api/contact",
      contact
    );

    alert(response.data);

    setContact({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {
    alert("Error Sending Message");
    console.log(error);
  }
};
  return (
    <>
      <section className="certifications">
        <span className="section-tag">CONTACT</span>

        <h2>Connect With Me</h2>

        <div className="underline"></div>
      </section>

      <div className="contact">

        <div className="cont-form">

          <h2>Send Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={contact.name}
            onChange={handleChange} required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={contact.email}
            onChange={handleChange} required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={contact.message}
            onChange={handleChange} required
          ></textarea>

          <button
            style={{ background: "#b11d1b" }}
            onClick={handleSubmit}
          >
            Send Message
          </button>

        </div>

        <div className="contact-image">
          <img style={{ marginBottom: "40px" ,marginRight:'60px'}}src={hii} alt="" />
          <div className="shape"></div>
          <div className="text">Hi!</div>
        </div>

      </div>
    </>
  );
}