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

	setBadge(l){
		if(l.status === "Not Paid"){
			l.statusBadge = "badge badge-warning"
		}
		else if(l.status === "Interest Paid"){
			l.statusBadge = "badge badge-info"
		}
		else if(l.status === "Paid"){
			l.statusBadge = "badge badge-success"
		}
		else {
			l.status = "Error";
			l.statusBadge = "badge badge-danger";
		}
	}

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
									<th>Recover</th>
								</tr>
							</thead>
							<tbody>
							{this.props.loans.map(l =>{

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