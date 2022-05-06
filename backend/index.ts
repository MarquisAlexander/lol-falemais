const express = require("express");
const cors = require("cors");
const reflect = require("reflect-metadata");
import { GetAllCodes } from "./src/routes/operationsDataBase";

const app = express();
const calculatePrice = require("./src/routes/calculatePrice");

app.use(cors());
app.use(express.json());

app.post("/calcpriceplan", async (request, response) => {
	let body = await request.body;
	response.json(
		await calculatePrice.calculatePrice({
			origin: body?.origin,
			destine: body?.destine,
			time: body?.time,
			plan: body?.plan,
		}),
	);
});

app.get("/getallcodesddd", async (request, response) => {
	let body = await GetAllCodes();
	response.json(body);
});

const PORT = 3333;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
