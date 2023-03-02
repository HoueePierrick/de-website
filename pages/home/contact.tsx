// Contact page
import React, { Fragment } from "react";
import classes from "./contact.module.css";

function Contact() {
  const text = {
    DE: {
      request: "Fordern Sie eine Demonstration an, kontaktieren Sie uns",
      knowMore:
        "Möchten Sie mehr über unsere Lösungen erfahren? Spezifische Anforderungen teilen?",
      demo: "Wir bieten Ihnen eine maßgeschneiderte Demo an.",
      name: "Name",
      email: "Email",
      message: "Nachricht",
      send: "Senden",
    },
    EN: {
      request: "Request a demonstration, contact us",
      knowMore:
        "Want to know more about our solutions? Specific needs to share?",
      demo: "We offer you a tailor-made demo.",
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    },
  };
  return (
    <Fragment>
      <div className={classes.firstDiv}>
        <img
          src={`/images/general-images/pharmacist-checking-medicines-drugstore.jpg`}
          alt="Pharmacist checking medicines in the drugstore"
          className={classes.backgroundImage}
        />
        <h1 className={classes.pageTitle}>{text.EN.request}</h1>
      </div>
      <div className={classes.content}>
        <span className={classes.span}>{text.EN.knowMore}</span>
        <span className={classes.span}>{text.EN.demo}</span>
        <form className={classes.form} action="">
          <input
            className={classes.input}
            type="text"
            placeholder={text.EN.name}
          />
          <input
            className={classes.input}
            type="email"
            placeholder={text.EN.email}
          />
          <input
            className={classes.input}
            type="text"
            placeholder={text.EN.message}
          />
          <input
            className={classes.submit}
            type="submit"
            value={text.EN.send}
          />
        </form>
      </div>
    </Fragment>
  );
}

export default Contact;
