import FooterDashboard from "./Footer";
import HeaderDashboard from "./Header";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const dummyEmployees = [
  {
    id: 1,
    name: "Nguyễn Thị A",
    email: "nguyenthia@gmail.com",
    phone: "0987654321",
    address: "123 Đường ABC, Quận XYZ, Thành phố HCM",
    birthday: "05/10/1992",
    gender: "Nữ",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Trần Văn B",
    email: "tranvanb@gmail.com",
    phone: "0123456789",
    address: "456 Đường XYZ, Quận ABC, Thành phố HCM",
    birthday: "12/03/1988",
    gender: "Nam",
    rating: "4.2",
  },
];

const Employee = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDashboard />
      <div className="flex flex-1">
        <Sidebar />
        <div className="ml-5">
          <div className="mt-3">
            <h2 className="text-3xl mb-4">Quản lý nhân viên</h2>
            <button className="text-white hover:bg-blue-700 mr-2 mb-2 p-2 px-5 bg-blue-600 border rounded-lg font-medium">
              Thêm
            </button>
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
                  <th className="py-2 px-4 pr-8">Họ và tên</th>
                  <th className="py-2 px-4 pr-8">Email</th>
                  <th className="py-2 px-4 pr-8">Điện thoại</th>
                  <th className="py-2 px-4 pr-8">Địa chỉ</th>
                  <th className="py-2 px-4 pr-8">Ngày sinh</th>
                  <th className="py-2 px-4 pr-8">Giới tính</th>
                  <th className="py-2 px-4 pr-8">Đánh giá</th>
                </tr>
              </thead>
              <tbody>
                {dummyEmployees.map((employee) => (
                  <tr key={employee.id} className="border border-gray-300">
                    <td className="py-2 px-4">{employee.name}</td>
                    <td className="py-2 px-4">{employee.email}</td>
                    <td className="py-2 px-4">{employee.phone}</td>
                    <td className="py-2 px-4">{employee.address}</td>
                    <td className="py-2 px-4">{employee.birthday}</td>
                    <td className="py-2 px-4">{employee.gender}</td>
                    <td className="py-2 px-4">{employee.rating} *</td>
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

export default Employee;
