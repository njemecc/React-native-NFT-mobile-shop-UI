import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import Details from './screens/Details'
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
}



const App = () => {

const [loaded] = useFonts({

  InterBold:require("./assets/fonts/Inter-Bold.ttf"),
  InterSemiBold:require("./assets/fonts/Inter-SemiBold.ttf"),
  InterMedium:require("./assets/fonts/Inter-Medium.ttf"),
  InterRegular:require("./assets/fonts/Inter-Regular.ttf"),
  InterLight:require("./assets/fonts/Inter-Light.ttf"),

})

if(!loaded) return null;

  return(
    <NavigationContainer theme = {theme}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen  options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>

    </NavigationContainer>
  )
}


export default App; 