import React from 'react';
import MyComponent from './components/MyComponent';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {


  const isAdmin = true;
  function myFunction(userName) {
    return <Text>{userName}</Text>

  }

  return (
    <>
      <View style={styles.container} marginTop={100} >
        <Text style={styles.text}>
          CLARUSWAY
    </Text>
      </View>
      <View style={styles.container} padding={50} margin={20}>
        <Text style={styles.text}>
          FULLSTACK EKIBI
    </Text>
      </View>
      <MyComponent />





    </>
  );

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    margin: 20,
    padding: 10,
    borderRadius: 10,
    

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  hello: {
    margin: 10,
    textAlign: 'center',
    fontSize: 30
  }

});

export default App;
