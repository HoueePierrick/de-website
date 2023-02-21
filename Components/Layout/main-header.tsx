import React from "react";
import Link from "next/link";
import classes from "./main-header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainHeader() {
  return (
    <header>
      <h1>Header</h1>
      <FontAwesomeIcon icon="prescription-bottle-medical" />
      {/* <Link href="/events">Browse All Events</Link> */}
    </header>
  );
}

export default MainHeader;
