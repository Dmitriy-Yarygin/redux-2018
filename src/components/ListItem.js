import React, { PureComponent } from 'react'
import { string } from 'prop-types'

import Title from '../containers/Title'

const getVideoId = url => url.split('/')[3]
const createVideoUrl = id => `https://www.youtube.com/embed/${id}`

export default class ListItem extends PureComponent {
  static propTypes = {
    id: string.isRequired,
    title: string.isRequired,
    url: string.isRequired,
    tags: string.isRequired
  }

  state = { editMode: false }

  switchMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  deleteCard = () => {
    this.props.del(this.props.id);
}

  render () {
    const { url, title, tags } = this.props

    const videoId = getVideoId(url)
    const videoUrl = createVideoUrl(videoId)

    return (
      <li className="ListItem">
        <Title editMode={this.state.editMode}>
            {title}
        </Title>
        <div className="ListItem-btnGroup">
          <button onClick={this.switchMode}>&#9998;</button>
          <button onClick={this.deleteCard}>&#10008;</button>
        </div>
        <iframe src={videoUrl} title={title} />
        <Title editMode={this.state.editMode}>
            {tags}
        </Title>
      </li>
    )
  }
}
