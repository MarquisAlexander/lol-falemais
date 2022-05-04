const calculatePrice = require("../routes/calculatePrice");

describe("Testing isolated functions", () => {
	it("Calculate difference between plan time limit and desired time", async () => {
		const data = await calculatePrice.getPricePerMinutes({
			origin: "011",
			destine: "017",
		});
		expect(data).toBe(1.7);
	});
	it("Calculate price with base in origin-destine", async () => {
		const data = await calculatePrice.calcDiffMinutes({
			plan: "1",
			time: "80",
		});
		expect(data).toBe(50);
	});
	it("Calculate the price to be paid with 10% more than the original value", async () => {
		const data = await calculatePrice.calculateExtraPrice({
			pricePerMin: 1.7,
		});
		expect(data).toBe(1.87);
	});

	it("Calculate value price with plan", async () => {
		const data = await calculatePrice.calculatePriceWithPlan({
			calculatePriceWithPorcentageExtra: 1.87,
			diff: 20,
		});
		expect(data).toBe(37.4);
	});

	it("Calculate value price without plan", async () => {
		const data = await calculatePrice.calculatePriceWithoutPlan({
			time: 80,
			pricePerMin: 1.7,
		});
		expect(data).toBe(136);
	});
});

describe("Testing main flow", () => {
	it("Main flow", async () => {
		const data = await calculatePrice.calculatePrice({
			origin: "011",
			destine: "017",
			time: "80",
			plan: "2",
		});
		expect(data).toStrictEqual({
			totalWithFaleMais: 37.4,
			totalwithoutFaleMais: 136,
		});
	});
});
