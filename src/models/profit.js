import { Entity, Column} from "typeorm";

@Entity
export class Profit{

	@Column()
	amount: number;

	@Column()
	date: string;

}
