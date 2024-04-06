import Image from "next/image";
import { IProduct } from "../types/IProduct";
import { useCartContext } from "../context/CartContext";

interface Props {
  item: IProduct;
}

export default function ListItem({ item }: Props) {
  const { addToCart } = useCartContext();

  const addToCartClick = () => {
    addToCart(item);
  };

  return (
    <div className="flex flex-col  border-2 border-black w-104 h-[500px] mb-5">
      <div className="w-[300px] h-[300px] flex items-center justify-center border-b-2 mb-4">
        <Image src={item.image} width={300} height={300} alt={item.name} />
      </div>

      <div className="w-64 pl-6 flex flex-col flex-1">
        <div>
          <span className="text-lg font-bold">{item.name}</span>
        </div>

        <div className="mb-3">{item.detail}</div>
        {item.offer ? (
          <div className="flex flex-row items-center content-center ">
            <Image src="/offer.png" width={30} height={30} alt={item.name} />
            <div className="pl-3">{item.offer}</div>
          </div>
        ) : null}
      </div>
      <div className="self-baseline w-full">
        <div className="text-right text-2xl text-emerald-700">
          {`$ ${item.price.toFixed(2)}`}
        </div>
        <button
          className=" text-center w-full justify-center p-4 bg-black text-white"
          onClick={addToCartClick}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
