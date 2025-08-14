// components/Auth.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handleAuth = () => {
    if (isSignUp) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => Alert.alert('User created!'))
        .catch(error => Alert.alert(error.message));
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => Alert.alert('Logged in!'))
        .catch(error => Alert.alert(error.message));
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title={isSignUp ? "Sign Up" : "Login"}
        onPress={handleAuth}
      />
      <Button
        title={`Switch to ${isSignUp ? "Login" : "Sign Up"}`}
        onPress={() => setIsSignUp(!isSignUp)}
      />
    </View>
  );
};

export default Auth;
