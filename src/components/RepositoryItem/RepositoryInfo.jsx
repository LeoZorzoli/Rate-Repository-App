import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
    imageContainer: {
        flex: 3
    },
    sectionContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        margin: 'auto',
    },
    repoInfo: {
        flex: 13,
        justifyContent: 'space-between',
    },
    fullName: {
        fontWeight: theme.fontWeights.bold,
    },
    description:{
        paddingVertical: 4,
        color: theme.colors.textSecondary,
    },
    language: {
        backgroundColor: '#037bfc',
        padding: 4,
        color: 'white',
        alignSelf: 'flex-start',
        borderRadius: 4,
    }
});

const RepositoryInfo = ({ repository }) => {
    return(
        <View style={styles.sectionContainer}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: repository.ownerAvatarUrl
                    }} 
                />
            </View>
            <View style={styles.repoInfo}>
                <Text style={styles.fullName}>{repository.fullName}</Text>
                <Text style={styles.description}>{repository.description}</Text>
                <Text style={styles.language}>{repository.language}</Text>
            </View>
        </View>
    );
};

export default RepositoryInfo;