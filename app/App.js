import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Text
} from 'react-native'
import { styles } from './assets/Style'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >Hello Jeje</Text>
      </View>
    )
  }
}