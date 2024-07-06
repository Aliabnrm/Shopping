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
    <div>
      <Container>
        <div className="bg-slate-300 p-12 rounded">
          <input
            onChange={handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={user.username}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
          />
          <Button onClick={() => handleLogin(user.username, user.password)}>
            login
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Login;