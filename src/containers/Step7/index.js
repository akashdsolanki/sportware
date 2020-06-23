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
import Picker from '../../helper/ModalPicker/Picker';

export class index extends Component {
  state = {
    selectedstance: undefined,
    BessFoot: undefined,
    BessSurface: '',
    BessFootwear: '',
    BessDouble: 0,
    BessSingle: 0,
    BessTandem: 0,
    //modal
    visible: false,
    note: '',
    desc: '',
    subTitle: '',
    //picker
    isPicker: false,
    pickerData: [
      {id: 1, value: '1'},
      {id: 2, value: '2'},
      {id: 3, value: '3'},
      {id: 4, value: '4'},
      {id: 5, value: '5'},
      {id: 6, value: '6'},
      {id: 7, value: '7'},
      {id: 8, value: '8'},
      {id: 9, value: '9'},
      {id: 10, value: '10'},
    ],
  };

  render() {
    return this.renderMainView();
  }

  _setStanceValue = val => {
    const {selectedstance} = this.state;

    if (selectedstance === 'double') {
      this.setState({BessDouble: val});
    } else if (selectedstance === 'single') {
      this.setState({BessSingle: val});
    } else if (selectedstance === 'tandem') {
      this.setState({BessTandem: val});
    }
  };

  renderMainView = () => {
    return (
      <ScrollView>
        <View style={style.slide}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
              STEP-4B BALANCE EXAMINATION
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  subtitle:
                    'Modified Balance Error Scroing System (mBESS) testing',
                  desc:
                    'Balance testing - types of errors \n 1. Hands lifted off illiac crest \n 2. Opening eyes \n 3.  Step, stumble or fall \n 4. Moving hip into > 30 degree abduction \n 5. Lifting forefoot or heel \n 6. Remaining out of test position > 5 sec.',
                  note: 'The following test should be perform for 20 seconds.',
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
              text: 'Which foot was tested (i.e. which is non-dominant foot):',
              fieldName: this.state.BessFoot,
              action: index => this.setState({BessFoot: index}),
            })}
            {this.renderInputTypeQuestion({
              text: 'Test Surface (hard floor, field, etc..)',
              fieldName: this.state.BessSurface,
              action: index => this.setState({REDFLAG_Headache: index}),
            })}
            {this.renderInputTypeQuestion({
              text: 'Footwear (shoes, barefoot, etc..)',
              fieldName: this.state.BessFootwear,
              action: index => this.setState({REDFLAG_Headache: index}),
            })}
            <Text style={style.desText}>
              For further assessment, the same 3 stances can be performed on a
              surface of medium density foam (e.g. approximately 50cm x 40cm x
              6cm)
            </Text>
            {this.renderDropdown({
              selectedstance: 'double',
              text:
                'Double leg stance: Stand with your feet together, hands on your hips and with your eyes closed.',
              fieldName: this.state.BessDouble,
            })}
            {this.renderDropdown({
              selectedstance: 'single',
              text:
                'Single leg stance: Stand on your non-dominant foot. The dominant leg should be held in approximately 30 degree of hip flexion and 45 degree of knee flexion.',
              fieldName: this.state.BessSingle,
            })}
            {this.renderDropdown({
              selectedstance: 'tandem',
              text:
                'Tandem stance: Stand heel-to-toe with your non-dominant foot in back.',
              fieldName: this.state.BessTandem,
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
        <Picker
          data={this.state.pickerData}
          selectedValue={this.state.selectedValue}
          selectPicker={val => this._setStanceValue(val)}
          onClose={() => this.setState({isPicker: false})}
          close={this.state.isPicker}
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
          onChangeText={index => data.action(index)}
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
            <Radio>Left</Radio>
            <Radio>Right</Radio>
          </RadioGroup>
        </View>
      </View>
    );
  };

  renderDropdown = data => (
    <View>
      <Text style={style.questionText}>{data.text}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() =>
            this.setState({isPicker: true, selectedstance: data.selectedstance})
          }>
          <TextInput
            editable={false}
            pointerEvents="none"
            value={data.fieldName}
            style={[
              style.input,
              {height: 40, textAlign: 'center', fontSize: 18},
            ]}
          />
        </TouchableOpacity>
        <Text>of 10</Text>
      </View>
    </View>
  );
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
  desText: {
    fontSize: 16,
    marginVertical: 10,
  },
});

export default index;
