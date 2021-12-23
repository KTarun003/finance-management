import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import PageTitle from '../../components/pageTitle';
import LoansTable from '../../components/loansTable';

const PENDING_QUERY = gql`
    query Loans{
        pendingLoans {
            id
            name
            principle
            interest
            status
            idate
            rdate
        }
    }
`;

class Pending extends Component {
	render() {
		return (
			<Query query={PENDING_QUERY}>
				{
					({loading, error, data}) => {
						if (loading) return <h1>Loading...</h1>
						if (error) {
							console.log(error);
							return <h1>Error :( </h1>
						}
						return <div className="app-main__inner">
							<PageTitle title="List Of All Loans" />
							<LoansTable loans={data.pendingLoans} title="Loans" />

						</div>
					}
				}
			</Query>
		);
	}
}

export default Pending;