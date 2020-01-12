import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native'
const CreatePostScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>Tiêu đế</Text>
                <TextInput style={styles.input}></TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={styles.title}>Descriptions</Text>
                <TextInput multiline style={styles.input}></TextInput>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontSize: 14.5,
        color: "#000"
    },
    container: {
        backgroundColor: "#f3f3f3"
    },
    input: {
        backgroundColor: "#fff",
        borderRadius: 5,
        height: 40
    }
})
export default CreatePostScreen;