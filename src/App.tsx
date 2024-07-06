import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import Layout from "./components/layout/Layout";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import { useShoppingCartContext } from "./components/context/ShoppingCartContext";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./components/login/Login";
function App() {
  const { islogin } = useShoppingCartContext();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/login"
          element={islogin ? <Navigate to="/" /> : <Login />}
        />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
