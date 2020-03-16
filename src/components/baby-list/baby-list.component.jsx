import React from "react";
import { MDBListGroup, MDBListGroupItem, MDBBadge } from "mdbreact";

import "./baby-list.styles.css";

const BabyList = () => (
  <div className="white-text text-center text-md-left col-md-6 mb-5">
    <MDBListGroup>
      <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://source.unsplash.com/200x200/?baby"
            className="rounded-circle z-depth-1 baby-photo"
            alt="Sample avatar"
          />{" "}
          <span class="baby-name">Juan David</span>
        </div>

        <MDBBadge color="primary" pill>
          2
        </MDBBadge>
      </MDBListGroupItem>

      <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://source.unsplash.com/202x202/?baby"
            className="rounded-circle z-depth-1 baby-photo"
            alt="Sample avatar"
          />{" "}
          <span class="baby-name">Juan David</span>
        </div>

        <MDBBadge color="primary" pill>
          2
        </MDBBadge>
      </MDBListGroupItem>

      <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://source.unsplash.com/201x201/?baby"
            className="rounded-circle z-depth-1 baby-photo"
            alt="Sample avatar"
          />{" "}
          <span class="baby-name">Juan David</span>
        </div>

        <MDBBadge color="primary" pill>
          2
        </MDBBadge>
      </MDBListGroupItem>

      <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="https://source.unsplash.com/203x203/?baby"
            className="rounded-circle z-depth-1 baby-photo"
            alt="Sample avatar"
          />{" "}
          <span class="baby-name">Juan David</span>
        </div>

        <MDBBadge color="primary" pill>
          2
        </MDBBadge>
      </MDBListGroupItem>

      
    </MDBListGroup>
  </div>
);

export default BabyList;
