import FooterDashboard from "./Footer";
import HeaderDashboard from "./Header";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Booking = () => {
  const bookings = [
    {
      guestName: "John Doe",
      roomNumber: "101",
      roomType: "Standard",
      amenities: "WiFi, TV",
      view: "City view",
      floor: "1",
      status: "Đã xác nhận",
      totalPrice: "$150",
    },
    {
      guestName: "Jane Smith",
      roomNumber: "202",
      roomType: "Deluxe",
      amenities: "WiFi, TV, Minibar",
      view: "Sea view",
      floor: "2",
      status: "Chưa thanh toán",
      totalPrice: "$250",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDashboard />
      <div className="flex flex-1">
        <Sidebar />
        <div className="ml-5">
          <div className="mt-3">
            <h2 className="text-3xl mb-4">Lịch đặt phòng</h2>
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
                  <th className="py-2 px-4 pr-8">Tên khách</th>
                  <th className="py-2 px-4 pr-8">Phòng</th>
                  <th className="py-2 px-4 pr-8">Loại phòng</th>
                  <th className="py-2 px-4 pr-8">Tiện nghi</th>
                  <th className="py-2 px-4 pr-8">View</th>
                  <th className="py-2 px-4 pr-8">Tầng</th>
                  <th className="py-2 px-4 pr-8">Trạng thái</th>
                  <th className="py-2 px-4 pr-8">Tổng giá</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="py-2 px-4">{booking.guestName}</td>
                    <td className="py-2 px-4">{booking.roomNumber}</td>
                    <td className="py-2 px-4">{booking.roomType}</td>
                    <td className="py-2 px-4">{booking.amenities}</td>
                    <td className="py-2 px-4">{booking.view}</td>
                    <td className="py-2 px-4">{booking.floor}</td>
                    <td className="py-2 px-4">{booking.status}</td>
                    <td className="py-2 px-4">{booking.totalPrice}</td>
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

export default Booking;
