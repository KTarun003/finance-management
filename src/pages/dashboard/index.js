import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import Card from "./card";
import Table from "./table";

class Dashboard extends Component {
	render() {
		return (
			<div className="app-main__inner">
				<PageTitle title="Analytics Dashboard" />
				<div className="row" style={{ margin: 10}}>
					<Card bgColor="bg-night-sky" heading=" Total No Of Loans" num={250} />
					<Card bgColor="bg-arielle-smile" heading=" Total Principle " num={250} />
					<Card bgColor="bg-grow-early" heading=" Total Interest " num={250} />
				</div>
				<div className="row" style={{ margin: 10}}>
					<Card bgColor="bg-royal" heading=" Total Loans Given Previous Month " num={250} />
					<Card bgColor="bg-malibu-beach" heading=" Total Principle Received Previous Month " num={250} />
					<Card bgColor="bg-happy-itmeo" heading=" Total Interest Received Previous Month" num={250} />
				</div>
				<div className="row" style={{ margin: 10}}>
					<Card bgColor="bg-midnight-bloom" heading=" Total Loans Given This Month " num={250} />
					<Card bgColor="bg-happy-fisher" heading=" Total Principle Received This Month " num={250} />
					<Card bgColor="bg-happy-green" heading=" Total Interest Received This Month " num={250} />
				</div>
				<div className="row">
					<Table title="Today's Pending Loans" bgColor="bg-dark" />
					<Table title="Tomorrow's Pending Loans" bgColor="bg-secondary" />
				</div>
			</div>
		);
	}
}

export default Dashboard;