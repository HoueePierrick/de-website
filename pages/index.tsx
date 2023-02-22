import React, { Fragment } from "react";
import classes from "./index.module.css";

export default function Home() {
  return (
    <Fragment>
      <div className={classes.mainblock}>
        <div className={classes.lefttextblock}>
          <h1>Our slogan is to do xyz</h1>
          <ul className={classes.ul}>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldred}>Linear</span>
              <span>: get information on pharmacy linears</span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldblue}>Ecommerce</span>
              <span>: get information on e-commerce</span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldgreen}>Promo</span>
              <span>: get information on promotions</span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldorange}>Impact</span>
              <span>: get insights on all your data</span>
            </li>
          </ul>
          <span className={classes.question}>
            YOU WANT TO LEARN MORE ABOUT IT?
          </span>
          <div className={classes.allbuttons}>
            <button className={classes.demobutton}>Book a demo</button>
            <button className={classes.contactbutton}>Contact us</button>
          </div>
        </div>
        <img
          className={classes.rightimageblock}
          src={`/images/first-image.jpg`}
          alt="Blurred pharmacy image"
        ></img>
      </div>
      <div className={classes.mainblock}>
        <div>
          <div>
            <span>Logo</span>
            <span>Title</span>
          </div>
          <span>Summary of the solution</span>
          <ul>
            <li>It does x</li>
            <li>It does y</li>
          </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.mainblock}>They trust us</div>
      <div className={classes.mainblock}>
        What we offer: data, solution content, demo
      </div>
      <div className={classes.mainblock}>About us: team</div>
      <div className={classes.mainblock}>Contact us</div>
    </Fragment>
  );
}
