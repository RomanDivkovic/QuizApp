// // #6 Email Authentication using Firebase Authentication in React Native App
// // https://aboutreact.com/react-native-firebase-authentication/

// // Import React and Component
// import React, {useState, useEffect, createRef} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableOpacity,
//   ScrollView,
//   Alert,
// } from 'react-native';

// import auth from '@react-native-firebase/auth';

// export default function ProfileScreen({navigation}) {
//   const [user, setUser] = useState();
//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(user => {
//       console.log('user-log', JSON.stringify(user));

//       setUser(user);
//     });
//     return subscriber;
//   }, []);
//   const logout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure? You want to logout?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => {
//             return null;
//           },
//         },
//         {
//           text: 'Confirm',
//           onPress: () => {
//             auth()
//               .signOut()
//               .then(() => navigation.replace('Auth'))
//               .catch(error => {
//                 console.log(error);
//                 if (error.code === 'auth/no-current-user') {
//                   navigation.replace('Auth');
//                 } else {
//                   alert(error);
//                 }
//               });
//           },
//         },
//       ],
//       {cancelable: false},
//     );
//   };
//   return (
//     <SafeAreaView>
//       <View style={{flex: 1, padding: 16}}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text
//             style={{
//               fontSize: 20,
//               textAlign: 'center',
//               marginBottom: 16,
//             }}>
//             Firebase Auth
//           </Text>
//           {user ? (
//             <Text>
//               Welcome {user.displayName ? user.displayName : user.email}
//             </Text>
//           ) : null}
//           <TouchableOpacity
//             style={styles.buttonStyle}
//             activeOpacity={0.5}
//             onPress={logout}>
//             <Text style={styles.buttonTextStyle}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
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
//     marginBottom: 20,
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
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
// });

// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/

// Import React and Component
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';

const ProfileScreen = ({navigation}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      console.log('user', JSON.stringify(user));
      setUser(user);
    });

    return subscriber;
  }, []);

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure? You want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return null;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            auth()
              .signOut()
              .then(() => navigation.replace('Auth'))
              .catch(error => {
                console.log(error);
                if (error.code === 'auth/no-current-user')
                  navigation.replace('Auth');
                else alert(error);
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.fistView}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>Firebase Auth</Text>
          {user ? (
            <Text>
              Welcome {user.displayName ? user.displayName : user.email}
            </Text>
          ) : null}
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={logout}>
            <Text style={styles.buttonTextStyle}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  fistView: {
    flex: 1,
    padding: 16,
  },
  safe: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    minWidth: 300,
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});
