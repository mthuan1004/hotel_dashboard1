import { IoIosHome, IoIosLogOut } from "react-icons/io";
import { ModeToggle } from "../ui/mode-toggle";
import { useAppContext } from "../contexts/AppContext";
import * as apiClient from "../api/auth";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export type NameUserSignin = {
  username: string;
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsLoggedIn } = useAppContext();

  const handleLogout = async () => {
    try {
      await apiClient.signOut();
      toast.success("Logout successful!");
      setIsLoggedIn(false);
      navigate(location.state?.from?.pathname || "/");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Logout error: ${error.message}`);
      } else {
        toast.error(`Unexpected error occurred`);
      }
    }
  };

  return (
    <header className="bg-gray-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 lg:px-8">
        <div className="flex items-center">
          <IoIosHome className="text-xl" />
          <span className="font-bold text-xl pl-2">TK Hotels</span>
        </div>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <button
            className="flex items-center bg-white text-gray-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-300 focus:outline-none"
            onClick={handleLogout}
          >
            <IoIosLogOut className="text-lg mr-1" />
            <span className="hidden md:inline-block">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
