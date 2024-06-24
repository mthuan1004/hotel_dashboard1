import { FaTachometerAlt, FaCalendarAlt, FaBed, FaUsers, FaUserFriends} from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FaTachometerAlt />, link: '/dashboard' },
    { name: 'Đặt lịch', icon: <FaCalendarAlt />, link: '/booking' },
    { name: 'Phòng', icon: <FaBed />, link: '/room' },
    { name: 'Khách hàng', icon: <FaUsers />, link: '/customer' },
    { name: 'Nhân viên', icon: <FaUserFriends />, link: '/employee' },
    { name: 'Nhà cung cấp', icon: <FaUserFriends />, link: '/supplier' },
  ];

  return (
    <aside className="w-64 bg-gray-500 text-white flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl font-bold">TK Hotels Admin</h2>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="hover:bg-gray-700">
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
