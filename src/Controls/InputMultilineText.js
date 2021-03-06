import React, {PropTypes as T} from 'react'

const style = {
  display: 'block',
  width: '100%',
  maxWidth: '100%',
  boxSizing: 'border-box',
  borderColor: '#cccccc',
}

export default React.createClass({

  displayName: 'Demo.Controls.InputMultilineText',

  propTypes: {
    value: T.string.isRequired,
    onChange: T.func.isRequired,
  },

  handleChange(e) {
    this.props.onChange(e.target.value)
  },

  render() {
    return <textarea
      rows={4}
      style={style}
      value={this.props.value}
      onChange={this.handleChange}
    />
  },

})
