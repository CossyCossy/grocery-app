import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Tabs } from './navigation';
import { ProductDetail } from './screens';
import { AppProvider } from './components';


const Stack = createStackNavigator()

export default function App() {

  const [loaded] = useFonts({
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    "Poppins-Thin": require('./assets/fonts/Poppins-Thin.ttf'),
    "Poppins-Light": require('./assets/fonts/Poppins-Light.ttf'),
    "Poppins-ExtraLight": require('./assets/fonts/Poppins-ExtraLight.ttf'),

  })

  if (!loaded) {
    return null;
  }

  return (
    <AppProvider>
      {/* HOC navigation container */}
      <NavigationContainer>

        {/* Stack Wrapper */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'MainScreen'}
        >

          {/* Stack screens */}
          <Stack.Screen
            name='MainScreen'
            component={Tabs}
          />

          <Stack.Screen
            name='ProductDetail'
            component={ProductDetail}
          />

        </Stack.Navigator>

      </NavigationContainer>
    </AppProvider>
  );
}
