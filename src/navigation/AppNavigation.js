import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from 'react-native'
import { THEME } from "../theme";
import { MainScheduleScreen } from "../screens/MainScheduleScreen";
import { ClientProfileScreen } from "../screens/ClientProfileScreen";
import { ClientListScreen } from "../screens/ClientsListScreen";
import {StoreScreen} from "../screens/StoreScreen";
import {MoreScreen} from "../screens/MoreScreen";
import {AddClientScreen} from "../screens/AddClientScreen";

const navigatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR: '#fff'
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR
    }
};

const ClientNavigator = createStackNavigator({
    Main: ClientListScreen,
    ClientProfile: ClientProfileScreen,
    AddClient: AddClientScreen
},
    navigatorOptions
);

const ScheduleNavigator = createStackNavigator({
    Schedule: MainScheduleScreen,
    Clients: ClientListScreen
},
    navigatorOptions
);

const bottomTabsConfig = {
    Schedule: {
        screen: ScheduleNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='ios-calendar' size={25} color={info.tintColor} />
            )
        }
    },
    Store: {
        screen: StoreScreen,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='md-cart' size={25} color={info.tintColor} />
            )
        }
    },
    Clients: {
        screen: ClientNavigator,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='ios-contact' size={25} color={info.tintColor} />
            )
        }
    },
    More: {
        screen: MoreScreen,
        navigationOptions: {
            tabBarIcon: info => (
                <Ionicons name='ios-more' size={25} color={info.tintColor} />
            )
        }
    }
};

const BottomNavigation = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(bottomTabsConfig,{
            activeTintColor: '#fff',
            barStyle: {
                backgroundColor: THEME.MAIN_COLOR
            }
    })
    :
    createBottomTabNavigator(
    bottomTabsConfig, {
    tabBarOptions: {
        activeTintColor: THEME.MAIN_COLOR
    }
});

// const BottomNavigation = createBottomTabNavigator(bottomTabsConfig, {
//     tabBarOptions: {
//         activeTintColor: THEME.MAIN_COLOR
//     }
// });

export const AppNavigation = createAppContainer(BottomNavigation);