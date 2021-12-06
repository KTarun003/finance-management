import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';
import LoansTable from '../../components/loansTable';

class Loans extends Component {
	render() {
		let loans = [
			{
				name: "Sandra",
				principle: 25000,
				interest: 2500,
				status: "Paid",
				idate: new Date(2021, 9, 30).toString(),
				rdate: new Date(2021, 10, 30).toString(),
				statusBadge: "badge badge-success"
			},
			{
				name: "Sandra",
				principle: 15000,
				interest: 1500,
				status: "Interest Paid",
				idate: new Date(2021, 10, 30).toString(),
				rdate: new Date(2021, 11, 30).toString(),
				statusBadge: "badge badge-warning"
			},
			{
				name: "Sandra",
				principle: 10000,
				interest: 1000,
				status: "Not Paid",
				idate: new Date(2021, 10, 30).toString(),
				rdate: new Date(2021, 11, 31).toString(),
				statusBadge: "badge badge-danger"
			}
		];
		return (
			<div className="app-main__inner">
				<PageTitle title="List Of All Loans" />
				<LoansTable loans={loans} title="Loans" />
			</div>
		);
	}
}

export default Loans;