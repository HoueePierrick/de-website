import React from "react";
import classes from "./solutions.module.css";
import { withoutFirstMaj, makeFirstMaj } from "@/Functions/textEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SolutionsShort(props: any) {
  const { data } = props;
  return (
    <ul className={classes.ul}>
      {data.map((e: any, i: number) => {
        console.log(e);
        return (
          // <span>A</span>
          <li key={i} className={classes.solutionli}>
            <span className={classes.trans}>{e.title.slice(0, 5)}</span>
            <span className={classes.bold} style={{ color: e.color }}>
              {makeFirstMaj(e.title.substring(5))}
            </span>
            <span>{`: ${e.descriptionShort.EN}`}</span>
          </li>
        );
      })}
    </ul>
  );
}

function Solutions(props: any) {
  const { data } = props;
  return (
    <div className={classes.solutionmainblock}>
      {data.map((e: any, i: number) => {
        return (
          <div key={i} className={classes.solutionblock}>
            <div
              className={classes.solutiontlogotitle}
              style={{ color: e.color }}
            >
              <FontAwesomeIcon
                icon={e.logo}
                className={classes.solutiontlogo}
              />
              <h3 className={classes.solutionttitle}>
                {e.title.toUpperCase()}
              </h3>
            </div>
            <span className={classes.solutionsummary}>
              {e.descriptionShort.EN}
            </span>
            <ul className={classes.solutionul}>
              <li className={classes.solutionli}>
                <FontAwesomeIcon
                  icon="circle-check"
                  className={classes.tickcircle}
                />
                <span className={classes.solutionli}>
                  {e.descriptionOne.EN}
                </span>
              </li>
              <li className={classes.solutionli}>
                <FontAwesomeIcon
                  icon="circle-check"
                  className={classes.tickcircle}
                />
                <span>{e.descriptionTwo.EN}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export { SolutionsShort };

export default Solutions;
