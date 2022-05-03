import styled from 'styled-components';
import {fonts} from '../../assets/fonts';

export const Container = styled.View`
  width: 45%;
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-family: ${fonts.regular};
`;
export const TextPrice = styled.Text`
  color: ${props => props.color};
  font-size: 32px;
  font-family: ${fonts.bold};
`;
