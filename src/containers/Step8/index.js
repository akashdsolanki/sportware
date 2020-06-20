/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
} from 'react-native';
import {infoCircle} from '../../helper/Constants';
import {RadioGroup, Radio} from '@ui-kitten/components';
import InfoModel from '../../helper/InfoModal';

export class index extends Component {
  state = {
    demem1: undefined,
    demem2: undefined,
    demem3: undefined,
    demem4: undefined,
    demem5: undefined,
    //modal
    visible: false,
    note: '',
    desc: '',
    subTitle: '',
  };

  render() {
    return this.renderMainView();
  }

  renderMainView = () => {
    return (
      <ScrollView>
        <View style={style.slide}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
              STEP-5 DELAYED RECALL
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'The delayed recall should be performed after 5 minutes have elapsed since the end of Immediate Recall section, Score 1pt. for each correct answer',
                })
              }>
              {infoCircle}
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#DDD',
              height: 1,
              marginBottom: 10,
            }}
          />
          <View>
            {this.renderQuestions({
              text: 'Baby',
              fieldName: this.state.demem1,
              action: index => this.setState({demem1: index}),
            })}
            {this.renderQuestions({
              text: 'Monkey',
              fieldName: this.state.demem2,
              action: index => this.setState({demem2: index}),
            })}
            {this.renderQuestions({
              text: 'Perfume',
              fieldName: this.state.demem3,
              action: index => this.setState({demem3: index}),
            })}
            {this.renderQuestions({
              text: 'SUNSET',
              fieldName: this.state.demem4,
              action: index => this.setState({demem4: index}),
            })}
            {this.renderQuestions({
              text: 'Iron',
              fieldName: this.state.demem5,
              action: index => this.setState({demem5: index}),
            })}
          </View>
        </View>
        <InfoModel
          visible={this.state.visible}
          onClose={() => this.setState({visible: false})}
          subTitle={this.state.subTitle}
          note={this.state.note}
          desc={this.state.desc}
        />
      </ScrollView>
    );
  };

  renderQuestions = data => {
    return (
      <View>
        <View style={style.bodyContainer}>
          <Text style={style.questionText}>{data.text}</Text>
          <View style={style.radioContainer}>
            <RadioGroup
              style={style.radiobtn}
              selectedIndex={data.fieldName}
              onChange={index => data.action(index)}>
              <Radio>0</Radio>
              <Radio>1</Radio>
            </RadioGroup>
          </View>
        </View>
      </View>
    );
  };
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
    flex: 1,
  },
  viewPager: {
    flex: 1,
  },
  slide: {
    backgroundColor: '#FFF',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 18,
    color: '#0080ff',
  },
  text: {
    fontSize: 14,
    marginVertical: 10,
    color: '#555',
    textAlign: 'center',
  },
  text2: {
    fontSize: 20,
    marginVertical: 10,
    color: '#555',
    textAlign: 'center',
  },
  descContainer: {
    backgroundColor: '#0080ff20',
    borderWidth: 1,
    borderRadius: 4,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderColor: '#0080ff',
  },
  infoCircle: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  bodyContainer: {
    paddingHorizontal: 15,
  },
  radiobtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  trial: {
    backgroundColor: '#0080ff',
    padding: 8,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
});

export default index;
