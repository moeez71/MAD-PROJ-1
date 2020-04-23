import React, {useState} from 'react';
import { Text, View, StyleSheet, Button,} from 'react-native';
import Constants from 'expo-constants';

export default function AB() {

   const [name, setstate] = useState('Hello ')
   const [num , setNum] = useState(0)


   const onClick = () => {
     setstate('my name is moeez  ')
     setNum(num + 1)
   }
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>
        {name} 
        {num}
      </Text>
      <Button title= "Change" titleStyle={{fontSize: 30}}
              onPress= {onClick}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
