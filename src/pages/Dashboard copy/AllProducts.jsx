import ProductCardDashboard from "../../components/Dashboard/ProductCardDashboard";
import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto justify-center grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {products.map((product) => (
        <ProductCardDashboard
          key={product.id}
          product={product}
          onDelete={handleDeleteProduct}
        />
      ))}
    </div>
  );
};

export default AllProducts;
