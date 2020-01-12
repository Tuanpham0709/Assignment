import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import HeaderSearch from '../components/HeaderSearch'
import { Icon } from 'react-native-elements'
const data = [1, 1, 1, 1, 1, 1, 1];
const HomeScreen = (props) => {
    console.log("props", props);
    return (
        <View style={styles.container}>
            <FlatList data={data}
                renderItem={(item, index) => {
                    return (ItemBlog(item, index))
                }}
            ></FlatList>
        </View>
    )
}
HomeScreen.navigationOptions = ({ navigation }) => ({
    // headerBackTitle: null,
    headerTitle: (
        <HeaderSearch></HeaderSearch>
    ),
    headerTitleStyle: {
        headerTitleStyle: {
            backgroundColor: "#f3f3f3"
        }
    }
    // headerTitle: "Home",
    // headerTintColor: "rgba(255,255,255,0.8)",
})
const ItemBlog = (item, index) => {
    return (<View
        key={index + ''}
        style={styles.itemContainer}>
        <View style={styles.author}>
            <View style={{ width: 30, height: 30, borderRadius: 30 / 2, backgroundColor: "pink" }} />
            <Text style={styles.textAuthor}>NicknameUn know</Text>
            <TouchableOpacity style={styles.follow}><View style={{ flexDirection: "row" }}>
                <Icon size={15} color="gray" name="person-add" />
                <Text style={{ color: "black", fontSize: 11, marginLeft: 5 }}>follow</Text></View></TouchableOpacity>
        </View>
        <Text style={styles.description}>bai viet abcd xyzs</Text>
        <Image></Image>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f3f3f3"
    },
    author: {
        flexDirection: "row",
    },
    itemContainer: {
        marginTop: 20,
        borderRadius: 5,
        padding: 20,
        backgroundColor: "#fff",
        height: 200,
        marginHorizontal: 20
    },
    description: {
        fontSize: 13,
        marginTop: 10
    },
    textAuthor: {
        fontWeight: "bold",
        fontSize: 14,
        marginLeft: 10,
        alignSelf: "center",
        flex: 1
    },
    follow: {

        height: 20,
        backgroundColor: "#f3f3f3",
        borderColor: "gray",
        borderRadius: 3,
        alignSelf: "center",
        padding: 5,
        alignItems: "center"
    }
})
export default HomeScreen;