import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/homeScreen';
import SpeakerDetailScreen from './src/speakerDetail';
import AboutScreen from './src/aboutScreen';

import Navigator from './routes/homeStack';
import { globalStyles } from './assets/style';

export default function App() {
  return (
    <Navigator />
    
  );
}