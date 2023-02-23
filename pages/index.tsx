import React, { Fragment } from "react";
import classes from "./index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <Fragment>
      {/* 1st block */}
      <div className={classes.mainblock}>
        <div className={classes.lefttextblock}>
          <h1>Our slogan is to do xyz</h1>
          <ul className={classes.ul}>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldred}>Linear</span>
              <span>
                : get detailed data on the content of pharmacies&apos; shelves
              </span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldblue}>Ecommerce</span>
              <span>: get all the data about your ecommerce presence</span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldgreen}>Promo</span>
              <span>
                : see the full details of how your promotions are played
              </span>
            </li>
            <li>
              <span className={classes.trans}>Trans</span>
              <span className={classes.boldorange}>Impact</span>
              <span>
                : we deep-dive in you data to give you powerful insights
              </span>
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
          src={`/images/general-images/first-image.jpg`}
          alt="Blurred pharmacy image"
        ></img>
      </div>

      {/* 2nd block */}
      <div className={classes.solutionmainblock}>
        {/* TransLinear */}
        <div className={classes.solutionblock}>
          <div className={classes.solutiontlogotitle} style={{ color: "red" }}>
            <FontAwesomeIcon
              icon="prescription-bottle"
              className={classes.solutiontlogo}
            />
            <h3 className={classes.solutionttitle}>TRANSLINEAR</h3>
          </div>
          <span className={classes.solutionsummary}>
            Get detailed data on the content of pharmacies&apos; shelves
          </span>
          <ul className={classes.solutionul}>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>A panel of 800 pharmacies throughout Germany</span>
            </li>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>Dashboards based on your view of the market</span>
            </li>
          </ul>
        </div>
        {/* TransEcommerce */}
        <div className={classes.solutionblock}>
          <div className={classes.solutiontlogotitle} style={{ color: "blue" }}>
            <FontAwesomeIcon
              icon="money-bill-trend-up"
              className={classes.solutiontlogo}
            />
            <h3 className={classes.solutionttitle}>TRANSECOMMERCE</h3>
          </div>
          <span className={classes.solutionsummary}>
            Get all the data about your ecommerce presence
          </span>
          <ul className={classes.solutionul}>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                15 top-sites and 1,000 click and collect screened weekly
              </span>
            </li>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                Detailed data on price, distribution and content of all your
                references
              </span>
            </li>
          </ul>
        </div>
        {/* TransPromo */}
        <div className={classes.solutionblock}>
          <div
            className={classes.solutiontlogotitle}
            style={{ color: "green" }}
          >
            <FontAwesomeIcon
              icon="rectangle-ad"
              className={classes.solutiontlogo}
            />
            <h3 className={classes.solutionttitle}>TRANSPROMO</h3>
          </div>
          <span className={classes.solutionsummary}>
            See the full details of how your promotions and your
            competitors&apos; are played
          </span>
          <ul className={classes.solutionul}>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                Leaflets collected and analysed monthly for 15 distributors
              </span>
            </li>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                Detailed data up to each offer of each player for each
                distributor
              </span>
            </li>
          </ul>
        </div>
        {/* TransImpact */}
        <div className={classes.solutionblock}>
          <div
            className={classes.solutiontlogotitle}
            style={{ color: "orange" }}
          >
            <FontAwesomeIcon
              icon="arrow-up-right-dots"
              className={classes.solutiontlogo}
            />
            <h3 className={classes.solutionttitle}>TRANSIMPACT</h3>
          </div>
          <span className={classes.solutionsummary}>
            We deep-dive in you data to give you powerful insights
          </span>
          <ul className={classes.solutionul}>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                Our proprietary data crossed with your own, and panelist data
              </span>
            </li>
            <li className={classes.solutionli}>
              <FontAwesomeIcon
                icon="circle-check"
                className={classes.tickcircle}
              />
              <span>
                Unique insights on how you can boost your sales and margins
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* They trust us section */}
      {/* Prepare a deployment for it to be fed by our client list */}
      <div className={classes.mainblock}>
        <h2>They trust us:</h2>
        <div className={classes.alllogos}>
          <img
            src={"/images/company-logos/Bausch-lomb-logo.png"}
            alt="Bausch & Lomb logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Bayer-logo.png"}
            alt="Bayer logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Colgate-logo.png"}
            alt="Colgate logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Elanco-logo.png"}
            alt="Elanco logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Haleon-logo.png"}
            alt="Haleon logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Ipsen-logo.png"}
            alt="Ipsen logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/J&J-logo.png"}
            alt="J&J logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/L'Oreal-logo.png"}
            alt="L'Oréal logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Naos-logo.jpg"}
            alt="Naos logo"
            className={classes.companylogo}
          />
          <img
            src={"/images/company-logos/Nestle-logo.png"}
            alt="Nestlé logo"
            className={classes.companylogo}
          />
        </div>
      </div>

      {/* About us section */}
      <div className={classes.mainblock}>
        <h2>Our Team :</h2>
        <div className={classes.fullTeam}>
          <div className={classes.teamMember}>
            <img
              src={"/images/employee-images/PierrickHOUEE.jpg"}
              alt="Pierrick HOUEE's image"
              className={classes.employeeImage}
            ></img>
            <div className={classes.employeebio}>
              <div className={classes.jobtitle}>
                <h3>Pierrick HOUEE</h3>
                <h3> - </h3>
                <h3>Founder & CEO</h3>
              </div>
              <ul>
                <li>
                  After experiences in counsulting at the BCG, in start-up
                  operations at Gozem, a failed entrepreneurship at Fabor, and
                  pharma expertise at Fact
                </li>
                <li>Pierrick launched Fact. He manages </li>
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
        </div>
      </div>
      <div className={classes.mainblock}>
        <span className={classes.finalquestion}>
          YOU WANT TO LEARN MORE ABOUT US?
        </span>
        <div className={classes.finalallbuttons}>
          <button className={classes.demobutton}>Book a demo</button>
          <button className={classes.contactbutton}>Contact us</button>
        </div>
      </div>
    </Fragment>
  );
}
