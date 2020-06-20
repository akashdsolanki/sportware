/* eslint-disable react-native/no-inline-styles */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {Layout, Radio} from 'react-native-ui-kitten';

import Carousel from 'react-native-snap-carousel';

//redux call
import {connect} from 'react-redux';
import {
  getConcussion,
  addConcussion,
  getAtheletDetail,
} from '../../redux/actions';

//
import {data} from './data';
import Header from '../../Helper/Header';
import {styles} from '../../styles';
import {FlatList} from 'react-native-gesture-handler';
import InfoModel from '../helper/InfoModal';
import Picker from '../../Helper/ModalPicker/Picker';
import Text from '../../Helper/Text';
import {arrowDown, infoCircle} from '../../Helper/Constants';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');
const pickerData = [
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
];
class Index extends Component {
  state = {
    concussionData: data,
    visible: false,
    sliderWidth: undefined,
    SymstomScore: 0,
    totalScore: 0,
    ref: 1,
    isPicker: false,
    ConcussionKey: null,
    REDFLAG_NeckPainTenderness: false,
  };

  componentDidMount = () => {
    const ref = this.props.navigation.getParam('ref');
    const ConcussionKey = this.props.navigation.getParam('ConcussionKey');
    const {Users} = this.props.user;
    if (ConcussionKey && ConcussionKey != null) {
      this.setState({ConcussionKey});
      this.props
        .getConcussion(Users.UsersKey, Users.AuthToken, ConcussionKey)
        .then(res => {
          console.log(res);
          if (res.status == 401) {
            this.props.navigation.navigate('Login');
          } else {
            if (res.data.obj.ViewDetail) {
              this.setState({
                concussionData: JSON.parse(res.data.obj.ViewDetail),
              });
            } else {
              this.setState({concussionData: data});
            }
          }
        });
    } else {
      console.log(data);
      this.setState({concussionData: data});
    }
    this.setState({sliderWidth: Dimensions.get('window').width, ref});
  };

  changeRadioValue = (checked, ansIndex, queIndex, stepIndex) => {
    const {concussionData, ref} = this.state;
    const array = concussionData;
    if (stepIndex == 5 || stepIndex == 7) {
      array[stepIndex][`question${ref}`][queIndex].ans[
        ansIndex
      ].checked = checked;
      array[stepIndex][`question${ref}`][queIndex].ansValue =
        array[stepIndex][`question${ref}`][queIndex].ans[ansIndex].ans;
      console.log(array[stepIndex][`question${ref}`][queIndex].ansValue);
    } else {
      array[stepIndex].question[queIndex].ans[ansIndex].checked = checked;
    }

    if (stepIndex == 0 || stepIndex == 1) {
      if (array[stepIndex].question[queIndex].ans[ansIndex].ans == 'Yes') {
        if (checked) {
          array[stepIndex].question[queIndex].ansValue = true;
        }
      } else {
        array[stepIndex].question[queIndex].ansValue = false;
      }
    }

    if (stepIndex == 2) {
      if (array[stepIndex].question[queIndex].ans[ansIndex].ans == 'Yes') {
        if (checked) {
          array[stepIndex].question[queIndex].ansValue = 1;
          array[8].memoryScore = array[8].memoryScore + 1;
        }
      } else {
        array[stepIndex].question[queIndex].ansValue = 0;
      }
    } else if (stepIndex == 4) {
      array[stepIndex].question[queIndex].ansValue =
        array[stepIndex].question[queIndex].ans[ansIndex].ans;
      if (array[stepIndex].question[queIndex].ans[ansIndex].ans == '1') {
        if (checked) {
          array[8].symtomScore = array[8].symtomScore + queIndex;
        }
      }
    } else if (stepIndex == 3) {
      array[stepIndex].question[queIndex].ansValue = ansIndex + 1;
      if (checked) {
        array[8].GCSScore = array[8].GCSScore + ansIndex + 1;
      }
    } else if (stepIndex == 5) {
      if (
        array[stepIndex][`question${ref}`][queIndex].ans[ansIndex].ans == '1'
      ) {
        if (checked) {
          array[8].memoryIScore = array[8].memoryIScore + 1;
        }
      }
    } else if (stepIndex == 7) {
      if (
        array[stepIndex][`question${ref}`][queIndex].ans[ansIndex].ans == '1'
      ) {
        if (checked) {
          array[8].delayScore = array[8].delayScore + 1;
        }
      }
    }
    this.setState({concussionData: array});
  };

  onChangeInput = (val, queIndex, stepIndex) => {
    const {concussionData} = this.state;
    const array = concussionData;
    array[stepIndex].question[queIndex].ansValue = val;
    this.setState({concussionData: array});
  };

