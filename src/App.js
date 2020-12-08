import React from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

// Components
import TelaA from './src/views/TelaA'
import TelaB from './src/views/TelaB'
import TelaC from './src/views/TelaC'


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TelaA />
      <TelaB /> 
      <TelaC /> 
    </SafeAreaView>
  );
}


