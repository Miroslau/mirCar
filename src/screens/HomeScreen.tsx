import React, {useCallback} from 'react';
import {Text, View, ScrollView, Image, FlatList} from 'react-native';
import {HomeScreenStyle} from "../styles/HomeScreenStyle";
import { StatusBar } from "expo-status-bar";
import {colors, parameters} from "../global/styles";
import { Icon } from 'react-native-elements';
import { filterData } from "../global/data";
import Card from "../components/Card";

const RenderItem = ({ item } : any) => <Card item={item} style={HomeScreenStyle} />

const HomeScreen = (props: any) => {

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
                            <View style={HomeScreenStyle.button1}>
                                <Text style={HomeScreenStyle.button1Text}>Ride with Uber</Text>
                            </View>
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
            </ScrollView>
            <StatusBar style="light" backgroundColor="#2058c0" translucent={true} />
        </View>
    );
};

export default HomeScreen;
