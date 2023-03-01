import React from "react";
import Link from "next/link";
import classes from "./main-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainHeader() {
  const textContent = {
    EN: {
      presentation: "Presentation",
      solutions: "Solutions",
      contact: "Contact",
      languageOne: "English",
      languageTwo: "Deutsch",
      connect: "Connect",
    },
    DE: {
      presentation: "Präsentation",
      solutions: "Lösungen",
      contact: "Kontakt",
      languageOne: "Deutsch",
      languageTwo: "English",
      connect: "Verbinden",
    },
  };
  return (
    <header>
      {/* Reimplace with real logo */}
      <FontAwesomeIcon
        icon="prescription-bottle-medical"
        className={classes.companylogo}
      />
      <nav className={classes.nav}>
        <Link href="/home" className={classes.link}>
          {textContent.EN.presentation}
        </Link>
        <Link href="/home/solutions" className={classes.link}>
          {textContent.EN.solutions}
        </Link>
        <Link href="/home/contact" className={classes.link}>
          {textContent.EN.contact}
        </Link>
        <div className={classes.languages}>
          <span>{textContent.EN.languageOne}</span>
          <FontAwesomeIcon icon="caret-down" className={classes.caret} />
          <ul className={classes.ul}>
            <li>{textContent.EN.languageTwo}</li>
          </ul>
        </div>
        <Link href="/en/home/connect" className={classes.connect}>
          {textContent.EN.connect}
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
