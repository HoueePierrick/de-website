import React, { Fragment } from "react";
import classes from "./promotion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function Navigation(props: any) {
  const text = { DE: {}, EN: {} };
  return (
    <div className={classes.navigation}>
      <div>
        <Link href="/client/promotion/">Promosc</Link>
        <FontAwesomeIcon icon="list"></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Navigation;
