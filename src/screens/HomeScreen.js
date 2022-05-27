// // #6 Email Authentication using Firebase Authentication in React Native App
// // https://aboutreact.com/react-native-firebase-authentication/

// // Import React and Component
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import CustomButton from '../components/CustomButton';

import auth from '@react-native-firebase/auth';

// const HomeScreen = ({navigation}) => {
//   const [user, setUser] = useState();

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(user => {
//       console.log('user', JSON.stringify(user));
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
//                 if (error.code === 'auth/no-current-user')
//                   navigation.replace('Auth');
//                 else alert(error);
//               });
//           },
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
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
//           <CustomButton title="Log out" onPress={logout} />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   buttonStyle: {
//     minWidth: 300,
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
// });

// import React, {useState, useEffect} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../components/CustomInput';
// import CustomButton from '../components/custombutton';
// import CustomInput from '../components/customInput';
// import * as firebase from 'firebase';
// import {auth} from '../../firebase';
// import {SafeAreaView} from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';

export default function HomeScreen({navigation}) {
  const [text, onTextChange] = useState('');
  const [categories, setCategoris] = useState(0);
  const [apiResult, setResult] = useState([]);

  // https://opentdb.com/api_category.php

  // useEffect(async () => {
  // const url = `https://opentdb.com/api_category.php`
  // const response = await fetch(url, { method: 'get' })
  // const result = await response.json()
  // setResult(result.trivia_categories)
  // }, [])

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'General Knowledge', value: 9},
    {label: 'Entertainment: Books', value: 10},
    {label: 'Entertainment: Film', value: 11},
    {label: 'Entertainment: Music', value: 12},
    {label: 'Entertainment: Musicals & Theatres', value: 13},
    {label: 'Entertainment: Television', value: 14},
    {label: 'Entertainment: Video Games', value: 15},
    {label: 'Entertainment: Board Games', value: 16},
    {label: 'Science & Nature', value: 17},
    {label: 'Science & Computers', value: 18},
    {label: 'Science: Mathematics', value: 19},
    {label: 'Mythology', value: 20},
    {label: 'Sports', value: 21},
    {label: 'Geography', value: 22},
    {label: 'History', value: 23},
    {label: 'Politics', value: 24},
    {label: 'Art', value: 25},
    {label: 'Celebrities', value: 26},
    {label: 'Animals', value: 27},
    {label: 'Vehicles', value: 28},
    {label: 'Entertainment: Comics', value: 29},
    {label: 'Science: Gadgets', value: 30},
    {label: 'Entertainment: Japanese Anime & Manga', value: 31},
    {label: 'Entertainment: Cartoon & Animations', value: 32},
  ]);

  // function getCategories() {
  //   apiResult.forEach((element) => {
  //     setItems({ label: element.name, value: element.id })
  //   })
  //   console.log(items[0])
  // }

  return (
    <View style={styles.view}>
      <SafeAreaView>
        <Text style={styles.h1}>Choose Category</Text>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          onPress={setTheCategory(value)}
        />

        {/* <ScrollView>
          {apiResult.map((theAnswer) => (
            <CustomButton
              key={theAnswer.id}
              title={theAnswer.name}
              onPress={() => setCategoris(theAnswer.id)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'grey' : '#F8F9FA'
                },
                styles.wrapperCustom
              ]}
            ></CustomButton>
          ))}
        </ScrollView> */}

        <View style={{padding: 10}}>
          <Text style={styles.h1}>Choose Amount</Text>
          <CustomInput
            placeholder="Enter amount of questions (max 50)"
            value={text}
            onChangeText={onTextChange}
          />
        </View>

        <View style={{padding: 20}}>
          <CustomButton
            // value={onTextChange('Sport')}
            title="Start Quiz"
            onPress={startQuiz}
          />
        </View>
      </SafeAreaView>
    </View>
  );
  function setTheCategory(item) {
    console.log(item);
    // setCategoris(item);
    // setCategoris(item);
    // useEffect(() => {
    //   setCategoris(item);
    // });
  }

  function startQuiz() {
    // console.log('Sports quiz, amount of questions = ', text)

    navigation.navigate('Play', {
      paramKey: text,
      paramSecond: value,
    });
  }
}

// Style for my components
const styles = StyleSheet.create({
  h1: {
    // fontFamily: 'Montserrat2',
    color: '#000',
    fontSize: 22,
    padding: 15,
    textAlign: 'center',
  },
  view: {
    // flex: 1,
    backgroundColor: '#ddf0f7',
    height: '100%',
    // backgroundColor: 'rgba(0,0,0.3,0.1)'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
