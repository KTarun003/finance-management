import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';
import SearchBar from '../../components/searchBar';
import RecoveryRow from './recoveryRow';

class Recoveries extends Component {
	render() {
		let recoveries = [
			{
				name: "Sandra",
				principle: 25000,
				interest: 2500,
				date: new Date(2021, 9, 30).toString()
			},
			{
				name: "Sandra",
				principle: 15000,
				interest: 1500,
				date: new Date(2021, 10, 30).toString()
			},
			{
				name: "Sandra",
				principle: 10000,
				interest: 1000,
				date: new Date(2021, 11, 31).toString()
			}
		];
		return (
			<div className="app-main__inner">
				<PageTitle title="List Of Recoveries" />
				<div className="row">
					<div className="col-md-12">
						<div className="main-card mb-3 card">
							<div className="card-header">Loans</div>
							<SearchBar />
							<div className="table-responsive">
								<table className="align-middle mb-0 table table-borderless table-striped table-hover">
									<thead>
									<tr>
										<th>Name</th>
										<th>Principle</th>
										<th>Interest</th>
										<th>Date</th>
									</tr>
									</thead>
									<tbody id="recoveries">
									{recoveries.map((r) => <RecoveryRow recovery={r}/>)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Recoveries;