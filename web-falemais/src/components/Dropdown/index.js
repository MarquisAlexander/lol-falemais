import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import { Container } from "./styles";

export function DropdownComponent({
	firstOption = 0,
	onSelect = () => {},
	placeholder = "Selecione",
}) {
	const codes = [
		{
			ddd: "011",
			array: ["016", "017", "018"],
		},
		{ ddd: "016", array: ["011"] },
		{ ddd: "017", array: ["011"] },
		{ ddd: "018", array: ["011"] },
	];

	return (
		<Container>
			<Dropdown
				className=".Dropdown-control"
				options={
					firstOption
						? codes[codes.findIndex((code) => code.ddd === firstOption)]?.array
						: codes.map((code) => code.ddd)
				}
				onChange={(e) => onSelect(e.value)}
				placeholder={placeholder}
				arrowClassName="arrows"
			/>
		</Container>
	);
}
