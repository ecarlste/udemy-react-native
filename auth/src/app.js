import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
                apiKey: 'AIzaSyCOLfjPmNbEP4q-VHU8WGaGLjV2DJKbNwY',
                authDomain: 'authentication-f47fe.firebaseapp.com',
                databaseURL: 'https://authentication-f47fe.firebaseio.com',
                projectId: 'authentication-f47fe',
                storageBucket: 'authentication-f47fe.appspot.com',
                messagingSenderId: '790322251231'
            });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
