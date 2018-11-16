import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

export default class App extends Component {
  state = {
    counter: 0
  }

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => this.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Menos</Text>
          </TouchableOpacity>
          <Text style={{ fontSize: 20 }}>{this.state.counter}</Text>
          <TouchableOpacity onPress={() => this.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Más</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
