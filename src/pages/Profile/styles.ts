import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'android' ? 100 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const UserAvatarBottun = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const UserAvatar = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
  align-self: center;
`;
