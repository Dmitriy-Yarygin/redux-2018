import React, { PureComponent } from 'react'
import { func, string } from 'prop-types'

class Title extends PureComponent {

  state = { value: this.props.children }

  onChange = (e) => {
    const { value } = e.target
    console.log( value, this.props)
    this.setState({ value })
    this.props.edit(this.state);
  }

  render () {
    return (
      <div className='title'>
        {this.props.editMode ? (
          <input
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          />
        ) : (
          this.props.children
        )}
      </div>
    )
  }
}

export default Title
