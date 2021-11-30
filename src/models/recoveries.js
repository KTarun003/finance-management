import { Entity, Column} from "typeorm";

@Entity
export class Recoveries{

	@Column()
	name: string;

	@Column()
	principle: number;

	@Column()
	date: string;

	@Column()
	interest: number;

}
