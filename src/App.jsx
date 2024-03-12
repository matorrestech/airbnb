//Import Bootstrap@5.3.3
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

//Import Design Icons
import "@mdi/font/css/materialdesignicons.css"

//Import CSS General
import "/App.css"

//Import Components
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import ModalFilter from "./components/ModalFilter"
import Card from "./components/Card"

function App() {
    return (
        <div>
            <Navbar />
            <Categories />
            <Card />
            <ModalFilter />
        </div>
    )
}

export default App
