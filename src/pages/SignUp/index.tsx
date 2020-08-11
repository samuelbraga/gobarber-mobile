import React, { useCallback, useRef } from 'react';
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core'

import Input from '../../components/input';
import Button from '../../components/button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles';

const SignUp: React.FC = () => {
  const fromRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSignUp = useCallback((data: Object) => {
    console.log(data);
  }, []);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Form ref={fromRef} onSubmit={handleSignUp}>
              <Input name="name" placeholder="Nome" icon="user" />
              <Input name="email" placeholder="E-mail" icon="mail" />
              <Input name="password" placeholder="Senha" icon="lock" />

              <Button
                onPress={() => {
                  fromRef.current?.submitForm();
                }}
              >
              Criar
              </Button>
            </Form>
          </Container>

          <BackToSignInButton onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="#fff" />
            <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
          </BackToSignInButton>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
