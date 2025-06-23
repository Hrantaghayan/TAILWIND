import Select from "./Select";
import { SIZEES, QTY } from "../constant";
import { useState } from "react";

export function ShoeDetail({ shoe, onClickAdd }) {
  const [form, setForm] = useState({
    size: null,
    qty: null,
  });

  return (
    <div className="flex flex-col space-y-4 dark:text-white lg:flex-row-reverse">
      {/* Shoe Image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} alt="img" className="animate-float" />
        </div>
      </div>

      <div className="flex-1 space-y-6">
        {/* Shoe Text Details */}
        <div className="md:text-9xlv text-5xl font-black">{shoe.title}</div>
        <div className="font-medium md:text-xl">{shoe.description}</div>
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">
            {shoe.price}$
          </div>
          <Select
            onChange={(qty) => setForm({ ...form, qty })}
            title="QTY"
            options={QTY}
            value={form.qty || ""}
          />
          <Select
            title="SIZE"
            options={SIZEES}
            onChange={(size) => setForm({ ...form, size })}
            value={form.size || ""}
          />
        </div>

        {/* Shoe Buttons and links */}
        <div className="space-x-10">
          <button
            className="btn-press-anim h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 dark:bg-white dark:text-black"
            onClick={() => onClickAdd(shoe, form.qty, form.size)}>
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4">
            Vew Details
          </a>
        </div>
      </div>
    </div>
  );
}
