import styled from "styled-components";

import { colors } from "../../assets/colors";
import { fonts } from "../../assets/fonts";

export const Container = styled.div`
	background: #272635;
`;

export const Box = styled.div`
	max-width: 1020px;
	margin: 0 auto;
	padding: 2.5rem 5rem;
	height: 100vh;
`;

export const NavigationBar = styled.div`
	height: 3rem;
	display: flex;
	padding: 0 2.5rem;
	align-items: center;

	background-color: #272635;
`;

export const Header = styled.div``;

export const TextHeader = styled.p`
	font-size: 16px;
	color: #fff;
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	width: 100%;
	padding-top: 24px;
`;

export const ContainerInput = styled.div`
	width: 41%;
	/* background-color: red; */
`;

export const Input = styled.input`
	background: #f8f8f8;
	padding: 0 0.5rem;
	height: 45px;
	width: 100%;
	border-radius: 5px;
	border-width: 1px;
	border-color: #dddddd;
	margin-bottom: 24px;
`;

export const ContainerButton = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
`;

export const Button = styled.button`
	background: #2d7dd2;
	align-items: center;
	justify-content: center;
	padding: 10px 0;
	border-radius: 5px;
`;

export const ButtonPlan = styled.button`
	border-radius: 5px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: start;
	width: 30%;
	height: 100px;
	background: ${(props) =>
		props?.selected ? colors.successDisable : "#2D7DD2"};
	border-color: #dddddd;
	border: none;
	cursor: pointer;
`;

export const TextButtonPlan = styled.p`
	color: #fff;
	font-size: 16px;
	text-align: center;
`;

export const TextButton = styled.p`
	color: #fff;
	padding: 0 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
`;

export const ContentPrices = styled.div`
	padding: 24px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const CardWithPlan = styled.div`
	background-color: #2d7dd2;
	margin: 50px 10px;
	padding: 24px;
	min-height: 140px;
	border-radius: 8px;
`;

export const CardWithoutPlan = styled.div`
	background-color: #fb3640;
	margin: 50px 10px;
	padding: 24px;
	min-height: 140px;
	border-radius: 8px;
`;
