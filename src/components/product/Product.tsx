import { useParams } from "react-router-dom";
import Button from "../button/Button";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { IProduct } from "../types/server";
import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiSolidPlusSquare } from "react-icons/bi";
import { AiFillMinusSquare } from "react-icons/ai";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    cartItems,
    getProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);
  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="h-80 shadow-xl mt-16 grid grid-cols-12">
          <div className=" col-span-2 p-4">
            <img src={product?.image} alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                className="mt-7 w-full"
                variant="success"
              >
                Add To Cart
              </Button>
            ) : (
              <>
                <div className="flex items-center justify-center mt-5">
                  <BiSolidPlusSquare
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-7 h-7"
                  />

                  <span className="ml-1 mr-1 mt-1">
                    {getProductQty(parseInt(params.id as string))}
                  </span>

                  <AiFillMinusSquare
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-7 h-7"
                  />
                </div>
                <RiDeleteBin6Line
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                  className="m-auto mt-2 w-7 h-7"
                />
              </>
            )}
          </div>

          <div className=" col-span-10 ">
            <div className="flex items-center justify-between mt-10">
              <h1>{product?.title}</h1>

              <p className="mr-7">Price: ${product?.price}</p>
            </div>

            <p className="mt-16 w-96">{product?.description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
