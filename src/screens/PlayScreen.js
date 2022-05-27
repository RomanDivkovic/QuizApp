import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QuestionItem from '../components/QuestionButton';
import axios from 'axios';

export default function PlayScreen({navigation, route}) {
  const [theResult, setResult] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [nextQuestion, setNextQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(1);
  const [loading, setIsLoading] = useState();

  const type = route.params.paramSecond;
  const amount = route.params.paramKey;

  console.log('The catagory user choose: ', type);
  console.log('The catagory user choose: ', amount);

  const baseUrl = `https://opentdb.com/api.php?amount=`;

  useEffect(() => {
    let tempQuestionsArr = [];
    let myAnswers = [];
    // const source = axios.CancelToken.source();
    // const url = `https://opentdb.com/api.php?amount=${amount}&category=${type}&type=multiple`;

    const searchApi = async () => {
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=${amount}&category=${type}&type=multiple`,
        );
        setResult(response.data);
        console.log(theResult + 'Api log');
        let questionId = 0;

        response.data.results.forEach(question => {
          // response_data.results.forEach((question) => {
          let answers = [];

          //CORRECT
          const correct_answer = {
            title: question.correct_answer,
            isCorrect: true,
          };
          answers.push(correct_answer);
          myAnswers.push(correct_answer);
          setScore(score + 1);
          //INCORRECT
          question.incorrect_answers.forEach(item => {
            const incorrect_answer = {title: item, isCorrect: false};
            answers.push(incorrect_answer);
            myAnswers.push(incorrect_answer);
          });

          const formatted_question = {
            id: questionId++,
            title: question.question,
            type: question.type,
            category: question.category,
            difficulty: question.difficulty,
            answers: answers,
          };
          tempQuestionsArr.push(formatted_question);
        });
        // console.log(JSON.stringify(tempQuestionsArr));
        setQuestions(tempQuestionsArr);
      } catch (error) {
        setResult(error.toString());
        alert(theResult);
      }
    };
    searchApi();
  }, [amount, baseUrl, score, theResult, theResult.results, type]);

  //   const shuffle = arr => {
  //     let currentIndex = arr.length,
  //       randomIndex;
  //     while (currentIndex !== 0) {
  //       randomIndex = Math.floor(Math.random() * currentIndex);
  //       currentIndex--;
  //       [arr[currentIndex], arr[randomIndex]] = [
  //         arr[randomIndex],
  //         arr[currentIndex],
  //       ];
  //     }
  //     return arr;
  //   };

  const onNextQuestion = () => {
    let number = currentQuestion;
    number++;
    setCurrentQuestion(number);
    let nextQuest = questions[currentQuestion].id;
    setNextQuestion(nextQuest);
    if (number === amount || number === theResult.results.length) {
      navigation.navigate('Result', {
        paramKey: score,
        paramSecond: amount,
      });
    }
  };

  const onAnswer = answer => {
    console.log(JSON.stringify(answer));
  };

  const questionsUI = questions.map((question, index) => {
    if (nextQuestion === question.id) {
      return (
        <QuestionItem
          key={index}
          questionItem={question}
          onNextQuestion={onNextQuestion}
          onAnswer={onAnswer}
        />
      );
    }
  });

  return (
    <View style={styles.container}>
      {questions.length > 0 ? questionsUI : <Text>No Questions </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddf0f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});
