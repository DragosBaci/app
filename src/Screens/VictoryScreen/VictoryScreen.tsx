import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../Types/Types.ts';

const VictoryScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleBackHome = () => {
    navigation.dispatch(StackActions.replace('HomeScreen'));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Assets/VictoryBackground.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}
        resizeMode={'cover'}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Felicitari, Sergiu</Text>
        <Text style={styles.text}>Ai raspuns corect la intrebare!</Text>
        <TouchableOpacity style={styles.wheelButton}>
          <Text style={styles.buttonText}>Invarte Roata</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.backHomeButton}
          onPress={handleBackHome}>
          <Text style={styles.buttonText}>Back Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    color: 'black',
  },
  wheelButton: {
    backgroundColor: '#14F201',
    width: '80%',
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  backHomeButton: {
    backgroundColor: 'red',
    width: '80%',
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  buttonText: {
    fontSize: 30,
    color: 'black',
  },
});
export default VictoryScreen;
