import React, { Fragment } from "react";
import { connect } from "react-redux";

import {  MDBRow, MDBView, MDBContainer } from "mdbreact";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import EventList from "../../components/event-list/event-list.component";
import EventForm from "../../components/event-form/event-form.component";

import * as selectors from "../../redux/root-reducer";

import './events.styles.css'

const EventsPage = ({ match, data }) => {
  return (
    <Fragment>
      <Header nested color="red"/>

      <MDBView className="events-view">
        <MDBContainer className=" justify-content-center align-items-center baby-container">
          {data ? (
            <Fragment>
              <h3 className="font-weight-bold white-text text-md-left">
                {data.firstName + " " + data.lastName}'s events
              </h3>
              <hr className="hr-light" />
              <MDBRow>
                <EventList id={match.params.id} />
                <EventForm id={match.params.id} />
              </MDBRow>
            </Fragment>
          ) : (
            <h3 className="font-weight-bold white-text text-md-left">
              No existe este bebé (404){" "}
            </h3>
          )}
        </MDBContainer>
      </MDBView>

      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state, ownProps) => ({
  data: selectors.getBaby(state, ownProps.match.params.id)
});

export default connect(mapStateToProps)(EventsPage);
