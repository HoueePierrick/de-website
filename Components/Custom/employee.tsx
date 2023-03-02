import React, { Fragment } from "react";
import classes from "./employees.module.css";

function Employee(props: any) {
  const { data } = props;
  return (
    <Fragment>
      {data.map((e: any, i: number) => {
        return (
          <div className={classes.teamMember} key={i}>
            <img
              src={"/images/employee-images/PierrickHOUEE.jpg"}
              alt="Pierrick HOUEE's image"
              className={classes.employeeImage}
            ></img>
            <div className={classes.employeebio}>
              <div className={classes.jobtitle}>
                <span>{`${e.firstName} ${e.lastName}`}</span>
                <span>{e.role.EN}</span>
              </div>
              <ul>
                <li className={classes.employeeli}>{e.descriptionOne.EN}</li>
                <li className={classes.employeeli}>{e.descriptionTwo.EN}</li>
              </ul>
              <div className={classes.employeelogos}>
                <a
                  href="mailto:houee.pierrick@gmail.com?subject=Contact"
                  className={classes.clickablelogo}
                >
                  <img
                    src={"/images/company-logos/Gmail-logo.png"}
                    alt="Email logo"
                    className={classes.profileRedirect}
                  />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/pierrick-hou%C3%A9e-600a6168/"
                  className={classes.clickablelogo}
                >
                  <img
                    src={"/images/company-logos/LinkedIn-logo.png"}
                    alt="LinkedIn logo"
                    className={classes.profileRedirect}
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Employee;
