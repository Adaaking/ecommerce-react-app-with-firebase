import React from "react";
import './footer.scss'
import headphone from '../../utils/images/headphone3.webp'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <img src={headphone} alt="headPhone"/>
        <div>
            <h1>DO YOU NEED MORE TIPS</h1>
            <p>Sign up free and get the latest tips</p>
            <form>
                <input type="text" placeholder="email" required/>
                <button>SEND</button>
            </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
            <h2>call us 24x7</h2>
            <span>0961439185</span>
        </div>
        <div>
            <h2>message us</h2>
            <span>addisumotora3@gmail.com</span>
        </div>
        <div>
            <h2>call us 24x7</h2>
             <span>0961439185</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
