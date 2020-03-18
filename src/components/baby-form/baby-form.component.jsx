import React, { useState } from "react";
import { MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

import { connect } from "react-redux";

import * as actions from "../../redux/baby/baby.actions";

const BabyForm = ({ onSubmit }) => {
  const [firstName, changeFirstName] = useState("");
  const [lastName, changeLastName] = useState("");

  return (
    <MDBCol md="6" xl="5" className="mb-4">
      <MDBCard className="dark-grey-text">
        <MDBCardBody className="z-depth-2">
          <h3 className="dark-grey-text text-center">
            <strong>Add Baby</strong>
          </h3>
          <hr />
          <MDBInput
            label="First Name"
            onChange={e => changeFirstName(e.target.value)}
          />
          <MDBInput
            label="Last Name"
            onChange={e => changeLastName(e.target.value)}
          />
          <div className="text-center mt-3 black-text">
            <MDBBtn color="blue" onClick={() => onSubmit(firstName, lastName)}>
              Add Baby
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(firstName, lastName) {
    dispatch(actions.addBaby(firstName, lastName));
  }
})

export default connect(undefined, mapDispatchToProps)(BabyForm);
