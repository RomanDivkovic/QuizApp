// // #6 Email Authentication using Firebase Authentication in React Native App
// // https://aboutreact.com/react-native-firebase-authentication/

// // Import React and Component
import React, {useState, createRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

import auth from '@react-native-firebase/auth';

// const LoginScreen = ({navigation}) => {
//   const [userEmail, setUserEmail] = useState('');
//   const [userPassword, setUserPassword] = useState('');
//   const [errortext, setErrortext] = useState('');

//   const passwordInputRef = createRef();

//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
// auth()
//   .signInWithEmailAndPassword(userEmail, userPassword)
//   .then(user => {
//     console.log(user);
//     // If server response message same as Data Matched
//     if (user) navigation.replace('HomeScreen');
//   })
//   .catch(error => {
//     console.log(error);
//     if (error.code === 'auth/invalid-email') setErrortext(error.message);
//     else if (error.code === 'auth/user-not-found')
//       setErrortext('No User Found');
//     else {
//       setErrortext('Please check your email id or password');
//     }
//   });
//   };

//   return (
//     <SafeAreaView style={styles.mainBody}>
//       <ScrollView
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle={{
//           flex: 1,
//           justifyContent: 'center',
//           alignContent: 'center',
//         }}>
//         <View>
//           <KeyboardAvoidingView enabled>
//             <View style={{alignItems: 'center'}}>
//               {/* <Image
//                 source={require('../Image/aboutreact.png')}
//                 style={{
//                   width: '50%',
//                   height: 100,
//                   resizeMode: 'contain',
//                   margin: 30,
//                 }}
//               /> */}
//             </View>
//             <View style={styles.sectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserEmail => setUserEmail(UserEmail)}
//                 placeholder="Enter Email"
//                 placeholderTextColor="#8b9cb5"
//                 autoCapitalize="none"
//                 keyboardType="email-address"
//                 returnKeyType="next"
//                 onSubmitEditing={() =>
//                   passwordInputRef.current && passwordInputRef.current.focus()
//                 }
//                 underlineColorAndroid="#f000"
//                 blurOnSubmit={false}
//               />
//             </View>
//             <View style={styles.sectionStyle}>
//               <TextInput
//                 style={styles.inputStyle}
//                 onChangeText={UserPassword => setUserPassword(UserPassword)}
//                 placeholder="Enter Password"
//                 placeholderTextColor="#8b9cb5"
//                 keyboardType="default"
//                 ref={passwordInputRef}
//                 onSubmitEditing={Keyboard.dismiss}
//                 blurOnSubmit={false}
//                 secureTextEntry={true}
//                 underlineColorAndroid="#f000"
//                 returnKeyType="next"
//               />
//             </View>
//             {errortext != '' ? (
//               <Text style={styles.errorTextStyle}> {errortext} </Text>
//             ) : null}
//             <TouchableOpacity
//               style={styles.buttonStyle}
//               activeOpacity={0.5}
//               onPress={handleSubmitPress}>
//               <Text style={styles.buttonTextStyle}>LOGIN</Text>
//             </TouchableOpacity>
//             <Text
//               style={styles.registerTextStyle}
//               onPress={() => navigation.navigate('RegisterScreen')}>
//               New Here ? Register
//             </Text>
//           </KeyboardAvoidingView>
//         </View>
//       </ScrollView>
//       <Text
//         style={{
//           fontSize: 18,
//           textAlign: 'center',
//           color: 'white',
//         }}>
//         React Native Firebase Authentication
//       </Text>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: 'center',
//           color: 'white',
//         }}>
//         www.aboutreact.com
//       </Text>
//     </SafeAreaView>
//   );
// };
// export default LoginScreen;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'lightblue',
//     alignContent: 'center',
//   },
//   sectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#7DE24E',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 25,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: '#dadae8',
//   },
//   registerTextStyle: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//     alignSelf: 'center',
//     padding: 10,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });

// import React, {useEffect, useState} from 'react';
// import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
// import {auth} from '../../firebase';
// import {useNavigation} from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({navigation}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  function handleSignUp() {
    navigation.navigate('RegisterScreen');
  }

  function handleLogin() {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(user => {
        console.log(user);
        // If server response message same as Data Matched
        if (user) {
          navigation.replace('Main');
        }
      })
      .catch(error => {
        console.log(error);
        if (error.code === 'auth/invalid-email') {
          setErrortext(error.message);
        } else if (error.code === 'auth/user-not-found') {
          setErrortext('No User Found');
        } else {
          setErrortext('Please check your email id or password');
        }
      });
  }

  return (
    <SafeAreaView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={userEmail}
          onChangeText={text => setUserEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={userPassword}
          onChangeText={text => setUserPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton title="Login" onPress={() => handleLogin()} />
        <CustomButton title="Register" onPress={() => handleSignUp()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  buttonContainer: {
    width: '60%',
    marginTop: 40,
  },
  input: {
    margin: 10,
    minWidth: 200,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#3b4053',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
