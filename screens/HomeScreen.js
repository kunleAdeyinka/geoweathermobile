import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import { Platform } from '@unimodules/core';


import ForecastCard from '../components/ForecastCard';
import { getCurrentWeather } from '../utils/api';

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            latitude: 0,
            longitude: 0,
            errorMessage: '',
            forecast: [],
            loading: false
        };
    }

    async componentDidMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Sorry this will not work in an Android emulator. Try it on your device!',
            });
        } else {
            this.getCurrentLocationAsync();

        }
    }

    getCurrentLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);


        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied'
            });
        }

        let location = await Location.getCurrentPositionAsync({});

        const latitude = JSON.stringify(location.coords.latitude);
        const longitude = JSON.stringify(location.coords.longitude);

        const response = await getCurrentWeather(latitude, longitude);

        this.setState({
            forecast: response,
            latitude: latitude,
            longitude: longitude,
        });
    }

    render() {

        return (

            <FlatList data={this.state.forecast.list} style={{ marginTop: 20 }} keyExtractor={item => item.dt_txt} renderItem={({ item }) => <ForecastCard detail={item} location={this.state.forecast.city.name} />} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
