import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

export default class ForecastCard extends React.Component {


    render() {
        let time;

        //create a new date from the passed date time
        var date = new Date(this.props.detail.dt * 1000);

        //convert the utc date to local date Day of week Month Day Year
        let fromatted = date.toDateString();


        let timeFormatted = date.toLocaleTimeString('en-US');
        let amPm = timeFormatted.substr(-2);
        let slicedTime = timeFormatted.slice(0, -6);
        let localTime = slicedTime + ' ' + amPm;

        return (
            <Card containerStyle={styles.card}>
                <Text style={styles.notes}>{this.props.location}</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image style={{ width: 100, height: 100 }} source={{ uri: "https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png" }} />
                    <Text style={styles.time}>{localTime}</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <Text style={styles.notes}>{fromatted}</Text>
                </View>

                <Divider style={{ backgroundColor: '#dfe6e9', marginVertical: 20 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.notes}>{this.props.detail.weather[0].description}</Text>
                    <Text style={styles.notes}>{Math.round(this.props.detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(56, 172, 236, 1)',
        borderWidth: 0,
        borderRadius: 20
    },
    notes: {
        fontSize: 18,
        color: '#fff',
        textTransform: 'capitalize'
    },
    time: {
        fontSize: 38,
        color: '#fff'
    },
});