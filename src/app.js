import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


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
        <LoginForm />
      </View>
    );
  }
}

export default App;
