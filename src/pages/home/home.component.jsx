import React, { Fragment } from "react";
import Header from "../../components/header/header.component";
import { MDBMask, MDBRow, MDBView, MDBContainer } from "mdbreact";

import "./home.styles.css";

import Footer from "../../components/footer/footer.component";
import BabyList from "../../components/baby-list/baby-list.component";
import BabyForm from "../../components/baby-form/baby-form.component";

const Home = () => (
  <Fragment>
    <Header />

    <MDBView>
      <MDBMask overlay="indigo" />
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

export default Home;
