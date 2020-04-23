import React from "react"
import { Text, View, StyleSheet, Button, TouchableNativeFeedback,} from 'react-native';


class Age extends React.Component{
    constructor(){
        super();
        this.state ={
            age : 20
        }
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
    }

    inc(){
        this.setState(prevState => {
            return{
                age: prevState.age + 1
            }
        });
    }
    dec(){
        this.setState(prevState => {
            return{
                age: prevState.age - 1
            }
        })

    }
    render(){
        return(
            <View style ={{flexDirection: "row"}}>
                <Text style = {styles.age}>
                    Age: {this.state.age}
                </Text>

             <View style= {{padding : 10, flexDirection: "row",}}>
                <Button title = " + " onPress= {this.inc} />
             </View>

             <View style= {{padding : 10, flexDirection: "row",}}>
                <Button title = " - " onPress= {this.dec} />
             </View>
   
            </View>
        )
    }

}

const styles = StyleSheet.create({
    age: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
})
export default Age
