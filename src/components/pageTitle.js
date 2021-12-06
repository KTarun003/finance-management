import React, {Component} from 'react';

class PageTitle extends Component {
	render() {
		return (
			<div className="app-page-title">
				<div className="page-title-wrapper row">
					<div className="page-title-heading col-md-10">
						<div className="page-title-icon">
							<i className="pe-7s-culture icon-gradient bg-mean-fruit"></i>
						</div>
						{this.props.title}
					</div>
					<div className="col-md-2">
						<button className="btn bg-info text-white" id="updateSheets">Sync Sheets</button>
					</div>
				</div>
			</div>
		);
	}
}

export default PageTitle;