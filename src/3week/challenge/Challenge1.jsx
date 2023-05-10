import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  // FIXME: 이벤트핸들러를 구현하기
  function handleIncreaseClick(productId) {
    setProducts((prev)=>{
      const newProducts = prev.slice();
      const targetIndex = newProducts.findIndex(({id})=>id ===productId);
      if(targetIndex < 0) return newProducts;
      const targetProduct = newProducts[targetIndex];
      newProducts[targetIndex] = {
        ...targetProduct,
        count:targetProduct.count+1,
      };
      return newProducts;
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button>
        </li>
      ))}
    </ul>
  );
}
