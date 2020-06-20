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
    REDFLAG_NeckPainTenderness: undefined,
    REDFLAG_DoubleVision: undefined,
    REDFLAG_TinglingBurning: undefined,
    REDFLAG_Headache: undefined,
    REDFLAG_SeizureConvulsion: undefined,
    REDFLAG_LossConsciousness: undefined,
    REDFLAG_DeterioratingConciousState: undefined,
    REDFLAG_Vomiting: undefined,
    REDFLAG_RestlessAgitationCombative: undefined,
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
              STEP-1 RED FLAGS
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'If any of the "Red Flags" are noted after a direct or indirect blow to the head, the athlete should be immediately and safely removed from participation and evaluated by a physician or a licenced healthcare professional. Consideration of transportation to a medical facility should be at the discretion of the physician or licenced healthcare professional.',
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
              text: 'Neck pain or tenderness?',
              fieldName: this.state.REDFLAG_NeckPainTenderness,
              action: index =>
                this.setState({REDFLAG_NeckPainTenderness: index}),
            })}
            {this.renderQuestions({
              text: 'Double vision?',
              fieldName: this.state.REDFLAG_DoubleVision,
              action: index => this.setState({REDFLAG_DoubleVision: index}),
            })}
            {this.renderQuestions({
              text: 'Weakness or tingling / burning in arms or legs?',
              fieldName: this.state.REDFLAG_TinglingBurning,
              action: index => this.setState({REDFLAG_TinglingBurning: index}),
            })}
            {this.renderQuestions({
              text: 'Severe or increasing headache?',
              fieldName: this.state.REDFLAG_Headache,
              action: index => this.setState({REDFLAG_Headache: index}),
            })}
            {this.renderQuestions({
              text: 'Seizure or convulsion?',
              fieldName: this.state.REDFLAG_SeizureConvulsion,
              action: index =>
                this.setState({REDFLAG_SeizureConvulsion: index}),
            })}
            {this.renderQuestions({
              text: 'Loss of consciousness?',
              fieldName: this.state.REDFLAG_LossConsciousness,
              action: index =>
                this.setState({REDFLAG_LossConsciousness: index}),
            })}
            {this.renderQuestions({
              text: 'Deteriorating conscious state?',
              fieldName: this.state.REDFLAG_DeterioratingConciousState,
              action: index =>
                this.setState({REDFLAG_DeterioratingConciousState: index}),
            })}
            {this.renderQuestions({
              text: 'Vomiting?',
              fieldName: this.state.REDFLAG_Vomiting,
              action: index => this.setState({REDFLAG_Vomiting: index}),
            })}
            {this.renderQuestions({
              text: 'Increasingly restless, agitated or combative?',
              fieldName: this.state.REDFLAG_RestlessAgitationCombative,
              action: index =>
                this.setState({REDFLAG_RestlessAgitationCombative: index}),
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
