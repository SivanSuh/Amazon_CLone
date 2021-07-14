import React from 'react'
import { useStateValue } from  "../../ContextProvider";
import "./BasketProducts.css";

function BasketProducts({ id , title, price,image, name, hideButton}) {
    const [{basket}, dispatch] = useStateValue()

    const remove = () => {
        dispatch({
            id: id,
            type: "Remove",
        });
      };
    return (
        <div className="basketproducts">
            
            <div>
                <h3>{title}</h3>
                <img className="image" src={image} alt={name} />
                <span>{price}</span>
            </div>
            
                {!hideButton && (
                    <button onClick={remove} className="btn-remove" >Remove </button>
                  )}
            
        </div>
    )
}

export default BasketProducts
