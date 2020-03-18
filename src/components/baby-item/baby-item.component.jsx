import React, { Fragment } from "react";
import { MDBListGroupItem, MDBBadge } from "mdbreact";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./baby-item.styles.css";
import * as selectors from "../../redux/root-reducer";
import * as actions from "../../redux/baby/baby.actions";

const BabyItem = ({ data, eventsCount, onClick }) => {
  const photoSize = Math.floor(Math.random() * 10);

  return (
    <Fragment>
      <Link to={`/baby/${data.id}`}>
        <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={`https://source.unsplash.com/20${photoSize}x20${photoSize}/?baby`}
              className="rounded-circle z-depth-1 baby-photo"
              alt="Sample avatar"
            />{" "}
            <span className="baby-name">
              {data.firstName + " " + data.lastName}
            </span>
          </div>

          <MDBBadge color="primary" pill>
            {eventsCount}
          </MDBBadge>
        </MDBListGroupItem>
      </Link>
    </Fragment>
  );
};

const mapStateToProps = (state, { id }) => ({
  data: selectors.getBaby(state, id),
  eventsCount: selectors.getBabyEvents(state, id).length
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onClick() {
    console.log(id);
    dispatch(actions.selectBaby(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BabyItem);
