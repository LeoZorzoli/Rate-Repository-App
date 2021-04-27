import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#24292e',
        padding: 4
    }
});

const AppBar = () => {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <Link to="/" component={AppBarTab} >Repositories</Link>
          <Link to="/signIn" component={AppBarTab} >Sing In</Link>
        </ScrollView>
      </View>
    );
};

export default AppBar;