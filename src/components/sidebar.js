import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
	render() {
		return (
			<div className="app-sidebar sidebar-shadow">
				<div className="scrollbar-sidebar">
					<div className="app-sidebar__inner">
						<ul className="vertical-nav-menu">
							<li className="app-sidebar__heading">Dashboard</li>
							<li>
								<Link to="/" >
									<i className="metismenu-icon pe-7s-display1">
									</i>
									Main Dashboard
								</Link>
							</li>
							<li className="app-sidebar__heading">New Record</li>
							<li>
								<Link to="/monthly" >
									<i className="metismenu-icon pe-7s-add-user">
									</i>
									Monthly Interest
								</Link>
							</li>
							<li>
								<Link to="/weekly" >
									<i className="metismenu-icon pe-7s-add-user">

									</i>
									Weekly Interest
								</Link>
							</li>
							<li className="app-sidebar__heading">Recovery</li>
							<li>
								<Link to="/principle" >
									<i className="metismenu-icon pe-7s-cash">
									</i>Principle Recovery
								</Link>
							</li>
							<li>
								<Link to="/interest" >
									<i className="metismenu-icon pe-7s-cash">
									</i>Interest Recovery
								</Link>
							</li>
							<li>
								<Link to="/complete" >
									<i className="metismenu-icon pe-7s-cash">
									</i>Whole Recovery
								</Link>
							</li>
							<li className="app-sidebar__heading">Lists</li>
							<li>
								<Link to="/loans" >
									<i className="metismenu-icon pe-7s-users">
									</i>All Loans
								</Link>
							</li>
							<li>
								<Link to="/recoveries" >
									<i className="metismenu-icon pe-7s-users">
									</i>Recoveries
								</Link>
							</li>
							<li>
								<Link to="/pending" >
									<i className="metismenu-icon pe-7s-users">
									</i>
									Pending Loans
								</Link>
							</li>
							<li className="app-sidebar__heading">Admin Features</li>
							<li>
								<Link to="/edit" >
									<i className="metismenu-icon pe-7s-pen">
									</i>
									Edit Details
								</Link>
							</li>
							<li>
								<Link to="/settings" >
									<i className="metismenu-icon pe-7s-tools">
									</i>
									Settings
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar;