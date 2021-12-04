import React from 'react';
import Header from './components/header/header';

// Importing pages
import Complete from './pages/complete';
import Dashboard from './pages/dashboard';
import Edit from './pages/edit';
import Interest from './pages/interest';
import Loans from './pages/loans';
import Monthly from './pages/monthly';
import Pending from './pages/pending';
import Principle from './pages/principle';
import Recoveries from './pages/recoveries';
import Settings from './pages/settings';
import Weekly from './pages/weekly';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<main >
						<Routes>
							<Route path="/complete" element={<Complete />} />
							<Route path="/" element={<Dashboard />} />
							<Route path="/edit" element={<Edit />} />
							<Route path="/interest" element={<Interest />} />
							<Route path="/loans" element={<Loans />} />
							<Route path="/monthly" element={<Monthly />} />
							<Route path="/pending" element={<Pending />} />
							<Route path="/principle" element={<Principle />} />
							<Route path="/recoveries" element={<Recoveries />} />
							<Route path="/settings" element={<Settings />} />
							<Route path="/weekly" element={<Weekly />} />
						</Routes>
					</main>
				</Router>
			</div>
		);
	}
}

export default App
