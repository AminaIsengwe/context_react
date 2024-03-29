import { StyleSheet, Text, View ,Button} from 'react-native';
import React, { useContext, useState } from 'react';
import { TextInput } from 'react-native-paper';
import { AuthContext } from '../contextfolder/logincontext';


export default function Login({navigation}) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Validation
    console.log('Email:', email);
    console.log('Password:', password);
    login(email, password);
  };


      return (
      <View style={styles.container}>
        <Text style={styles.text}>Log In Page</Text>
        <View style={styles.inputcontainer}>
         <TextInput 
          style={styles.input}
           placeholder='Username'
           onChangeText={(text) => setEmail(text)}
           mode='offline'
           theme={{roundness:25}} 
           underlineColor='white'
           cursorColor='black'
           activeUnderlineColor='white'
           left={<TextInput.Icon icon='account-outline'></TextInput.Icon>}
           ></TextInput>   
                   <TextInput 
          style={styles.input}
           placeholder='Password'
           mode='offline'
           theme={{roundness:25}}
           onChangeText={(text) => setPassword(text)} 
           underlineColor='white'
           cursorColor='black'
           activeUnderlineColor='white'
           left={<TextInput.Icon icon='lock-outline'></TextInput.Icon>}
           ></TextInput> 
           <Button title='Login' 
          //  onPress={()=>navigation.navigate('Home')}
           onPress={handleLogin}
           ></Button>
        
        </View>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      paddingTop:40,
      paddingHorizontal:40,


  
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