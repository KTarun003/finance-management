import React, {Component} from 'react';
import PageTitle from '../../components/pageTitle';

class Monthly extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Add New Loan (Monthly Interest)" />
				<form name="Monthly-form">
					<div className="position-relative row form-group">
						<label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
						<div className="col-sm-10">
							<input name="name" id="Name" placeholder="Enter Name" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group">
						<label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
						<div className="col-sm-10">
							<input name="addres" id="address" placeholder="Enter Address" type="text" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-group"><label htmlFor="phone" className="col-sm-2 col-form-label" >Phone Number</label>
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
						<label htmlFor="principle" className="col-sm-2 col-form-label" >Principle</label>
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
						<label htmlFor="Return_Date" className="col-sm-2 col-form-label">Return Date</label>
						<div className="col-sm-10">
							<input name="date" id="Return_Date" placeholder="" type="date" className="form-control" />
						</div>
					</div>
					<div className="position-relative row form-check">
						<div className="col-sm-10 offset-sm-2">
							<button className="btn btn-primary" id="btn-submit-Monthly">Submit</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Monthly;