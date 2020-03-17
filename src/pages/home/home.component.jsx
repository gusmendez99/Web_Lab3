import React, { Fragment } from "react";

import "./home.styles.css";


import { MDBMask, MDBRow, MDBView, MDBContainer } from "mdbreact";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import BabyList from "../../components/baby-list/baby-list.component";
import BabyForm from "../../components/baby-form/baby-form.component";

const Home = () => (
  <Fragment >
    <Header />

    <MDBView
          src={'https://i.dlpng.com/static/png/5026376-light-blue-baby-background-baby-pattern-light-background-image-baby-background-960_686_preview.png'}
          
        >
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
