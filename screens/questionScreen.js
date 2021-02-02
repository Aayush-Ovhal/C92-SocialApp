import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Modal, TextInput} from 'react-native';
//import {Header} from 'react-native-elements';

export default class Question extends React.Component{

    constructor(){
        super();
        this.state={
            isModalVisible: "false"
        }
    }
    showModal=()=>{
        return(
            <Modal
            //  animationType="fade"
            //  transparent={true}
             visible={this.state.isModalVisible}
            >
                <View style={styles.modalContainer}>
                <Text>
                    Default Question
                </Text>

                <TextInput
                 placeholder="Your answer."
                />
                </View>
            </Modal>
        )
    }

    render(){
        return(
            <View style={styles.container}>
              {
                  this.showModal()
              }

                <Text style={styles.textStyle}>
                    Have you been having Suicidal Thoughts ?
                </Text>

                <TouchableOpacity 
                style={[styles.buttonStyle, {backgroundColor: "#595959"}]}
                onPress={
                    ()=>{
                        this.setState({
                            isModalVisible: "true"
                        })
                        }}>
                    <Text style={[styles.buttonText, {color: "#39B2BF"}]}>Yes</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={[styles.buttonStyle, {backgroundColor: "#39B2BF"}]}
                onPress={
                    ()=>{
                        console.log("Then get out!")
                    }
                }
                >
                    <Text style={[styles.buttonText, {color: "#595959"}]}>No</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D9D9D9"
    },
    textStyle: {
        fontSize: 30,
        fontFamily: "Bahnschrift",
        marginLeft: 10,
        marginTop: 45
    },
    buttonStyle: {
     width: 110,
     height: 45,
     marginTop: 20,
     marginLeft: 10,
     alignItems: "center",
     textAlign: "center",
     justifyContent: "center",
     borderRadius: 30,
     shadowColor: "#000",
     shadowOffset: {
        width: 0,
        height: 8,
     },
     shadowOpacity: 0.30,
     shadowRadius: 10.32,
     elevation: 16
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "Bahnschrift"
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 2,
        marginLeft: 700
    }
})