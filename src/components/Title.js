import React, { PureComponent } from 'react';
import { string, func, bool } from 'prop-types'

class Title extends PureComponent {

  static propTypes = {
    className: string,
    editMode: bool.isRequired,
    edit: func.isRequired
  };

  onChange = (e) => {
    const { value, name } = e.target
    this.props.edit(name, value);
  }

  render () {
    return (
      <div className="title">  
        {this.props.editMode ? (
          <input
            type='text'
            name="title" 
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
