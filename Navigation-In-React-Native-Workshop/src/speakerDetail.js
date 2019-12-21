import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { globalStyles } from '../assets/style';

export default function SpeakerDetailScreen({ navigation }) {

    // const pressHandler = () => {
    //     navigation.goBack();
    // }

    return (
        <View style={globalStyles.container}>
            
            <Text>{ navigation.getParam('name') }</Text>
            <Text>{ navigation.getParam('detail') }</Text>
            {/* <Text style={globalStyles.textTitle}>RNN App: Speaker Detail</Text> */}
            {/* <Button 
                    title="Go Back"
                    onPress={pressHandler}
                /> */}
        </View>
    );
}