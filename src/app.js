import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBraCgQPo41Y-KPiNpGbfSnfOqFh3UALXg",
      authDomain: "auth-13643.firebaseapp.com",
      databaseURL: "https://auth-13643.firebaseio.com",
      projectId: "auth-13643",
      storageBucket: "auth-13643.appspot.com",
      messagingSenderId: "102538494175"
    });
  }
  render(){
    return (
      <View>
      <Header headerText="Authentication"/>
        <Text> Dis App</Text>
      </View>
    );
  }
}

export default App;
