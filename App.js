import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import No1 from './Screens/No1';
// import No2 from './Screens/No2';
// import No3 from './Screens/No3';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='No1'>
        <Stack.Screen name="No1" component={No1} options={
          {
            headerShown: false,
          }
        }/>
        {/* <Stack.Screen name="No2" component={No2}/>
        <Stack.Screen name="No3" component={No3}/> */}
    </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
