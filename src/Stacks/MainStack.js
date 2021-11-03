import React, { Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ToDoApp from "../Screens/ToDoApp"

const Stack = createStackNavigator();

export default ()=>{

    return(
    <Stack.Navigator
        initialRouteName="ToDoApp"
        screenOptions={{
            headerShown: false
        }}
        >
        <Stack.Screen name="ToDoApp" component={ToDoApp}/>

    </Stack.Navigator>
    );

}