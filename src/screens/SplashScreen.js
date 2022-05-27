// #6 Email Authentication using Firebase Authentication in React Native App
// https://aboutreact.com/react-native-firebase-authentication/

// Import React and Component
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import auth from '@react-native-firebase/auth';

export default function SplashScreen({navigation}) {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      // Check if currentUser is set or not
      // If not then send for Authentication
      // else send to Home Screen
      navigation.replace(auth().currentUser ? 'Main' : 'Auth');
    }, 5000);
  }, [navigation]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});
