const round = (num, places) => {
	if (!("" + num).includes("e")) {
		return +(Math.round(num + "e+" + places) + "e-" + places);
	} else {
		let arr = ("" + num).split("e");
		let sig = "";
		if (+arr[1] + places > 0) {
			sig = "+";
		}

		return +(
			Math.round(+arr[0] + "e" + sig + (+arr[1] + places)) +
			"e-" +
			places
		);
	}
};

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

async function calculatePrice({ origin = 0, destine = 0, time = 0, plan = 0 }) {
	let pricePerMin = await getPricePerMinutes({ origin, destine });
	let diff = await calcDiffMinutes({ plan, time });
	let totalPrice = 0;

	if (diff > 0) {
		let calculatePriceWithPorcentageExtra = await calculateExtraPrice({
			pricePerMin,
		});

		totalPrice = round(calculatePriceWithPorcentageExtra * diff, 2);
	}

	return { totalWithFaleMais: totalPrice, totalwithoutFaleMais: 0 };
}

module.exports = {
	calculatePrice: function (props) {
		let t = calculatePrice({
			origin: props?.origin,
			destine: props?.destine,
			time: props?.time,
			plan: props?.plan,
		});
		// let t = calculatePrice({ origin: 011, destine: 017, time: 80, plan: 2 });
		return t;
	},
};
