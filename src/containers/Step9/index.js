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
import InfoModel from '../../helper/InfoModal';

export class index extends Component {
  state = {
    symtomScore: 0,
    memoryScore: 0,
    GCSScore: 0,
    memoryIScore: 0,
    balanceScore: 0,
    delayScore: 0,
    totalScore: 0,
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
              STEP-6A SCORE SUMMARY
            </Text>
            <TouchableOpacity
              disabled
              style={style.infoCircle}
              onPress={() => this.setState({visible: true})}>
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
            {this.renderScore({
              title: 'Symptom Score',
              fieldName: this.state.symtomScore,
              extraText: 'of 132',
            })}
            {this.renderScore({
              title: 'Memory Assessment Score',
              fieldName: this.state.memoryScore,
              extraText: 'of 5',
            })}
            {this.renderScore({
              title: 'GCS (E + V + M) Score',
              fieldName: this.state.GCSScore,
              extraText: 'of 15',
            })}
            {this.renderScore({
              title: 'Memory Immediate Score',
              fieldName: this.state.memoryIScore,
              extraText: 'of 15',
            })}
            {this.renderScore({
              title: 'Balance Examination Score',
              fieldName: this.state.balanceScore,
              extraText: 'of Second(S)',
            })}
            {this.renderScore({
              title: 'Delay Recall Score',
              fieldName: this.state.delayScore,
              extraText: 'of 5',
            })}
            {this.renderScore({
              title: 'Total Score',
              fieldName: this.state.totalScore,
              extraText: 'of 132',
            })}
          </View>
          <InfoModel
            visible={this.state.visible}
            onClose={() => this.setState({visible: false})}
            subTitle={this.state.subTitle}
            note={this.state.note}
            desc={this.state.desc}
          />
        </View>
      </ScrollView>
    );
  };

  renderScore = data => {
    return (
      <View style={style.bodyContainer}>
        <View style={style.trial}>
          <Text style={{color: '#FFF', fontSize: 16, fontWeight: '600'}}>
            {data.title}
          </Text>
        </View>
        <View style={style.radioContainer}>
          <Text style={{textAlign: 'center', fontSize: 20, marginVertical: 10}}>
            {data.fieldName} {data.extraText}
          </Text>
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
