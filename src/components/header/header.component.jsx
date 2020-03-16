import React, { Fragment } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBContainer
} from "mdbreact";

import "./header.styles.css";

const Header = () => (
  <Fragment>
      <div>
        <MDBNavbar
          color="blue"
          dark
          expand="md"
          fixed="top"
          scrolling
          transparent
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <strong className="white-text">Baby Monitor</strong>
            </MDBNavbarBrand>
          </MDBContainer>
        </MDBNavbar>
      </div>

    
  </Fragment>
);

export default Header;
