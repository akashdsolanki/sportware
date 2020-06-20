/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';

//files import
import BottomView from './src/containers/BottomView';
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
  state = {
    pageIndex: 1,
  };

  render() {
    return this.renderMainView();
  }

  renderMainView = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Text style={styles.saveText}>save</Text>
        {this.renderBodyView()}
        <BottomView
          nextAction={() =>
            this.setState({pageIndex: this.state.pageIndex + 1})
          }
          prevoiusAction={() =>
            this.setState({pageIndex: this.state.pageIndex - 1})
          }
        />
      </SafeAreaView>
    );
  };

  renderBodyView = () => {
    const {pageIndex} = this.state;

    return (
      <View style={styles.bodyContainer}>
        {pageIndex === 1 && <Step1 />}
        {pageIndex === 2 && <Step2 />}
        {pageIndex === 3 && <Step3 />}
        {pageIndex === 4 && <Step4 />}
        {pageIndex === 5 && <Step5 />}
        {pageIndex === 6 && <Step6 />}
        {pageIndex === 7 && <Step7 />}
        {pageIndex === 8 && <Step8 />}
        {pageIndex === 9 && <Step9 />}
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
});

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
