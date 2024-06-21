import { IoIosLogOut } from "react-icons/io";


const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-end">
                <div>
                    <span className='font-bold'>Welcome, Admin</span>
                    <button className="ml-3 mt-1 flex items-center">Logout &nbsp;<IoIosLogOut size={20}/></button>
                </div>
            </div>
        </header>
    )
}

export default Header
