import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import { connect } from "react-redux";
import moment from 'moment';

import { MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

import * as eventActions from "../../redux/event/event.actions";
import * as babyEventActions from "../../redux/baby-event/baby-event.actions";
import * as selectors from "../../redux/root-reducer";

const EventForm = ({ id, onSubmit, types }) => {
  const [description, changeDescription] = useState("");
  const [type, changeType] = useState("");

  return (
    <MDBCol md="6" xl="5" className="mb-4">
      <MDBCard className="dark-grey-text">
        <MDBCardBody className="z-depth-2">
          <h3 className="dark-grey-text text-center">
            <strong>Add Baby</strong>
          </h3>
          <hr />
          <select
            className="browser-default custom-select"
            onChange={e=>changeType(e.target.value)} value={type}
          >
            {types.map(type => (
              <option key={type.id} value={type.name}>{type.name}</option> 
              ))}
          
          </select>

          <MDBInput
            type="textarea"
            label="Description"
            onChange={e => changeDescription(e.target.value)}
          />
          <div className="text-center mt-3 black-text">
            <MDBBtn color="red" onClick={() => {
              const myType = (!type || type === "") ? types[0].name : type
              onSubmit(id, myType, description)
            }}>
              Add Event
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const mapStateToProps = (state) => ({
  types: selectors.getEventTypes()
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit(babyId, type, description) {
    const eventId = uuidv4();
    dispatch(eventActions.addEvent(eventId, type, description, moment().format('MMMM Do YYYY, h:mm:ss a')));
    dispatch(babyEventActions.addBabyEvent(babyId, eventId));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);