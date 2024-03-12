import React from "react"

//Import CSS
import "./css/Navbar.css"

//Import Image
import logo from "../assets/airbnb.svg"

export default function Navbar() {
    return (
        <div>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    zIndex: 999,
                }}
                className="navTop"
            >
                <div className="containerAirbnb">
                    <div className="ps-sm-4 col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center">
                        <img className="logo" src={logo} alt="Airbnb Logo" />
                    </div>
                    <div className="d-none d-sm-flex col-sm-6 align-items-center align-items-center justify-content-end">
                        <a href="#" className="airbnbYourHome">
                            Airbnb your home
                        </a>
                        <a href="#" className="iconLanguage">
                            <i className="mdi mdi-web"></i>
                        </a>
                        <div className="dropdown">
                            <button
                                className="buttonLogin dropdown mx-3"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="fs-5 mdi mdi-menu ps-2 me-1"></i>
                                <i className="fs-2 mdi mdi-account-circle position-relative pe-2">
                                    <span className="position-absolute top-0 start-50 badge border border-light rounded-circle bg-danger p-2">
                                        <span className="visually-hidden">
                                            unread messages
                                        </span>
                                    </span>
                                </i>
                            </button>
                            <ul
                                style={{ borderRadius: "15px" }}
                                className="dropdown-menu mt-2 py-3 border-0 shadow"
                            >
                                <li>
                                    <a
                                        className="dropdown-item p-2 px-3"
                                        href="#"
                                    >
                                        Sign in
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item p-2 px-3"
                                        href="#"
                                    >
                                        Log in
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item p-2 px-3"
                                        href="#"
                                    >
                                        Gift cards
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item p-2 px-3"
                                        href="#"
                                    >
                                        Airbnb your home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="dropdown-item p-2 px-3"
                                        href="#"
                                    >
                                        Help Centre
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <nav
                id="mobile"
                className="d-sm-none bg-white fixed-bottom d-flex align-items-center justify-content-between"
            >
                <a
                    href="#"
                    className="d-flex flex-column text-center navIcon active"
                >
                    <i className="fs-3 mdi mdi-compass"></i>
                    <span>Explore</span>
                </a>
                <a href="#" className="d-flex flex-column text-center navIcon">
                    <i className="fs-3 mdi mdi-heart"></i>
                    <span>Wishlists</span>
                </a>
                <a href="#" className="d-flex flex-column text-center navIcon">
                    <i className="fs-3 mdi mdi-account-circle"></i>
                    <span>Log in</span>
                </a>
            </nav>
        </div>
    )
}
