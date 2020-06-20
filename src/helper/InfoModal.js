/* eslint-disable react-native/no-inline-styles */
import React, {Component, createRef} from 'react';
import {TouchableOpacity, View, Modal, Text} from 'react-native';

import {backBlue} from './Constants';

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
    this.flatlist = createRef();
  }

  state = {
    searchTerm: '',
    selectedIndex: -1,
    isSet: true,
  };

  render() {
    const {visible, subTitle, note, desc} = this.props;

    return (
      <Modal
        animationType="fade"
        transparent
        visible={visible}
        onRequestClose={() => {
          this.props.onClose();
        }}>
        <View style={style.basicContainer}>
          <View style={{marginTop: 50, marginBottom: 150}}>
            <TouchableOpacity
              style={{margin: 20, width: 50}}
              onPress={() => this.props.onClose()}>
              {backBlue}
            </TouchableOpacity>

            <View style={{padding: 20}}>
              {subTitle ? (
                <Text
                  style={{textAlign: 'center', marginTop: 10, fontSize: 18}}>
                  {subTitle}
                </Text>
              ) : null}
              <Text style={style.text}>{desc}</Text>
              {note ? <Text style={style.text}>{note}</Text> : null}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const style = {
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: '#555',
    textAlign: 'center',
  },
  basicContainer: {
    zIndex: 999,
    flex: 1,
    backgroundColor: '#FFF',
  },
};
