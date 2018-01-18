import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native'
import styles from './Styles/IconButtonStyle'

export default class IconButton extends Component {
  static propTypes = {
    source: Image.propTypes.source,
    onPress: PropTypes.func,
    styles: TouchableOpacity.propTypes.style
  }

  render () {
    return (
      <TouchableOpacity style={[styles.button, this.props.styles]} onPress={this.props.onPress}>
        <Image
          source={this.props.source}
        />
      </TouchableOpacity>
    )
  }
}
