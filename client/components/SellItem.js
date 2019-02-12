import React, { Component } from 'react';
import { SellItemForm } from './styles/SellItemForm';

class SellItem extends Component {
	render() {
		return (
			<SellItemForm>
				<form method="post">
					<fieldset>
						<label htmlFor="name">
							Item:
							<input type="text" name="name" />
						</label>
						<label htmlFor="price">
							Price:
							<input type="text" name="price" />
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
							<textarea name="description" />
						</label>
						<button disabled>Sell Item</button>
					</fieldset>
				</form>
			</SellItemForm>
		);
	}
}

export default SellItem;
