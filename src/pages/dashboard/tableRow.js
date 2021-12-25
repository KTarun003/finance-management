import React, {Component} from 'react';

class TableRow extends Component {
	render() {
		return (
			<tr>
				<td className="text-white">{this.props.loan.name}</td>
				<td className="text-white">{this.props.loan.principle}</td>
				<td className="text-white">{this.props.loan.interest}</td>
				<td className="text-white"><div className={this.props.statusBadge}>{this.props.loan.status}</div></td>
			</tr>
		);
	}
}

export default TableRow;