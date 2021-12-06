import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';

class Principle extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Recover Principle" />
				<form className="" name="Principle-form">
					<div className="position-relative row form-group">
						<label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
						<div className="col-sm-10">
							<input name="name" id="Name" placeholder="Enter Name" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="Issue_Date" className="col-sm-2 col-form-label">Issue Date</label>
						<div className="col-sm-10">
							<input name="date" id="Issue_Date" placeholder="" type="date" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-secondary" id="btn-calc-principle">Calculate Amount</button>
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="Amount" className="col-sm-2 col-form-label">Amount</label>
						<div className="col-sm-10">
							<input name="principle" id="Amount" placeholder="" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-primary" id="btn-submit-principle">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Principle;