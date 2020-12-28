import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList.jsx';
import SingIn from './SingIn.jsx';
import AppBar from './AppBar/AppBar.jsx';

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
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/singin">
          <SingIn />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;