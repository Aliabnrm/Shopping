import { useState } from "react";
import Button from "../button/Button";
import Container from "../container/Container";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

function Login() {
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="mt-10">
      <Container>
        <div className="bg-green-600  p-10 rounded flex-col w-96 m-auto h-96  ">
          <label htmlFor="username">username</label>
          <br />
          <input
            className="rounded w-full mt-1 mb-3 "
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
          />
          <br />
          <label className="" htmlFor="password">
            password
          </label>
          <br />
          <input
            className="rounded w-full mt-1"
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
          />
          <br />
          <Button
            className="w-full mt-20 bg-white "
            onClick={() => handleLogin(user.username, user.password)}
          >
            login
          </Button>
        </div>
      </Container>
    </div>
  );
}
export default Login;
