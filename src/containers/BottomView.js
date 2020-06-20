import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {leftIcon, rightIcon} from '../helper/Constants';

class BottomView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.props.prevoiusAction}>
          {leftIcon}
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={this.props.nextAction}>
          <Text style={styles.btnText}>Next</Text>
          {rightIcon}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'darkgray',
    borderWidth: 1,
    margin: 5,
    borderRadius: 50,
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 16,
  },
});

export default BottomView;
