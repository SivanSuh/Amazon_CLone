import React from 'react'
import "./Navbar.css";
import { BsSearch , BiDownArrow, FaShoppingCart } from  "react-icons/all";
import { Link } from "react-router-dom";
import { useStateValue } from '../../ContextProvider';

function Navbar() {
    const [{ basket }] = useStateValue();
    console.log(basket)
    return (
        <div className="navbar" >
            <Link to="/" className="Link">
                <div className="logo__details" >
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" className="logo" alt="logo" />
                    <span style={{color:"white"}} >.com.tr</span>
                </div>
            </Link>
            
            <div className="search" >
                <div className="category__section">
                    <span className="category" >Tüm Kategoriler</span>
                    <BiDownArrow />
                </div>
                <input className="input" placeholder="enter anythink" />
                <div className="search__button">
                    <BsSearch />
                </div>
            </div>
            <Link to="/account" className="Link">
                <div className="account" >
                    <span style={{color:"gray"}} >Hesaba Giris yapın</span>
                    <span>Hesap ve Listeler</span>
                </div>
            </Link>
            <Link to="/list" className="Link">
                <div className="shopping">
                    <FaShoppingCart style={{fontSize:"25px"}}/>
                    <span style={{marginLeft:"5px", color:"red", fontSize:"25px"}}>{basket?.length}</span>
                    
                </div>
            </Link>
        </div>
    )
}

export default Navbar
