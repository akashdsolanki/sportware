/* eslint-disable react-native/no-inline-styles */
import React, {Component, createRef} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import {createFilter} from 'react-native-search-filter';

import styles from './styles';
import {backBlue, closecircle3, check} from '../Constants';

const KEYS_TO_FILTERS = ['value'];

export default class Picker extends Component {
  constructor(props) {
    super(props);
    this.flatlist = createRef();
  }

  state = {
    searchTerm: '',
    selectedIndex: -1,
    isSet: true,
  };

  renderItem(country, index) {
    const selectedValue = this.props.selectedValue;
    if (country.value === selectedValue) {
      setTimeout(() => {
        if (this.flatlist.current != null) {
          if (this.state.isSet) {
            this.flatlist.current.scrollToIndex({animated: true, index: index});
            this.setState({isSet: false});
          }
        }
      }, 500);
      return (
        <TouchableOpacity
          key={`index-${index}`}
          onPress={() => {
            this.props.selectPicker(country.value, country);
            this.props.onClose();
            this.setState({searchTerm: '', isSet: true});
          }}
          style={{
            flex: 1,
            borderBottomColor: '#EEE',
            borderBottomWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          {check}
          <Text
            style={{width: '100%', fontSize: 18, marginLeft: 20, marginTop: 5}}>
            {country.value}
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          key={`index-${index}`}
          onPress={() => {
            this.props.selectPicker(country.value, country);
            this.props.onClose();
            this.setState({searchTerm: '', isSet: true});
          }}
          style={{
            flex: 1,
            borderBottomColor: '#EEE',
            borderBottomWidth: 1,
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          <Text
            style={{width: '100%', fontSize: 18, marginLeft: 40, marginTop: 5}}>
            {country.value}
          </Text>
        </TouchableOpacity>
      );
    }
  }

  searchUpdated(term) {
    this.setState({searchTerm: term});
  }

  render() {
    const data = this.props.data;
    data.sort((a, b) => (a.value > b.value ? 1 : a.value < b.value ? -1 : 0));
    const filteredCountries = data.filter(
      createFilter(this.state.searchTerm, KEYS_TO_FILTERS),
    );

    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.close}
        onRequestClose={() => {
          this.props.onClose();
        }}>
        <View style={styles.basicContainer}>
          <View style={{marginTop: 50, marginBottom: 150}}>
            <TouchableOpacity
              style={{margin: 20, width: 50}}
              onPress={() =>
                this.props.onClose('back') || this.setState({isSet: true})
              }>
              {backBlue}
            </TouchableOpacity>
            <View
              style={[
                {flexDirection: 'row', marginBottom: 15},
                styles.countryInfo,
              ]}>
              <TextInput
                value={this.state.searchTerm}
                placeholder="Filter"
                style={[{marginHorizontal: 10, flex: 1}]}
                onChangeText={term => {
                  this.searchUpdated(term);
                }}
              />
              <TouchableOpacity onPress={() => this.setState({searchTerm: ''})}>
                {closecircle3}
              </TouchableOpacity>
            </View>
            {filteredCountries && filteredCountries.length > 0 && (
              <FlatList
                ref={this.flatlist}
                data={filteredCountries}
                keyExtractor={(item, index) => `item-${index}`}
                renderItem={({item, index}) => this.renderItem(item, index)}
              />
            )}
          </View>
        </View>
      </Modal>
    );
  }
}
