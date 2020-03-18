import React, { Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBIcon, MDBContainer } from "mdbreact";

import { Link } from "react-router-dom";

import "./header.styles.css";

const Header = ({ nested, color }) => (
  <Fragment>
    <div>
      <MDBNavbar
        color={color}
        dark
        expand="md"
        fixed="top"
        scrolling
        transparent
      >
        <MDBContainer>
          <MDBNavbarBrand>
            {nested ? (
              <Fragment>
                <Link to="/">
                  <MDBIcon icon="arrow-left" className="white-text mr-4" />
                </Link>
                <strong className="white-text">Events</strong>
              </Fragment>
            ) : (
              <strong className="white-text">Baby Monitor</strong>
            )}
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  </Fragment>
);

export default Header;
