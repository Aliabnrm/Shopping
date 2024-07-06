import { useParams } from "react-router-dom";
import Button from "../button/Button";
import Container from "../container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { IProduct } from "../types/server";
import { useShoppingCartContext } from "../context/ShoppingCartContext";

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
        <div className="h-96 shadow mt-4 grid grid-cols-12">
          <div className=" col-span-10 text-right">
            <h1>{product?.title}</h1>
            <div>
              <p>{product?.price}</p>
              <p>{product?.description}</p>
            </div>
          </div>
          <div className=" col-span-2 p-4">
            <img src={product?.image} alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                onClick={() =>
                  handleIncreaseProductQty(parseInt(params.id as string))
                }
                className="mt-2 w-full"
                variant="primary"
              >
                Add To Cart
              </Button>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full"
                    variant="primary"
                  >
                    +
                  </Button>

                  <span className="flex justify-center items-center">
                    {getProductQty(parseInt(params.id as string))}
                  </span>

                  <Button
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                    className="mt-2 w-full"
                    variant="primary"
                  >
                    -
                  </Button>
                </div>
                <Button
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                  className="mt-2 w-full"
                  variant="danger"
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
