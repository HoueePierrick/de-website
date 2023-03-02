// Solutions page
import React, { Fragment } from "react";
import classes from "./solutions.module.css";
import { activeSolutions } from "@/data/solutions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Solution() {
  const text = {
    methodology: { DE: "Methodik", EN: "Methodology" },
    KPIs: { DE: "Schlüsselindikatoren", EN: "Key indicators" },
    demo: { DE: "Demo buchen", EN: "Book a demo" },
  };
  return (
    <Fragment>
      {activeSolutions.map((solution: any, index: number) => {
        return (
          <div key={index} className={classes.solution}>
            <div
              className={classes.logotitle}
              style={{ color: solution.color }}
            >
              <FontAwesomeIcon
                icon={solution.logo}
                className={classes.logo}
              ></FontAwesomeIcon>
              <h2 className={classes.title}>{solution.title}</h2>
            </div>
            <h3 className={classes.descriptionShort}>
              {solution.descriptionShort.EN}
            </h3>
            <span className={classes.descriptionTwo}>
              {solution.descriptionTwo.EN}
            </span>
            <ul className={classes.descriptionUL}>
              {solution.detailedDescriptionBullets.EN.map(
                (bullet: string, i: number) => {
                  return (
                    <li key={i} className={classes.descriptionBullet}>
                      {bullet}
                    </li>
                  );
                }
              )}
            </ul>
            <div className={classes.rest}>
              <div className={classes.halfColumn}>
                <span className={classes.columnTitle}>
                  {text.methodology.EN}
                </span>
                {solution.detailedMethodology.EN.map(
                  (method: any, i: number) => {
                    return (
                      <div key={i} className={classes.method}>
                        <FontAwesomeIcon
                          icon={method.icon}
                          className={classes.methodIcon}
                        ></FontAwesomeIcon>
                        <span className={classes.methodText}>
                          {method.text}
                        </span>
                      </div>
                    );
                  }
                )}
              </div>
              <div className={classes.halfColumn}>
                <span className={classes.columnTitle}>{text.KPIs.EN}</span>
                <ul className={classes.solutionul}>
                  {solution.keyIndicators.EN.map((KPI: any, i: number) => {
                    return (
                      <li className={classes.solutionli} key={i}>
                        <FontAwesomeIcon
                          icon="circle-check"
                          className={classes.tickcircle}
                        />
                        <span className={classes.solutionli}>{KPI}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <button className={classes.demobutton}>
              <a
                href="https://calendly.com/houee-pierrick/60min"
                className={classes.link}
              >
                {text.demo.EN}
              </a>
            </button>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Solution;
