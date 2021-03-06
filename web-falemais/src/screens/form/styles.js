import styled from "styled-components";

export const Container = styled.div`
	background: #272635;
`;

export const Box = styled.div`
	max-width: 1020px;
	margin: 0 auto;
	padding: 2.5rem 5rem;
	height: 100%;

	@media (max-width: 568px) {
		padding: 2.5rem 1rem;
	}
`;

export const TitleText = styled.p`
	font-size: 3.125rem;
	color: #fff;
	font-family: "Inter";
	font-weight: bold;
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
	font-size: 1rem;
	color: #fff;
	font-family: "Inter";
`;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	width: 100%;
	/* padding-top: 1.5rem; */

	@media (max-width: 998px) {
		flex-direction: ${(props) => props.flexDirection && "column"};
	}
`;

export const ContainerInput = styled.div`
	width: 41%;
`;

export const Input = styled.input`
	background: #f8f8f8;
	padding: 0 0.5rem;
	height: 45px;
	width: 100%;
	border-radius: 5px;
	border-width: 1px;
	border-color: #dddddd;
	margin-bottom: 1.5rem;
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
	padding: 1rem 0;
	border-radius: 5px;
	border: none;
	cursor: pointer;

	:hover {
		background-color: #5dadec;
	}
`;

export const TextButton = styled.p`
	color: #fff;
	padding: 0 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 600;
`;

export const ContentPrices = styled.div`
	padding: 3rem 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 568px) {
		flex-direction: column;
	}
`;
