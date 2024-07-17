import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosExit } from "react-icons/io";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import Button from "../button/Button";
function Navbar() {
  const { cartQty, handleLogOut } = useShoppingCartContext();

  return (
    <div className="h-14 border-b shadow ">
      <Container>
        <div className=" flex justify-between flex-row items-center">
          <ul className="flex flex-row">
            <li className="ml-4">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="ml-4">
              <Link to="./store">Store</Link>{" "}
            </li>
          </ul>

          <div className="flex justify-center items-center pt-2">
            <Button onClick={handleLogOut}>
              <IoIosExit className="w-6 h-8 " />
            </Button>
            <Link className="relative" to="/cart">
              <button className="">
                <FaCartShopping
                  className="w-6 h-6
                 flex items-center justify-center text-center"
                />
              </button>
              <span className="absolute w-7 h-7 bg-red-600 flex justify-center items-center rounded-full text-white -top-3 -right-6">
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
