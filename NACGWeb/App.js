import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        return fetch('http://localhost:8080/hello/world')
            .then((response) => response.text())
            .then((responseText) => {

                this.setState({
                    data: responseText,
                })
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>{this.state.data}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
