/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {leftIcon, rightIcon, infoCircle} from './src/helper/Constants';
import {RadioGroup, Radio} from '@ui-kitten/components';
import InfoModel from './src/helper/InfoModal';
import Picker from './src/helper/ModalPicker/Picker';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';

export class App extends Component {
  state = {
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
    isPicker: false,
    pageIndex: 1,
    pageNo: 1,
    REDFLAG_NeckPainTenderness: undefined,
    REDFLAG_DoubleVision: undefined,
    REDFLAG_TinglingBurning: undefined,
    REDFLAG_Headache: undefined,
    REDFLAG_SeizureConvulsion: undefined,
    REDFLAG_LossConsciousness: undefined,
    REDFLAG_DeterioratingConciousState: undefined,
    REDFLAG_Vomiting: undefined,
    REDFLAG_RestlessAgitationCombative: undefined,
    SignsWitnessed: undefined,
    SignsObservedOnVideo: undefined,
    SignsLyingMotionless: undefined,
    SignsBalanceMotorIncoord: undefined,
    SignsDisorientConfusion: undefined,
    SignsBlankOrVacantLook: undefined,
    SignsFacialInjury: undefined,
    inputValue: '',
    MaddocksVenue: undefined,
    MaddocksHalf: undefined,
    MaddocksLastScored: undefined,
    MaddocksLastTeam: undefined,
    MaddocksWin: undefined,
    GCSBestEyeResponse: undefined,
    GCSBestVerbalResponse: undefined,
    GCSBestMotorResponse: undefined,
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
    selectedstance: undefined,
    BessFoot: undefined,
    BessSurface: '',
    BessFootwear: '',
    BessDouble: 0,
    BessSingle: 0,
    BessTandem: 0,
    demem1: undefined,
    demem2: undefined,
    demem3: undefined,
    demem4: undefined,
    demem5: undefined,
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

  fetchAllStepData = () => {
    const step1Data = this.child.current.saveStep1Data();
    console.log(step1Data);
  };

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
      <SafeAreaView style={{flex: 1}}>
        <Text
          style={style.saveText}
          onPress={() => {
            console.log(this.child[0].current);
            console.log(this.child[3].current);
            // const step1Data = this.child.current.saveStep1Data();
            // console.log(step1Data);
          }}>
          save
        </Text>
        {this.renderBodyView()}
        {this.renderBottomView()}
      </SafeAreaView>
    );
  };

  renderBottomView = () => {
    return (
      <View style={style.bottomContainer}>
        <TouchableOpacity
          style={style.btn}
          onPress={() => this.setState({pageIndex: this.state.pageIndex - 1})}>
          {leftIcon}
          <Text style={style.btnText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.btn}
          onPress={() => this.setState({pageIndex: this.state.pageIndex + 1})}>
          <Text style={style.btnText}>Next</Text>
          {rightIcon}
        </TouchableOpacity>
      </View>
    );
  };

  renderStep1 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderStep2 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderStep3 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.slide}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
              STEP-3 MEMORY ASSESSMENT
            </Text>
            {/* <TouchableOpacity
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
            </TouchableOpacity> */}
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

  renderStep4 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderStep5 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.slide}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
              STEP-2 SYMPTOM EVALUATION
            </Text>
            {/* <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'The Athlete should given the symptom form and ask to read this instruction paragraph out loud then complete symptom scale. For the baseline assessment, the athlete should rate his/her symptoms based on how he/she typically feels and for the post injury assessment the athlete should rate their symptoms at this point in time.',
                })
              }>
              {infoCircle}
            </TouchableOpacity> */}
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
              text: "Don't fill right",
              fieldName: this.state.SymptomsDontFeelRight,
              action: index => this.setState({SymptomsDontFeelRight: index}),
            })}
            {this.renderQuestions({
              text: 'Difficulty concentrating',
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

  renderStep6 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.slide}>
          <View style={{flexDirection: 'row'}}>
            <Text style={[style.title, {marginLeft: 20, flex: 1}]}>
              STEP-3B IMMEDIATE MEMORY
            </Text>
            {/* <TouchableOpacity
              style={style.infoCircle}
              onPress={() =>
                this.setState({
                  visible: true,
                  desc:
                    'I am going to test your memory, I will read you a list of words and when I am done. repeat back as many word you can remember, in any order. \n Trial 2 & 3, I am going to repeat the same list again, Repeat back as many word as you can remember in order, even if you said the word before. \n Complete all 3 trials regardless of score on trial 1 & 2. Read the word at a rate of one per second. Score 1pt. for each correct response. Total score equals sum across all trials. Do not inform the athlete that delayed recall will be tested.',
                })
              }>
              {infoCircle}
            </TouchableOpacity> */}
          </View>
          <View
            style={{
              backgroundColor: '#DDD',
              height: 1,
              marginBottom: 10,
            }}
          />
          {this.state.pageNo === 1 && this.renderPageNo1Questions()}
          {this.state.pageNo === 2 && this.renderPageNo2Questions()}
          {this.state.pageNo === 3 && this.renderPageNo3Questions()}
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

  renderPageNo1Questions = () => {
    return (
      <View>
        {this.renderTrialQuestions({
          data: {
            trial: 1,
            text: 'ELBOW',
          },
          fieldName: this.state.immem1_1,
          action: index => this.setState({immem1_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'APPLE',
          },
          fieldName: this.state.immem1_2,
          action: index => this.setState({immem1_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'CARPET',
          },
          fieldName: this.state.immem1_3,
          action: index => this.setState({immem1_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SADDLE',
          },
          fieldName: this.state.immem1_4,
          action: index => this.setState({immem1_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'BUBBLE',
          },
          fieldName: this.state.immem1_5,
          action: index => this.setState({immem1_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 2,
            text: 'ELBOW',
          },
          fieldName: this.state.immem2_1,
          action: index => this.setState({immem2_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'APPLE',
          },
          fieldName: this.state.immem2_2,
          action: index => this.setState({immem2_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'CARPET',
          },
          fieldName: this.state.immem2_3,
          action: index => this.setState({immem2_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SADDLE',
          },
          fieldName: this.state.immem2_4,
          action: index => this.setState({immem2_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'BUBBLE',
          },
          fieldName: this.state.immem2_5,
          action: index => this.setState({immem2_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 3,
            text: 'ELBOW',
          },
          fieldName: this.state.immem3_1,
          action: index => this.setState({immem3_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'APPLE',
          },
          fieldName: this.state.immem3_2,
          action: index => this.setState({immem3_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'CARPET',
          },
          fieldName: this.state.immem3_3,
          action: index => this.setState({immem3_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SADDLE',
          },
          fieldName: this.state.immem3_4,
          action: index => this.setState({immem3_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'BUBBLE',
          },
          fieldName: this.state.immem3_5,
          action: index => this.setState({immem3_5: index}),
        })}
      </View>
    );
  };

  renderPageNo2Questions = () => {
    return (
      <View>
        {this.renderTrialQuestions({
          data: {
            trial: 1,
            text: 'Candle',
          },
          fieldName: this.state.immem1_1,
          action: index => this.setState({immem1_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Paper',
          },
          fieldName: this.state.immem1_2,
          action: index => this.setState({immem1_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sugar',
          },
          fieldName: this.state.immem1_3,
          action: index => this.setState({immem1_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sandwich',
          },
          fieldName: this.state.immem1_4,
          action: index => this.setState({immem1_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Wagon',
          },
          fieldName: this.state.immem1_5,
          action: index => this.setState({immem1_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 2,
            text: 'Candle',
          },
          fieldName: this.state.immem2_1,
          action: index => this.setState({immem2_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Paper',
          },
          fieldName: this.state.immem2_2,
          action: index => this.setState({immem2_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sugar',
          },
          fieldName: this.state.immem2_3,
          action: index => this.setState({immem2_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sandwich',
          },
          fieldName: this.state.immem2_4,
          action: index => this.setState({immem2_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Wagon',
          },
          fieldName: this.state.immem2_5,
          action: index => this.setState({immem2_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 3,
            text: 'Candle',
          },
          fieldName: this.state.immem3_1,
          action: index => this.setState({immem3_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Paper',
          },
          fieldName: this.state.immem3_2,
          action: index => this.setState({immem3_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sugar',
          },
          fieldName: this.state.immem3_3,
          action: index => this.setState({immem3_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Sandwich',
          },
          fieldName: this.state.immem3_4,
          action: index => this.setState({immem3_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Wagon',
          },
          fieldName: this.state.immem3_5,
          action: index => this.setState({immem3_5: index}),
        })}
      </View>
    );
  };

  renderPageNo3Questions = () => {
    return (
      <View>
        {this.renderTrialQuestions({
          data: {
            trial: 1,
            text: 'Baby',
          },
          fieldName: this.state.immem1_1,
          action: index => this.setState({immem1_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Monkey',
          },
          fieldName: this.state.immem1_2,
          action: index => this.setState({immem1_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Perfume',
          },
          fieldName: this.state.immem1_3,
          action: index => this.setState({immem1_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SUNSET',
          },
          fieldName: this.state.immem1_4,
          action: index => this.setState({immem1_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Iron',
          },
          fieldName: this.state.immem1_5,
          action: index => this.setState({immem1_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 2,
            text: 'Baby',
          },
          fieldName: this.state.immem2_1,
          action: index => this.setState({immem2_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Monkey',
          },
          fieldName: this.state.immem2_2,
          action: index => this.setState({immem2_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Perfume',
          },
          fieldName: this.state.immem2_3,
          action: index => this.setState({immem2_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SUNSET',
          },
          fieldName: this.state.immem2_4,
          action: index => this.setState({immem2_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Iron',
          },
          fieldName: this.state.immem2_5,
          action: index => this.setState({immem2_5: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            trial: 3,
            text: 'Baby',
          },
          fieldName: this.state.immem3_1,
          action: index => this.setState({immem3_1: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Monkey',
          },
          fieldName: this.state.immem3_2,
          action: index => this.setState({immem3_2: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Perfume',
          },
          fieldName: this.state.immem3_3,
          action: index => this.setState({immem3_3: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'SUNSET',
          },
          fieldName: this.state.immem3_4,
          action: index => this.setState({immem3_4: index}),
        })}
        {this.renderTrialQuestions({
          data: {
            text: 'Iron',
          },
          fieldName: this.state.immem3_5,
          action: index => this.setState({immem3_5: index}),
        })}
      </View>
    );
  };

  renderStep7 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderStep8 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderStep9 = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
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

  renderBodyView = () => {
    const {pageIndex} = this.state;

    return (
      <View style={style.bodyContainer}>
        {pageIndex === 1 && this.renderStep1()}
        {pageIndex === 2 && this.renderStep2()}
        {pageIndex === 3 && this.renderStep3()}
        {pageIndex === 4 && this.renderStep4()}
        {pageIndex === 5 && this.renderStep5()}
        {pageIndex === 6 && this.renderStep6()}
        {pageIndex === 7 && this.renderStep7()}
        {pageIndex === 8 && this.renderStep8()}
        {pageIndex === 9 && this.renderStep9()}
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

  renderTrialQuestions = data => {
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
  }

  renderInputTypeQuestion = data => {
    return (
      <View>
        <Text style={style.questionText}>{data.text}</Text>
        <TextInput
          value={this.state.inputValue}
          style={[style.input]}
          multiline
          numberOfLines={5}
          placeholder="Answer"
          onChangeText={val => this.setState({inputValue: val})}
        />
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

  renderMultiOptionsQuestion = data => {
    return (
      <View style={{marginBottom: 10}}>
        <Text style={style.questionText}>{data.text}</Text>
        <View style={style.radioContainer}>
          <RadioGroup
            style={{marginTop: 5, marginBottom: 10}}
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
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  saveText: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  btn: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'darkgray',
    borderWidth: 1,
    margin: 5,
    borderRadius: 50,
    flexDirection: 'row',
  },
  btnText: {
    fontSize: 16,
  },
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

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
);
