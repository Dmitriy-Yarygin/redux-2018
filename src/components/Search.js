import React, { PureComponent } from "react";
import { func } from "prop-types";

export default class Search extends PureComponent {
  static propTypes = {
    search: func.isRequired
  };
  state = { title: "", tags: "" };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
    this.props.search(name, value);
  };

  render() {
    return (
      <div className="Search">
        <div>
          <span>Search by title:</span>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.onChange}
          />
        </div>
        <div>
          <span>by tags:</span>
          <input
            type="text"
            name="tags"
            value={this.state.tags}
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
