import React from "react"
import { useState, useEffect } from "react"

//Import CSS
import "./css/PriceSlider.css"

export default function PriceSlider(props) {
    const [min, setMin] = useState(props.min)
    const [max, setMax] = useState(props.max)
    const [left, setLeft] = useState("0%")
    const [right, setRight] = useState("0%")

    function changeRangeMin(e) {
        if (parseInt(e.target.value) - max >= -props.step) {
            // console.log("Limit minimum....")
        } else {
            setMin(parseInt(e.target.value))
            if (min == props.min) {
                setLeft("0%")
            } else {
                let totalBar = props.max - props.min
                let qtsSteps = min - props.min

                setLeft((qtsSteps * 100) / totalBar + "%")
            }
        }
    }

    function changeRangeMax(e) {
        if (parseInt(e.target.value) - min <= props.step) {
            // console.log("Limit maximum....")
        } else {
            setMax(parseInt(e.target.value))
            if (max == props.max) {
                setRight("0%")
            } else {
                let totalBar = props.max - props.min
                let qtsSteps = props.max - max

                setRight((qtsSteps * 100) / totalBar + "%")
            }
        }
    }

    useEffect(() => {
        if (min == props.min) {
            document.getElementById("inputMin").value = props.min
        } else {
            document.getElementById("inputMin").value = min
        }
        props.filterByPrice(props.catID, min, max)
    }, [min])

    useEffect(() => {
        if (max == props.max) {
            document.getElementById("inputMax").value = props.max + "+"
        } else {
            document.getElementById("inputMax").value = max
        }
        props.filterByPrice(props.catID, min, max)
    }, [max])

    function validation(e) {
        let inputMin = document.getElementById("inputMin")
        let inputMax = document.getElementById("inputMax")

        let value = parseInt(e.target.value)

        if (e.target.id == "inputMin") {
            if (e.target.value == "" || e.target.value == null) {
                setMin(props.min)
                setLeft("0%")
                inputMin.value = props.min
            } else {
                if (value < props.min) {
                    setMin(props.min)
                    setLeft("0%")
                    inputMin.value = props.min
                } else {
                    if (value >= max) {
                        let correct = max - props.step
                        setMin(correct)

                        var barTotal = props.max - props.min
                        var qtsSteps = value - props.min

                        setLeft((qtsSteps * 100) / barTotal + "%")
                        inputMin.value = correct
                    } else {
                        setMin(value)
                        var barTotal = props.max - props.min
                        var qtsSteps = value - props.min

                        setLeft((qtsSteps * 100) / barTotal + "%")
                        inputMin.value = correct
                    }
                }
            }
        }

        if (e.target.id == "inputMax") {
            if (e.target.value == "" || e.target.value == null) {
                setMax(props.max)
                setRight("0%")
                input.max.value = props.max + "+"
            } else {
                if (value > props.max) {
                    setMax(props.max)
                    setRight("0%")
                    inputMax.value = props.max + "+"
                } else {
                    if (value <= min) {
                        let correct = min + props.step
                        setMax(correct)
                        var barTotal = props.max - props.min
                        var qtsSteps = props.max - value

                        setRight((qtsSteps * 100) / barTotal + "%")
                        inputMax.value = correct
                    } else {
                        setMax(value)
                        var barTotal = props.max - props.min
                        var qtsSteps = props.max - value

                        setRight((qtsSteps * 100) / barTotal + "%")
                        inputMax.value = value
                    }
                }
            }
        }
    }

    function numbersOnly(e) {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault()
        }
    }

    return (
        <div>
            <div className="slider">
                <div
                    style={{ left: left, right: right }}
                    className="progress"
                ></div>
            </div>
            <div className="rangeInput">
                <input
                    id="rangeMin"
                    onChange={changeRangeMin}
                    type="range"
                    min={props.min}
                    max={props.max}
                    value={min}
                    step={props.step}
                />
                <input
                    id="rangeMax"
                    onChange={changeRangeMax}
                    type="range"
                    min={props.min}
                    max={props.max}
                    value={max}
                    step={props.step}
                />
            </div>
            <div className="row mt-4">
                <div className="col">
                    <label className="text-muted">Minimum</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            £
                        </span>
                        <input
                            id="inputMin"
                            onBlur={validation}
                            onKeyPress={(e) => {
                                e.key == "Enter"
                                    ? validation(e)
                                    : numbersOnly(e)
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Min"
                        />
                    </div>
                </div>
                <div className="col">
                    <label className="text-muted">Maximum</label>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">
                            £
                        </span>
                        <input
                            id="inputMax"
                            onBlur={validation}
                            onKeyPress={(e) => {
                                e.key == "Enter"
                                    ? validation(e)
                                    : numbersOnly(e)
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Max"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
