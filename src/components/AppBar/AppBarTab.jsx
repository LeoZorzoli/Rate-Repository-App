import React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    padding: 8,
  }
});

const AppBarTab = ({ ...props }) => {
  return (
    <TouchableWithoutFeedback >
      <Text style={styles.text} {...props} />
    </TouchableWithoutFeedback> 
  );
};

export default AppBarTab;