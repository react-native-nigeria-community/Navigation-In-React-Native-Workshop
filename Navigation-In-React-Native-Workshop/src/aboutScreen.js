import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../assets/style';

export default function AboutScreen() {

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.textTitle}>RNN App: About</Text>
        </View>
    );
}