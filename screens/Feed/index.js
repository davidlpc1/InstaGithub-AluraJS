import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity,
  Text
} from 'react-native';
import Header from '../../components/Header'
import Posts from '../../components/Posts/'

export default function Feed({  navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
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
