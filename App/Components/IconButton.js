import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native'
import styles from './Styles/IconButtonStyle'

export default class IconButton extends Component {
  static propTypes = {
    source: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
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
