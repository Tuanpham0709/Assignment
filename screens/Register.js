import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.input}
                placeholder="Username"
            ></TextInput>
            <TextInput style={styles.input}
                placeholder="Password"
            ></TextInput>
            <TextInput style={styles.input}
                placeholder="Repeat password"
            ></TextInput>
            <TouchableOpacity activeOpacity={0.7} style={styles.button}><Text style={styles.textBtn}>Register</Text></TouchableOpacity>
            <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
                <Text>You have account ? </Text>
                <TouchableOpacity onPress={() => navigation.goBack()}><Text style={{ color: "blue" }}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}
Register.navigationOptions = ({ navigation }) => ({

})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginTop: 20,
        marginHorizontal: 20
    },
    title: {
        fontSize: 18,
        color: "gray",
        alignSelf: "center",

    },
    button: {
        marginTop: 20,
        justifyContent: "center",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#675",
        marginHorizontal: 20
    },
    textBtn: {
        color: "#fff",
        textAlign: "center",
    }
})
export default Register;