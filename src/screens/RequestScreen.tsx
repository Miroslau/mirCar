import React from 'react';
import { View, Text } from "react-native";
import {RequestScreenStyle} from "../styles/RequestScreenStyle";
import MapComponent from "../components/MapComponent";

const RequestScreen = () => {
    return (
        <View style={RequestScreenStyle.container}>
            <MapComponent />
        </View>
    );
};

export default RequestScreen;
