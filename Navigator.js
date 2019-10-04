import React from 'react';
import { Image, Text } from 'react-native';
import {
    createSwitchNavigator,
    createAppContainer,
} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'

import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import SearchResultsScreen from './screens/SearchResultsScreen';


const TabStack = createBottomTabNavigator(
    {
        Home: { screen: HomeScreen },
        Search: { screen: SearchScreen },
    },
);

TabStack.navigationOptions = ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle;

    if (routeName === 'Home') {
        headerTitle = '5 Day Forecast';
    } else if (routeName === 'Search') {
        headerTitle = 'Search';
    }

    return {
        headerTitle,
        headerTitleStyle: {
            width: '90%',
            textAlign: 'center',
        },
        headerStyle: {
            backgroundColor: '#1B4881',
        },
    };
};
const AppStack = createStackNavigator(
    {
        TabStack,
        SearchResults: SearchResultsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#1B4881',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                width: '80%',
                textAlign: 'center',
            },
        },
    }
);

AppStack.navigationOptions = {
    header: null,
};


const AppNavigator = createStackNavigator({
    App: AppStack,
});


export default createAppContainer(AppNavigator);;