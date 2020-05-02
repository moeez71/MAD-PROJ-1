import React from "react"
import { Text, View, StyleSheet, Button, TouchableOpacity,} from 'react-native';


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
            <View style ={{flexDirection: "row" }}>
                
                <Text style = {styles.age}>
                    Age: {this.state.age}
                </Text>
                
             <View style= {{padding : 10, flexDirection: "row",}}>
                <TouchableOpacity style= {styles.opacity} onPress= {this.inc}>
                    <Text style= {{fontSize: 18 , fontWeight: 'bold'}}> Inc </Text>
                </TouchableOpacity>
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
    },
    opacity: {
        backgroundColor: 'pink', 
        width: 50,
        justifyContent: "center",
        alignContent: "center"
    },
    
})
export default Age
