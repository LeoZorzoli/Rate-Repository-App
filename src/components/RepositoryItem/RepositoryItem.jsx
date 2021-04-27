import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
    repositoryItem: {
        backgroundColor: 'white',
    }
});

const RepositoryItem = ({ repository }) => {
    return (
        <View style={styles.repositoryItem } key={repository.id}>
            <RepositoryInfo repository={repository} />
            <RepositoryStats repository={repository} />
        </View>
    );
};

export default RepositoryItem;
