import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaArrowRight } from "react-icons/fa";

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

const messagesError = {
	origin: "Selecione o ddd de origem",
	destine: "Selecione o ddd de destino",
	time: "Digite o tempo de duração",
	plan: "Selecione o plano",
};

export function Form() {
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(INITIAL_STATE);
	const [prices, setPrices] = useState({
		totalWithFaleMais: 0,
		totalwithoutFaleMais: 0,
	});

	function validateForm() {
		let isValid = true;
		Object.keys(form).forEach((item) => {
			if (form[item] === 0) {
				toast.error(`${messagesError[item]}`);
				isValid = false;
			}
		});
		return isValid;
	}

	async function handleCalculatePrices() {
		setLoading(true);
		const isValid = validateForm();

		if (isValid) {
			const response = await calculatePrices({ form });
			setPrices(response);
		}
		setLoading(false);
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
			<ToastContainer />

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
						<FaArrowRight size={"1rem"} color={"#fff"} />
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
					<Content flexDirection={true}>
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
							loading={loading}
							type="with"
							price={formatterMoney.format(prices?.totalWithFaleMais)}
						/>
						<CardResume
							loading={loading}
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
