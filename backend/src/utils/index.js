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

module.exports = round