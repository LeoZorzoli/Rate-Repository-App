import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';

import RepositoryList from './RepositoryList.jsx';
import AppBar from './AppBar.jsx';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'grey',
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
          <AppBar />
      </TouchableWithoutFeedback>
      <RepositoryList />
    </View>
  );
};

export default Main;