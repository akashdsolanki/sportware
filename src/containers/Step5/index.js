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
    SymptomsHeadache: undefined,
    SymptomsPressure: undefined,
    SymptomsNeckPain: undefined,
    SymptomsNausea: undefined,
    SymptomsDizziness: undefined,
    SymptomsBlurredVision: undefined,
    SymptomsBalanceProblems: undefined,
    SymptomsLightSensitivity: undefined,
    SymptomsNoiseSensitivity: undefined,
    SymptomsSlowedDown: undefined,
    SymptomsFog: undefined,
    SymptomsDontFeelRight: undefined,
    SymptomsDiffConc: undefined,
    SymptomsDiffRemembering: undefined,
    SymptomsLowEnergy: undefined,
    SymptomsConfusion: undefined,
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
              STEP-2B SYMPTOM EVALUATION
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'The Athlete should given the symptom form and ask to read this instruction paragraph out loud then complete symptom scale. For the baseline assessment, the athlete should rate his/her symptoms based on how he/she typically feels and for the post injury assessment the athlete should rate their symptoms at this point in time.',
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
            {this.renderQuestions({
              text: 'Headache',
              fieldName: this.state.SymptomsHeadache,
              action: index => this.setState({SymptomsHeadache: index}),
            })}
            {this.renderQuestions({
              text: 'Pressure in Head',
              fieldName: this.state.SymptomsPressure,
              action: index => this.setState({SymptomsPressure: index}),
            })}
            {this.renderQuestions({
              text: 'Neck Pain',
              fieldName: this.state.SymptomsNeckPain,
              action: index => this.setState({SymptomsNeckPain: index}),
            })}
            {this.renderQuestions({
              text: 'Nausea or vomiting',
              fieldName: this.state.SymptomsNausea,
              action: index => this.setState({SymptomsNausea: index}),
            })}
            {this.renderQuestions({
              text: 'Dizziness',
              fieldName: this.state.SymptomsDizziness,
              action: index => this.setState({SymptomsDizziness: index}),
            })}
            {this.renderQuestions({
              text: 'Blurred Vision',
              fieldName: this.state.SymptomsBlurredVision,
              action: index => this.setState({SymptomsBlurredVision: index}),
            })}
            {this.renderQuestions({
              text: 'Balance Problems',
              fieldName: this.state.SymptomsBalanceProblems,
              action: index => this.setState({SymptomsBalanceProblems: index}),
            })}
            {this.renderQuestions({
              text: 'Sensitivity to light',
              fieldName: this.state.SymptomsLightSensitivity,
              action: index => this.setState({SymptomsLightSensitivity: index}),
            })}
            {this.renderQuestions({
              text: 'Sensitivity to noise',
              fieldName: this.state.SymptomsNoiseSensitivity,
              action: index => this.setState({SymptomsNoiseSensitivity: index}),
            })}
            {this.renderQuestions({
              text: 'Feeling slowed down',
              fieldName: this.state.SymptomsSlowedDown,
              action: index => this.setState({SymptomsSlowedDown: index}),
            })}
            {this.renderQuestions({
              text: 'Feeling like "in a fog',
              fieldName: this.state.SymptomsFog,
              action: index => this.setState({SymptomsFog: index}),
            })}
            {this.renderQuestions({
              text: 'Don`t fill right',
              fieldName: this.state.SymptomsDontFeelRight,
              action: index => this.setState({SymptomsDontFeelRight: index}),
            })}
            {this.renderQuestions({
              text: 'Difficulty concentraiting',
              fieldName: this.state.SymptomsDiffConc,
              action: index => this.setState({SymptomsDiffConc: index}),
            })}
            {this.renderQuestions({
              text: 'Difficulty remembering',
              fieldName: this.state.SymptomsDiffRemembering,
              action: index => this.setState({SymptomsDiffRemembering: index}),
            })}
            {this.renderQuestions({
              text: 'Fatigue or low energy',
              fieldName: this.state.SymptomsLowEnergy,
              action: index => this.setState({SymptomsLowEnergy: index}),
            })}
            {this.renderQuestions({
              text: 'Confusion',
              fieldName: this.state.SymptomsConfusion,
              action: index => this.setState({SymptomsConfusion: index}),
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
});

export default index;
