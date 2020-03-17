import React, { Fragment } from "react";
import { MDBListGroupItem, MDBBadge } from "mdbreact";

const BabyItem = ({
  info,
  isSelected = false,
  onClick,
}) => (
  <Fragment>
    <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <img
          src="https://source.unsplash.com/203x203/?baby"
          className="rounded-circle z-depth-1 baby-photo"
          alt="Sample avatar"
        />{" "}
        <span className="baby-name">Juan David</span>
      </div>

      <MDBBadge color="primary" pill>
        2
      </MDBBadge>
    </MDBListGroupItem>
  </Fragment>
);

export default BabyItem;