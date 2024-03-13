import { useState, useEffect } from "react"
//Import Bootstrap@5.3.3
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

//Import Design Icons
import "@mdi/font/css/materialdesignicons.css"

//Import CSS General
import "/App.css"

import { accommodations } from "../backend/dados.js"

//Import Components
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import ModalFilter from "./components/ModalFilter"
import Card from "./components/Card"
import Skeleton from "./components/Skeleton.jsx"

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [catID, setCatID] = useState(1)
    const [allHouses, setAllHouses] = useState([])
    const [filterHouses, setFilterHouses] = useState([])

    useEffect(() => {
        setAllHouses(accommodations)
        setIsLoading(false)
    }, [])

    useEffect(() => {
        filterByID(catID)
    }, [allHouses, catID])

    const changeCat = (id) => {
        setCatID(id)
        filterByID(id)
    }

    const filterByID = (id) => {
        const newList = allHouses.filter((item) => {
            return item.category === id
        })
        setFilterHouses(newList)
    }

    const filterByPrice = (catID, min, max) => {
        const newList = allHouses.filter((item) => {
            return (
                item.category === catID &&
                item.price >= min &&
                item.price <= max
            )
        })
        setFilterHouses(newList)
    }

    const resetFilter = (id) => {
        filterByID(id)
    }

    return (
        <div>
            <Navbar />
            <Categories changeCat={changeCat} />
            {isLoading ? (
                <div
                    className="t-4 containerAirbnb row"
                    style={{ paddingTop: "180" }}
                >
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <Card dados={filterHouses} />
            )}
            <ModalFilter
                resetFilter={resetFilter}
                catID={catID}
                filterByPrice={filterByPrice}
                items={filterHouses}
            />
        </div>
    )
}

export default App
