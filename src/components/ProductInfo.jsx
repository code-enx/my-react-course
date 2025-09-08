function ProductInfo() {
  const product = {
    name: "linux laptop",
    price: 160,
    availablity: "In stock",
  };

  return (
    <div>
      <h1>Name: {product.name}</h1>
      <h1>Price: ${product.price}</h1>
      <h1>Availablity: {product.availablity}</h1>
    </div>
  );
}

export default ProductInfo;
