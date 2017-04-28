import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    static isUserAuthenticated(user) {
        return !!user;
    }

    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyCOLfjPmNbEP4q-VHU8WGaGLjV2DJKbNwY',
                authDomain: 'authentication-f47fe.firebaseapp.com',
                databaseURL: 'https://authentication-f47fe.firebaseio.com',
                projectId: 'authentication-f47fe',
                storageBucket: 'authentication-f47fe.appspot.com',
                messagingSenderId: '790322251231'
            });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ loggedIn: App.isUserAuthenticated(user) });
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
