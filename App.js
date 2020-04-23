import React, {useState} from 'react';
import { Text, View, StyleSheet, Button,} from 'react-native';
import Constants from 'expo-constants';
import AB from './reactcounter'

export default function App() {

   
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        Name : M.Abdul Moeez Atlas
      </Text>

      <Text style={styles.paragraph}>
        Class: BCS-6A
      </Text>

      <Text style={styles.paragraph}>
        Reg No: FA17-BCS-040
      </Text>

      <AB/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    alignItems: "center",
    
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center'
  },
});
