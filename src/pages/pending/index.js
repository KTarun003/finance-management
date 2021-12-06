import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';
import LoansTable from '../../components/loansTable';

class Pending extends Component {
	render() {
		let loans = [
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
				<PageTitle title="List of Pending Loans" />
				<LoansTable loans={loans} title="Pending Loans" />
			</div>
		);
	}
}

export default Pending;