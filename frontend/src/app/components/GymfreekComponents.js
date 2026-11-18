
'use client';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchgymfreek } from "../toolkit/action/gymfreek";
import Link from "next/link";

const GymfreekComponent = () => {
    const dispatch = useDispatch();
    const { products: gymfreek, status, errors } = useSelector((state) => state.gymfreek);

    useEffect(() => {
        dispatch(fetchgymfreek());
    }, [dispatch]);

    return (
        <div className="px-4 py-8 md:px-12 bg-gray-50 min-h-screen">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-[#1f4068] mb-8 uppercase">Gym Freek Tees</h1>

            {status === "pending" && (
                <div className="flex justify-center items-center h-40">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#1f4068] border-solid"></div>
                </div>
            )}

            {status === "failed" && (
                <div className="bg-red-100 text-red-700 p-4 rounded-md max-w-md mx-auto text-center">
                    {errors}
                </div>
            )}

            {status === "succeeded" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {gymfreek.map((item) => (
                          <Link
                          href={`/products/${item._id}`}
                          key={item._id}
                          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 block"
                      >
                        {/* <div key={item._id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300"> */}
                            <div className="overflow-hidden rounded-t-2xl">
                                <img
                                    src={item.imageUrl}
                                    alt={item.name}
                                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                                <p className="text-sm text-gray-500 mt-1">{item.description?.slice(0, 50)}...</p>
                                <p className="text-blue-600 font-semibold text-md mt-2">₹{item.price}</p>
                            </div>
                        {/* </div> */}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GymfreekComponent;

