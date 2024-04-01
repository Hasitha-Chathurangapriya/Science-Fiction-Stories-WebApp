import React, { useState } from "react";
import "./ContactForm.css";
import AppBarr from "../Home/AppBar";
import { Box } from "@mui/material";
import Footer from "../Home/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <Box>
      <AppBarr />
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>
            For any inquiries, please contact us through the following channels:
          </p>
          <ul>
            <li>
              Email: <a href="maverick@abc.com">maverick@abc.com</a>
            </li>
            <li>Phone: 037 - 533 6 789</li>
          </ul>

          <h2>Follow Us</h2>
          <p>Stay connected with us on social media:</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer/>
    </Box>
  );
};

export default ContactForm;
