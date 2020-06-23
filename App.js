/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {leftIcon, rightIcon} from './src/helper/Constants';

//files import
import Step1 from './src/containers/Step1';
import Step2 from './src/containers/Step2';
import Step3 from './src/containers/Step3';
import Step4 from './src/containers/Step4';
import Step5 from './src/containers/Step5';
import Step6 from './src/containers/Step6';
import Step7 from './src/containers/Step7';
import Step8 from './src/containers/Step8';
import Step9 from './src/containers/Step9';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

export class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  state = {
    pageIndex: 1,
  };

  render() {
    return this.renderMainView();
  }

  fetchAllStepData = () => {
    const step1Data = this.child.current.saveStep1Data();
    console.log(step1Data);
  };

  renderMainView = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text
          style={styles.saveText}
          onPress={() => {
            const step1Data = this.child.current.saveStep1Data();
            console.log(step1Data);
          }}>
          save
        </Text>
        {this.renderBodyView()}
        {this.renderBottomView()}
      </SafeAreaView>
    );
  };

  renderBottomView = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({pageIndex: this.state.pageIndex - 1})}>
          {leftIcon}
          <Text style={styles.btnText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.setState({pageIndex: this.state.pageIndex + 1})}>
          <Text style={styles.btnText}>Next</Text>
          {rightIcon}
        </TouchableOpacity>
      </View>
    );
  };

  renderBodyView = () => {
    const {pageIndex} = this.state;

    return (
      <View style={styles.bodyContainer}>
        {pageIndex === 1 && <Step1 ref={this.child} />}
        {pageIndex === 2 && <Step2 ref={this.child} />}
        {pageIndex === 3 && <Step3 ref={this.child} />}
        {pageIndex === 4 && <Step4 ref={this.child} />}
        {pageIndex === 5 && <Step5 ref={this.child} />}
        {pageIndex === 6 && <Step6 ref={this.child} pageNo={2} />}
        {pageIndex === 7 && <Step7 ref={this.child} />}
        {pageIndex === 8 && <Step8 ref={this.child} />}
        {pageIndex === 9 && <Step9 ref={this.child} />}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
  },
  saveText: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
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

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
