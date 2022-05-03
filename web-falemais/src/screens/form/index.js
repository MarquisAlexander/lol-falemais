import React, { useState } from "react";

import { colors } from "../../assets/colors";
import { api } from "../../services/api";

import {
	Container,
	Header,
	Input,
	ContainerInput,
	Content,
	Button,
	ContainerButton,
	ButtonPlan,
	TextButtonPlan,
	TextHeader,
	TextButton,
	ContentPrices,
	NavigationBar,
	CardWithPlan,
	CardWithoutPlan,
	Box,
} from "./styles";

const INITIAL_STATE = {
	origin: 0,
	destine: 0,
	time: 0,
	plan: 0,
};

async function calculatePrices({ form = {} }) {
	try {
		const response = await api.post("/calcpriceplan", form);
		return response.data;
	} catch (error) {}
}

export function Form() {
	const [form, setForm] = useState(INITIAL_STATE);
	const [prices, setPrices] = useState();

	async function handleCalculatePrices() {
		console.log("response");
		const response = await calculatePrices({ form });
		console.log("dd");
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
					<p
						style={{
							color: "#fff",
							fontSize: 50,
						}}
					>
						Preços
					</p>
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
					<TextHeader>Planos</TextHeader>
					<Content>
						<ButtonPlan
							selected={form.plan === "1"}
							onClick={() => updateForm({ plan: "1", type: "plan" })}
						>
							<TextButtonPlan>Basic</TextButtonPlan>
							<TextButtonPlan>FaleMais 30min</TextButtonPlan>
							<TextButtonPlan>Para usuários casuais</TextButtonPlan>
						</ButtonPlan>
						<ButtonPlan
							selected={form.plan === "2"}
							onClick={() => updateForm({ plan: "2", type: "plan" })}
						>
							<TextButtonPlan>Professional</TextButtonPlan>
							<TextButtonPlan>FaleMais 60min</TextButtonPlan>
							<TextButtonPlan>Para uso profissional</TextButtonPlan>
						</ButtonPlan>
						<ButtonPlan
							selected={form.plan === "3"}
							onClick={() => updateForm({ plan: "3", type: "plan" })}
						>
							<TextButtonPlan>Team</TextButtonPlan>
							<TextButtonPlan>FaleMais 120min</TextButtonPlan>
							<TextButtonPlan>Para você e sua equipe</TextButtonPlan>
						</ButtonPlan>
					</Content>
					<ContentPrices>
						<CardWithPlan>
							<TextHeader>Custo da ligação com FaleMais:</TextHeader>
							<TextHeader color={colors.success}>
								{prices?.totalWithFaleMais}
							</TextHeader>
						</CardWithPlan>
						<CardWithoutPlan>
							<TextHeader>Custo da ligação sem FaleMais:</TextHeader>
							<TextHeader color={colors.danger}>
								{prices?.totalwithoutFaleMais}
							</TextHeader>
						</CardWithoutPlan>
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
