import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export default function Select({
  title,
  options,
  className,
  value,
  onChange,
}) {
  return (
    <div className="relative dark:text-black">
      <select
        className={twMerge(
          `w-24 appearance-none border border-gray-300 bg-white p-4 ${className}`
        )}
        onChange={(e) => onChange && onChange(e.target.value)}
        value={value || ""}
        >
        <option value="" disabled hidden>
          {title}
        </option>
        {options?.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="flex-center pointer-events-none absolute inset-y-0 right-0 pr-3">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
