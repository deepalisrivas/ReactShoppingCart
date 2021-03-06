import React, { Component } from "react";
import "./footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav>
          <div className="inner-container">
            <ul className="footer-ul">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/cart">Your Cart</a>
              </li>
            </ul>
          </div>
          <p>
            <FontAwesomeIcon icon={faCopyright} /> YourCompanyName
          </p>
        </nav>
      </footer>
    );
  }
}
export default Footer;
