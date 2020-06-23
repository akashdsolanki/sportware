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
    inputValue: '',
    GCSBestEyeResponse: undefined,
    GCSBestVerbalResponse: undefined,
    GCSBestMotorResponse: undefined,
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
              STEP-4 EXAMINATION
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'GCS should be recorded for all athletes in case of subsequant deterioration.',
                  subtitle: 'Glasgow Coma Scale (GCS)',
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
            {this.renderMultiOptionsQuestion({
              text: 'Best eye response (E)',
              fieldName: this.state.GCSBestEyeResponse,
              action: index => this.setState({GCSBestEyeResponse: index}),
              options: [
                'No eye opening (1)',
                'Eye opening in response to pain (2)',
                'Eye opening to speech (3)',
                'Eye opening spontaneosuly (4)',
              ],
            })}
            {this.renderMultiOptionsQuestion({
              text: 'Best verbal response (V)',
              fieldName: this.state.GCSBestVerbalResponse,
              action: index => this.setState({GCSBestVerbalResponse: index}),
              options: [
                'No verbal response (1)',
                'Incomprehensible sounds (2)',
                'Inappropriate words (3)',
                'Confused (4)',
                'Oriented (5)',
              ],
            })}
            {this.renderMultiOptionsQuestion({
              text: 'Best motor response',
              fieldName: this.state.GCSBestMotorResponse,
              action: index => this.setState({GCSBestMotorResponse: index}),
              options: [
                'No motor response (1)',
                'Extension to pain (2)',
                'Abnormal flexion to pain (3)',
                'Flexion/Withdrawal to pain (4)',
                'Localizes to pain (5)',
                'Obeys commands (6)',
              ],
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

  renderMultiOptionsQuestion = data => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={style.questionText}>{data.text}</Text>
        <View style={style.radioContainer}>
          <RadioGroup
            style={style.radiobtn}
            selectedIndex={data.fieldName}
            onChange={index => data.action(index)}>
            {data.options.map((item, index) => {
              return <Radio key={item => `${item}`}>{item}</Radio>;
            })}
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
