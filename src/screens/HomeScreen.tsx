import React, { useCallback, useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import { HomeScreenStyle } from "../styles/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import { colors } from "../global/styles";
import { Icon } from 'react-native-elements';
import { filterData, carsAround } from "../global/data";
import Card from "../components/Card";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {mapStyle} from "../global/mapStyle";
import * as Location from 'expo-location';

const RenderItem = ({ item } : any) => <Card item={item} style={HomeScreenStyle} />

const HomeScreen = (props: any) => {

    const { navigation } = props;

    const [latlng, setLatLng] = useState({});

    const checkPermission = async () => {
        const hasPermission = await Location.requestForegroundPermissionsAsync();
        if (hasPermission.status === 'granted') {
            const permission = await askPermission();
            return permission;
        }
        return true;
    }

    const askPermission = async () => {
        const permission = await Location.requestForegroundPermissionsAsync();
        return permission.status === 'granted';
    }

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (!granted) return;
            const {
                coords: {latitude, longitude}
            } = await Location.getCurrentPositionAsync();
            setLatLng({latitude: latitude, longitude: longitude})
        } catch (error) {

        }
    }

    const navigateScreen = () => {
        navigation.navigate("RequestScreen");
    }

    const _map = useRef(null);

    useEffect(() => {
        checkPermission();
        getLocation();
    }, [])

    const keyExtractor = useCallback(({id}) => id, []);

    return (
        <View style={HomeScreenStyle.container}>
            <View style={HomeScreenStyle.header}>
                <View style={HomeScreenStyle.icon1}>
                    <Icon type="material-community"
                          name="menu"
                          color={colors.white}
                          size={40}
                          onPress={() => {}}
                          {...props}
                    />
                </View>
            </View>
            <ScrollView bounces={false}>
                <View style={HomeScreenStyle.home}>
                    <Text style={HomeScreenStyle.text1}>Destress your commute</Text>
                    <View style={HomeScreenStyle.view1}>
                        <View style={HomeScreenStyle.view8}>
                            <Text style={HomeScreenStyle.text2}>Read a book. Take a map. Stare out the window</Text>
                            <TouchableOpacity onPress={navigateScreen}>
                                <View style={HomeScreenStyle.button1}>
                                    <Text style={HomeScreenStyle.button1Text}>Ride with Uber</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Image style={HomeScreenStyle.image1}
                                   source={require('../../assets/uberCar.png')} />
                        </View>
                    </View>
                </View>
                <View>
                    <FlatList data={filterData}
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              keyExtractor={keyExtractor}
                              renderItem={RenderItem} />
                </View>
                <View style={HomeScreenStyle.view3}>
                    <Text style={HomeScreenStyle.text3}>Where to ?</Text>
                    <View style={HomeScreenStyle.view4}>
                        <Icon type="material-community"
                              name="clock-time-four"
                              color={colors.grey1}
                              size={26}
                              {...props}
                        />
                        <Text style={{marginLeft: 5}}>Now</Text>
                        <Icon type="material-community"
                              name="chevron-down"
                              color={colors.grey1}
                              size={26}
                              {...props}
                        />
                    </View>
                </View>
                <View style={HomeScreenStyle.view5}>
                    <View style={HomeScreenStyle.view6}>
                        <View style={HomeScreenStyle.view7}>
                            <Icon type="material-community"
                                  name="map-marker"
                                  color={colors.black}
                                  size={22}
                                  {...props}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 18, color: colors.black}}>
                                32 Olivia Road
                            </Text>
                            <Text style={{color: colors.grey3}}>35 Atlas Rd,Anderbolt</Text>
                        </View>
                    </View>
                    <View>
                        <Icon type="material-community"
                              name="chevron-right"
                              color={colors.grey}
                              size={26}
                              {...props}
                        />
                    </View>
                </View>
                <View style={{...HomeScreenStyle.view5, borderBottomWidth: 0}}>
                    <View style={HomeScreenStyle.view6}>
                        <View style={HomeScreenStyle.view7}>
                            <Icon type="material-community"
                                  name="map-marker"
                                  color={colors.black}
                                  size={22}
                                  {...props}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 18, color: colors.black}}>
                                32 Olivia Road
                            </Text>
                            <Text style={{color: colors.grey3}}>35 Atlas Rd,Anderbolt</Text>
                        </View>
                    </View>
                    <View>
                        <Icon type="material-community"
                              name="chevron-right"
                              color={colors.grey}
                              size={26}
                              {...props}
                        />
                    </View>
                </View>
                <Text style={HomeScreenStyle.text4}>Around you</Text>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <MapView provider={PROVIDER_GOOGLE}
                             style={HomeScreenStyle.map}
                             customMapStyle={mapStyle}
                             showsUserLocation={true}
                             followsUserLocation={true}
                             ref={_map}
                             initialRegion={{...carsAround[0], latitudeDelta: 0.008, longitudeDelta: 0.008}}
                    >
                        {
                            carsAround.map((item, index) => (
                                <Marker coordinate={item}
                                        key={index.toString()}
                                >
                                    <Image source={require('../../assets/carMarker.png')}
                                           style={HomeScreenStyle.carsAround}
                                           resizeMode="cover" />
                                </Marker>
                            ))
                        }
                    </MapView>
                </View>
            </ScrollView>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
        </View>
    );
};

export default HomeScreen;
