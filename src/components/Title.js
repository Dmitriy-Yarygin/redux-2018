import React, { PureComponent } from 'react';
import { string, func, bool } from 'prop-types'

class Title extends PureComponent {

  static propTypes = {
    className: string,
    editMode: bool.isRequired,
    edit: func.isRequired
  };

  // state = { value: this.props.children }

  onChange = (e) => {
    const { value } = e.target
    // console.log( value, this.props)
    // this.setState({ value })
    this.props.edit('title', value);
  }

  render () {
    // console.log(this.props);
    return (
      <div className={this.props.className}>
        {this.props.editMode ? (
          <input
            type='text'
            value={ this.props.children }
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

/*
return (
      <div className={this.props.className}>
        {this.props.editMode ? (
          <input
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          />
        ) : (
          this.state.value
        )}
      </div>
    )

    */