import React from 'react'
import "./AltBar.css";
import { FaBars, BiDownArrow } from "react-icons/all"

function AltBar() {
    return (
        <div className="altbar"> 
            <div className="left__bar">
                <div className="fa__bars border">
                    <FaBars />
                    <span>Tümü</span>
                </div>
                <div className="border">
                    <span>Satış Yap</span>
                </div>
                <div className="border">
                    <span>Cok Satanlar</span>
                </div>
                <div className="bi__down__arrow border">
                    <span>Prime</span>
                    <BiDownArrow />
                </div>
                <div className="border">
                    <span>Moda</span>
                </div>
                <div className="border">
                    <span>Elektronik</span>
                </div>
                <div className="border">
                    <span>Yeni Cıkanlar</span>
                </div>
            </div>
            <div className="border">
                <span>Amazon Prime</span>
            </div>
        </div>
    )
}

export default AltBar
