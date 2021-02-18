import React, { Component } from "react";
import API from "./utils/API";
import EmpCard from "./components/EmpCard";
import { Form, Navbar, Nav } from "react-bootstrap";
import "./App.css";

export default class App extends Component {
  state = { Fools: [], filteredFools: [], search: "" };

  componentDidMount() {
    API.search().then((empList) => {
      console.log(empList.data.results);
      this.setState({ Fools: empList.data.results });
      this.setState({ filteredFools: empList.data.results });
    });
  }

  sortFakes = () => {
    //Ascending by First Name
    const foolishness = this.state.filteredFools;
    foolishness.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      } else if (a.name.first > b.name.first) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ filteredFools: foolishness });
  };

  sortLast = () => {
    //Ascending by Last Name
    const ascFools = this.state.filteredFools;
    ascFools.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return -1;
      } else if (a.name.last > b.name.last) {
        return 1;
      } else {
        return 0;
      }
    });
    this.setState({ filteredFools: ascFools });
  };

  filteringFools = (event) => {
    const folly = this.state.Fools.filter((Fool) => {
      return Fool.name.first
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ search: event.target.value, filteredFools: folly });
  };

  sortFools = () => {
    //Descending by First Name
    const foolsly = this.state.filteredFools;
    foolsly.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return 1;
      } else if (a.name.first > b.name.first) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ filteredFools: foolsly });
  };

  sortLastFools = () => {
    //Descending by Last Name
    const descFools = this.state.filteredFools;
    descFools.sort((a, b) => {
      if (a.name.last < b.name.last) {
        return 1;
      } else if (a.name.last > b.name.last) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({ filteredFools: descFools });
  };

  render() {
    return (
      <div id="homeBase">
        <Navbar expand="lg" id="nav">
          <Navbar.Brand href="/" id="title">
            Employee Sorter!
          </Navbar.Brand>
          <Nav>
            <Form inline>
              <Form.Control
                as="textarea"
                placeholder="Enter Name Here!"
                className="text-muted"
                size="small"
                name="search"
                value={this.state.search}
                onChange={this.filteringFools}
              />
            </Form>

            <button
              onClick={this.sortFakes}
              event="preventDefault"
              name="Ascending"
              className="btn btn-danger"
            >
              Sort By First Name! (Asc)
            </button>

            <button
              onClick={this.sortLast}
              event="preventDefault"
              name="Ascending"
              className="btn btn-warning"
            >
              Sort By Last Name! (Asc)
            </button>

            <button
              onClick={this.sortFools}
              event="preventDefault"
              name="Descending"
              className="btn btn-success"
            >
              Sort By First Name! (Desc)
            </button>

            <button
              onClick={this.sortLastFools}
              event="preventDefault"
              name="Descending"
              className="btn btn-primary"
            >
              Sort By Last Name! (Desc)
            </button>
          </Nav>
        </Navbar>
        <div className="container">
          {this.state.filteredFools.map((fooL) => {
            return <EmpCard employee={fooL} key={fooL.cell} />;
          })}
          {this.state.filteredFools.map((foOl) => {
            return <EmpCard employee={foOl} key={foOl.cell} />;
          })}
        </div>
      </div>
    );
  }
}
