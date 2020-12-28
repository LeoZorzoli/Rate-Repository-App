import React from 'react';
import { View, StyleSheet } from 'react-native';

import RepositoryInfo from './RepositoryInfo.jsx';
import RepositoryStats from './RepositoryStats.jsx';

const styles = StyleSheet.create({
  repositoryItem: {
    backgroundColor: 'white',
  }
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.repositoryItem}>
      <RepositoryInfo repository={repository} />
      <RepositoryStats repository={repository} />
    </View>
  );
};

export default RepositoryItem;