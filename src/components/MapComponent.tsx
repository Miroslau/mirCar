import React from 'react';
import {View, StyleSheet} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from "../global/mapStyle";

const MapComponent = () => {
    return (
        <View>
            <MapView provider={PROVIDER_GOOGLE}
                     style={styles.map}
                     customMapStyle={mapStyle}
                    >

                    </MapView>
        </View>
    );
};

export default MapComponent;

const styles = StyleSheet.create({
    map:{
        height: "100%",
        width: "100%",
    },
})
