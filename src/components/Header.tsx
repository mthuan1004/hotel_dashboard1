import { IoIosLogOut } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
  };

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
        <div className="flex items-center">
          <span className="font-bold text-lg">TK Hotels</span>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <button
              className="flex items-center bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className="mr-2">Welcome, Admin</span>
              <IoIosLogOut size={20} className="ml-1" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg py-1 hover:bg-gray-100">
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
