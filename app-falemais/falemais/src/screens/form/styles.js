import styled from 'styled-components';
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';

import {fonts} from '../../assets/fonts';

export const Container = styled.View`
  background: #272635;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: ${getStatusBarHeight() + 16}px;
  padding-bottom: ${getBottomSpace() + 16}px;
  height: 100%;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 16px;
`;
export const Content = styled.View``;

export const TitleText = styled.Text`
  font-size: 30px;
  color: #fff;
  font-family: ${fonts.bold};
`;

export const TextHeader = styled.Text`
  font-size: 14px;
  color: #fff;
  font-family: ${fonts.regular};
`;

export const BoxForm = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding-top: 24px;
  align-items: center;
`;

export const ContainerInput = styled.View`
  width: 41%;
`;

export const Input = styled.TextInput`
  background: #f8f8f8;
  height: 45px;
  border-radius: 5px;
  margin-top: 24px;
  font-size: 16px;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  height: 45px;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: ${fonts.bold};
`;

export const ContentPrices = styled.View`
  padding: 24px 0;
  flex-direction: row;
  justify-content: space-between;
`;

export const BottomSheetContent = styled.View`
  padding: 16px;
`;

export const TextSheet = styled.Text`
  color: #000;
  font-size: 14px;
  font-family: ${fonts.regular};
`;

export const styles = {
  buttonStyle: {
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    width: '100%',
    height: 45,
  },
  buttonTextStyle: {
    fontSize: 16,
  },
  bottomSheet: {
    backgroundColor: '#000',
  },
  backgroundBottomSheet: {
    backgroundColor: '#fff',
  },
  handleIndicator: {
    backgroundColor: '#272635',
    width: 56,
  },
};
