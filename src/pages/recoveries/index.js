import React, {Component} from 'react';
import {Query} from 'react-apollo';
import gql from "graphql-tag";
import PageTitle from '../../components/pageTitle';
import RecoveriesTable from "./recoveriesTable";
import LoansTable from "../../components/loansTable";

const RECOVERIES_QUERY = gql`
    query Recoveries{
        recoveries {
            id
            name
            principle
            interest
            amount
            date
            recoveryType
        }
    }
`;

class Recoveries extends Component {
	render() {
		return (
			<Query query={RECOVERIES_QUERY}>
				{
					({loading, error, data}) => {
						if (loading) return <h1>Loading...</h1>
						if (error) {
							console.log(error);
							return <h1>Error :( </h1>
						}
						return <div className="app-main__inner">
							<PageTitle title="List Of Recoveries" />
							<RecoveriesTable recoveries={data.recoveries} />
						</div>
					}
				}
			</Query>

		);
	}
}

export default Recoveries;