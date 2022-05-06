import React from "react";
import { Container, Title, TextPrice } from "./styles";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const typePrice = {
	with: {
		color: "#1B998B",
	},
	without: {
		color: "#E71D36",
	},
};

export function CardResume({ price = 0, type = "with", loading = true }) {
	return (
		<Container>
			<Title>Custo da ligação com FaleMais:</Title>
			{loading ? (
				<Skeleton height={"2.5rem"} width={"10rem"}/>
			) : (
				<TextPrice color={typePrice[type].color}>{price}</TextPrice>
			)}
		</Container>
	);
}
