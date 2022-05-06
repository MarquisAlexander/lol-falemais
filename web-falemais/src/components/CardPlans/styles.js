import styled from "styled-components";

export const Container = styled.div`
	margin-top: 2rem;
	border-radius: 10px;
	padding: 2rem 1rem;
	display: flex;
	flex-direction: column;
	width: 31%;
	background: ${(props) => props.color};
	opacity: ${(props) => (props.selected ? 1 : 0.3)};
	cursor: pointer;
	transition: transform 0.2s;

	:hover {
		transform: scale(1.2);
	}

	@media (max-width: 998px) {
		width: 100%;
		align-items: center;
	}
`;

export const Title = styled.p`
	font-size: 1rem;
	font-family: "Inter";
	font-weight: 600;
`;

export const Plan = styled.p`
	font-size: 2rem;
	padding: 2rem 0 1rem 0;
	font-family: "Inter";
	font-weight: bold;
`;

export const Button = styled.div`
	background-color: #000;
	padding: 1rem 2rem;
	border-radius: 1rem;
	margin-top: 2rem;
`;

export const TextButton = styled.div`
	color: #fff;
	font-size: 1rem;
	font-family: "Inter";
`;

export const TextButtonPlan = styled.p`
	color: #000;
	font-size: 1rem;
	text-align: center;
	font-family: "Inter";
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row;
`;

export const TextBenefits = styled.p`
	color: #000;
	font-size: 1rem;
	text-align: center;
	font-family: "Inter";
	margin-left: 0.5rem;
`;

export const ContainerBenefits = styled.div`
	margin-top: 1rem;
`;
