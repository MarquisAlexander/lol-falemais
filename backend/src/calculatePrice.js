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

function getPricePerMinutes({ origin, destine }) {
	if (origin === 011 && destine === 016) {
		return 1.9;
	} else if (origin === 016 && destine === 011) {
		return 2.9;
	} else if (origin === 011 && destine === 017) {
		return 1.7;
	} else if (origin === 017 && destine === 011) {
		return 2.7;
	} else if (origin === 011 && destine === 018) {
		return 0.9;
	} else if (origin === 018 && destine === 011) {
		return 1.9;
	}
}

function calcDiffMinutes({ plan, time }) {
	if (plan === 1) {
		return Math.abs(time - 30);
	} else if (plan === 2) {
		return Math.abs(time - 60);
	} else if (plan === 3) {
		return Math.abs(time - 120);
	}
}

function calculateExtraPrice({ pricePerMin }) {
	let find10Porcent = (10 / 100) * Number(pricePerMin);
	let soma = find10Porcent + pricePerMin;

	return round(soma, 2);
}

function calculatePrice({ origin = 0, destine = 0, time = 0, plan = 0 }) {
	let pricePerMin = getPricePerMinutes({ origin, destine });
	let diff = calcDiffMinutes({ plan, time });
	let totalPrice = 0;

	if (diff > 0) {
		let calculatePriceWithPorcentageExtra = calculateExtraPrice({
			pricePerMin,
		});
		totalPrice = round(calculatePriceWithPorcentageExtra * diff, 2);
		console.log("preco com 10% a mais", calculatePriceWithPorcentageExtra);
		console.log("preco total final", round(totalPrice, 2));
	}

	console.log("preco", pricePerMin);
	console.log("quanto passou do limite", diff);

	return { totalWithFaleMais: totalPrice, totalwithoutFaleMais: 0 };
}

module.exports = {
	calculatePrice: function () {
		let t = calculatePrice({ origin: 011, destine: 017, time: 80, plan: 2 });
		return t;
	},
};
