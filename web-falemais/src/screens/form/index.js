import React, { useState } from "react";

import { CardPlan } from "../../components/CardPlans";
import { calculatePrices, formatterMoney } from "../../utils";

import {
	Container,
	Header,
	Input,
	ContainerInput,
	Content,
	Button,
	ContainerButton,
	TextHeader,
	TextButton,
	ContentPrices,
	NavigationBar,
	Box,
	TitleText,
} from "./styles";
import { CardResume } from "../../components/CardResume";

const INITIAL_STATE = {
	origin: 0,
	destine: 0,
	time: 0,
	plan: 0,
};

export function Form() {
	const [form, setForm] = useState(INITIAL_STATE);
	const [prices, setPrices] = useState({
		totalWithFaleMais: 0,
		totalwithoutFaleMais: 0,
	});

	async function handleCalculatePrices() {
		console.log("response", form);
		const response = await calculatePrices({ form });
		console.log("dd", response);
		setPrices(response);
	}

	function updateForm({
		origin = null,
		destine = null,
		plan = null,
		time = null,
		type = null,
	}) {
		if (type === "plan") {
			setForm({ ...form, plan });
		} else if (type === "origin") {
			setForm({ ...form, origin });
		} else if (type === "destine") {
			setForm({ ...form, destine });
		} else if (type === "time") {
			setForm({ ...form, time });
		}
	}

	return (
		<Container>
			<NavigationBar>
				<p
					style={{
						color: "#fff",
					}}
				>
					Telzir
				</p>
			</NavigationBar>
			<Box>
				<Header>
					<TitleText>Planos</TitleText>
					<TextHeader>
						Digite abaixo o ddd de origem e o de destino que vamos mostrar para
						você os beneficios do plano FaleMais.
					</TextHeader>

					<Content>
						<ContainerInput>
							<Input
								onChange={(text) =>
									updateForm({ origin: text.target.value, type: "origin" })
								}
								placeholder="DDD de origem"
								keyboardType="numeric"
							/>
						</ContainerInput>
						<ContainerInput>
							<Input
								placeholder="DDD de Destino"
								onChange={(text) =>
									updateForm({ destine: text.target.value, type: "destine" })
								}
								keyboardType="numeric"
							/>
						</ContainerInput>
					</Content>
					<Input
						onChange={(text) =>
							updateForm({ time: text.target.value, type: "time" })
						}
						placeholder="Tempo da ligação"
						keyboardType="numeric"
					/>
					<Content>
						<CardPlan
							onClick={(obj) => updateForm({ plan: obj.plan, type: obj.type })}
						/>
						<CardPlan
							onClick={(obj) => updateForm({ plan: obj.plan, type: obj.type })}
							plan="professional"
						/>
						<CardPlan
							onClick={(obj) => updateForm({ plan: obj.plan, type: obj.type })}
							plan="team"
						/>
					</Content>
					<ContentPrices>
						<CardResume
							type="with"
							price={formatterMoney.format(prices?.totalWithFaleMais)}
						/>
						<CardResume
							type="without"
							price={formatterMoney.format(prices?.totalwithoutFaleMais)}
						/>
					</ContentPrices>
				</Header>
				<ContainerButton>
					<Button onClick={handleCalculatePrices}>
						<TextButton>Comparar planos</TextButton>
					</Button>
				</ContainerButton>
			</Box>
		</Container>
	);
}
