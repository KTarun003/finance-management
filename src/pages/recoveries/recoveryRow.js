import React, {Component} from 'react';

class RecoveryRow extends Component {
	render() {
		return (
			<tr>
				<td>{this.props.recovery.name}</td>
				<td>{this.props.recovery.principle}</td>
				<td>{this.props.recovery.interest}</td>
				<td>{this.props.recovery.amount}</td>
				<td>{this.props.recovery.date}</td>
				<td><div className={this.props.recovery.badge}>{this.props.recovery.recoveryType}</div></td>
			</tr>
		);
	}
}

export default RecoveryRow;