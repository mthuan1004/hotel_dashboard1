import { useEffect, useState } from "react";
import { fetchCategories } from "../api/category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { CategoryType, HotelType } from "../shared/types";
import { useParams } from "react-router-dom";
import { fetchHotelById, updateMyHotelById } from "../api/hotel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditHotel = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [hotel, setHotel] = useState<HotelType | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await fetchCategories();
        setCategories(categoriesResponse);

        if (hotelId) {
          const hotelResponse = await fetchHotelById(hotelId);
          setHotel(hotelResponse);

          if (hotelResponse.imageUrls && hotelResponse.imageUrls.length > 0) {
            setPreviewImage(hotelResponse.imageUrls[0]);
          }
        }
      } catch (error) {
        console.error("Lỗi khi fetch dữ liệu:", error);
        toast.error("Không thể tải dữ liệu khách sạn. Vui lòng thử lại.");
      }
    };

    fetchData();
  }, [hotelId]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hotelId || !hotel) return;

    try {
      const formData = new FormData();
      formData.append("hotelId", hotelId);
      formData.append("name",(e.currentTarget.elements.namedItem("hotelName") as HTMLInputElement).value);
      formData.append("categories",(e.currentTarget.elements.namedItem("category") as HTMLSelectElement).value);
      formData.append("country",(e.currentTarget.elements.namedItem("country") as HTMLInputElement).value);
      formData.append("city",(e.currentTarget.elements.namedItem("city") as HTMLInputElement).value);
      formData.append("status",(e.currentTarget.elements.namedItem("status") as HTMLInputElement).value);
      formData.append("pricePerNight",(e.currentTarget.elements.namedItem("price") as HTMLInputElement).value);
      formData.append("adultCount",(e.currentTarget.elements.namedItem("adult") as HTMLInputElement).value);
      formData.append("childCount",(e.currentTarget.elements.namedItem("child") as HTMLInputElement).value);
      formData.append("facilities",(e.currentTarget.elements.namedItem("facilities") as HTMLTextAreaElement).value);
      formData.append("starRating",(e.currentTarget.elements.namedItem("rating") as HTMLInputElement).value);
      formData.append("description",(e.currentTarget.elements.namedItem("description") as HTMLTextAreaElement).value);

      await updateMyHotelById(formData);
      toast.success("Hotel updated successfully");
      navigate("/hotels");
      setHotel({
        ...hotel,
        name: formData.get("name") as string,
        categories: formData.get("categories") as string,
        country: formData.get("country") as string,
        city: formData.get("city") as string,
        status: formData.get("status") as string,
        pricePerNight: parseInt(formData.get("pricePerNight") as string),
        adultCount: parseInt(formData.get("adultCount") as string),
        childCount: parseInt(formData.get("childCount") as string),
        facilities: formData.get("facilities") as string,
        starRating: parseFloat(formData.get("starRating") as string),
        description: formData.get("description") as string,
      });
    } catch (error) {
      console.error("Error updating hotel:", error);
      toast.error("Failed to update hotel information. Please try again.");
    }
  };

  if (!hotel) return <div>Loading...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex min-h-screen w-full flex-col bg-gray-100">
          <div className="flex flex-1 flex-col gap-4 px-2 md:py-8">
            <h1 className="text-center text-2xl font-bold">Edit Hotel</h1>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="image" className="text-lg">
                    Image
                  </label>
                  <div className="relative flex">
                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto max-h-40 max-w-full"
                      />
                    ) : (
                      <img
                        src={hotel.imageUrls[0]}
                        alt="Hotel Image"
                        className="absolute top-0 left-0 right-0 bottom-0 m-auto max-h-40 max-w-full"
                      />
                    )}
                    <input
                      type="file"
                      id="image"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                      style={{ display: "none", width: "100%", height: "100%" }}
                      required
                    />
                    <label
                      htmlFor="image"
                      className="bg-white border border-dashed border-gray-400 rounded-lg cursor-pointer block text-center"
                      style={{
                        minWidth: "300px",
                        minHeight: "200px",
                        lineHeight: "200px",
                      }}
                    >
                      {previewImage ? "Thay đổi ảnh" : "Chọn ảnh"}
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="hotelName" className="text-lg">
                    Name
                  </label>
                  <input
                    type="text"
                    id="hotelName"
                    name="hotelName"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter hotel name"
                    defaultValue={hotel.name}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="category" className="text-lg">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="p-2 border border-gray-300 rounded"
                    defaultValue={hotel.categories}
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                      <option key={category._id}>{category.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-lg">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter country"
                    defaultValue={hotel.country}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="city" className="text-lg">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter city"
                    defaultValue={hotel.city}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="status" className="text-lg">
                    Status
                  </label>
                  <input
                    type="text"
                    id="status"
                    name="status"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter status"
                    defaultValue={hotel.status}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="price" className="text-lg">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter price"
                    defaultValue={hotel.pricePerNight}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="adult" className="text-lg">
                    Adult
                  </label>
                  <input
                    type="number"
                    id="adult"
                    name="adult"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter adult"
                    defaultValue={hotel.adultCount}
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="child" className="text-lg">
                    Child
                  </label>
                  <input
                    type="number"
                    id="child"
                    name="child"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter child"
                    defaultValue={hotel.childCount}
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row md:gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="facilities" className="text-lg">
                      Facilities
                    </label>
                    <textarea
                      id="facilities"
                      name="facilities"
                      className="p-2 border border-gray-300 rounded min-h-36"
                      placeholder="Enter facilities"
                      defaultValue={hotel.facilities}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="rating" className="text-lg">
                    Rating
                  </label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    className="p-2 border border-gray-300 rounded"
                    placeholder="Enter rating"
                    defaultValue={hotel.starRating}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4">
                <div className="flex flex-col">
                  <label htmlFor="description" className="text-lg"></label>
                  Description
                  <textarea
                    id="description"
                    name="description"
                    className="p-2 border border-gray-300 rounded w-full min-h-36"
                    placeholder="Enter description"
                    defaultValue={hotel.description}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditHotel;
