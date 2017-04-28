import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, CardSection, Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

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
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log out
                    </Button>
                </CardSection>
            );
        }

        return <LoginForm />;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
