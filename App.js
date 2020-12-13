import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
} from 'react-native';
import Header from './components/Header/'
import Posts from './components/Posts/'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Posts />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
});
