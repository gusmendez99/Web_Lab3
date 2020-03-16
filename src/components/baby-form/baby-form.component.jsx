import React from "react";
import { MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";

const BabyForm = () => (
  <MDBCol md="6" xl="5" className="mb-4">
    <MDBCard className="dark-grey-text">
      <MDBCardBody className="z-depth-2">
        <h3 className="dark-grey-text text-center">
          <strong>Add Baby</strong>
        </h3>
        <hr />
        <MDBInput label="First Name"/>
        <MDBInput label="First Name"/>
        <div className="text-center mt-3 black-text">
          <MDBBtn color="blue">Add</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
);

export default BabyForm;
