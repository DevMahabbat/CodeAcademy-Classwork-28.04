import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>

            <View style={styles.innerContainer}>
                <Text style={styles.text}>On This Device (131)</Text>
                <View style={styles.filterContainer}>
                    <Text style={styles.text}>Last Used</Text>
                    <Image style={styles.icon} source={{ uri: 'https://static.thenounproject.com/png/1701537-200.png' }} />
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFFFFF'
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    filterContainer: {
        flexDirection: 'row'
    },
    text: {
        color: '#rgb(54,54,54)',
        fontSize: 16,
        marginRight: 10
    },
    icon: {
        width: 20,
        height: 20
    }
});

export default Header;
