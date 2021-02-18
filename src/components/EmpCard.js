import React from "react";
import "./EmpCard.css";

function EmpCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt={props.employee.name.first}
          src={props.employee.picture.large}
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name: </strong>
            {props.employee.name.first} {props.employee.name.last}
          </li>
          <li>
            <strong>Email: </strong>
            {props.employee.email}
          </li>
          <li>
            <strong>Age: </strong>
            {props.employee.dob.age}
          </li>
          <li>
            <strong>Home City: </strong>
            {props.employee.location.city}
          </li>
          <li>
            <strong>Phone Number: </strong>
            {props.employee.phone}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmpCard;
