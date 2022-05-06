import styled from "styled-components";

export const Container = styled.div`
	width: 45%;
	background-color: #fff;
	padding: 2rem;
	margin-top: 1rem;
	border-radius: 10px;

	@media (max-width: 568px) {
		width: 100%;
	}
`;
export const Title = styled.div`
	font-size: 1rem;
	font-family: "Inter";
`;
export const TextPrice = styled.div`
	color: ${(props) => props.color};
	font-size: 2rem;
	font-family: "Inter";
	font-weight: 600;
`;
