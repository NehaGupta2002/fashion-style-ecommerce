"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <CheckCircle className="text-green-600 w-20 h-20 mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Order Placed Successfully!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Thank you for your purchase. Your order has been placed and is being processed.
      </p>
      <Link
        href="/"
        className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
