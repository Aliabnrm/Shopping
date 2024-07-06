import { IProduct } from "../../components/types/server";
type Productitem = IProduct;

function Productitem({ title, price, description, image }: Productitem) {
  return (
    <div className="shadow border rounded pb-2 h-96   ">
      <img className="rounded-t w-40 h-48 m-auto " src={image} alt="" />
      <div className="flex justify-between flex-row-reverse p-4">
        <h3>{title}</h3>
        <span>{price}</span>
      </div>
      <div className="px-4 mt-1">
        <p className="line-clamp-2 ">{description}</p>
      </div>
    </div>
  );
}

export default Productitem;
