import { useState, useEffect } from "react";
import {
  FaSearch,
  FaStar,
  FaDollarSign,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { deleteHotel, fetchHotels } from "../api/hotel";
import { HotelType } from "../shared/types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Hotels = () => {
  const [hotels, setHotels] = useState<HotelType[]>([]);

  const navigate = useNavigate();

  const handleAddHotelClick = () => {
    navigate("/hotels/addhotel");
  };

  const handleEditHotelClick = (hotelId: string) => {
    navigate(`/hotels/edithotel/${hotelId}`); 
  };

  const handleDeleteHotelClick = async (hotelId: string) => {
    if (!window.confirm('Bạn có chắc muốn xóa?')) {
      return; 
    }
    try {
      await deleteHotel(hotelId);
      toast.success('Hotel deleted successfully!');
      fetchHotels().then((res) => {
        setHotels(res);
      });
    } catch (error) {
      console.error('Error deleting hotel:', error);
      toast.error('Failed to delete hotel. Please try again.');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
            const hotels = await fetchHotels();
            setHotels(hotels); 
        } catch (error) {
            console.error('Error fetching hotels:', error);
        }
    };

    fetchData();

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
                  <h3 className="text-2xl font-semibold">Your Hotels</h3>
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
                  <button
                    onClick={handleAddHotelClick}
                    className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
                  >
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
                            Image
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Address
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Category
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Price
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Adult
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Child
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Facilities
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Rating
                          </th>
                          <th className="px-6 py-3 text-sm font-medium uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {hotels.map((hotel) => (
                          <tr key={hotel._id} className="text-left">
                            <td className="px-6 py-4">
                              <img
                                src={hotel.imageUrls[0]}
                                alt="Hotel Images"
                                width="70px"
                              />
                            </td>
                            <td className="px-6 py-4">{hotel.name}</td>
                            <td className="px-6 py-4">
                              {hotel.country}, {hotel.city}
                            </td>
                            <td className="px-6 py-4">{hotel.categories}</td>
                            <td className="px-6 py-4">{hotel.status}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <span>{hotel.pricePerNight}</span>
                                <FaDollarSign className="h-4 w-4 text-green-600" />
                              </div>
                            </td>
                            <td className="px-6 py-4">{hotel.adultCount}</td>
                            <td className="px-6 py-4">{hotel.childCount}</td>
                            <td className="px-6 py-4">{hotel.facilities}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <span className="mr-1">{hotel.starRating}</span>
                                <FaStar className="h-5 w-5 text-yellow-300" />
                              </div>
                            </td>
                            <td className="px-4 py-4 flex">
                            <button
                                onClick={() => handleEditHotelClick(hotel._id)} 
                                className="px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium flex items-center"
                              >
                                <FaEdit />
                              </button>
                              <button
                                onClick={() => handleDeleteHotelClick(hotel._id)}
                                className="px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium ml-1 flex items-center"
                              >
                                <FaTrash />
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

export default Hotels;
