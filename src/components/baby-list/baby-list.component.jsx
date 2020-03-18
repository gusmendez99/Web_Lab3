import React from "react";
import { connect } from "react-redux";
import * as selectors from "../../redux/root-reducer";

import { MDBListGroup } from "mdbreact";
import BabyItem from "../baby-item/baby-item.component";
import "./baby-list.styles.css";

const BabyList = ({ babies }) => (
  <div className="white-text text-center text-md-left col-md-6 mb-5">
    <MDBListGroup>
      {babies.length === 0 ? (
        <h4>{"No hay bebes aun..."}</h4>
      ) : (
        babies.map(item => <BabyItem key={item.id} id={item.id} />)
      )}
    </MDBListGroup>
  </div>
);

const mapStateToProps = (state) => ({
  babies: selectors.getBabies(state)
})

export default connect(mapStateToProps)(BabyList);
