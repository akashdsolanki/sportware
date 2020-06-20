/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import {infoCircle} from '../../helper/Constants';
import {RadioGroup, Radio} from '@ui-kitten/components';
import InfoModel from '../../helper/InfoModal';

export class index extends Component {
  state = {
    inputValue: '',
    MaddocksVenue: undefined,
    MaddocksHalf: undefined,
    MaddocksLastScored: undefined,
    MaddocksLastTeam: undefined,
    MaddocksWin: undefined,
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
              STEP-3 MEMORY ASSESSMENT
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  subtitle: 'Maddocks Questions',
                  desc: '(FOR ATHLETES OLDER THAN 12 YEARS OF AGE)',
                  note:
                    'Note: Appropriate sport-specific question maybe substituted.',
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
          <View style={style.bodyContainer}>
            {this.renderInputTypeQuestion({
              text:
                'I am going to ask you a few questions, please listen carefully and give your best effort, first tell me what happened?',
              fieldName: 'Mechanism',
            })}
            {this.renderQuestions({
              text: 'What venue are we at today?',
              fieldName: this.state.MaddocksVenue,
              action: index => this.setState({MaddocksVenue: index}),
            })}
            {this.renderQuestions({
              text: 'Which half is it now?',
              fieldName: this.state.MaddocksHalf,
              action: index => this.setState({MaddocksHalf: index}),
            })}
            {this.renderQuestions({
              text: 'Who score last in this match?',
              fieldName: this.state.MaddocksLastScored,
              action: index => this.setState({MaddocksLastScored: index}),
            })}
            {this.renderQuestions({
              text: 'what team did you play last week/game?',
              fieldName: this.state.MaddocksLastTeam,
              action: index => this.setState({MaddocksLastTeam: index}),
            })}
            {this.renderQuestions({
              text: 'Did your team win the last game?',
              fieldName: this.state.MaddocksWin,
              action: index => this.setState({MaddocksWin: index}),
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

  renderInputTypeQuestion = data => {
    return (
      <View>
        <Text style={style.questionText}>{data.text}</Text>
        <TextInput
          value={this.state.inputValue}
          style={[style.input]}
          multiline
          numberOfLines={5}
          onChangeText={val => this.setState({inputValue: val})}
        />
      </View>
    );
  };

  renderQuestions = data => {
    return (
      <View>
        <Text style={style.questionText}>{data.text}</Text>
        <View style={style.radioContainer}>
          <RadioGroup
            style={style.radiobtn}
            selectedIndex={data.fieldName}
            onChange={index => data.action(index)}>
            <Radio>Yes</Radio>
            <Radio>No</Radio>
          </RadioGroup>
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
  input: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    marginVertical: 20,
    paddingBottom: 10,
  },
});

export default index;
