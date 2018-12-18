import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
            <Text style={{ fontSize: 20 }}>Menos</Text>
          </TouchableOpacity>
          
          <Text style={{ fontSize: 60 }}>{this.props.counter}</Text>
          
          <TouchableOpacity onPress={() => this.props.increaseCounter()}>
            <Text style={{ fontSize: 20 }}>Más</Text>
          </TouchableOpacity>
        </View>
        
        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => this.props.duplicate()}>
            <Text style={{ fontSize: 20 }}>Duplicar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.divide()}>
            <Text style={{ fontSize: 20 }}>Dividir</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
          <TouchableOpacity onPress={() => this.props.restart()}>
            <Text style={{ fontSize: 20 }}>Restaurar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        duplicate: () => dispatch({ type: 'DUPLICATE' }),
        divide: () => dispatch({ type: 'DIVIDE' }),
        restart: () => dispatch({ type: 'RESTART' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
