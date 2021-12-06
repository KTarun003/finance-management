import React, {Component} from 'react';

class LoanRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.loan.name}</td>
				<td>{this.props.loan.principle}</td>
				<td>{this.props.loan.interest}</td>
				<td>{this.props.loan.idate}</td>
				<td>{this.props.loan.rdate}</td>
				<td><div className={this.props.loan.statusBadge}>{this.props.loan.status}</div></td>
			</tr>
		);
	}
}

export default LoanRow;