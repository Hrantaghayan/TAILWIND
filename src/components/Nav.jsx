import { useState } from "react";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingBag } from "react-icons/fi";
const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({ onClickShoppingButton }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="relative z-10 flex flex-wrap items-center justify-between">
      {/* Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white" />
      </a>
      {/* Burger button */}
      <button
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden dark:text-gray-400 dark:hover:bg-gray-700"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}>
        <RxHamburgerMenu size={25} />
      </button>
      {/* menu list */}
      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
        <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 text-lg lg:flex lg:flex-row lg:space-x-8 lg:border-none lg:bg-transparent lg:dark:text-white">
          {ROUTES?.map((route, i) => (
            <li
              key={route}
              className={`cursor-pointer px-3 py-2 lg:hover:bg-transparent lg:hover:text-blue-500 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i === 3 || i === 4) && "lg:text-white"}`}>
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* Cart button*/}
      <div
        className="btn-press-anim fixed bottom-4 left-4 lg:static lg:mr-8"
        onClick={onClickShoppingButton}>
        <div className="flex-center h-12 w-12 cursor-pointer rounded-full bg-white shadow-md">
          <FiShoppingBag />
        </div>
      </div>
    </nav>
  );
}
