import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

export default class Signup extends React.Component{

    constructor(){
     super();
     this.state={
         name: "",
         contact: ""
     }   
    }

    updateDatabase(){
        db.collection("users").add({
            "name": this.state.name,
            "contact": this.state.contact
        })
       
        this.props.navigation.navigate("QuestionScreen")
    }

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaProvider>

                    <Header
                     centerComponent={{text: "Welcome!!", style:{fontFamily: "Bahnschrift", fontWeight: 'bold', fontSize: 30, color: "#68D693"}}}
                    />

                <TextInput
                style={[styles.textInput, {marginTop: 200}]}
                 placeholder="Think of a nickname for yourself!"
                 onChangeText={
                     (text)=>{
                         this.setState({
                          name: text
                         })
                     }}/>

                <TextInput
                style={[styles.textInput, {marginTop: 20}]}
                 placeholder="Gmail / Phone no."
                 onChangeText={
                     (text)=>{
                      this.setState({
                          contact: text
                      })
                   }}/>

                <TouchableOpacity
                 style={styles.buttonStyle}
                 onPress={()=>{this.updateDatabase()}}>
                    <Text style={styles.textStyle}>
                        Add User
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.logIn}
                 onPress={()=>{this.props.navigation.navigate("LogIn")}}
                     >
                    <Text style={styles.textStyle}>
                        Log In
                    </Text>
                </TouchableOpacity>

                </SafeAreaProvider>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
        fontFamily: "Bahnscrift"
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
    },
    logIn: {
     marginTop: -350,
     marginLeft: 1300
    }
})