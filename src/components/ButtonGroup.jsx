import React from "react"
import { useState } from "react"

import "./css/ButtonGroup.css"

export default function ButtonGroup({ buttons }) {
    const [clickedId, setClickedId] = useState(-1)

    const handleClick = (e, i) => {
        setClickedId(i)
    }

    return (
        <div className="row mb-4">
            {buttons.map((buttonLabel, i) => (
                <div key={i} className={i == 0 ? "col-2" : "col"}>
                    <button
                        key={i}
                        onClick={(e) => handleClick(e, i)}
                        className={
                            i == clickedId ||
                            (clickedId == -1 && buttonLabel == "Any")
                                ? "w-100 specialBtn active"
                                : "w-100 specialBtn"
                        }
                    >
                        {buttonLabel}
                    </button>
                </div>
            ))}
        </div>
    )
}
