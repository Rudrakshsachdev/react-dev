const Products = (props) => {
    return (
        <div>
            <h1>
                Products Details:
            </h1> 
            <p>Product Name: {props.name}</p>
            <p>Product Price: {props.price}</p>
            <p>Product Category: {props.category}</p>

        </div>
    )
}

export default Products;