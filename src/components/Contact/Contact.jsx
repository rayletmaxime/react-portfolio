/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import pp3 from "../../assets/pp5.webp";

import "./Contact.css";

import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageSent(true);

    emailjs
      .sendForm("service_sjq59eb", "template_kdyr9an", form.current, {
        publicKey: "icwTMTPeNokomcuuh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="colorcontact">
      <div className="contact" id="contact">
        <div className="contact-left">
          <img src={pp3} alt="Illustration de Maxime Raylet" width={450} />
        </div>
        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="sujet">Sujet :</label>
            <input type="text" id="sujet" name="sujet" required />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" required></textarea>

            <div className="btn-msg">
              <button type="submit">
                <p>Envoyer</p>
                <SendIcon style={{ color: "white" }} fontSize="small" />
              </button>
              {messageSent && (
                <Alert severity="success">Merci de votre envoi !</Alert>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
