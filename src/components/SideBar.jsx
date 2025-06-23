export function SideBar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`dark:bg-night fixed right-0 top-0 z-50 h-full w-full transform overflow-y-auto bg-white p-5 shadow-lg transition duration-300 md:w-[50%] lg:w-[35%] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button
          className="dark:text-white absolute right-4 top-4 p-2 font-bold text-black"
          onClick={onClickClose}>
          x
        </button>
        {children}
      </div>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"
          onClick={onClickClose}
        />
      )}
    </div>
  );
}