  selectedPicker = val => {
    const {queIndex, stepIndex, concussionData} = this.state;
    const array = concussionData;
    array[stepIndex].question[queIndex].ansValue = val;
    array[8].balanceScore = array[8].balanceScore + parseInt(val);
    this.setState({concussionData: array});
  };

  onAdd = () => {
    const {concussionData, ConcussionKey, ref} = this.state;
    const AthleteKey = this.props.navigation.getParam('AthleteKey');
    const {Users} = this.props.user;
    const obj = {};

    if (ConcussionKey != null) {
      obj.ConcussionKey = ConcussionKey;
    } else {
      obj.ConcussionKey = 0;
    }
    obj.ViewDetail = JSON.stringify(concussionData);
    obj.ConcussionParentKey = this.props.navigation.getParam('InjuryKey');
    concussionData.forEach((val, stepIndex) => {
      val.question &&
        val.question.forEach((queVal, queIndex) => {
          obj[queVal.fieldName] = queVal.ansValue;
        });
      if (stepIndex == 5 || stepIndex == 7) {
        val[`question${ref}`] &&
          val[`question${ref}`].forEach((queVal, queIndex) => {
            obj[queVal.fieldName] = queVal.ansValue;
          });
      }
    });

    console.log(obj);
  };

  renderRadio = (ans, queIndex, stepIndex) => (
    <View
      style={{
        flexDirection: ans.length > 2 ? 'column' : 'row',
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
      {ans.map((val, ansIndex) => (
        <View
          key={`index-${ansIndex}`}
          style={{
            flexDirection: 'row',
            marginVertical: ans.length > 2 ? 10 : 0,
          }}>
          <Radio
            status="primary"
            key={`key-${ansIndex}`}
            onChange={nextChecked =>
              this.changeRadioValue(nextChecked, ansIndex, queIndex, stepIndex)
            }
            checked={val.checked}
          />
          <Text style={{marginHorizontal: 10, marginTop: 3}}>{val.ans}</Text>
        </View>
      ))}
    </View>
  );

  renderInput = (ans, queIndex, stepIndex) => (
    <TextInput
      value={ans}
      style={[
        styles.input,
        {height: 60, paddingHorizontal: 10, textAlignVertical: 'top'},
      ]}
      multiline
      numberOfLines={5}
      onChangeText={val => this.onChangeInput(val, queIndex, stepIndex)}
    />
  );

  renderInputSmall = (ans, queIndex, stepIndex) => (
    <TextInput
      value={ans}
      style={[styles.input, {height: 40, paddingHorizontal: 10}]}
      numberOfLines={1}
      onChangeText={val => this.onChangeInput(val, queIndex, stepIndex)}
    />
  );

  renderDropdown = (ans, queIndex, stepIndex) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => this.setState({isPicker: true, queIndex, stepIndex})}>
        <TextInput
          editable={false}
          pointerEvents="none"
          value={ans}
          style={[styles.input, {height: 40, textAlign: 'center'}]}
        />
      </TouchableOpacity>
      <Text style={{fontFamily: 'Karla-Bold'}}>of 10</Text>
    </View>
  );

