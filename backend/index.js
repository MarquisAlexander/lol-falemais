const express = require("express");
const cors = require("cors");

const app = express();
const calculatePrice = require("./src/calculatePrice");

app.use(cors());

app.get("/calcpriceplan", async (request, response) => {
	response.json(
		calculatePrice.calculatePrice({
			origin: 011,
			destine: 017,
			time: 80,
			plan: 2,
		}),
	);
});

const PORT = 3001;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
