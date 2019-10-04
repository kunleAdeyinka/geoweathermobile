import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppContainer from './Navigator';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});