import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (<View style={styles.container}>
        <Text style={styles.title}>Welcome to blog</Text>
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={() => navigation.navigate("Home")}><Text style={{ textAlign: "center", color: "#fff" }}>Login</Text></TouchableOpacity>
        <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
            <Text >Don't have account?</Text>
            <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate('Register')}
            ><Text style={{ color: "blue" }}>Register</Text></TouchableOpacity>
        </View>

    </View>)
}
LoginScreen.navigationOptions = ({ navigation }) => ({

})
const styles = StyleSheet.create({
    title: {
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
    },
    input: {
        marginHorizontal: 20,
        marginTop: 20,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "gray",
        padding: 5
    },
    button: {
        marginTop: 20,
        justifyContent: "center",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#675",
        marginHorizontal: 20
    }
})
export default LoginScreen;

