import { FaTachometerAlt, FaCalendarAlt, FaBed, FaUsers, FaUserFriends, FaTh } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/dashboard' },
    { name: 'Booking', icon: <FaCalendarAlt />, link: '/booking' },
    { name: 'Hotel', icon: <FaBed />, link: '/hotels' },
    { name: 'Category', icon: <FaTh />, link: '/categories' },
    { name: 'Users', icon: <FaUsers />, link: '/users' },
    { name: 'Supplier', icon: <FaUserFriends />, link: '/supplier' },
  ];

  return (
    <aside className="w-64 bg-white text-gray-600 flex flex-col border-r-4">
      <div className="p-4 border-b-2">
        <h2 className="text-xl font-bold ">TK Hotels Admin</h2>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="hover:bg-gray-300 border-b-2">
              <a href={item.link} className="flex items-center p-4 space-x-4">
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
