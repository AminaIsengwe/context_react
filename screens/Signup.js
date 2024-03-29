import { StyleSheet, Text, View ,Button} from 'react-native'
import React, { useState,useContext } from 'react'
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../contextfolder/logincontext';

export default function Signup({navigation}) {
  const { signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSingup = () => {
    // Validation
    console.log('Email:', email);
    console.log('Password:', password);
    signup (email, password);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up Page</Text>
      <View style={styles.inputcontainer}>
       <TextInput 
        style={styles.input}
         placeholder='Username'
         mode='offline'
         theme={{roundness:25}} 
         underlineColor='white'
         cursorColor='black'
         activeUnderlineColor='white'
         left={<TextInput.Icon icon='account-outline'></TextInput.Icon>}
         ></TextInput>   
        <TextInput 
        style={styles.input}
         placeholder='Email'
         mode='offline'
         theme={{roundness:25}} 
         underlineColor='white'
         cursorColor='black'
         activeUnderlineColor='white'
         onChangeText={(text) => setEmail(text)}
         left={<TextInput.Icon icon='email-outline'></TextInput.Icon>}
         ></TextInput>  
                 <TextInput 
        style={styles.input}
         placeholder='Password'
         mode='offline'
         theme={{roundness:25}} 
         underlineColor='white'
         cursorColor='black'
         activeUnderlineColor='white'
         onChangeText={(text) => setPassword(text)} 
         left={<TextInput.Icon icon='lock-outline'></TextInput.Icon>}
         ></TextInput> 
         <Button title='Signup' 
         onPress={handleSingup}
        //  onPress={()=>navigation.navigate('Login')}
         ></Button>
      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
paddingTop:40,
paddingHorizontal:40,
justifyContent:'center'
  },
  text:{
    textAlign:'center',
    fontSize:15,
    fontWeight:'bold',
    paddingBottom:20,
  },
  inputcontainer:{
    gap:10,
  },
input:{
  borderRadius:25,
  width:"100%"
}

})