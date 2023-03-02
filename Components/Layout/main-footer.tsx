import React from "react";
import classes from "./main-footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function MainFooter() {
  const text = {
    DE: {
      about: "Über uns",
      terms: "Allgemeine Geschäftsbedingungen",
      legal: "Impressum",
      contact: "Kontakt",
      demo: "Demo buchen",
      contactUS: "Kontaktieren Sie uns",
      follow: "Folgen Sie uns",
      rights: "Alle Rechte vorbehalten © 2023 Fabor",
    },
    EN: {
      about: "About us",
      terms: "Terms and Conditions",
      legal: "Legal Notice",
      contact: "Contact",
      demo: "Book a demo",
      contactUS: "Contact us",
      follow: "Follow us",
      rights: "All rights reserved © 2023 Fabor",
    },
  };

  return (
    <footer>
      <div className={classes.footerDiv}>
        <h3 className={classes.h3}>{text.EN.about}</h3>
        <Link href="/home/terms" className={classes.footerLink}>
          {text.EN.terms}
        </Link>
        <Link href="/home/legal" className={classes.footerLink}>
          {text.EN.legal}
        </Link>
      </div>
      <div className={classes.footerDiv}>
        <h3 className={classes.h3}>{text.EN.contact}</h3>
        <a
          href="https://calendly.com/houee-pierrick/60min"
          className={classes.footerLink}
        >
          {text.EN.demo}
        </a>
        <Link href="/home/contact" className={classes.footerLink}>
          {text.EN.contactUS}
        </Link>
      </div>
      <div className={classes.footerDiv}>
        <h3 className={classes.h3}>{text.EN.follow}</h3>
        {/* Replace with company linkedIn */}
        <a
          href="https://www.linkedin.com/in/pierrick-hou%C3%A9e-600a6168/"
          className={classes.footerLink}
        >
          Linkedin
        </a>
      </div>
      <div className={classes.footerDiv}>
        {/* Reimplace with real logo */}
        <FontAwesomeIcon
          icon="prescription-bottle-medical"
          className={classes.companylogo}
        />
        <span>{text.EN.rights}</span>
      </div>
    </footer>
  );
}

export default MainFooter;
