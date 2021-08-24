import React from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const AuthScreen = (props) => {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.select({ ios: 0, android: 500 })}
    >
      <LinearGradient colors={['#fff6ff', '#ffcdff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="E-mail"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid email address."
              onInputChange={() => {}}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboardType="default"
              securedTextEntry
              required
              email
              minLength={5}
              autoCapitalize="none"
              errorMessage="Please enter a password."
              onInputChange={() => {}}
              initialValue=""
            />
            <View style={styles.buttons}>
              <View style={styles.buttonContainer}>
                <Button
                  title="Login"
                  color={Colors.primary}
                  onPress={() => {}}
                />
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Sign up"
                  color={Colors.accent}
                  onPress={() => {}}
                />
              </View>
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: 'Authenticate',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },
  buttons: {
    alignItems: 'center',
  },

  buttonContainer: {
    marginTop: 15,
    width: '90%',
  },
});

export default AuthScreen;
