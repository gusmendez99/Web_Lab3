import React, { Fragment } from "react";
import { MDBListGroupItem, MDBIcon } from "mdbreact";
import { connect } from "react-redux";

import "./event-item.styles.css";

import * as eventActions from "../../redux/event/event.actions";
import * as babyEventActions from "../../redux/baby-event/baby-event.actions";
import * as selectors from "../../redux/root-reducer";




const EventItem = ({ eventId, eventData, babyId, onDelete }) => {

  return (
    <Fragment>
        <MDBListGroupItem className="d-flex black-text justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src={`https://pngimage.net/wp-content/uploads/2018/05/activities-icon-png-2.png`}
              className="rounded-circle z-depth-1 event-photo"
              alt="Sample avatar"
            />{" "}
            <span className="event-name">
              {eventData.type + " (" + eventData.date + ")"}
            </span>
          </div>
          <span onClick={onDelete(babyId, eventId)}>
            <MDBIcon icon="trash" />
          </span>
        </MDBListGroupItem>
    </Fragment>
  );
};

const mapStateToProps = (state, { eventId, babyId }) => ({
  eventData: selectors.getEvent(state, eventId)
});

const mapDispatchToProps = (dispatch) => ({
  onDelete(babyId, eventId) {
    dispatch(babyEventActions.deleteBabyEvent(babyId, eventId));
    dispatch(eventActions.deleteEvent(eventId));
    
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(EventItem);
