import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../Constants/colors.ts';
import {useAuth} from '../../Hooks/useAuth.tsx';
import {useCallback, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {logUserIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = useCallback((text: string) => {
    setUsername(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleLogin = async () => {
    logUserIn(username, password);
  };

  const handleRegisterRedirect = () => {
    navigation.dispatch(StackActions.replace('RegisterScreen'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>QuizSurprise</Text>
      <Text style={styles.subtitle}>
        Câștigă zilnic premii speciale răspunzând la întrebările noastre
        provocatoare!
      </Text>
      <TextInput
        style={styles.inputField}
        placeholder={'Introdu Numele'}
        onChangeText={handleUsernameChange}
      />
      <TextInput
        style={styles.inputField}
        placeholder={'Introdu Parola'}
        onChangeText={handlePasswordChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={handleRegisterRedirect}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 100,
  },
  title: {fontSize: 60, fontWeight: 'bold'},
  subtitle: {fontSize: 20, textAlign: 'center', paddingBottom: 200},
  inputField: {
    borderWidth: 1,
    borderRadius: 30,
    margin: 16,
    fontSize: 20,
    width: 500,
    textAlign: 'center',
  },
  button: {
    backgroundColor: theme.primary,
    width: 300,
    borderRadius: 30,
    paddingVertical: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: theme.secondary,
    width: 300,
    borderRadius: 30,
    paddingVertical: 5,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 30,
    alignSelf: 'center',
  },
});

export default HomeScreen;
