import React, { Fragment } from "react";

import {  MDBRow, MDBView, MDBContainer } from "mdbreact";

import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import BabyList from "../../components/baby-list/baby-list.component";
import BabyForm from "../../components/baby-form/baby-form.component";


import "./home.styles.css";



const HomePage = () => (
  <Fragment >
    <Header color="blue"/>

    <MDBView className="home-view">
      <MDBContainer className=" justify-content-center align-items-center baby-container">

        <h3 className="font-weight-bold white-text text-md-left">My babies </h3>
        <hr className="hr-light" />
        <MDBRow>
          <BabyList />
          <BabyForm />
        </MDBRow>
      </MDBContainer>
    </MDBView>

    <Footer />
  </Fragment>
);

export default HomePage;
