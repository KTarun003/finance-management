import React from 'react';
import Sidebar from './components/sidebar';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

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

class App extends React.Component {
	render() {
		return (
			<div className="app-container app-theme-white body-tabs-shadow fixed-sidebar">
				<div className="app-main">
					<Router>
						<Sidebar />
						<div className="app-main__outer" >
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
								<Route path="*" element={<Dashboard />} />
							</Routes>
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default App
