export const ProductInfo = () => {
    const product = {
        name: "Wireless Headphones",
        price: 99.99,
        description: "High-quality wireless headphones with noise cancellation.",
    }

    return (
      <p>
        {product.name} costs ${product.price}. Description: {product.description}
      </p>  
    )
}