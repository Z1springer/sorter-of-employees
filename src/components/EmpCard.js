import React from "react";

function EmpCard() {
  const props = this.results;
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.picture.large} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong>
            {props.name}
          </li>
          <li>
            <strong>Email:</strong>
            {props.email}
          </li>
          <li>
            <strong>Age:</strong>
            {props.dob.age}
          </li>
          <li>
            <strong>Location:</strong>
            {(props.location.street, props.location.city)}
          </li>
          <li>
            <strong>Phone Number:</strong>
            {props.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmpCard;
