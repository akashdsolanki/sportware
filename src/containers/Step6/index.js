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
    immem1_1: undefined,
    immem1_2: undefined,
    immem1_3: undefined,
    immem1_4: undefined,
    immem1_5: undefined,
    immem2_1: undefined,
    immem2_2: undefined,
    immem2_3: undefined,
    immem2_4: undefined,
    immem2_5: undefined,
    immem3_1: undefined,
    immem3_2: undefined,
    immem3_3: undefined,
    immem3_4: undefined,
    immem3_5: undefined,
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
              STEP-3B MEMORY IMMEDIATE
            </Text>
            <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'I am going to test your memory, I will read you a list of words and when I am done. repeat back as many word you can remember, in any order. \n Trial 2 & 3, I am going to repeat the same list again, Repeat back as many word as you can remember in order, even if you said the word before. \n Complete all 3 trials regardless of score on trial 1 & 2. Read the word at a rate of one per second. Score 1pt. for each correct response. Total score equals sum across all trials. Do not inform the athlete that delayed recall will be tested.',
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
              data: {
                trial: 1,
                text: 'ELBOW',
              },
              fieldName: this.state.immem1_1,
              action: index => this.setState({immem1_1: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'APPLE',
              },
              fieldName: this.state.immem1_2,
              action: index => this.setState({immem1_2: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'CARPET',
              },
              fieldName: this.state.immem1_3,
              action: index => this.setState({immem1_3: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'SADDLE',
              },
              fieldName: this.state.immem1_4,
              action: index => this.setState({immem1_4: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'BUBBLE',
              },
              fieldName: this.state.immem1_5,
              action: index => this.setState({immem1_5: index}),
            })}
            {this.renderQuestions({
              data: {
                trial: 2,
                text: 'ELBOW',
              },
              fieldName: this.state.immem2_1,
              action: index => this.setState({immem2_1: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'APPLE',
              },
              fieldName: this.state.immem2_2,
              action: index => this.setState({immem2_2: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'CARPET',
              },
              fieldName: this.state.immem2_3,
              action: index => this.setState({immem2_3: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'SADDLE',
              },
              fieldName: this.state.immem2_4,
              action: index => this.setState({immem2_4: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'BUBBLE',
              },
              fieldName: this.state.immem2_5,
              action: index => this.setState({immem2_5: index}),
            })}
            {this.renderQuestions({
              data: {
                trial: 3,
                text: 'ELBOW',
              },
              fieldName: this.state.immem3_1,
              action: index => this.setState({immem3_1: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'APPLE',
              },
              fieldName: this.state.immem3_2,
              action: index => this.setState({immem3_2: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'CARPET',
              },
              fieldName: this.state.immem3_3,
              action: index => this.setState({immem3_3: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'SADDLE',
              },
              fieldName: this.state.immem3_4,
              action: index => this.setState({immem3_4: index}),
            })}
            {this.renderQuestions({
              data: {
                text: 'BUBBLE',
              },
              fieldName: this.state.immem3_5,
              action: index => this.setState({immem3_5: index}),
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
        {data.data.trial && (
          <View style={style.trial}>
            <Text style={{color: '#FFF', fontSize: 16}}>
              Trial {data.data.trial}
            </Text>
          </View>
        )}
        <View style={style.bodyContainer}>
          <Text style={style.questionText}>{data.data.text}</Text>
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
