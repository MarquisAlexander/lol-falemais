import { findAllCodesDDD } from "../database/utils";

export async function GetAllCodes() {
	const resp = await findAllCodesDDD();
	const array = resp.map((item) => item.origin);
	let allCodes = array.filter((c, index) => {
		return array.indexOf(c) === index;
	});

	return allCodes;
}
