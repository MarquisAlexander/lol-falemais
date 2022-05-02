import styled from 'styled-components';

import {colors} from '../../assets/colors';

export const Container = styled.View`
  background: #fff;
  padding: 24px;
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View``;

export const Content = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-top: 24px;
`;

export const ContainerInput = styled.View`
  width: 41%;
`;

export const Input = styled.TextInput`
  background: #f8f8f8;
  height: 45px;
  border-radius: 5px;
  border-width: 1px;
  border-color: #dddddd;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.success};
  align-items: center;
  width: 100%;
  padding: 10px 0;
  height: 45px;
  border-radius: 5px;
`;

export const ButtonPlan = styled.TouchableOpacity`
  width: 30%;
  height: 100px;
  background: ${colors.success};
`;
