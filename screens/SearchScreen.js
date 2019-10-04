import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Search',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to the SearchScreen.
                </Text>
                <Text style={styles.instructions}>
                    This screen is still under construction
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});