import Button from "../button/Button";
import Cartitem from "../cartitem/Cartitem";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        <h1 className="font-bold text-center mt-5 mb-10 text-3xl  ">
          Shopping
        </h1>
        <div className="flex justify-between items-center ">
          <h4>Products</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>

        {cartItems.map((item) => (
          <Cartitem {...item} key={item.id} />
        ))}
        <div className="bg-gray-200 rounded p-6 mt-40 flex items-center justify-between">
          <Button className="mt-5" variant="success">
            Buy
          </Button>
          <h4>TotalPrice:$2000</h4>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
