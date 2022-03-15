import * as React from 'react';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeStack} from "./StackNavigators";
import {Icon} from "react-native-elements";
import {colors} from "../global/styles";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(props: any) {
    return (
        <Drawer.Navigator>
           <Drawer.Screen name="HomeStack"
                          component={HomeStack}
                          options={{
                              title: "Client",
                              drawerIcon: ({focussed, size}: any) => <Icon type="material-community"
                                                                           name="home"
                                                                           color={focussed ? '#7cc' : colors.grey2}
                                                                           size={size}
                                                                           {...props} />,
                              headerShown: false,
                          }} />
        </Drawer.Navigator>
    );
}
