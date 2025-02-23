import React from "react";
import { useLocation } from "react-router-dom";
import Cart from "./Cart";
import toast, { Toaster } from "react-hot-toast";

function SearchPage() {
  const location = useLocation();
  const { query, results } = location.state || { query: "", results: [] };
  const handeltoast = (name) => toast.success(`Your ${name} is Added`);
  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-center" reverseOrder={false} />
      <h2 className="text-2xl font-bold mb-4">Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((product) => (
            <Cart
              key={product.id}
              name={product.name}
              img={product.img}
              dec={product.dec}
              price={product.price}
              regularprice={product.regularprice}
              handeltoast={handeltoast}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No products found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchPage;
