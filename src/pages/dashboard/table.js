import React, {Component} from 'react';
import TableRow from './tableRow';
import {setBadge} from "../../helpers/ui";

class Table extends Component {

	render() {
		return (
			<div className="col-md-6">
				<div className={"main-card mb-3 card text-white bg-royal"}>
					<div className="card-header">
						{this.props.title}
					</div>
					<div className="table-responsive ">
						<table className="align-middle mb-0 table table-borderless table-hover text-white">
							<thead>
								<tr>
									<th>Name</th>
									<th>Principle</th>
									<th>Interest</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
							{this.props.loans.map(l =>{
										l.statusBadge = setBadge(l);
								return	<TableRow className="text-white" key={l.id} loan={l} statusBadge={l.statusBadge} />
								}
							)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Table;