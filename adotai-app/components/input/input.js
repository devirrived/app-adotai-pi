import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default function Input({ value, onChange }) {
    return (
      <View>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChange} // Chama a função passada como prop
        />
        <Text
          style={styles.text}
        >Search</Text>
      </View>
    );
  }

// export default class Input extends React.Component {
//     // fetchData () {
//     //     console.log('this is the value: ', this.props.value)
//     // }      

//     render() {

//         return (
//             <View style={styles.container}>
//                 <TextInput 
//                 keyboardType={'numeric'}
//                 value={this.props.value}
//                 style={styles.input}
//                 //track changes in text, when someone types in the input field
//                 // text will be what the user types in
//                 onChangeText={(text) => this.props.onChange(text)}
//                 />
//                 <TouchableHighlight
//                   style={styles.button}
//                   onPress={() => this.fetchData()}
//                 >
//                     
//                 </TouchableHighlight>
//             </View>
//         )
//     }    
// } 

const styles = StyleSheet.create({
    container: {
        flex: 1, // take all available hight space 
        backgroundColor: 'white',
        alignItems: 'center', //horizontally align
        justifyContent: 'center', //vertically align
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 2,
        color: 'white',
        // paddingHorizontal: 8,
    },
    button: {
        backgroundColor: 'blue',
        height: 40,
        width: 100,
        borderColor: 'gray',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})