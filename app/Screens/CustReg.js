import React, { useContext, useState } from 'react';
import { 
  ActivityIndicatorBase,
  StyleSheet, 
  Text, 
  TextInput, 
  Image,
  TouchableOpacity, 
  View ,
  StatusBar,
  ImageBackground,
  ScrollView
} from 'react-native';
//import * as firebase from "firebase";
import LoginScreen from './LoginScreen';
import { AuthContext } from '../navigation/AuthProvider';
import { firebase } from '../navigation/firebase';


export default function CustReg({navigation}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname]  = useState('')
  const [mobileno, setmobile] = useState('')
  const [address, setaddress] = useState('')
  const [confirmPassword, setcofirmPassword] = useState('')

  const onRegisterPress = () => {
     if (password !== confirmPassword) {
         alert("Passwords don't match.")
         return
     }
    firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(() => {
          console.log('User account created & signed in!');
          alert("You have Signed in ")
        })
  }
 
    return (
      <ImageBackground style={styles.container}
        source={require('../assets/bg-01.png')}>
        <TouchableOpacity>
          <Image
            style={{width:28, height:28,position:'absolute',top:"10%",left:"-45%",}}
            source={require('../assets/back.png')}
            onPress={() => navigation.navigate("SelectScreen")}
          />          
        </TouchableOpacity>

        <Text style={styles.header}>Register as Customer</Text>
        <Image
          style={{width:105, height:111, top:'2%'}}
          source={require('../assets/pic.png')}/>
        <TextInput style={styles.textinput1} 
        placeholder="First Name" 
        underlineColorAndroid={'transparent'}
        labelValue={firstname}
        onChangeText={(firstname)=>setfirstname(firstname)}
        autoCapitalize="none"
        autoCorrect={false}
        />

        <TextInput style={styles.textinput2}
        placeholder="Last Name" 
        underlineColorAndroid={'transparent'}
        labelValue={lastname}
        onChangeText={(lastname)=>setlastname(lastname)}
        autoCapitalize="none"
        autoCorrect={false}
        />

        <TextInput style={styles.textinput} 
        labelValue={email}
        onChangeText={(userEmail)=>setEmail(userEmail)}
        placeholder="Email"

        autoCapitalize="none"
        autoCorrect={false}
        />
        
        <TextInput style={styles.textinput3} 
        placeholder="Gender" 
        underlineColorAndroid={'transparent'}
        />
        
        <TextInput style={styles.textinput4} 
        placeholder="Birthday" 
        underlineColorAndroid={'transparent'}
        />
        
        <TextInput style={styles.textinput5} 
        placeholder="Mobile Number" 
        underlineColorAndroid={'transparent'}
        labelValue={mobileno}
        onChangeText={(mobileno)=>setmobile(mobileno)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        
        <TextInput style={styles.textinput5} 
        placeholder="Address" 
        underlineColorAndroid={'transparent'}
        labelValue={address}
        onChangeText={(address)=>setaddress(address)}
        autoCapitalize="none"
        autoCorrect={false}
        />
        
        <TextInput style={styles.textinput5} 
        labelValue={password}
        onChangeText={(userPassword)=>setPassword(userPassword)}
        placeholder="Password"
        secureTextEntry={true}
        />
        
        <TextInput style={styles.textinput5} 
        placeholder=" Confirm Password" 
        underlineColorAndroid={'transparent'} 
        secureTextEntry={true}
        labelValue={confirmPassword}
        onChangeText={(confirmPassword)=>setcofirmPassword(confirmPassword)}
        />
        
        <TouchableOpacity style={styles.button}
        onPress={() =>{onRegisterPress()}}>
            <Text style={styles.btnTxt}>
                Sign Up
            </Text>
            
        </TouchableOpacity>
      </ImageBackground>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    header:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:30,
      top:'0%',
      color:"#3A292A",
      position:"relative",
      paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
      paddingLeft: 10,
    },
    textinput:{
      width:375,
      height:40,
      top:'-6%',
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    textinput1:{
      width:175,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      top:'1.4%',
      left:'-25%',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    textinput2:{
      width:175,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      top:'-6%',
      left:'25%',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    textinput3:{
      width:175,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      top:'-6.7%',
      left:'-25%',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    textinput4:{
      width:175,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      top:'-14%',
      left:'25%',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    textinput5:{
      width:375,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      top:'-14%',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },


    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:25,
      width:200,
      marginVertical:10,
      paddingVertical:12,
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
      position:'absolute',
      top:'86.5%',
      //left:'40%',
    },
});