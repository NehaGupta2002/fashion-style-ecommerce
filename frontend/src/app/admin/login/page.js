// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:4000/api/users/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem("token", data.token); // ✅ Save token
//       alert("Login successful!");
//       router.push("/admin/dashboard"); // ✅ Redirect to home or dashboard
//     } else {
//       alert(data.message || "Login failed");
//     }
//   };







// pages/login.js

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import axios from 'axios';
// import { saveUserAuth } from '@/app/utils/auth';


// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();


//   const handleLogin = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.post('http://localhost:4000/api/users/login', formData);
//       console.log(res.data);
//       if (res.data.success) {
//         saveUserAuth(res.data.token, res.data.data);

//         if (res.data.data.role === 'admin') {
//           router.push('/admin/dashboard');
//         } else {
//           router.push('/');
//         }
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert('Login failed');
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
//       <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
//         <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Login</h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
//           onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
//           onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 transition duration-200"
//           disabled={loading}
//         >
//           {loading ? 'Logging in...' : 'Login'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:4000/api/users/login', formData);
      const { token, user } = res.data;

      if (user.isAdmin) {
        localStorage.setItem('adminToken', token);
        router.push('/admin/dashboard');
        localStorage.setItem('user', JSON.stringify(user));
        router.push('/admin/dashboard');
      } else {
        alert('Only admins can login');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Admin Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-2"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-6 w-full rounded-lg border border-gray-300 px-4 py-2"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button
          onClick={handleLogin}
          className="w-full rounded-lg bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
