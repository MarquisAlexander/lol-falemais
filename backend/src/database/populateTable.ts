import { AppDataSource } from "./data-source";
import { CodesDDD } from "../entity/DDD";

export function populateTable() {
	AppDataSource.initialize()
		.then(async () => {
			const ddd0 = new CodesDDD();
			const ddd1 = new CodesDDD();
			const ddd2 = new CodesDDD();
			const ddd3 = new CodesDDD();
			const ddd4 = new CodesDDD();
			const ddd5 = new CodesDDD();
			ddd0.origin = "011";
			ddd0.destine = "016";
			ddd0.pricepermin = "1.90";
			await AppDataSource.manager.save(ddd0);
			ddd1.origin = "016";
			ddd1.destine = "011";
			ddd1.pricepermin = "2.90";
			await AppDataSource.manager.save(ddd1);
			ddd2.origin = "011";
			ddd2.destine = "017";
			ddd2.pricepermin = "1.70";
			await AppDataSource.manager.save(ddd2);
			ddd3.origin = "017";
			ddd3.destine = "011";
			ddd3.pricepermin = "2.70";
			await AppDataSource.manager.save(ddd3);
			ddd4.origin = "011";
			ddd4.destine = "018";
			ddd4.pricepermin = "0.90";
			await AppDataSource.manager.save(ddd4);
			ddd5.origin = "018";
			ddd5.destine = "011";
			ddd5.pricepermin = "1.90";
			await AppDataSource.manager.save(ddd5);
			const ddds = await AppDataSource.manager.find(CodesDDD);
			console.log("Loaded users: ", ddds);
		})
		.catch((error) => console.log(error));
}

populateTable()