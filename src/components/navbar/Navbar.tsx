import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import Button from "../button/Button";
function Navbar() {
  const { cartQty, handleLogOut } = useShoppingCartContext();

  return (
    <div className="h-14 border-b shadow ">
      <Container>
        <div className=" flex justify-between flex-row-reverse items-center">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>{" "}
            </li>
            <li className="ml-4">
              <Link to="./store">فروشگاه</Link>{" "}
            </li>
          </ul>

          <div>
            <Button onClick={handleLogOut}>LogOut</Button>
            <Link className="relative" to="/cart">
              <button>سبد خرید</button>
              <span className="absolute w-8 h-8 bg-red-600 flex justify-center items-center rounded-full text-white -top-0 -right-8">
                {cartQty !== 0 ? cartQty : ""}
              </span>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
