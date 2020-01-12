import React from 'react';
import { View, TextInput, Dimensions, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

const HeaderSearch = () => {
    return (<View style={{ flexDirection: "row", }}>
        <View style={styles.container}>
            <Icon name="search" /><TextInput style={styles.input}></TextInput>

        </View>
        <Icon name="menu"></Icon>
    </View>)
}
const styles = StyleSheet.create({
    input: {
        flex: 1, height: 35,
        paddingLeft: 5,
    },
    container: {
        flexDirection: "row", width: Dimensions.get('window').width - 60,
        alignItems: "center",
        borderRadius: 5, borderWidth: 0, borderColor: 'gray', marginLeft: 5, paddingHorizontal: 5,
        backgroundColor: "#f3f3f3",
        marginRight: 5
    }
})
export default HeaderSearch;