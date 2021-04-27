import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikTextInput';
import * as yup from 'yup';

const SignIn = () => {

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 15,
    },
    fieldContainer: {
      marginBottom: 15,
    },
  });

  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.container}>
          <View style={styles.fieldContainer}>
            <FormikTextInput 
              name="username" 
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              placeholder="Username" 
              value={values.name}
            />
          </View>
          <View style={styles.fieldContainer}>
            <FormikTextInput 
              name="password" 
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              placeholder="Password" 
              value={values.name}
              secureTextEntry
            />
          </View>
          <Button testID='formikSubmit' title='Sign In' onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default SignIn;