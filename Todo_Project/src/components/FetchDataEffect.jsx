import { useState, useEffect } from "react";

const FetchDataEffect = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>
                Fetched Data:
            </h2>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataEffect;