import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
// import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';

export default function ResultScreen({navigation, route}, props) {
  const result = route.params.paramKey;
  const total = route.params.paramSecond;
  const [number, setNumber] = useState([]);
  const [text, setText] = useState('');
  console.log(result / total);

  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            padding: 20,
            textAlign: 'center',
          }}>
          You finished the quiz Yäääy!!
        </Text>
        <Text
          style={{
            padding: 20,
            textAlign: 'center',
          }}>
          You had {result} of {total}
        </Text>
        <CustomButton
          title="Go to Home"
          onPress={() => navigation.navigate('Main')}
        />
        <CustomButton
          title="Show Questions"
          onPress={alert('show answerd questions here')}
        />
        <CustomButton title="Save Quiz" onPress={saveScoreToDB} />
      </View>
    </SafeAreaView>
  );

  // Måste fixa bättre nu skrivs det över och man sparar bara ett resultat
  function saveScoreToDB() {
    // firebase
    //   .database()
    //   .ref('users/' + userId)
    //   .set({
    //     username: name,
    //     email: email,
    //     profile_picture: imageUrl
    //   })
    // firebase
    //   .database()
    //   .ref(
    //     'users/' + auth.currentUser?.uid + '/QuizScore' + '/' + number.length,
    //   )
    //   .set({
    //     total: total,
    //     rigth: result,
    //   });
  }
}
