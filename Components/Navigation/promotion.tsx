import React, { Fragment } from "react";
import classes from "./promotion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation(props: any) {
  const text = { DE: {}, EN: {} };
  return (
    <div className={classes.navigation}>
      <div>
        <FontAwesomeIcon icon="list"></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Navigation;
