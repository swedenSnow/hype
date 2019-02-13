import React, { Component } from 'react';
import { SellItemForm } from './styles/SellItemForm';

class SellItem extends Component {
	state = {
		name: '',
		price: '',
		description: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	render() {
		return (
			<SellItemForm>
				<form method="post">
					<fieldset>
						<label htmlFor="name">
							Item:
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="price">
							Price:
							<input
								type="text"
								name="price"
								value={this.state.price}
								onChange={this.handleChange}
							/>
						</label>
						<label htmlFor="image">
							Image:
							<input type="file" name="image" />
							"Välj fil"-knappen på höger sida plz -
							<a href="https://stackoverflow.com/questions/18917710/how-do-i-position-the-file-input-button-on-the-right-hand-side-inside-the-textfi">
								Fix it
							</a>
						</label>
						<label htmlFor="description">
							Description
							<textarea
								name="description"
								value={this.state.description}
								onChange={this.handleChange}
							/>
						</label>
						<button disabled>Sell Item</button>
					</fieldset>
				</form>
			</SellItemForm>
		);
	}
}

export default SellItem;
