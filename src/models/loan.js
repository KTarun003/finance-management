import { Entity, Column} from "typeorm";

@Entity
export class Loan{

	@Column()
	id: string;

	@Column()
	name: string;

	@Column()
	phone: string;

	@Column()
	address: string;

	@Column()
	asset: number;

	@Column()
	principle: number;

	@Column()
	rate: number;

	@Column()
	idate: string;

	@Column()
	rdate: string;

	@Column()
	interest: number;

	@Column()
	amount: number;

	@Column()
	status: number;

	@Column()
	times: number;

	@Column()
	period: number;

	@Column()
	penalty: number;
}
