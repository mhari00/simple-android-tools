/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Vibration, Button} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    const DURATION = 300;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Selamat datang di React Native!</Text>
        <Text style={styles.instructions}>Untuk memulai, ubah App.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
