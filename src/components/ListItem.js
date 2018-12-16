import React, { PureComponent } from "react";
import { string, func } from "prop-types";

import Title from "../components/Title";
import Tags from "../components/Tags";

const getVideoId = url => url.split("/")[3];
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`;

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired,
    del: func.isRequired
  };

  state = {
    editMode: false,
    title: this.props.title,
    url: this.props.url,
    tags: this.props.tags
  };

  switchMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  deleteCard = () => {
    this.props.del(this.props.id);
  };

  edit = (name, value) => {
    this.setState({ [name]: value });
  };

  saveInputs = () => {
    const { title, tags } = this.state;
    this.props.edit({ id: this.props.id, title, tags });
    this.switchMode();
  };

  resetInputs = () => {
    this.setState({
      editMode: false,
      title: this.props.title,
      tags: this.props.tags
    });
  };

  render() {
    const { url, title, tags } = this.state;
    const videoId = getVideoId(url);
    const videoUrl = createVideoUrl(videoId);

    return (
      <li className="ListItem">
        <Title editMode={this.state.editMode} edit={this.edit}>
          {title}
        </Title>
        <div className="ListItem-btnGroup">
          {this.state.editMode ? (
            <button onClick={this.saveInputs}>&#10004;</button>
          ) : (
            <button onClick={this.switchMode}>&#9998;</button>
          )}
          {this.state.editMode ? (
            <button onClick={this.resetInputs}>&#10008;</button>
          ) : (
            <button onClick={this.deleteCard}>&#10008;</button>
          )}
        </div>
        <iframe src={videoUrl} title={title} />
        <Tags editMode={this.state.editMode} edit={this.edit} tags={tags} />
      </li>
    );
  }
}
