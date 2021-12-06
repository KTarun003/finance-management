import React, {Component} from 'react';
import TableRow from './tableRow';

let loan = {
	name: "Sandra",
	principle: 25000,
	interest: 2500,
	status: "Paid"
};
let badge = "badge badge-success";
class Table extends Component {
	render() {
		return (
			<div className="col-md-6">
				<div className={"main-card mb-3 card text-white "+this.props.bgColor}>
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
									<th>Recover</th>
								</tr>
							</thead>
							<tbody>
								<TableRow className="text-white" loan={loan} statusBadge={badge} />
								<TableRow className="text-white" loan={loan} statusBadge={badge} />
								<TableRow className="text-white" loan={loan} statusBadge={badge} />
								<TableRow className="text-white" loan={loan} statusBadge={badge} />
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}

export default Table;