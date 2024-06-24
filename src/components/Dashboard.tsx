import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";
const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2 ">
                  <h3 className="text-sm font-medium">Total Revenue</h3>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Subscriptions</h3>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Sales</h3>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">Active Now</h3>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
              <div className="bg-gray-200 rounded-lg shadow-lg p-4 xl:col-span-2">
                <div className="flex flex-row items-center justify-between">
                  <div className="grid gap-2">
                    <h2 className="text-2xl font-medium">Transactions</h2>
                    <p className="text-xs text-muted-foreground">
                      Recent transactions from your store.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="grid grid-cols-5 gap-2">
                    <div>Customer</div>
                    <div className="col-span-4 text-right">Amount</div>
                  </div>
                  <div className="mt-2">
                    <div className="divide-y divide-gray-200">
                      <div className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            liam@example.com
                          </div>
                        </div>
                        <div className="text-right">$250.00</div>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="font-medium">Olivia Smith</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            olivia@example.com
                          </div>
                        </div>
                        <div className="hidden lg:block xl:hidden">
                          2023-06-24
                        </div>
                        <div className="text-right">$150.00</div>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="font-medium">Noah Williams</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            noah@example.com
                          </div>
                        </div>
                        <div className="hidden lg:block xl:hidden">
                          2023-06-25
                        </div>
                        <div className="text-right">$350.00</div>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="font-medium">Emma Brown</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            emma@example.com
                          </div>
                        </div>
                        <div className="hidden lg:block xl:hidden">
                          2023-06-26
                        </div>
                        <div className="text-right">$450.00</div>
                      </div>
                      <div className="py-4 flex items-center justify-between">
                        <div className="flex flex-col">
                          <div className="font-medium">Liam Johnson</div>
                          <div className="hidden text-sm text-gray-500 md:inline">
                            liam@example.com
                          </div>
                        </div>
                        <div className="hidden lg:block xl:hidden">
                          2023-06-27
                        </div>
                        <div className="text-right">$550.00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg shadow-lg p-4">
                <h3 className="text-2xl font-medium">Recent Sales</h3>
                <div className="grid gap-4 mt-4">
                  <div className="grid gap-8">
                    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
                      <div className="hidden h-9 w-9 sm:flex">
                        <img
                          src={`https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`}
                          alt="Avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Olivia Martin
                        </p>
                        <p className="text-sm text-muted-foreground">
                          olivia.martin@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$1,999.00</div>
                    </div>
                    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
                      <div className="hidden h-9 w-9 sm:flex">
                        <img
                          src={`https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`}
                          alt="Avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Jackson Lee
                        </p>
                        <p className="text-sm text-muted-foreground">
                          jackson.lee@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
                    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
                      <div className="hidden h-9 w-9 sm:flex">
                        <img
                          src={`https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`}
                          alt="Avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Isabella Nguyen
                        </p>
                        <p className="text-sm text-muted-foreground">
                          isabella.nguyen@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$299.00</div>
                    </div>
                    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
                      <div className="hidden h-9 w-9 sm:flex">
                        <img
                          src={`https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`}
                          alt="Avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          William Kim
                        </p>
                        <p className="text-sm text-muted-foreground">
                          will@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$99.00</div>
                    </div>
                    <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-4">
                      <div className="hidden h-9 w-9 sm:flex">
                        <img
                          src={`https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 100) + 1}`}
                          alt="Avatar"
                          className="h-9 w-9 rounded-full"
                        />
                      </div>
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          Sofia Davis
                        </p>
                        <p className="text-sm text-muted-foreground">
                          sofia.davis@email.com
                        </p>
                      </div>
                      <div className="ml-auto font-medium">+$39.00</div>
                    </div>
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

export default Dashboard;
