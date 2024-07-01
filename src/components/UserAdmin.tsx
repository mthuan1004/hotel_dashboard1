import { ChangeEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { UserType } from "../shared/types";
import { fetchCurrentUser } from "../api/user";

const UserAdmin = () => {
  const [userType, setUserType] = useState("useradmin");
  const [users, setUsers] = useState<UserType[]>([]);

  const handleUserTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setUserType(event.target.value);
  };

  useEffect(() => {
    fetchCurrentUser().then((res: UserType) => {
      setUsers([res]);
    });
  }, []);

  const filteredUsers = users.filter((user) => {
    if (userType === "customer") {
      return user.role === "Role_Customer";
    }
    return user.role !== "Role_Customer";
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <div className="pb-1">
                  <h3 className="text-2xl font-semibold">Your Users</h3>
                  <p className="max-w-lg text-muted-foreground leading-relaxed text-sm mb-2">
                    Manage your users here and view their details.
                  </p>
                </div>
                <div className="relative mb-2">
                  <input
                    type="text"
                    className="border border-gray-300 px-8 py-2 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Search..."
                  />
                  <div className="absolute inset-y-0 flex items-center cursor-pointer pl-2">
                    <FaSearch className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                    Add User
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <div className="pb-6">
                  <h4 className="text-2xl font-semibold">
                    {userType === "useradmin" ? "Employee" : "Customer"} List
                  </h4>
                  <div className="flex justify-end mb-4">
                    <select
                      value={userType}
                      onChange={handleUserTypeChange}
                      className="px-4 py-3 border border-gray-300 hover:border-gray-400 focus:outline-none rounded-lg text-gray-700 text-sm font-medium cursor-pointer"
                    >
                      <option value="employee" className="text-gray-700">
                        Employee
                      </option>
                      <option value="customer" className="text-gray-700">
                        Customer
                      </option>
                    </select>
                  </div>
                  <div>
                    <table className="min-w-full divide-y divide-gray-200 mt-5">
                      <thead>
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            User ID
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Role
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredUsers.map((user) => (
                          <tr key={user._id} className="text-left">
                            <td className="px-6 py-4">{user._id}</td>
                            <td className="px-6 py-4">
                              {user.firstName} {user.lastName}
                            </td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.phone}</td>
                            <td className="px-6 py-4">{user.role}</td>
                            <td className="px-4 py-4 flex">
                              <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium ml-2">
                                Edit
                              </button>
                              <button className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium ml-2">
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserAdmin;
