import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Greetings and Well-Met!</h1>
          <p className="lead">
            You are here to sort and categorize some imaginary folks right? Well
            get to it!
          </p>
          <hr className="my-4"></hr>
          <p>
            Meaning that when you wish you may go to the search page to search
            for specific imaginary people, or you can sort the whole lot of 'em
            on the sort page!
          </p>
        </div>
      </div>
    );
  }
}
