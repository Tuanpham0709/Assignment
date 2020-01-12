import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
const TabBarIcon = ({ focused, iconName, tintColor }) => {
    console.log("image");

    return (
        <Icon
            name={iconName}
            color={focused ? tintColor : "gray"}
            size={26}
        />

    )
}
export default TabBarIcon;