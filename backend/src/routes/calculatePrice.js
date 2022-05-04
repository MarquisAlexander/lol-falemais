const round = require("../utils");

async function getPricePerMinutes({ origin, destine }) {
	if (origin == "011" && destine == "016") {
		return 1.9;
	} else if (origin == "016" && destine == "011") {
		return 2.9;
	} else if (origin == "011" && destine == "017") {
		return 1.7;
	} else if (origin == "017" && destine == "011") {
		return 2.7;
	} else if (origin === "011" && destine === "018") {
		return 0.9;
	} else if (origin === "018" && destine === "011") {
		return 1.9;
	}
}

async function calcDiffMinutes({ plan, time }) {
	if (Number(plan) === 1) {
		return Math.abs(time - 30);
	} else if (Number(plan) === 2) {
		return Math.abs(time - 60);
	} else if (Number(plan) === 3) {
		return Math.abs(time - 120);
	}
}

async function calculateExtraPrice({ pricePerMin }) {
	let find10Porcent = (10 / 100) * Number(pricePerMin);
	let soma = find10Porcent + pricePerMin;

	return round(soma, 2);
}

async function calculatePriceWithoutPlan({ time = 0, pricePerMin = 0 }) {
	return time * pricePerMin;
}

async function calculatePriceWithPlan({
	calculatePriceWithPorcentageExtra = 0,
	diff = 0,
}) {
	return round(calculatePriceWithPorcentageExtra * diff, 2);
}

async function calculatePrice({ origin = 0, destine = 0, time = 0, plan = 0 }) {
	let pricePerMin = await getPricePerMinutes({ origin, destine });
	let diff = await calcDiffMinutes({ plan, time });
	let totalPrice = 0;

	if (diff > 0) {
		let calculatePriceWithPorcentageExtra = await calculateExtraPrice({
			pricePerMin,
		});

		totalPrice = await calculatePriceWithPlan({
			calculatePriceWithPorcentageExtra,
			diff,
		});
	}

	return {
		totalWithFaleMais: totalPrice,
		totalwithoutFaleMais: await calculatePriceWithoutPlan({
			time,
			pricePerMin,
		}),
	};
}

module.exports = {
	calculatePrice: function (props) {
		let res = calculatePrice({
			origin: props?.origin,
			destine: props?.destine,
			time: props?.time,
			plan: props?.plan,
		});
		return res;
	},
	getPricePerMinutes: function (props) {
		let res = getPricePerMinutes({
			origin: props.origin,
			destine: props.destine,
		});
		return res;
	},
	calcDiffMinutes: function (props) {
		let res = calcDiffMinutes({
			plan: props.plan,
			time: props.time,
		});
		return res;
	},
	calculateExtraPrice: function (props) {
		let res = calculateExtraPrice({
			pricePerMin: props.pricePerMin,
		});
		return res;
	},
	calculatePriceWithoutPlan: function (props) {
		let res = calculatePriceWithoutPlan({
			pricePerMin: props.pricePerMin,
			time: props.time,
		});
		return res;
	},
	calculatePriceWithPlan: function (props) {
		let res = calculatePriceWithPlan({
			calculatePriceWithPorcentageExtra:
				props.calculatePriceWithPorcentageExtra,
			diff: props.diff,
		});
		return res;
	},
};
