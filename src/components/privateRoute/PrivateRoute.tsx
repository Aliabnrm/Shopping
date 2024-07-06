import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const { islogin } = useShoppingCartContext();

  return <>{islogin ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default PrivateRoute;
