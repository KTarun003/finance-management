import React, {Component} from 'react';

class Card extends Component {
	render() {
		return (
			<div className="col-md-4">
				<div className={"card text-white "+this.props.bgColor}>
					<h5 className="card-header">
						{this.props.heading}
					</h5>
					<div className="card-body">
						<p className="card-text">
							{this.props.num}
						</p>
					</div>

				</div>
			</div>
		);
	}
}

export default Card;