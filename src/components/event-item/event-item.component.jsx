import React, { Fragment } from "react";
import { MDBListGroupItem } from "mdbreact";
import { connect } from "react-redux";

import "./event-item.styles.css";
import * as selectors from "../../redux/root-reducer";
import * as actions from "../../redux/baby/baby.actions";

const EventItem = ({ data }) => {
  const photoSize = Math.floor(Math.random() * 10);

  return (
    <Fragment>
        <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={`https://source.unsplash.com/20${photoSize}x20${photoSize}/?baby`}
              className="rounded-circle z-depth-1 baby-photo"
              alt="Sample avatar"
            />{" "}
            <span className="baby-name">
              {"Nothing here yet..."}
            </span>
          </div>
        </MDBListGroupItem>
    </Fragment>
  );
};

const mapStateToProps = (state, { id }) => ({
  data: selectors.getEvent(state, id)
});


export default connect(mapStateToProps)(EventItem);
