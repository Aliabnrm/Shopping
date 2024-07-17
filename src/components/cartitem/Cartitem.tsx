import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { IProduct } from "../types/server";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidPlusSquare } from "react-icons/bi";
import { AiFillMinusSquare } from "react-icons/ai";

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
    <div className="flex flex-row mt-4 border-t-2 border-slate-500 justify-between">
      <div className="ml-4 mt-2 ">
        <h3 className="ml-6">{product?.title}</h3>

        <Link to={`product/${id}`}>
          <img className="rounded w-28 mt-2" src={product?.image} alt="" />
        </Link>
      </div>

      <p className="mt-28 mr-14">${product?.price}</p>

      <div className="flex items-center justify-center mt-20">
        <BiSolidPlusSquare
          className="cursor-pointer w-7 h-7"
          onClick={() => handleIncreaseProductQty(id)}
        />
        <span className="p-2">{qty}</span>

        <AiFillMinusSquare
          className="cursor-pointer w-7 h-7"
          onClick={() => handleDecreaseProductQty(id)}
        />
        <RiDeleteBin6Line
          onClick={() => handleRemoveProduct(id)}
          className="ml-3 cursor-pointer w-7 h-7"
        />
      </div>
      <p className="mt-28">$100</p>
    </div>
  );
}

export default Cartitem;
