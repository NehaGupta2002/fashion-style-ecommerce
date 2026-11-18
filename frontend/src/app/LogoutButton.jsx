"use client";

import { useRouter } from "next/navigation";
import { logout } from "./utils/auth"; // adjust path if needed

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = () => {
    logout(); // remove token, user, cart, wishlist
    router.push("/login"); // redirect to login page
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
