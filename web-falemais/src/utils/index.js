import { api } from "../services/api";

export async function calculatePrices({ form = {} }) {
	try {
		const response = await api.post("/calcpriceplan", form);
		return response.data;
	} catch (error) {}
}

export const formatterMoney = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
