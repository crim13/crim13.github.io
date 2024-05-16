import $ from "./index.module.css";
import $G from "../../GlobalStyles/global.module.css";

const Footer = () => (
  <>
    <div className={$.FooterWrapper}>
      <div className={$.Row1}>
        <div className={$.SocialLinks}>
          <h3>
            Tech<span className={$G.TTextNegative}>Team</span>
          </h3>
          <p>
            At our software development company, we relentlessly pursue
            innovation.
          </p>
          <div>
            <span className={$.Facebook}></span>
            <span className={$.Twitter}></span>
            <span className={$.Linkedin}></span>
            <span className={$.Instagram}></span>
          </div>
        </div>
        <div className={$.NewsLetter}>
          <h3>Subscribe to our Newsletter.</h3>
          <div>
            <input placeholder="Email Address"></input>
            <button className={$G.ButtonAccent}>Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className={$.Row2}>
        <div className={$.ContactInfo}>
          <div className={$.Location}>
            <div>
              <p>Location</p>
              <h3>Constanta, Romania</h3>
            </div>
          </div>
          <div className={$.Email}>
            <div>
              <p>Email</p>
              <h3>contact@techteam.com</h3>
            </div>
          </div>
          <div className={$.Phone}>
            <div>
              <p>Call Now</p>
              <h3>+40 555 666 13</h3>
            </div>
          </div>
        </div>
        <div className={$.QuickLinks}>
          <h3>Quick Links</h3>
          <div>
            <span>Home</span>
            <span>Popular</span>
            <span>Best Offer</span>
            <span>Destinations</span>
            <span>Changelog</span>
          </div>
        </div>
        <div className={$.Map}></div>
      </div>
    </div>
    <div className={$.CopyWrapper}>
      <p>All rights reserved 2024 TechTeam</p>
      <div>
        <span>FAQ</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
    </div>
  </>
);
export default Footer;
