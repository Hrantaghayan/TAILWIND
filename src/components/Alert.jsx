import { useEffect, useState } from "react";

const TopAlert = ({ message = "✅ Your changes have been saved!", show }) => {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timeout = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [show]);

  return (
    <div
      className={`fixed left-1/2 top-0 z-50 mt-4 w-[90%] max-w-md -translate-x-1/2 transform rounded-lg px-6 py-4 shadow-lg transition-all duration-500 ease-in-out ${visible ? "pointer-events-auto translate-y-0 bg-green-500 text-white opacity-100" : "pointer-events-none -translate-y-full opacity-0"}`}>
      {message}
    </div>
  );
};

export default TopAlert;
