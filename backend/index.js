const express = require("express");
const cors = require("cors");

const app = express();
const calculatePrice = require("./src/calculatePrice");

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

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
