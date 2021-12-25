import React, {Component} from 'react';
import SearchBar from './searchBar';
import LoanRow from './loanRow';
import {setBadge} from '../helpers/ui'

class LoansTable extends Component {

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="main-card mb-3 card">
						<div className="card-header">{this.props.title}</div>
						<SearchBar />
						<div className="table-responsive">
							<table className="align-middle mb-0 table table-borderless table-striped table-hover text-dark">
								<thead>
								<tr>
									<th>Name</th>
									<th>Principle</th>
									<th>Interest</th>
									<th>Issue Date</th>
									<th>Return Date</th>
									<th>Status</th>
								</tr>
								</thead>
								<tbody>
								{
									this.props.loans.map((l) => {
										l.statusBadge = setBadge(l);
										return <LoanRow key={l.id} loan={l}/>;
									})
								}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default LoansTable;