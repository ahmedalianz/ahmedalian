import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Zoom from "react-reveal/Zoom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [success, setSuccess] = useState("");
  const fields = [
    {
      label: "Your Name",
      type: "text",
      name: "user_name",
      placeholder: "Enter Your Name here...",
    },
    {
      label: "Subject",
      type: "text",
      name: "user_subject",
      placeholder: "Your Subject here",
    },
    {
      label: "Your Email",
      type: "email",
      name: "user_email",
      placeholder: "Enter Your E-mail here...",
    },
    {
      label: "Your Message",
      type: "textarea",
      name: "message",
      placeholder: "Enter Your Message here...",
    },
  ];
  const sendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_c6yrwva",
        "template_pzqj5hb",
        e.target,
        "BnY6F9lc5yB6lhJoP"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess("Your message has been sent. Thank you!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="container">
      <div className="section-head">
        <h2>Contact Me</h2>
        <div className="contact-icons">
          <div className="item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <span>+20 1099019685</span>
          </div>
          <div className="item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>ahmedalian400@gmail.com</span>
          </div>
        </div>
        <Zoom top cascade>
          <form onSubmit={sendMessage}>
            {fields.map(({ label, type, name, placeholder }, i) => (
              <div className="floating-input" key={i}>
                <label htmlFor={name}>{label}</label>
                {type === "textarea" ? (
                  <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    rows="10"
                    required
                  ></textarea>
                ) : (
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    id={name}
                    required
                  />
                )}
              </div>
            ))}

            <div className="success">{success}</div>
            <div class="button">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </Zoom>
      </div>
    </div>
  );
}
