import React, { Fragment } from "react";
import classes from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyCarousel from "../Components/Custom/carousel";
import Employee from "../Components/Custom/employee";
import Solutions, { SolutionsShort } from "@/Components/Custom/solutions";
import { activeClients } from "../data/clients";
import { activeEmployees } from "../data/employees";
import { activeSolutions } from "@/data/solutions";
import Link from "next/link";

export default function Home(props: any) {
  const { clientList, employeeList } = props;
  const text = {
    DE: {
      slogan: "Unser Slogan ist xyz zu tun",
      question: "MÖCHTEN SIE MEHR DARÜBER ERFAHREN?",
      demo: "Demo buchen",
      contact: "Kontaktieren Sie uns",
      trust: "Sie vertrauen uns:",
      team: "Unser Team:",
    },
    EN: {
      slogan: "Our slogan is to do xyz",
      question: "YOU WANT TO LEARN MORE ABOUT IT?",
      demo: "Book a demo",
      contact: "Contact us",
      trust: "They trust us:",
      team: "Our Team :",
    },
  };
  return (
    <Fragment>
      {/* 1st block */}
      <div className={classes.mainblock}>
        <div className={classes.lefttextblock}>
          <h1>{text.EN.slogan}</h1>
          <SolutionsShort data={activeSolutions}></SolutionsShort>
          <span className={classes.question}>{text.EN.question}</span>
          <div className={classes.allbuttons}>
            <button className={classes.demobutton}>
              <a
                href="https://calendly.com/houee-pierrick/60min"
                className={classes.link}
              >
                {text.EN.demo}
              </a>
            </button>
            <button className={classes.contactbutton}>
              <Link href="/home/contact" className={classes.link}>
                {text.EN.contact}
              </Link>
            </button>
          </div>
        </div>
        <img
          className={classes.rightimageblock}
          src={`/images/general-images/first-image.jpg`}
          alt="Blurred pharmacy image"
        ></img>
      </div>
      {/* 2nd block */}
      <Solutions data={activeSolutions}></Solutions>
      {/* They trust us section */}
      {/* Prepare a deployment for it to be fed by our client list */}
      <div className={classes.mainblock}>
        <h2>{text.EN.trust}</h2>
        <div className={classes.alllogos}>
          <MyCarousel data={clientList}></MyCarousel>
        </div>
      </div>
      {/* About us section */}
      <div className={classes.mainblock}>
        <h2>{text.EN.team}</h2>
        <div className={classes.fullTeam}>
          <Employee data={employeeList}></Employee>
        </div>
      </div>
      <div className={classes.mainblock}>
        <span className={classes.finalquestion}>{text.EN.question}</span>
        <div className={classes.finalallbuttons}>
          <button className={classes.demobutton}>
            <a
              href="https://calendly.com/houee-pierrick/60min"
              className={classes.link}
            >
              {text.EN.demo}
            </a>
          </button>
          <button className={classes.contactbutton}>
            <Link href="/home/contact" className={classes.link}>
              {text.EN.contact}
            </Link>
          </button>
        </div>
      </div>
    </Fragment>
  );
  // ; unexplainable to be removed
}

export async function getStaticProps() {
  return {
    props: {
      clientList: activeClients,
      employeeList: activeEmployees,
    },
    // Time period for every refrech by NextJS for every incoming request
    // 10 means re-generated every 10s
    revalidate: 60,
    // If notFound: true, the page will return a 404 page
    // Usefull if we can't fetch the data
    notFound: false,
  };
}
