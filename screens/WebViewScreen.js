import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class WebViewScreen extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>Hello world</h1>' }}
      />
    );
  }
}
