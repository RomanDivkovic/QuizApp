import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

const QuestionItem = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.questTitle}>{props.questionItem.title}</Text>
      {props.questionItem.answers.map((answer, index) => (
        <Pressable
          //   style={styles.btn}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'lightgrey' : '#0077b6',
            },
            styles.viewButton,
          ]}
          title={answer.title}
          key={index}
          onPress={() => {
            props.onNextQuestion(props.questionItem.id);
            props.onAnswer(answer);
          }}>
          <Text style={styles.btn_text}>{answer.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  viewButton: {
    width: '100%',
    minHeight: 50,
    borderRadius: 15,
    margin: 2,
  },
  //   btn: {
  //     width: '100%',
  //     backgroundColor: '#ffffff',
  //     padding: 15,
  //     borderRadius: 12,
  //     marginBottom: 12,
  //     shadowColor: '#000000',
  //     shadowOpacity: 0.1,
  //     shadowOffset: { width: 0, height: 3 },
  //     shadowRadius: 2,
  //     elevation: 5
  //   },
  btn_text: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'center',
    // fontFamily: 'Montserrat2',
    color: '#fff',
  },
  questTitle: {
    fontSize: 28,
    marginBottom: 40,
    // fontFamily: 'Montserrat2',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default QuestionItem;
