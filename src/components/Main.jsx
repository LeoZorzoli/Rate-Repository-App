import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar/AppBar';

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
      <AppBar />
      <Switch>
        <Route path="/" component={RepositoryList} exact />
        <Route path="/signIn" component={SignIn} exact />
      </Switch>
    </View>
  );
};

export default Main;