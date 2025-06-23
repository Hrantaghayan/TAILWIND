import { CardItem } from "./CardItem";
export function Cart({ cartItems, removeFromCart }) {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold dark:text-white">Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CardItem item={cartItem} onRemove={removeFromCart} />
          </li>
        ))}
      </ul>
    </>
  );
}
