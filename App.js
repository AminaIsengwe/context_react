import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/home';
import AuthProvider from './contextfolder/logincontext';



const Stack = createStackNavigator();
export function MyStack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}}/> 
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );

}

export default function App() {
  return (
    <View style={styles.container}>

    <NavigationContainer>
      <AuthProvider>
      <MyStack/>
      </AuthProvider>
    </NavigationContainer>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
