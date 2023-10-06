import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import No1 from './Screens/No1';
import No2 from './Screens/No2';
import No3 from './Screens/No3';


const Stack = createNativeStackNavigator();

const RenderImage = () =>{
  return <Image source={require('./assets/img/imgFlowers1.png')}/>
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='No3'>
        <Stack.Screen name="No1" component={No1} options={
          {
            headerShown: false,
          }
        }/>

       <Stack.Screen name="No2" component={No2} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Next  to you',
        headerLeft: (() => {
          return <Image source={require('./assets/img/Iicon_Back.png')}/>
        })
       }}/>

       <Stack.Screen name="No3" component={No3} options={{
        headerShown: false,
        //  headerTitle: (props) => <RenderImage {...props} />,
        // headerLeft: (() => {
        //   return <Image source={require('./assets/img/Iicon_Back.png')}/>
        // }),
        // headerRight: (() => {
        //   return <Image source={require('./assets/img/iconShare.png')} style={{}}/>
        // }),
       }}/>
       
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
