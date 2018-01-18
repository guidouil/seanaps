import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView, Linking } from 'react-native';

export default class WebScreen extends Component {
  static propTypes = {
    uri: PropTypes.string
  }

  render() {
    return (
      <WebView source={{ uri: this.props.uri }} />
    );
  }
}
