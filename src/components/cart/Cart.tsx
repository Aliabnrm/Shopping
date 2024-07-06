import Button from "../button/Button";
import Cartitem from "../cartitem/Cartitem";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div>
      <Container>
        {cartItems.map((item) => (
          <Cartitem {...item} key={item.id} />
        ))}

        <div className="bg-gray-200 rounded p-6">
          <p className="text-right">قیمت کل:۲۰۰۰</p>
          <p className="text-right">تخفیف شما:۳۰۰۰</p>
          <p className="text-right">قیمت نهایی:۱۹۰۰</p>
        </div>
        <Button className="mt-2" variant="success"></Button>
      </Container>
    </div>
  );
}

export default Cart;