  renderQuestion = (item, queIndex, stepIndex) => {
    return (
      <View>
        {item.trial && (
          <View style={style.trial}>
            <Text style={{color: '#FFF'}}>Trial {item.trial}</Text>
          </View>
        )}
        {item.queOption && <Text>{item.queOption}</Text>}
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 10,
            flexDirection: item.type == 'switch' ? 'row' : 'column',
          }}>
          <View
            style={{
              width:
                item.type == 'switch'
                  ? viewportWidth - 170
                  : viewportWidth - 100,
            }}>
            <Text style={{fontFamily: 'Karla-Bold'}}>{item.que}</Text>
          </View>
          {item.type == 'radio' &&
            this.renderRadio(item.ans, queIndex, stepIndex)}
          {item.type == 'input' &&
            this.renderInput(item.ansValue, queIndex, stepIndex)}
          {item.type == 'input-small' &&
            this.renderInputSmall(item.ansValue, queIndex, stepIndex)}
          {item.type == 'dropdown' &&
            this.renderDropdown(item.ansValue, queIndex, stepIndex)}
        </View>
      </View>
    );
  };

  renderScore = item => {
    const {
      symtomScore,
      memoryScore,
      GCSScore,
      memoryIScore,
      balanceScore,
      delayScore,
    } = item;
    const totalScore =
      symtomScore +
      memoryScore +
      memoryIScore +
      GCSScore +
      balanceScore +
      delayScore;
    return (
      <ScrollView>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Symptom Score
          </Text>
        </View>
        <Text style={style.text2}>{symtomScore} of 132</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Memory Assessment Score
          </Text>
        </View>
        <Text style={style.text2}>{memoryScore} of 5</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            GCS (E + V + M) Score
          </Text>
        </View>
        <Text style={style.text2}>{GCSScore} of 15</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Immediate Memory Score
          </Text>
        </View>
        <Text style={style.text2}>{memoryIScore} of 15</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Balance Examination Score
          </Text>
        </View>
        <Text style={style.text2}>{balanceScore} Second(S)</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Delayed Recall Score
          </Text>
        </View>
        <Text style={style.text2}>{delayScore} of 5</Text>
        <View style={style.trials}>
          <Text style={{color: '#FFF', fontFamily: 'Karla-Bold'}}>
            Total Score
          </Text>
        </View>
        <Text style={style.text2}>{totalScore} of 132</Text>
      </ScrollView>
    );
  };

  renderButton = () => (
    <TouchableOpacity
      onPress={() => this.setState({visible: !this.state.visible})}
      style={style.descContainer}>
      <Text>Description</Text>
      {arrowDown}
    </TouchableOpacity>
  );

  keyExtractor = (item, i) => `item=${i}`;

  _renderItem = (items, stepIndex) => {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={style.slide}>
            <View style={{flexDirection: 'row'}}>
              <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
                {items.title}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    visible: true,
                    subTitle: items.subTitle,
                    desc: items.desc,
                    note: items.note,
                  })
                }
                style={style.infoCircle}>
                {infoCircle}
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: '#DDD',
                height: 1,
                width: viewportWidth - 100,
                marginBottom: 10,
              }}
            />
            {stepIndex == 5 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={items[`question${this.state.ref}`]}
                keyExtractor={this.keyExtractor}
                renderItem={({item, index}) =>
                  this.renderQuestion(item, index, stepIndex)
                }
              />
            )}
            {stepIndex == 7 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={items[`question${this.state.ref}`]}
                keyExtractor={this.keyExtractor}
                renderItem={({item, index}) =>
                  this.renderQuestion(item, index, stepIndex)
                }
              />
            )}
            {items.title !== 'STEP-6A SCORE SUMMARY' ? (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={items.question}
                keyExtractor={this.keyExtractor}
                renderItem={({item, index}) =>
                  this.renderQuestion(item, index, stepIndex)
                }
              />
            ) : (
              this.renderScore(items)
            )}
            <Text style={{marginHorizontal: 16}}>{items.endNote}</Text>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 30,
            marginTop: 10,
            justifyContent: 'space-between',
          }}>
          {stepIndex != 0 && (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this._carousel.snapToItem(stepIndex - 1)}>
              <Text style={{marginLeft: 20, color: '#0080ff'}}>Prev</Text>
            </TouchableOpacity>
          )}
          {stepIndex != 8 && (
            <TouchableOpacity
              style={{flex: 1}}
              onPress={() => this._carousel.snapToItem(stepIndex + 1)}>
              <Text
                style={{marginRight: 20, color: '#0080ff', textAlign: 'right'}}>
                Next
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  onClose = () => {
    this.setState({visible: false, isPicker: false});
  };

  render() {
    const {container} = styles;
    const {
      subTitle,
      desc,
      note,
      visible,
      sliderWidth,
      concussionData,
    } = this.state;
    return (
      <Layout style={container}>
        <Header
          onSave={this.onAdd}
          isCancel={true}
          isBack={true}
          title={'Concussion'}
          navigation={this.props.navigation}
        />
        <View style={style.container}>
          {sliderWidth && sliderWidth > 0 && concussionData.length > 0 && (
            <Carousel
              ref={c => {
                this._carousel = c;
              }}
              data={concussionData}
              keyExtractor={item => item.title}
              renderItem={({item, index}) => this._renderItem(item, index)}
              sliderWidth={sliderWidth}
              itemHeight={viewportHeight - 175}
              itemWidth={sliderWidth - 62}
              enableMomentum={true}
              enableSnap={false}
              snapToInterval={sliderWidth - 62}
              decelerationRate={0.83}
              snapToAlignment={'start'}
              removeClippedSubviews={false}
            />
          )}
        </View>
        <InfoModel
          visible={visible}
          onClose={this.onClose}
          subTitle={subTitle}
          note={note}
          desc={desc}
        />
        <Picker
          data={pickerData}
          selectedValue={this.state.selectedValue}
          selectPicker={this.selectedPicker}
          onClose={this.onClose}
          close={this.state.isPicker}
        />
      </Layout>
    );
  }
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
    width: viewportWidth - 100,
    borderColor: '#0080ff',
  },
  infoCircle: {
    marginHorizontal: 20,
    marginTop: 16,
  },
  trial: {
    backgroundColor: '#0080ff',
    padding: 6,
  },
  trials: {
    backgroundColor: '#0080ff',
    padding: 6,
    marginVertical: 5,
  },
});

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(
  mapStateToProps,
  {getConcussion, addConcussion, getAtheletDetail},
)(Index);
