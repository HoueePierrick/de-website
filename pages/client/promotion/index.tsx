// Promo home page
import React from "react";
import classes from "./index.module.css";
import Navigation from "@/Components/Navigation/promotion";

function Promo() {
  return (
    <div className={classes.promoMain}>
      <Navigation></Navigation>
      <div></div>
    </div>
  );
}

export default Promo;
