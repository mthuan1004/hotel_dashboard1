import FooterDashboard from "./Footer";
import HeaderDashboard from "./Header";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Supplier = () => {
  const suppliers = [
    {
      email: "supplier1@example.com",
      phone: "123-456-7890",
      address: "123 Supplier St, Supplier City",
      roomsProvided: 20,
      roomsBooked: 15,
      roomsDeposited: 10,
      totalRoomPrice: "$2000",
      rating: 4.5,
    },
    {
      email: "supplier2@example.com",
      phone: "987-654-3210",
      address: "456 Provider Ave, Provider Town",
      roomsProvided: 15,
      roomsBooked: 12,
      roomsDeposited: 8,
      totalRoomPrice: "$1500",
      rating: 4.0,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDashboard />
      <div className="flex flex-1">
        <Sidebar />
        <div className="ml-5">
          <div className="mt-3">
            <h2 className="text-3xl mb-4">Quản lý nhà cung cấp</h2>
            <button className="text-white hover:bg-blue-700 mr-2 mb-2 p-2 px-5 bg-blue-600 border rounded-lg font-medium">Thêm</button>
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 px-3 py-2 mb-3 rounded-lg focus:outline-none focus:border-blue-500 w-full"
                placeholder="Tìm kiếm..."
              />
              <div className="absolute right-3 top-3">
                <FaSearch className="h-5 w-5 text-gray-400 cursor-pointer" />
              </div>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border border-gray-300">
                  <th className="py-2 px-4 pr-8">Email</th>
                  <th className="py-2 px-4 pr-8">Số Điện thoại</th>
                  <th className="py-2 px-4 pr-8">Địa chỉ</th>
                  <th className="py-2 px-4 pr-8">Số phòng cung cấp</th>
                  <th className="py-2 px-4 pr-8">Đã đặt</th>
                  <th className="py-2 px-4 pr-8">Đã cọc</th>
                  <th className="py-2 px-4 pr-8">Giá phòng</th>
                  <th className="py-2 px-4 pr-8">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((supplier, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="py-2 px-4">{supplier.email}</td>
                    <td className="py-2 px-4">{supplier.phone}</td>
                    <td className="py-2 px-4">{supplier.address}</td>
                    <td className="py-2 px-4">{supplier.roomsProvided}</td>
                    <td className="py-2 px-4">{supplier.roomsBooked}</td>
                    <td className="py-2 px-4">{supplier.roomsDeposited}</td>
                    <td className="py-2 px-4">{supplier.totalRoomPrice}</td>
                    <td className="py-2 px-4">{supplier.rating} *</td>
                    <td className="py-2 px-4">
                      <button className="text-white hover:bg-red-700 mr-2 p-2 bg-red-600 border rounded-lg font-medium">Xóa</button>
                      <button className="text-white p-2 border rounded-lg bg-green-600 hover:bg-green-700 font-medium">Sửa</button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
};

export default Supplier;
