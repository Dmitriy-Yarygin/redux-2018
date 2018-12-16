import React, { PureComponent } from "react";
import { string, func, bool } from "prop-types";

function TagsInputs(tags, onChange) {
  const tagsArray = tags.split(" ");
  return tagsArray.map((tag, i) => (
    <input
      key={i}
      className="tags-input"
      type="text"
      name={i}
      value={tag}
      onChange={onChange}
    />
  ));
}

function reduceSpaces(str) {
  return str.replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s{2,}/g, " ");
}

class Tags extends PureComponent {
  static propTypes = {
    className: string,
    editMode: bool.isRequired,
    edit: func.isRequired
  };

  onChange = e => {
    const { value, name } = e.target;
    const newTags = this.props.tags
      .split(" ")
      .map((item, i) => {
        if (name == i) {
          return value;
        }
        return item;
      })
      .join(" ");
    this.props.edit("tags", reduceSpaces(newTags));
  };

  addTag = () => {
    const tags = this.props.tags;
    const newTags = tags.length ? tags + " new_tag" : "new_tag";
    this.props.edit("tags", newTags);
  };

  render() {
    const { editMode, tags } = this.props;
    if (!editMode) {
      return <div>{tags}</div>;
    }
    return (
      <div className="tags">
        {TagsInputs(tags, this.onChange)}
        <button className="tags-btnAdd" onClick={this.addTag}>
          Add a new tag
        </button>
      </div>
    );
  }
}

export default Tags;
