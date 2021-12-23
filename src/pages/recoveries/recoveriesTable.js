import React, {Component} from 'react';
import SearchBar from "../../components/searchBar";
import RecoveryRow from "./recoveryRow";

class RecoveriesTable extends Component {

	setBadge(r){
		if(r.recoveryType === "Complete"){
			r.badge = "badge badge-success";
		}
		else if(r.recoveryType === "Interest"){
			r.badge = "badge badge-info"
		}
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="main-card mb-3 card">
						<div className="card-header">Recoveries</div>
						<SearchBar />
						<div className="table-responsive">
							<table className="align-middle mb-0 table table-borderless table-striped table-hover">
								<thead>
								<tr>
									<th>Name</th>
									<th>Principle</th>
									<th>Interest</th>
									<th>Amount</th>
									<th>Date</th>
									<th>Type</th>
								</tr>
								</thead>
								<tbody id="recoveries">
								{this.props.recoveries.map((r) => {
									this.setBadge(r);
									return <RecoveryRow key={r.id} recovery={r}/>;
								})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RecoveriesTable;