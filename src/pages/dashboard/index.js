import React, {Component} from 'react';
import PageTitle from "../../components/pageTitle";
import Table from "./table";
import {Query} from 'react-apollo';
import gql from "graphql-tag";

const DASH_QUERY = gql`
    query Dashboard{
        dashboard {
            todayLoans{
				id
                name
                principle
				interest
                rdate
                status
            }
            tomorrowLoans{
				id
                name
                principle
                interest
                rdate
                status
            }
        }
	}
`;

class Dashboard extends Component {
	render() {
		return (
			<Query query={DASH_QUERY}>
				{
					({loading, error, data}) => {
						if (loading) return <h1>Loading...</h1>
						if (error) {
							console.log(error);
							return <h1>Error :( </h1>
						}
						return <div className="app-main__inner">
							<PageTitle title="Analytics Dashboard" />
							<div className="row">
								<div className="col-md-6">
									<h1>Graph 1</h1>
								</div>
								<div className="col-md-6">
									<h1>Graph 2</h1>
								</div>
							</div>
							<hr />
							<div className="row">
								<Table title="Today's Pending Loans" loans={data.dashboard.todayLoans} />
								<Table title="Tomorrow's Pending Loans" loans={data.dashboard.tomorrowLoans} />
							</div>
						</div>
					}
				}
			</Query>
		);
	}
}

export default Dashboard;