import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { Progress } from "../ui/progress";
import { FaSearch } from "react-icons/fa";

const Bookings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <div className="pb-4">
                  <h3 className="text-2xl font-semibold pb-2">Your Bookings</h3>
                  <p className="max-w-lg text-muted-foreground leading-relaxed text-sm">
                    Introducing Our Dynamic Orders Dashboard for Seamless
                    Management and Insightful Analysis.
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
                <div className="pt-1 flex justify-end">
                  <button className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium">
                    Add New Booking
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <div className="pb-4">
                  <p className="text-gray-600 text-sm">This Week</p>
                  <h4 className="text-3xl">$1,329</h4>
                </div>
                <div>
                  <p className="text-xs text-gray-600">+25% from last week</p>
                </div>
                <div className="pt-4">
                  <Progress value={25} aria-label="25% increase" />
                </div>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <div className="pb-4">
                  <p className="text-gray-600 text-sm">This Month</p>
                  <h4 className="text-3xl">$5,329</h4>
                </div>
                <div>
                  <p className="text-xs text-gray-600">+10% from last month</p>
                </div>
                <div className="pt-4">
                  <Progress value={12} aria-label="12% increase" />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <div className="pb-6">
                  <h4 className="text-2xl font-semibold">Booking List</h4>
                </div>
                <div>
                  <table className="w-full text-left text-base">
                    <thead>
                      <tr>
                        <th className="py-2">Customer</th>
                        <th className="py-2 hidden sm:table-cell">Type</th>
                        <th className="py-2 hidden sm:table-cell">Status</th>
                        <th className="py-2 hidden md:table-cell">Date</th>
                        <th className="py-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-gray-100 border">
                        <td className="py-4">
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            liam@example.com
                          </div>
                        </td>
                        <td className="py-4 hidden sm:table-cell">Sale</td>
                        <td className="py-4 hidden sm:table-cell">
                          <span className="text-sm bg-gray-200 rounded-lg px-2 py-1">
                            Fulfilled
                          </span>
                        </td>
                        <td className="py-4 hidden md:table-cell">
                          2023-06-23
                        </td>
                        <td className="py-4 text-right">$250.00</td>
                      </tr>
                      <tr className="hover:bg-gray-100">
                        <td className="py-4">
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            olivia@example.com
                          </div>
                        </td>
                        <td className="py-4 hidden sm:table-cell">Refund</td>
                        <td className="py-4 hidden sm:table-cell">
                          <span className="text-sm bg-gray-200 rounded-lg px-2 py-1">
                            Declined
                          </span>
                        </td>
                        <td className="py-4 hidden md:table-cell">
                          2023-06-24
                        </td>
                        <td className="py-4 text-right">$150.00</td>
                      </tr>
                      <tr className="hover:bg-gray-100">
                        <td className="py-4">
                          <div className="font-medium">Noah Williams</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            noah@example.com
                          </div>
                        </td>
                        <td className="py-4 hidden sm:table-cell">
                          Subscription
                        </td>
                        <td className="py-4 hidden sm:table-cell">
                          <span className="text-sm bg-gray-200 rounded-lg px-2 py-1">
                            Fulfilled
                          </span>
                        </td>
                        <td className="py-4 hidden md:table-cell">
                          2023-06-25
                        </td>
                        <td className="py-4 text-right">$350.00</td>
                      </tr>
                    </tbody>
                  </table>
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

export default Bookings;
