import React, { PureComponent } from "react";
import { func } from "prop-types";

const initialValues = { title: "", url: "", tags: "" };
const inputNames = Object.keys(initialValues);

export default class Form extends PureComponent {
  static propTypes = {
    add: func.isRequired
  };

  state = initialValues;

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onAdd = () => {
    this.props.add(this.state);
    this.reset();
    this.render();
  };

  reset = () => {
    this.setState(initialValues);
  };

  render() {
    return (
      <div className="Form">
        {inputNames.map((inputName, i) => (
          <div key={i} className="Form-input">
            {inputName}
            <br />
            <input
              type="text"
              name={inputName}
              value={this.state[inputName]}
              onChange={this.onChange}
            />
          </div>
        ))}
        <div>
          <button className="Form-btnAdd" onClick={this.onAdd}>
            Add
          </button>
        </div>
      </div>
    );
  }
}
