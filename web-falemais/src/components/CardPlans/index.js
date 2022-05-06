import React from "react";

import { FaCheckCircle } from "react-icons/fa";

import { plans } from "../../assets/plans";
import {
	Container,
	TextButtonPlan,
	Title,
	Plan,
	Button,
	TextButton,
	ContainerBenefits,
	Content,
	TextBenefits,
} from "./styles";

export function CardPlan({
	onClick = () => {},
	selected = false,
	plan = "basic",
}) {
	return (
		<Container
			selected={selected}
			color={plans[plan].color}
			onClick={() => onClick({ plan: plans[plan].codePlan, type: "plan" })}
		>
			<Title>{plans[plan].title}</Title>
			<Plan>{plans[plan].plan}</Plan>
			<TextButtonPlan>{plans[plan].description}</TextButtonPlan>
			<ContainerBenefits>
				{plans[plan].benefits.map((beneficio) => (
					<Content>
						<FaCheckCircle size={"1rem"} />
						<TextBenefits>{beneficio.description}</TextBenefits>
					</Content>
				))}
			</ContainerBenefits>

			<Button>
				<TextButton>Selecionar</TextButton>
			</Button>
		</Container>
	);
}
