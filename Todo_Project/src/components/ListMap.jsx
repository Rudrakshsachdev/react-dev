const ListMap = () => {

    const numbers = [1,2,3,4,5];

    return (
        <div>
            <h2>List of numbers:
            </h2>
            <p>
                {numbers.map((number) => <li key={number.toString()}>{number}</li>)}
            </p>
        </div>
    )
}

export default ListMap;