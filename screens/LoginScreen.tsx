import React, { useState } from 'react';
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const { colors } = useTheme();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const handleLogin = () => {
        //Mock login functionality
        navigation.replace('Dashboard');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[styles.container, { backgroundColor: colors.background }]}
        >
            <View style={styles.content}>
                <Image source={require('../assets/icon.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />

                <Text variant='headlineMedium' style={styles.title}>
                    Welcome Back
                </Text>

                <Text variant='bodyMedium' style={styles.title}>
                    Sign in to manage your parking
                </Text>

                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    mode="outlined"
                    style={styles.input}
                    keyboardType='email-address'
                    autoCapitalize='none'
                    left={<TextInput.Icon icon="email" />}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode='outlined'
                    style={styles.input}
                    secureTextEntry={secureTextEntry}
                    right={
                        <TextInput.Icon
                            icon={secureTextEntry ? "eye-off" : "eye"}
                            onPress={() => setSecureTextEntry(!secureTextEntry)}
                        />
                    }
                />

                <Button
                    mode='contained'
                    onPress={handleLogin}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Sign In
                </Button>

                <Button
                    mode="text"
                    onPress={() => console.log('Sign up pressed')}
                    style={styles.secondaryButton}
                    labelStyle={styles.secondaryButtonLabel}
                >
                    Don't have an account? Sign up
                </Button>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    logo: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginBottom: 30,
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
        fontWeight: 'bold',
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 32,
        color: '#666',
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 16,
        paddingVertical: 8,
    },
    buttonLabel: {
        fontSize: 16,
    },
    secondaryButton: {
        marginTop: 16,
    },
    secondaryButtonLabel: {
        fontSize: 14,
    },
});

export default LoginScreen;