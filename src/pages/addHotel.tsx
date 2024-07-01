import React, { useEffect, useState } from "react";
import { fetchCategories } from "../api/category";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { CategoryType } from "../shared/types";
import { addMyHotel } from "../api/hotel";
import { toast } from 'react-toastify';

const AddHotel = () => {
    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    useEffect(() => {
        fetchCategories()
            .then((res) => {
                setCategories(res);
            })
            .catch((error) => {
                console.error('Failed to fetch categories:', error);
                toast.error('Failed to load categories. Please try again.');
            });
    }, []);

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

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await addMyHotel(formData);
            form.reset(); 
            setPreviewImage(null); 
            toast.success('Hotel added successfully!');
        } catch (error) {
            console.error('Error adding hotel:', error);
            toast.error('Failed to add hotel. Please try again.');
        }
        
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex min-h-screen w-full flex-col bg-gray-100">
                    <div className="flex flex-1 flex-col gap-4 px-2 md:py-8">
                        <h1 className="text-center text-2xl font-bold">Add New Hotel</h1>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col md:flex-row md:gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="image" className="text-lg">
                                        Image
                                    </label>
                                    <div className="relative flex">
                                        {previewImage && (
                                            <img
                                                src={previewImage}
                                                alt="Preview"
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
                                            {previewImage ? "Change image" : "Choose an image"}
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
                                        name="name"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter hotel name"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="category" className="text-lg">
                                        Category
                                    </label>
                                    <select
                                        id="category"
                                        name="categories"
                                        className="p-2 border border-gray-300 rounded"
                                        required
                                    >
                                        <option value="">Select category</option>
                                        {categories.map((category) => (
                                            <option key={category._id}>
                                                {category.name}
                                            </option>
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
                                        name="pricePerNight"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter price"
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
                                        name="adultCount"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter adult"
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
                                        name="childCount"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter child"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="facilities" className="text-lg">
                                        Facilities
                                    </label>
                                    <input
                                        type="text"
                                        id="facilities"
                                        name="facilities"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter facilities"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="rating" className="text-lg">
                                        Rating
                                    </label>
                                    <input
                                        type="number"
                                        id="rating"
                                        name="starRating"
                                        className="p-2 border border-gray-300 rounded"
                                        placeholder="Enter rating"
                                        min="1"
                                        max="5"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="description" className="text-lg">
                                    Description
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="p-2 border border-gray-300 rounded"
                                    placeholder="Enter description"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Add Hotel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddHotel;
