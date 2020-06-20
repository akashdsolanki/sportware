export const data = [
  {
    title: 'STEP-1 RED FLAGS',
    desc:
      'If any of the "Red Flags" are noted after a direct or indirect blow to the head, the athlete should be immediately and safely removed from participation and evaluated by a physician or a licenced healthcare professional. Consideration of transportation to a medical facility should be at the discretion of the physician or licenced healthcare professional.',
    question: [
      {
        que: 'Neck pain or tenderness?',
        type: 'radio',
        fieldName: 'REDFLAG_NeckPainTenderness',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Double vision?',
        type: 'radio',
        fieldName: 'REDFLAG_DoubleVision',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Weakness or tingling / burning in arms or legs?',
        type: 'radio',
        fieldName: 'REDFLAG_TinglingBurning',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Severe or increasing headache?',
        type: 'radio',
        fieldName: 'REDFLAG_Headache',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Seizure or convulsion?',
        type: 'radio',
        fieldName: 'REDFLAG_SeizureConvulsion',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Loss of consciousness?',
        type: 'radio',
        fieldName: 'REDFLAG_LossConsciousness',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Deteriorating conscious state?',
        type: 'radio',
        fieldName: 'REDFLAG_DeterioratingConciousState',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Vomiting?',
        type: 'radio',
        fieldName: 'REDFLAG_Vomiting',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Increasingly restless, agitated or combative?',
        type: 'radio',
        fieldName: 'REDFLAG_RestlessAgitationCombative',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-2 OBSERVABLE SIGNS',
    desc:
      'If any of the "Observable signs" are noted after a direct or indirect blow to the head, the athlete should be immediately and safely removed from participation and evaluated by a physician or a licenced healthcare professional. Consideration of transportation to a medical facility should be at the discretion of the physician or licenced healthcare professional.',
    question: [
      {
        que: 'Witnessed?',
        type: 'radio',
        fieldName: 'SignsWitnessed',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Observed on video?',
        type: 'radio',
        fieldName: 'SignsObservedOnVideo',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Lying motionless on the playing surface?',
        type: 'radio',
        fieldName: 'SignsLyingMotionless',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que:
          'Balance /gait difficulties / motor incoordination: stumbling, slow / labored movements?',
        type: 'radio',
        fieldName: 'SignsBalanceMotorIncoord',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que:
          'Disorientation or confussion, or an inablility to respond appropriatly to questions?',
        type: 'radio',
        fieldName: 'SignsDisorientConfusion',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Blank or vacant look?',
        type: 'radio',
        fieldName: 'SignsBlankOrVacantLook',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Facial injury after head trauma?',
        type: 'radio',
        fieldName: 'SignsFacialInjury',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-3 MEMORY ASSESSMENT',
    subtitle: 'Maddocks Questions',
    desc: '(FOR ATHLETES OLDER THAN 12 YEARS OF AGE)',
    note: 'Note: Appropriate sport-specific question maybe substituted.',
    endNote:
      'Maddocks score is validated for sideline diagnosis of concussion only and is not used for serial testing.',
    question: [
      {
        que:
          'I am going to ask you a few questions, please listen carefully and give your best effort, first tell me what happened?',
        type: 'input',
        fieldName: 'Mechanism',
        ansValue: '',
      },
      {
        que: 'What venue are we at today?',
        type: 'radio',
        fieldName: 'MaddocksVenue',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Which half is it now?',
        type: 'radio',
        fieldName: 'MaddocksHalf',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Who score last in this match?',
        type: 'radio',
        fieldName: 'MaddocksLastScored',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'what team did you play last week/game?',
        type: 'radio',
        fieldName: 'MaddocksLastTeam',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
      {
        que: 'Did your team win the last game?',
        type: 'radio',
        fieldName: 'MaddocksWin',
        ansValue: false,
        ans: [
          {
            ans: 'Yes',
            checked: false,
          },
          {
            ans: 'No',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-4 EXAMINATION',
    subtitle: 'Glasgow Coma Scale (GCS)',
    endNote:
      'GCS should be recorded for all athletes in case of subsequant deterioration.',
    question: [
      {
        que: 'Best eye response[E]',
        type: 'radio',
        fieldName: 'GCSBestEyeResponse',
        ansValue: 0,
        ans: [
          {
            ans: 'No eye opening (1)',
            checked: false,
          },
          {
            ans: 'Eye opening in response to pain (2)',
            checked: false,
          },
          {
            ans: 'Eye opening to speech (3)',
            checked: false,
          },
          {
            ans: 'Eye opening spontaneosuly(4)',
            checked: false,
          },
        ],
      },
      {
        que: 'Best verbal response (V)',
        type: 'radio',
        fieldName: 'GCSBestVerbalResponse',
        ansValue: 0,
        ans: [
          {
            ans: 'No verbal response (1)',
            checked: false,
          },
          {
            ans: 'Incomrehensible sounds (2)',
            checked: false,
          },
          {
            ans: 'Inappropiate words (3)',
            checked: false,
          },
          {
            ans: 'Confused (4)',
            checked: false,
          },
          {
            ans: 'Oriented (5)',
            checked: false,
          },
        ],
      },
      {
        que: 'Best motor response',
        type: 'radio',
        fieldName: 'GCSBestMotorResponse',
        ansValue: 0,
        ans: [
          {
            ans: 'No motor response (1)',
            checked: false,
          },
          {
            ans: 'Extension to pain (2)',
            checked: false,
          },
          {
            ans: 'Abnormal flexion to pain (3)',
            checked: false,
          },
          {
            ans: 'Flexion/Withdrawal to pain (4)',
            checked: false,
          },
          {
            ans: 'Localize to pain (5)',
            checked: false,
          },
          {
            ans: 'Obeys commands (6)',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-2 SYMPTOM EVALUATION',
    desc:
      'The Athlete should given the symptom form and ask to read this instruction paragraph out loud then complete symptom scale. For the baseline assessment, the athlete should rate his/her symptoms based on how he/she typically feels and for the post injury assessment the athlete should rate their symptoms at this point in time.',
    question: [
      {
        que: 'Headache',
        type: 'radio',
        fieldName: 'SymptomsHeadache',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Pressure in Head',
        type: 'radio',
        fieldName: 'SymptomsPressure',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Neck Pain',
        type: 'radio',
        fieldName: 'SymptomsNeckPain',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Nausea or vomiting',
        type: 'radio',
        fieldName: 'SymptomsNausea',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Dizziness',
        type: 'radio',
        fieldName: 'SymptomsDizziness',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Blurred Vision',
        type: 'radio',
        fieldName: 'SymptomsBlurredVision',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Balance Problems',
        type: 'radio',
        fieldName: 'SymptomsBalanceProblems',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sensitivity to light',
        type: 'radio',
        fieldName: 'SymptomsLightSensitivity',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sensitivity to noise',
        type: 'radio',
        fieldName: 'SymptomsNoiseSensitivity',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Feeling slowed down',
        type: 'radio',
        fieldName: 'SymptomsSlowedDown',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Feeling like "in a fog"',
        type: 'radio',
        fieldName: 'SymptomsFog',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Don`t fill right',
        type: 'radio',
        fieldName: 'SymptomsDontFeelRight',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Difficulty concentraiting',
        type: 'radio',
        fieldName: 'SymptomsDiffConc',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Difficulty remembering',
        type: 'radio',
        fieldName: 'SymptomsDiffRemembering',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Fatigue or low energy',
        type: 'radio',
        fieldName: 'SymptomsLowEnergy',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Confusion',
        type: 'radio',
        fieldName: 'SymptomsConfusion',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-3B MEMORY IMMEDIATE',
    desc:
      'I am going to test your memory, I will read you a list of words and when I am done. repeat back as many word you can remember, in any order. \n Trial 2 & 3, I am going to repeat the same list again, Repeat back as many word as you can remember in order, even if you said the word before. \n Complete all 3 trials regardless of score on trial 1 & 2. Read the word at a rate of one per second. Score 1pt. for each correct response. Total score equals sum across all trials. Do not inform the athlete that delayed recall will be tested.',
    question1: [
      {
        trial: 1,
        que: 'ELBOW',
        type: 'radio',
        fieldName: 'immem1_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'APPLE',
        type: 'radio',
        fieldName: 'immem1_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'CARPET',
        type: 'radio',
        fieldName: 'immem1_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SADDLE',
        type: 'radio',
        fieldName: 'immem1_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'BUBBLE',
        type: 'radio',
        fieldName: 'immem1_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 2,
        que: 'ELBOW',
        type: 'radio',
        fieldName: 'immem2_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'APPLE',
        type: 'radio',
        fieldName: 'immem2_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'CARPET',
        type: 'radio',
        fieldName: 'immem2_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SADDLE',
        type: 'radio',
        fieldName: 'immem2_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'BUBBLE',
        type: 'radio',
        fieldName: 'immem2_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 3,
        que: 'ELBOW',
        type: 'radio',
        fieldName: 'immem3_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'APPLE',
        type: 'radio',
        fieldName: 'immem3_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'CARPET',
        type: 'radio',
        fieldName: 'immem3_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SADDLE',
        type: 'radio',
        fieldName: 'immem3_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'BUBBLE',
        type: 'radio',
        fieldName: 'immem3_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
    question2: [
      {
        trial: 1,
        que: 'Candle',
        type: 'radio',
        fieldName: 'immem1_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Paper',
        type: 'radio',
        fieldName: 'immem1_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sugar',
        type: 'radio',
        fieldName: 'immem1_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sandwich',
        type: 'radio',
        fieldName: 'immem1_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Wagon',
        type: 'radio',
        fieldName: 'immem1_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 2,
        que: 'Candle',
        type: 'radio',
        fieldName: 'immem2_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Paper',
        type: 'radio',
        fieldName: 'immem2_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Suger',
        type: 'radio',
        fieldName: 'immem2_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sandwich',
        type: 'radio',
        fieldName: 'immem2_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Wagon',
        type: 'radio',
        fieldName: 'immem2_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 3,
        que: 'Candle',
        type: 'radio',
        fieldName: 'immem3_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Paper',
        type: 'radio',
        fieldName: 'immem3_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sugar',
        type: 'radio',
        fieldName: 'immem3_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sandwich',
        type: 'radio',
        fieldName: 'immem3_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Wagon',
        type: 'radio',
        fieldName: 'immem3_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
    question3: [
      {
        trial: 1,
        que: 'Baby',
        type: 'radio',
        fieldName: 'immem1_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Monkey',
        type: 'radio',
        fieldName: 'immem1_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Perfume',
        type: 'radio',
        fieldName: 'immem1_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SUNSET',
        type: 'radio',
        fieldName: 'immem1_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Iron',
        type: 'radio',
        fieldName: 'immem1_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 2,
        que: 'Baby',
        type: 'radio',
        fieldName: 'immem2_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Monkey',
        type: 'radio',
        fieldName: 'immem2_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Perfume',
        type: 'radio',
        fieldName: 'immem2_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sunset',
        type: 'radio',
        fieldName: 'immem2_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Iron',
        type: 'radio',
        fieldName: 'immem2_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        trial: 3,
        que: 'Baby',
        type: 'radio',
        fieldName: 'immem3_1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Monkey',
        type: 'radio',
        fieldName: 'immem3_2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Perfume',
        type: 'radio',
        fieldName: 'immem3_3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sunset',
        type: 'radio',
        fieldName: 'immem3_4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Iron',
        type: 'radio',
        fieldName: 'immem3_5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-4B BALANCE EXAMINATION',
    subtitle: 'Modified Balance Error Scroing System (mBESS) testing',
    desc:
      'Balance testing - types of errors \n 1. Hands lifted off illiac crest \n 2. Opening eyes \n 3.  Step, stumble or fall \n 4. Moving hip into > 30 degree abduction \n 5. Lifting forefoot or heel \n 6. Remaining out of test position > 5 sec.',
    note: 'The following test should be perform for 20 seconds.',
    question: [
      {
        que: 'Which foot was tested (i.e. which is non-dominant foot):',
        type: 'radio',
        fieldName: 'BessFoot',
        ansValue: '0',
        ans: [
          {
            ans: 'Left',
            checked: false,
          },
          {
            ans: 'Right',
            checked: false,
          },
        ],
      },
      {
        que: 'Test Surface (hard floor, field, etc..)',
        type: 'input-small',
        fieldName: 'BessSurface',
        ansValue: '',
      },
      {
        que: 'Footwear (shoes, barefoot, etc..)',
        type: 'input-small',
        fieldName: 'BessFootwear',
        ansValue: '',
      },
      {
        queOption:
          'For further assessment, the same 3 stances can be performed on a surface of medium density foam (e.g. approximately 50cm x 40cm x 6cm)',
        que:
          'Double leg stance: Stand with your feet together, hands on your hips and with your eyes closed.',
        type: 'dropdown',
        fieldName: 'BessDouble',
        ansValue: '0',
      },
      {
        que:
          'Single leg stance: Stand on your non-dominant foot. The dominant leg should be held in approximately 30 degree of hip flexion and 45 degree of knee flexion.',
        type: 'dropdown',
        fieldName: 'BessSingle',
        ansValue: '0',
      },
      {
        que:
          'Tandem stance: Stand heel-to-toe with your non-dominant foot in back.',
        type: 'dropdown',
        fieldName: 'BessTandem',
        ansValue: '0',
      },
    ],
  },
  {
    title: 'STEP-5 DELAYED RECALL',
    desc:
      'The delayed recall should be performed after 5 minutes have elapsed since the end of Immediate Recall section, Score 1pt. for each correct answer',
    question1: [
      {
        que: 'ELBOW',
        type: 'radio',
        fieldName: 'demem1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'APPLE',
        type: 'radio',
        fieldName: 'demem2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'CARPET',
        type: 'radio',
        fieldName: 'demem3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SADDLE',
        type: 'radio',
        fieldName: 'demem4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'BUBBLE',
        type: 'radio',
        fieldName: 'demem5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
    question2: [
      {
        que: 'Candle',
        type: 'radio',
        fieldName: 'demem1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Paper',
        type: 'radio',
        fieldName: 'demem2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sugar',
        type: 'radio',
        fieldName: 'demem3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Sandwich',
        type: 'radio',
        fieldName: 'demem4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Wagon',
        type: 'radio',
        fieldName: 'demem5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
    question3: [
      {
        que: 'Baby',
        type: 'radio',
        fieldName: 'demem1',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Monkey',
        type: 'radio',
        fieldName: 'demem2',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Perfume',
        type: 'radio',
        fieldName: 'demem3',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'SUNSET',
        type: 'radio',
        fieldName: 'demem4',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
      {
        que: 'Iron',
        type: 'radio',
        fieldName: 'demem5',
        ansValue: 0,
        ans: [
          {
            ans: '0',
            checked: false,
          },
          {
            ans: '1',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    title: 'STEP-6A SCORE SUMMARY',
    symtomScore: 0,
    memoryScore: 0,
    GCSScore: 0,
    memoryIScore: 0,
    balanceScore: 0,
    delayScore: 0,
    totalScore: 0,
  },
];
