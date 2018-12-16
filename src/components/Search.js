import React, { PureComponent } from "react";
import { func, string } from "prop-types";

export default class Search extends PureComponent {
  static propTypes = {
    searchField: string.isRequired,
    search: func.isRequired
  };
  state = { title: "", tags: "" };

  onChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]:value });
    this.props.search(name, value);
  };

  render() {
    return (
      <div className="Search">
        Search by title:
        <input 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={this.onChange} 
        />
        by tags:
        <input 
          type="text" 
          name="tags" 
          value={this.state.tags} 
          onChange={this.onChange} />
      </div>
    );
  }
}
