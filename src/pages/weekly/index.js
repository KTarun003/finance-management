import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';

class Weekly extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add New Loan(Weekly Interest)" />
				<form name="Weekly-form">
					<div className="position-relative row form-group">
						<label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
						<div className="col-sm-10">
							<input name="name" id="Name" placeholder="Enter Name" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
						<div className="col-sm-10">
							<input name="address" id="address" placeholder="Enter Address" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="phone" className="col-sm-2 col-form-label">Phone Number</label>
						<div className="col-sm-10">
							<input name="phone" id="phone" placeholder="Enter Phone Number" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="Asset" className="col-sm-2 col-form-label">Asset</label>
						<div className="col-sm-10">
							<input name="asset" id="Asset" placeholder="Enter Asset" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="principle" className="col-sm-2 col-form-label">Principle</label>
						<div className="col-sm-10">
							<input name="principle" id="principle" placeholder="Enter Principle Amount" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="rate" className="col-sm-2 col-form-label">Rate</label>
						<div className="col-sm-10">
							<input name="rate" id="rate" placeholder="Enter Interest Rate" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="period" className="col-sm-2 col-form-label">Period</label>
						<div className="col-sm-10">
							<input name="period" id="period" placeholder="Enter Period of Loan" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="times" className="col-sm-2 col-form-label">No of Loans</label>
						<div className="col-sm-10">
							<input name="times" id="times" placeholder="Enter Number of Loans" type="text" className="form-control" />
						</div>
					</div>

					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-primary" id="btn-submit-Weekly">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Weekly;