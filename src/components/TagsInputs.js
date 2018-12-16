import React from "react";

const TagsInputs = ({ tags, changeTag, addTag }) => {
  const tagsArray = tags.split(" ");
  return (
    <div className="tags">
      {(tags.length>0) && tagsArray.map((tag, i) => (
        <input
          key={i}
          className="tags-input"
          type="text"
          name={i}
          value={tag}
          onChange={changeTag}
        />
      )) }
      <button className="tags-btnAdd" onClick={addTag}>
        Add a new tag
      </button>
    </div>
  );
};

export default TagsInputs;
