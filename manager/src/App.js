import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
