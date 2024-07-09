import { useEffect, useState } from "react";
import Button from "../button/Button";
import { getProduct } from "../services/api";
import { IProduct } from "../types/server";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function Cartitem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const {
    handleDecreaseProductQty,
    handleRemoveProduct,
    handleIncreaseProductQty,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="flex flex-row-reverse">
      <Link to={`product/${id}`}>
        <img className="rounded w-28" src={product?.image} alt="" />
      </Link>
      <div className="mr-4 mt-2">
        <h3 className="">{product?.title}</h3>
        <div className="mt-2">
          <Button
            onClick={() => handleRemoveProduct(id)}
            className="mr-4 mt-4"
            variant="danger"
          >
            Remove
          </Button>
          <Button
            onClick={() => handleIncreaseProductQty(id)}
            variant="primary"
          >
            +
          </Button>
          <span className="p-2">{qty}</span>
          <Button
            onClick={() => handleDecreaseProductQty(id)}
            variant="primary"
          >
            -
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cartitem;
