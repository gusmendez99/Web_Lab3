import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../redux/root-reducer";

import { MDBListGroup } from "mdbreact";
import EventItem from "../event-item/event-item.component";
import "./event-list.styles.css";

const EventList = ({ id, events }) => (
  <div className="white-text text-center text-md-left col-md-6 mb-5">
    <MDBListGroup>
      {events.length === 0 ? (
        <h4>{"No hay eventos..."}</h4>
      ) : (
        events.map(item => <EventItem key={item} eventId={item} babyId={id}/>)
      )}
    </MDBListGroup>
  </div>
);

const mapStateToProps = (state, { id }) => {
  console.log("This id is " + id)
  console.log(selectors.getBabyEvents(state, id))

  return ({
  events: selectors.getBabyEvents(state, id)
})}

export default connect(mapStateToProps)(EventList);
