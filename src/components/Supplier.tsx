import Footer from "./Footer";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Supplier = () => {
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
                  <h3 className="text-2xl font-semibold">Your Suppliers</h3>
                  <p className="max-w-lg text-muted-foreground leading-relaxed text-sm mb-2">
                    Manage your hotels here and view their sales performance.
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
                    Add Supplier
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <div className="pb-6">
                  <h4 className="text-2xl font-semibold">Supplier List</h4>
                  <div></div>
                  <div>
                    <table className="min-w-full divide-y divide-gray-200 mt-5">
                      <thead className="">
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Email
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Phone
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Address
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Number of hotel rooms
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Placed
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Deposit
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="text-left">
                          <td className="px-6 py-4">m@example.com</td>
                          <td className="px-6 py-4">0123456789</td>
                          <td className="px-6 py-4">Vietnam</td>
                          <td className="px-6 py-4">50</td>
                          <td className="px-6 py-4">16</td>
                          <td className="px-6 py-4">20</td>
                          <td className="px-6 py-4">$129.99</td>
                          <td className="px-4 py-4">
                            <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium ml-2">
                              Edit
                            </button>
                            <button className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium ml-2">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4">m@example.com</td>
                          <td className="px-6 py-4">0123456789</td>
                          <td className="px-6 py-4">Vietnam</td>
                          <td className="px-6 py-4">50</td>
                          <td className="px-6 py-4">16</td>
                          <td className="px-6 py-4">20</td>
                          <td className="px-6 py-4">$129.99</td>
                          <td className="px-4 py-4">
                            <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium ml-2">
                              Edit
                            </button>
                            <button className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium ml-2">
                              Delete
                            </button>
                          </td>
                        </tr>
                        <tr className="text-left">
                          <td className="px-6 py-4">m@example.com</td>
                          <td className="px-6 py-4">0123456789</td>
                          <td className="px-6 py-4">Vietnam</td>
                          <td className="px-6 py-4">50</td>
                          <td className="px-6 py-4">16</td>
                          <td className="px-6 py-4">20</td>
                          <td className="px-6 py-4">$129.99</td>
                          <td className="px-4 py-4">
                            <button className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium ml-2">
                              Edit
                            </button>
                            <button className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium ml-2">
                              Delete
                            </button>
                          </td>
                        </tr>
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

export default Supplier;
