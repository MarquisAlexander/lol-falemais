import styled from "styled-components";

export const Container = styled.div`
	width: 30%;
	background-color: #fff;
	padding: 2rem;
	margin: 2rem 1rem;
	border-radius: 10px;
`;
export const Title = styled.div`
	font-size: 1rem;
	font-family: "Inter";
	/* font-weight: 600; */
`;
export const TextPrice = styled.div`
	color: ${(props) => props.color};
	font-size: 2rem;
	font-family: "Inter";
	font-weight: 600;
`;
