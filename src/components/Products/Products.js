import React from 'react'
import { useStateValue } from '../../ContextProvider';
import "./Products.css";

function Products({id, name, title, image,price}) {
    const [{}, dispatch] = useStateValue();
    const addTo = () =>{
        dispatch({
            type: "Add",
            item:{
                id:id,
                title:title,
                image:image,
                price:price
            }
        })
    }
    return (
        <div className="products_space">
            <h2>{title}</h2>
            <img src={image} alt={name} className="products" />
            <button className="btn" onClick={addTo} >{price}</button>
        </div>
    )
}

export default Products
