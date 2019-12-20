import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Alert,
  ActivityIndicator
} from 'react-native'

export default class SignUp extends React.Component {

  state = {
    loading: false, name: '', age: '', dob: '', Locality: '', no_of_guest: '', address: ''
  }

  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  showAlert = () => {
    this.setState({
      loading: false,
    });
    Alert.alert(
      'Thanks for registering with us.',
      '',
      [
        {text: 'Share the event to friends', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  signUp = async () => {
    const { name, age, dob, Locality, no_of_guest, address, } = this.state
    var _this = this;
    try {
      this.setState({
        loading: true,
      });
      setTimeout(function(){ _this.showAlert() }, 2500);
      console.log('user successfully signed up!: ',)
    } catch (err) {
      console.log('error signing up: ', err)
    }

  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Age'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('age', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='D.O.B'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('dob', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Locality'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('Locality', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Number of Guests'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('no_of_guest', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Address'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('address', val)}
        />
        <Button
          title='Register'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: '#00a8ff',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
