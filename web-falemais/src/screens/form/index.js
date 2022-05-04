import React, { useState } from "react";

import { CardPlan } from "../../components/CardPlans";
import { DropdownComponent } from "../../components/Dropdown";
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
		const response = await calculatePrices({ form });
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
							<DropdownComponent
								placeholder="DDD de origem"
								onSelect={(e) => updateForm({ origin: e, type: "origin" })}
							/>
						</ContainerInput>
						<ContainerInput>
							<DropdownComponent
								placeholder="DDD de destino"
								firstOption={form.origin}
								onSelect={(e) => updateForm({ destine: e, type: "destine" })}
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
							selected={form.plan === 0 ? true : form.plan === "1"}
							onClick={(obj) => updateForm({ plan: obj.plan, type: obj.type })}
						/>
						<CardPlan
							selected={form.plan === 0 ? true : form.plan === "2"}
							onClick={(obj) => updateForm({ plan: obj.plan, type: obj.type })}
							plan="professional"
						/>
						<CardPlan
							selected={form.plan === 0 ? true : form.plan === "3"}
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
