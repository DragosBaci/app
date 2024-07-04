import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {AnswerType} from '../../Types/Types.ts';
import {FC} from 'react';

interface AnswerListProps {
  answers: AnswerType[] | undefined;
  selectedAnswers: string[];
  onSelectAnswer: (id: string) => void;
  rightAnswers: boolean | null;
}

const AnswerList: FC<AnswerListProps> = ({
  answers,
  selectedAnswers,
  onSelectAnswer,
  rightAnswers,
}) => {
  return (
    <>
      {answers &&
        answers.map(answer => {
          const isSelected = selectedAnswers.includes(answer.id.toString());
          const isCorrect = rightAnswers && answer.isCorrect;
          const isIncorrect = rightAnswers && !answer.isCorrect;

          return (
            <TouchableOpacity
              key={answer.id}
              style={[
                styles.container,
                isSelected && styles.selectedContainer,
                isCorrect && styles.correctContainer,
                isIncorrect && styles.incorrectContainer,
              ]}
              onPress={() => onSelectAnswer(answer.id.toString())}>
              <Text
                style={[
                  styles.text,
                  isSelected && styles.selectedText,
                  isCorrect && styles.correctText,
                  isIncorrect && styles.incorrectText,
                ]}>
                {answer.answer}
              </Text>
            </TouchableOpacity>
          );
        })}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    marginVertical: 10,
  },
  selectedContainer: {
    borderColor: 'green',
  },
  correctContainer: {
    borderColor: 'green',
  },
  incorrectContainer: {
    borderColor: 'red',
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'black',
  },
  selectedText: {
    color: 'green',
  },
  correctText: {
    color: 'green',
  },
  incorrectText: {
    color: 'red',
  },
});

export default AnswerList;
