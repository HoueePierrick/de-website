import React from "react";
import classes from "./main-footer.module.css";

function MainFooter() {
  return (
    <footer>
      <div>
        <h4>About us</h4>
        <span>Terms and Conditions</span>
        <div>Legal Notice</div>
      </div>
      <div>
        <h4>Contact</h4>
        <span>Book a demo</span>
        <span>Contact us</span>
      </div>
      <div>
        <h4>Follow us</h4>
        <div>Linkedin</div>
      </div>
      <div>
        <span>Logo</span>
        <span>All rights reserved © 2023 Fabor</span>
      </div>
    </footer>
  );
}

export default MainFooter;
