import React from 'react';
import { Text, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    tab: {
        color: 'white',
        padding: 8,
    }
});

const AppBarTab = ({ ...props }) => {
    return (
        <TouchableWithoutFeedback >
            <View>
                <Text 
                style={styles.tab}
                {...props}
                />
            </View>
        </TouchableWithoutFeedback >
    );
};

export default AppBarTab;