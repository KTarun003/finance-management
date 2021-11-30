import { Entity, Column} from "typeorm";

@Entity
export class Analytics{

	@Column()
	month: number;

	@Column()
	year: number;

	@Column()
	principle: string;

	@Column()
	interest: number;

	@Column()
	p_percent: number;

	@Column()
	i_percent: number;
}
