import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class CodesDDD {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	origin: string;

	@Column()
	destine: string;

	@Column()
	pricepermin: string;
}
