import { Component } from "react";
import API from "../../utils/API";

export default class Search extends Component {
  state = {
    search: "",
    results: [],
  };

  componentDidMount() {
    this.searchGender("female");
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  searchGender = (gender) => {
    API.searchByGender(gender).then((res) => {
      console.log(res);
      this.setState({ results: res.data.results });
    });
  };

  submitForm = (event) => {
    event.preventDefault();
    this.searchGender(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input
            name="search"
            onChange={this.handleInputChange}
            value={this.state.search}
          />
          <button>I need a new Employee!</button>
        </form>
        {this.state.results.map((imgSrc) => (
          <img src={imgSrc} /> //probably want to make this a card instead of an image
        ))}
      </div>
    );
  }
}
