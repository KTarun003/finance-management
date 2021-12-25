import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';
import SearchBar from '../../components/searchBar';

class Edit extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Edit Details" />
				<div className="row">
					<div className="col-md-12">
						<div className="main-card mb-3 card">
							<div className="card-header">Loans</div>
							<SearchBar />
							<div className="table-responsive">
								<table className="align-middle mb-0 table table-borderless table-striped table-hover">
									<thead>
									<tr>
										<th className="text-center">Name</th>
										<th className="text-center">Principle</th>
										<th className="text-center">Interest</th>
										<th className="text-center">Issue Date</th>
										<th className="text-center">Return Date</th>
										<th className="text-center">Status</th>
									</tr>
									</thead>
									<tbody id="Edit">

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

export default Edit;