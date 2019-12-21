import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../assets/style';

export default function HomeScreen({ navigation }) {

    const [speakers, setSpeakers] = useState([
        {name: 'Oluwatobi Shokunbi', detail: 'Software Developer, CTO CheefNG', key: '1'},
        {name: 'Abdulrazaq Imam', detail: 'Software Engineer, VerdantNG', key: '2'},
        {name: 'Moso Akinyemi', detail: 'Mobile Engineer, TryIntelia', key: '3'}
    ]);

    // const pressHandler = () => {
    //     navigation.navigate('SpeakerDetail');
    // }    

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={speakers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SpeakerDetail', item)}>
                        <Text style={globalStyles.textTitle, globalStyles.item}>{ item.name }</Text>
                    </TouchableOpacity>
                )}
            />
            {/* <Text style={globalStyles.textTitle}>RNN App: Home</Text> */}
            {/* <Button 
                title="Speaker Detail"
                onPress={pressHandler}
            /> */}
        </View>
    );
}
  