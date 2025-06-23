import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { SIZEES, QTY } from "../constant";

export function CardItem({ item: { product, size, qty }, onRemove }) {
  
  return (
    <div className="cursor-pointer space-y-2 bg-gray-50 p-2 hover:bg-[#DAFFA2] dark:bg-transparent dark:hover:bg-night-50">
      <div className="flex space-x-2">
        {/* image */}
        <img className="h-24" src={product.src} alt="image_product" />
        {/* title and description */}
        <div className="flex flex-col space-y-2">
          <div className="font-bold dark:text-white">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        {/* price */}
        <div className="font-bold dark:text-white">{product.price}$</div>
      </div>
      <div className="flex justify-between pl-32">
        <div className="flex space-x-6">
          <div>
            <div className="font-bold dark:text-white">SIZE</div>
            <Select
              value={size}
              title=""
              options={SIZEES}
              className="w-16 p-1 pl-2"
            />
          </div>
          <div>
            <div className="font-bold dark:text-white">QTY</div>
            <Select
              value={qty}
              title=""
              options={QTY}
              className="w-16 p-1 pl-2"
            />
          </div>
        </div>
        <button onClick={() => onRemove(product?.id)}>
          <CiTrash size={25} className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
}
