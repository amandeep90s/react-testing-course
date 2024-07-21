import React from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, isLoading, fetchNextPage } = useProducts({ limit: 6 });

  const renderProducts = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 grid-flow gap-8 sm:grid-cols-3">
        {renderProducts}
      </div>

      <div className="text-center text-xl my-8">
        <button
          disabled={isLoading}
          className="p-4 rounded border-2"
          onClick={() => !isLoading && fetchNextPage()}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
};

export default ProductList;
