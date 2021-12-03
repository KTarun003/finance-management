import React from 'react';
import Header from './components/header/header';
import Loans from './pages/loans';
import Recoveries from './pages/recoveries';
import Settings from './pages/settings';
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
							<Route path="/about" element={<Loans />} />

							<Route path="/users" element={<Recoveries />} />

							<Route path="/" element={<Settings />} />
						</Routes>
					</main>
				</Router>
			</div>
		);
	}
}

export default App
