import React from 'react';
import '../style.css';
import axios from 'axios';

export const Meals = () => {


    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=Seafood').then((response) => {
            console.log(response.data.meals);
            setItems(response.data.meals);
        }).catch((error) => {
            console.error("Error fetching data: ", error);
        });
    }, [])

    const itemsList = items.map((strMeal, strMealThumb, idMeal) => {
        <section className='card'>
        <img src={strMealThumb} alt={strMeal} />
        </section>
    })

  return (
    <div className='items-container'>

    </div>
  )
}
