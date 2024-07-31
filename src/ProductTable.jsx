import React, { useEffect, useState } from "react";
import "./ProductTable.css";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error("Error Fetching Data", error);
      });
  }, []);
  return (
    <div className="product-table-container">
      <h1>Products List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="product-image"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
