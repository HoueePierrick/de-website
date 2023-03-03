import React from "react";
import Link from "next/link";
import classes from "./main-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

function MainLinkDef(path: string): string {
  let result = "";
  if (path.slice(0, 17) === "/client/promotion") {
    result = "/client/promotion/";
  } else {
    result = "/";
  }
  return "";
}

function MainHeader() {
  const router = useRouter();
  // Gives the page URL
  const path = router.pathname;

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
  return path.slice(0, 7) === "/client" ? (
    <header>
      <Link href={MainLinkDef(path)}>
        <FontAwesomeIcon
          icon="prescription-bottle-medical"
          className={classes.companylogo}
        />
      </Link>
      <nav className={classes.shortnav}>
        <div className={classes.languages}>
          <span>{textContent.EN.languageOne}</span>
          <FontAwesomeIcon icon="caret-down" className={classes.caret} />
          <ul className={classes.ul}>
            <li>{textContent.EN.languageTwo}</li>
          </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header>
      {/* Reimplace with real logo */}
      <Link href="/">
        <FontAwesomeIcon
          icon="prescription-bottle-medical"
          className={classes.companylogo}
        />
      </Link>
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
        <Link href="client/" className={classes.connect}>
          {textContent.EN.connect}
        </Link>
      </nav>
    </header>
  );
}

export default MainHeader;
