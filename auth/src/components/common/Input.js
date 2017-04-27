import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value }) => {
    return (
        <View>
            <Text>{ label }</Text>
            <TextInput
                value={value}
                onChangeText={onChangeText}
                style={{ height: 26, width: 100 }}
            />
        </View>
    );
};

export { Input };
