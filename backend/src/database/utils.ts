import { AppDataSource } from "./data-source";
import { CodesDDD } from "../entity/DDD";

export async function findAllCodesDDD() {
	try {
		await AppDataSource.initialize();

		const allCodes = await AppDataSource.createQueryBuilder()
			.select("codes_ddd.origin")
			.from(CodesDDD, "codes_ddd")
			.where("codes_ddd.origin > :id", { id: "0" })
			.getMany();

		return allCodes;
	} catch (error) {
		console.log("error", error);
	} finally {
		await AppDataSource.destroy();
	}
}

export async function GetPricePerMinutes({ origin, destine }) {
	try {
		await AppDataSource.initialize();
		const allCodes = await AppDataSource.createQueryBuilder()
			.select("codes_ddd")
			.from(CodesDDD, "codes_ddd")
			.where("codes_ddd.origin = :origin AND codes_ddd.destine = :destine", {
				origin,
				destine,
			})
			.getMany();
		return allCodes;
	} catch (error) {
		console.log("error", error);
	} finally {
		await AppDataSource.destroy();
	}
}
