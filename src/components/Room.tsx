import FooterDashboard from "./Footer";
import HeaderDashboard from "./Header";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Room = () => {
  const rooms = [
    {
      roomNumber: "101",
      roomType: "Standard",
      amenities: "WiFi, TV",
      view: "City view",
      floor: "1",
      status: "Available",
      totalPrice: "$100",
    },
    {
      roomNumber: "202",
      roomType: "Deluxe",
      amenities: "WiFi, TV, Minibar",
      view: "Sea view",
      floor: "2",
      status: "Booked",
      totalPrice: "$150",
    },
    {
      roomNumber: "303",
      roomType: "Suite",
      amenities: "WiFi, TV, Minibar, Jacuzzi",
      view: "Mountain view",
      floor: "3",
      status: "Reserved",
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
            <h2 className="text-3xl mb-4">Quản lý phòng</h2>
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
            <div className="flex mb-4">
              <div className="mr-4 flex items-center">
                <span className="inline-block bg-gray-600 rounded-full h-4 w-4 mr-1"></span>
                Số lượng phòng: {rooms.length}
              </div>
              <div className="mr-4 flex items-center">
                <span className="inline-block bg-red-500 rounded-full h-4 w-4 mr-1 ml-5"></span>
                Phòng còn tồn:{" "}
                {rooms.filter((room) => room.status === "Available").length}
              </div>
              <div className="mr-4 flex items-center">
                <span className="inline-block bg-green-400 rounded-full h-4 w-4 mr-1 ml-5"></span>
                Phòng đã đặt:{" "}
                {rooms.filter((room) => room.status === "Booked").length}
              </div>
              <div className="mr- flex items-center">
                <span className="inline-block bg-yellow-500 rounded-full h-4 w-4 mr-1 ml-5"></span>
                Phòng đã cọc:{" "}
                {rooms.filter((room) => room.status === "Reserved").length}
              </div>
            </div>
            <table className="min-w-full bg-white">
              <thead>
                <tr className="border border-gray-300">
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
                {rooms.map((room, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="py-2 px-4">{room.roomNumber}</td>
                    <td className="py-2 px-4">{room.roomType}</td>
                    <td className="py-2 px-4">{room.amenities}</td>
                    <td className="py-2 px-4">{room.view}</td>
                    <td className="py-2 px-4">{room.floor}</td>
                    <td className="py-2 px-4">{room.status}</td>
                    <td className="py-2 px-4">{room.totalPrice}</td>
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

export default Room;
