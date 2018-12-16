import React, { PureComponent } from "react";
import { string, func, bool } from "prop-types";
import TagsInputs from "./TagsInputs"

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
    const newTags = this.props.tags.split(" ");
    newTags[Number(name)] = value;    
    this.props.edit("tags", reduceSpaces(newTags.join(" ")));
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
    return <TagsInputs 
      tags={tags} 
      changeTag={this.onChange}  
      addTag={this.addTag} />
  }
}

export default Tags;
