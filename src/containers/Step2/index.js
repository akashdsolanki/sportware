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
    SignsWitnessed: undefined,
    SignsObservedOnVideo: undefined,
    SignsLyingMotionless: undefined,
    SignsBalanceMotorIncoord: undefined,
    SignsDisorientConfusion: undefined,
    SignsBlankOrVacantLook: undefined,
    SignsFacialInjury: undefined,
    //modal
    visible: false,
    note: '',
    desc: '',
    subTitle: '',
  };

  saveStep2Data = () => {
    const {
      SignsWitnessed,
      SignsObservedOnVideo,
      SignsLyingMotionless,
      SignsBalanceMotorIncoord,
      SignsDisorientConfusion,
      SignsBlankOrVacantLook,
      SignsFacialInjury,
    } = this.state;

    const obj = [
      SignsWitnessed,
      SignsObservedOnVideo,
      SignsLyingMotionless,
      SignsBalanceMotorIncoord,
      SignsDisorientConfusion,
      SignsBlankOrVacantLook,
      SignsFacialInjury,
    ];

    return obj;
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
              STEP-2 OBSERVABLE SIGNS
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'If any of the "Observable signs" are noted after a direct or indirect blow to the head, the athlete should be immediately and safely removed from participation and evaluated by a physician or a licenced healthcare professional. Consideration of transportation to a medical facility should be at the discretion of the physician or licenced healthcare professional.',
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
              text: 'Witnessed?',
              fieldName: this.state.SignsWitnessed,
              action: index => this.setState({SignsWitnessed: index}),
            })}
            {this.renderQuestions({
              text: 'Observed on video?',
              fieldName: this.state.SignsObservedOnVideo,
              action: index => this.setState({SignsObservedOnVideo: index}),
            })}
            {this.renderQuestions({
              text: 'Lying motionless on the playing surface?',
              fieldName: this.state.SignsLyingMotionless,
              action: index => this.setState({SignsLyingMotionless: index}),
            })}
            {this.renderQuestions({
              text:
                'Balance /gait difficulties / motor incoordination: stumbling, slow / labored movements?',
              fieldName: this.state.SignsBalanceMotorIncoord,
              action: index => this.setState({SignsBalanceMotorIncoord: index}),
            })}
            {this.renderQuestions({
              text:
                'Disorientation or confussion, or an inablility to respond appropriatly to questions?',
              fieldName: this.state.SignsDisorientConfusion,
              action: index => this.setState({SignsDisorientConfusion: index}),
            })}
            {this.renderQuestions({
              text: 'Blank or vacant look?',
              fieldName: this.state.SignsBlankOrVacantLook,
              action: index => this.setState({SignsBlankOrVacantLook: index}),
            })}
            {this.renderQuestions({
              text: 'Facial injury after head trauma?',
              fieldName: this.state.SignsFacialInjury,
              action: index => this.setState({SignsFacialInjury: index}),
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
});

export default index;
