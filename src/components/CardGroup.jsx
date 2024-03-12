import React from "react"
import "./css/CardGroup.css"
import { useState } from "react"

export default function CardGroup({ options }) {
    const [clickedId, setClickedId] = useState(-1)

    const handleClick = (e, i) => {
        setClickedId(i)
    }

    return (
        <div className="row mb-4 mt-4">
            {options.map((item, i) => (
                <div key={i} className="col">
                    <div
                        onClick={(e) => handleClick(e, i)}
                        className={
                            i == clickedId
                                ? "w-100 cardGroup active"
                                : "w-100 cardGroup"
                        }
                    >
                        <i className={item.icon}></i>
                        <p className="text-truncate">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
