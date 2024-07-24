// Footer.js

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// import Link from 'next/link';
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            <i className="fab fa-slack"></i>
            <span className="logo_name">
              <img src="./LogoLong.png" alt="" className="w-50" />
            </span>
          </div>
          <div className="media-icons">
            <a
              href="https://www.facebook.com/IIITKottayamofficial/"
              className="flex justify-center align-center"
            >
              <FontAwesomeIcon icon={faFacebookF} className="w-50" />
            </a>
            <a
              href="https://www.linkedin.com/company/placement-iiitkottayam"
              className="flex justify-center align-center"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-50" />
            </a>
            <a
              href="https://www.linkedin.com/in/iiit-kottayam"
              className="flex justify-center align-center"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="w-50" />
            </a>
            <a
              href="https://twitter.com/IIITKKottayam"
              className="flex justify-center align-center"
            >
              <FontAwesomeIcon icon={faTwitter} className="w-50" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC3jrKDXjl7_c5bld5x8C1vw"
              className="flex justify-center align-center"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-50" />
            </a>
          </div>
        </div>
        <div className="link-boxes">
          {/* <ul className="box input-box">
            <li className="link_name">About</li>

            <li>
              The Indian Institute of Information Technology Kottayam (IIIT
              Kottayam) was established in the year 2015 as one among the IIITs
              established under the administrative control of the Government of
              India and later declared as an “Institution of National
              Importance” by an Act of Parliament enacted in 2017.
            </li>
          </ul> */}

          <ul className="box">
            <li className="link_name">Contact Us</li>
            <li>
              Phone no: <a href="#">+91 (0) 482-2202144</a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:placementcoordinator@iiitkottayam.ac.in">
                placementcoordinator@iiitkottayam.ac.in
              </a>{" "}
            </li>
            <li>
              Address:{" "}
              <a href="https://www.iiitkottayam.ac.in/#!/contact">
                Indian Institute of Information Technology Kottayam (IIIT
                Kottayam),
                <br />
                Valavoor.P.O, Pala <br />
                Kottayam-686635 <br />
                Kerala, India
              </a>{" "}
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Links</li>
            <li>
              <a href="https://www.iiitkottayam.ac.in/">About Us</a>
            </li>
            <li>
              <a href="/why-iiitk">Why recruit us</a>
            </li>
            <li>
              <a href="/recruiter">For recruiters</a>
            </li>
          </ul>

          <ul className="box">
            <li className="link_name">Map</li>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.128109605186!2d76.64747697502797!3d9.755214590338012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07ce23bc170053%3A0x8757971e61eb21dd!2sIndian%20Institute%20of%20Information%20Technology%20(IIIT)%20Kottayam!5e0!3m2!1sen!2sin!4v1719913591498!5m2!1sen!2sin"
              width="400"
              height="300"
              style={{ border: "0", padding: "10px" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </ul>
        </div>
      </div>
      <div className="bottom-details">
        <div className="bottom_text flex" style={{ justifyContent: "center" }}>
          <span className="copyright_text">
            Copyright © 2024{" "}
            <a href="#">Training and Placement Cell Committee</a>All rights
            reserved
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
