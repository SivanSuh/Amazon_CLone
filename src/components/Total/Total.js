import React from 'react'
import "./Total.css";
import { useStateValue } from "../../ContextProvider"
import CurrentFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";

function Total() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <CurrentFormat
            renderText={(value) =>(
                <>
                    <p className="total__p">Total({basket.length} items): <strong>{value}</strong></p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"TL"}
        />
    )
}

export default Total
