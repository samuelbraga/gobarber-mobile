import React from 'react';

import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo, {'\n'}
          <UserName>{user.name}</UserName>
          <ProfileButton onPress={() => {}}>
            <UserAvatar source={{ uri: user.avatar_url }} />
          </ProfileButton>
        </HeaderTitle>
      </Header>
    </Container>
  );
};

export default Dashboard;
