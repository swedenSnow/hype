export default function calcTotalPrice(cart) {
	return cart.reduce((total, cartItem) => {
		if (!cartItem.item) return total;
		return total + cartItem.quantity * cartItem.item.price;
	}, 0);
}
