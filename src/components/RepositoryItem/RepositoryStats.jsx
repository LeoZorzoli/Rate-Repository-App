import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../../theme';
import { parseNumber } from '../../util/helper';

const styles = StyleSheet.create({
    repoStats: {
      justifyContent: 'space-around'
    },
    sectionContainer: {
      padding: 6,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    boldText: {
      textAlign: 'center',
      paddingVertical: 4,
      fontWeight: 'bold',
    },
    bodyText: {
      paddingVertical: 4,
      color: theme.colors.textSecondary,
    },
});

const RepositoryStats = ({ repository }) => {
    return (
        <View style={[ styles.sectionContainer, styles.repoStats ]}>
            <View>
                <Text style={styles.boldText}>{parseNumber(repository.stargazersCount)}</Text>
                <Text style={styles.bodyText}>Stars</Text>
            </View>
            <View>
                <Text style={styles.boldText}>{parseNumber(repository.forksCount)}</Text>
                <Text style={styles.bodyText}>Forks</Text>
            </View>
            <View>
                <Text style={styles.boldText}>{parseNumber(repository.reviewCount)}</Text>
                <Text style={styles.bodyText}>Reviews</Text>
            </View>
            <View>
                <Text style={styles.boldText}>{parseNumber(repository.ratingAverage)}</Text>
                <Text style={styles.bodyText}>Rating</Text>
            </View>
        </View>
    );
};

export default RepositoryStats;