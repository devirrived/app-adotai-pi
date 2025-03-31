import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

export default class Input extends React.Component {

    render() {

        return (
            <View style={styles.container}>
                <TextInput 
                keyboardType={'numeric'}
                value={this.props.value}
                style={styles.input}
                //track changes in text, when someone types in the input field
                // text will be what the user types in
                onChangeText={(text) => this.props.onChange(text)}
                />
            </View>
        )
    }    
} 

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
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});