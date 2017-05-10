import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyBraCgQPo41Y-KPiNpGbfSnfOqFh3UALXg",
      authDomain: "auth-13643.firebaseapp.com",
      databaseURL: "https://auth-13643.firebaseio.com",
      projectId: "auth-13643",
      storageBucket: "auth-13643.appspot.com",
      messagingSenderId: "102538494175"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );

      case false:
        return <LoginForm />;

      default:
        return <Spinner size="large" />;

    }
  }
  render(){
    return (
      <View>
        <Header headerText="Authentication"/>
          {this.renderContent()}
      </View>
    );
  }
}


export default App;
