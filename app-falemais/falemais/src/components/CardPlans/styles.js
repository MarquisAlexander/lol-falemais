import styled from "styled-components";

import {fonts} from "../../assets/fonts";

export const Container = styled.TouchableOpacity`
	margin-top: 32px;
	border-radius: 10px;
	padding: 24px 16px;
	display: flex;
	flex-direction: column;
	width: 220px;
	background: ${(props) => props.color};
`;

export const Title = styled.Text`
	font-size: 16px;
	font-family: ${fonts.medium};
	color: #000;
`;

export const Plan = styled.Text`
	font-size: 32px;
	padding: 24px 0 16px 0;
	font-family: ${fonts.bold};
	color: #000;
`;

export const Button = styled.View`
	background-color: #000;
	padding: 16px 32px;
	border-radius: 16px;
	margin-top: 32px;
	align-items: center;
`;

export const TextButton = styled.Text`
	color: #fff;
	font-size: 16px;
	font-family: ${fonts.regular};
`;

export const TextButtonPlan = styled.Text`
	color: #000;
	font-size: 16px;
	font-family: ${fonts.regular};
`;

export const Content = styled.View`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const TextBenefits = styled.Text`
	color: #000;
	font-size: 16px;
	font-family: ${fonts.regular};
	margin-left: 8px;
`;

export const ContainerBenefits = styled.View`
	margin-top: 16px;
`;
