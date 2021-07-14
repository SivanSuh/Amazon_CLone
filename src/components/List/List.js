import React from 'react'
import { useStateValue } from '../../ContextProvider';
import BasketProducts from '../BasketProducts/BasketProducts';
import Total from '../Total/Total';
import "./List.css";


function List() {
    const [{ basket }] = useStateValue();

    return (
            <div className="list">
                <div className="space__list">
                  <img className="img__list"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                    />
                    <div className="total__list">
                        <Total />
                    </div>
                </div>
                <div className="list-item">
                        { basket.length === 0 ? (
                            <div>
                                <h2>Your Basket is empty</h2>
                            </div>
                        ) : (
                            <div>
                    
                                {
                                    basket?.map((items) =>(
                                        <BasketProducts 
                                            id={items.id}
                                            title={items.title}
                                            price={items.price}
                                            image={items.image}
                                            name={items.name}
                                        />
                                    ))
                                }
                            </div> 
                        )}
                    </div>
                    

            </div>
        
    )
}

export default List
