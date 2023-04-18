import React from "react";
import produceImage from './../img/produce-header.jpg'

export default function Head(){
  return (
    <React.Fragment>
      <h1>Avery's Organics</h1>
      <img src={produceImage} alt="A beautiful Oregonian organic produce farm" />
    </React.Fragment>
  );
}
