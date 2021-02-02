import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class Login extends React.Component{
    render(){
        return(
            <View style={styles.container}>
             <SafeAreaProvider>

              <Header
               centerComponent={{text:"Welcome!!", style:{fontFamily: "Bahnscrift", fontWeight: "bold", fontSize: 30, color: "#68D693"}}}
              />

                <TextInput
                 placeholder="Your nickname here!"
                 style={styles.textInput}
                />

                <TouchableOpacity 
                style={styles.buttonStyle}
                onPress={
                    ()=>{this.props.navigation.navigate("QuestionScreen")}}
                >
                    <Text style={styles.textStyle}>Log In</Text>
                </TouchableOpacity>
             </SafeAreaProvider>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textInput: {
        borderWidth: 2,
        width: 300,
        height: 40,
        marginLeft: 630,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
        borderRadius: 5,
        fontFamily: "Bahnscrift",
        marginTop: 300
    },
    buttonStyle: {
        backgroundColor: "#F28D35",
        width: 200,
        height: 50,
        borderRadius: 40,
        alignItems: "center",
        textAlign: "center",
        justifyContent: "center",
        marginLeft: 685,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 8,
            height: 2
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16
    },
    textStyle:{
        fontFamily: "Bahnschrift",
        fontWeight: "bold",
        fontSize: 20
    }
})