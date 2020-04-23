import React, {useState} from 'react';
import { Text, View, StyleSheet, Button,} from 'react-native';
import Constants from 'expo-constants';
import Age from './Age'



const App = ()=> {
  const [name, setname] = useState({first: "" , last: ""})
    return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       First Name: {name.first}
      </Text>

      <Text style={styles.paragraph}>
        Last Name : {name.last}
      </Text>

      <Age/>

      <View style = {{flexDirection: "row"}}>

        <View style= {{padding : 10, flexDirection: "row",}}>
          <Button title = "First name" onPress = {() => setname({...name , first: "Moeez"})} />
        </View>

        <View style= {{padding : 10, flexDirection: "row",}}>
          <Button title = "Last name" onPress = {()=> setname({...name , last: "Atlas"}) }/>
        </View>
   
      </View>
      <Button title = "reset" onPress = {()=> setname({first:"", last:""})}/>
        
      

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
    fontWeight: 'bold'
  },
  Button: {
    margin: 10, 
    flexDirection: "row"

  }
});

export default App