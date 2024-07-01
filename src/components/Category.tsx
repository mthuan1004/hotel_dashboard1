import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { CategoryType } from "../shared/types";
import { fetchCategories } from "../api/category";

const Category = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    fetchCategories().then((res) => {
        setCategories(res);
    });
  }, []);
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
                  <h3 className="text-2xl font-semibold">Your Categories</h3>
                  <p className="max-w-lg text-muted-foreground leading-relaxed text-sm mb-2">
                    Manage your categories here and view their sales performance.
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
                    Add Hotel
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
                <div className="pb-6">
                  <h4 className="text-2xl font-semibold">Hotel List</h4>
                  <div></div>
                  <div>
                    <table className="min-w-full divide-y divide-gray-200 mt-5">
                      <thead className="">
                        <tr className="text-left">
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Category ID
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {categories.map((category) => (
                          <tr key={category._id} className="text-left">
                            <td className="px-6 py-4">{category._id}</td>
                            <td className="px-6 py-4">{category.name}</td>
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

export default Category;
