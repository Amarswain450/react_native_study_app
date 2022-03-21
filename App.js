import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/screens/Home"
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import CourseDetails from './src/screens/CourseDetails';
import {useFonts, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from 'expo-app-loading';

const App = () => {
  const Stack = createNativeStackNavigator();

  let [fontsLoaded] = useFonts({
    Nunito_700Bold,
  });

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        {/* home screen  */}
        <Stack.Screen 
          name='Home' 
          options={{headerShown: false}}
        >
          {(props) => <Home {...props} name={"amar kumar swain"} />}
        </Stack.Screen>

        {/* Course Screen  */}
        <Stack.Screen 
        name='Course'
        component={Course}
        options={{
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: "Nunito_700Bold",
          },
          headerTitle: "Courses",
          headerTitleAlign: "center",
        }}
        />

        {/* UserData Screen  */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />

        {/* About Screen  */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* Contact Screen  */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* CourseDetails Screen  */}
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
     </NavigationContainer>
  )
}

const styles = StyleSheet.create({})
export default App