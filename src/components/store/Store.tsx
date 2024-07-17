import { Link } from "react-router-dom";
import Container from "../container/Container";
import Productitem from "../productitem/Productitem";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { IProduct } from "../types/server";

function Store() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <Container>
        <h1 className="text-2xl mt-5">New Products</h1>

        <div className="grid grid-cols-4 gap-4 mt-4 shadow-lg">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Productitem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Store;
