import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Home,
} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false, tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: COLORS.white,
                    elevation: 5,
                    height: 60,
                    borderTopLeftRadius: SIZES.padding,
                    borderTopRightRadius: SIZES.padding
                },

            }}
        >

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='home'
                            size={focused ? SIZES.padding * 1.2 : SIZES.padding}
                            color={focused ? COLORS.orange : COLORS.gray}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Favorite"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='heart'
                            size={focused ? SIZES.padding * 1.2 : SIZES.padding}
                            color={focused ? COLORS.orange : COLORS.gray}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Notification"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='notifications-sharp'
                            size={focused ? SIZES.padding * 1.2 : SIZES.padding}
                            color={focused ? COLORS.orange : COLORS.gray}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name='person'
                            size={focused ? SIZES.padding * 1.1 : SIZES.padding}
                            color={focused ? COLORS.orange : COLORS.gray}
                        />
                    )
                }}
            />


        </Tab.Navigator>
    )
}

export default Tabs