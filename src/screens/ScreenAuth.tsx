import React, { useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Auth0 from 'react-native-auth0';

import { handleAuth0Success } from '../redux/actions/authActions';
import { useAppDispatch } from '../redux/hooks';

const auth0 = new Auth0({
  domain: 'dev-r02o15nq.us.auth0.com',
  clientId: 'D9REuOayr2QPwSoGCOzH7GX7Neca6UWM',
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    marginVertical: 20,
    padding: 10,
    width: '30%'
  },
  textButton: {
    fontWeight: 'bold'
  }
})

export const ScreenAuth = () => {

  const dispatch = useAppDispatch();

  const handleLogin = useCallback(() => {
    auth0.webAuth
    .authorize({scope: 'openid email profile'})
    .then(credentials => dispatch(handleAuth0Success(credentials)))
    .catch(error => console.warn(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>SCREEN AUTH</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.textButton}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}