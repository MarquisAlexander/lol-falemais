import React from "react";
import { Container, Title, TextPrice, } from "./styles";

const typePrice = {
        with: {
            color: "#1B998B"
        },
        without: {
            color: "#E71D36"
        }
}

export function CardResume({price= 0, type= "with"}) {
	return (
		<Container>
			<Title>Custo da ligação com FaleMais:</Title>
			<TextPrice color={typePrice[type].color}>
				R$ {price}
			</TextPrice>
		</Container>
	);
}
