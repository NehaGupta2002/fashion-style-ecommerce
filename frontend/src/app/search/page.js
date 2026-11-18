// import { useRouter } from "next/navigation";

// const SearchBar = () => {
//   const [search, setSearch] = useState("");
//   const router = useRouter();

//   const handleSearch = () => {
//     if (search.trim()) {
//       router.push(`/shop?query=${encodeURIComponent(search.trim())}`);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="border px-3 py-2 rounded"
//       />
//       <button onClick={handleSearch} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded">
//         Search
//       </button>
//     </div>
//   );
// };
