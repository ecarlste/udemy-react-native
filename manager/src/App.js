import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCKu8rXiKbTQElTTVph5_-msQv4GWUeBRk',
            authDomain: 'manager-a6623.firebaseapp.com',
            databaseURL: 'https://manager-a6623.firebaseio.com',
            projectId: 'manager-a6623',
            storageBucket: 'manager-a6623.appspot.com',
            messagingSenderId: '742825901539'
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Text>
                        Hello!
                    </Text>
                </View>
            </Provider>
        );
    }
}

export default App;
