// Footer.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Link from 'next/link';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer >
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name"><img src="./LogoLong.png" alt="" className='w-50'/></span>
        </div>
        <div class="media-icons">
          <a href="#" className='flex justify-center align-center'><FontAwesomeIcon icon={faFacebookF} className='w-50'/></a>
          <a href="#" className='flex justify-center align-center'><FontAwesomeIcon icon={faInstagram} className='w-50'/></a>
          <a href="#" className='flex justify-center align-center'><FontAwesomeIcon icon={faLinkedinIn} className='w-50'/></a>
          <a href="#" className='flex justify-center align-center'><FontAwesomeIcon icon={faTwitter} className='w-50'/></a>
          <a href="#" className='flex justify-center align-center'><FontAwesomeIcon icon={faYoutube} className='w-50'/></a>

        </div>
      </div>
      <div class="link-boxes">
        <ul className='box'>
          <li>
              Placeholder text.........
          </li>
        </ul>
        <ul class="box">
          <li class="link_name">Links</li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">How it works</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        
        
        <ul class="box input-box">
          <li class="link_name">Contact Us</li>
          <li>Phone no: <a href="#">+181 23765 43210</a></li>
          <li>Email: <a href="mailto:hello@gmail.com">IIITK-PTC@iiitkottayam.ac.in</a> </li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Connect"/></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2024 <a href="#">IIIT-K.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
