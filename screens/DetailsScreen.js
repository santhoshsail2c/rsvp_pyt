import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Member Details</Text>
        <Text>
          Name: {JSON.stringify(navigation.getParam('name', 'NO-ID'))}
        </Text>
        <Text>
          DOB:{' '}
          {JSON.stringify(navigation.getParam('dob', 'default value'))}
        </Text>
        <Text>
          Locality:{' '}
          {JSON.stringify(navigation.getParam('Locality', 'default value'))}
        </Text>
        <Text>
          No of Guest:{' '}
          {JSON.stringify(navigation.getParam('no_of_guest', 'default value'))}
        </Text>
        <Text>
          Address:{' '}
          {JSON.stringify(navigation.getParam('address', 'default value'))}
        </Text>
      </View>
    );
  }
}
