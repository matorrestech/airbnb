import React from "react"

import PriceSlider from "./PriceSlider"
import ButtonGroup from "./ButtonGroup"
import CardGroup from "./CardGroup"

export default function ModalFilter() {
    return (
        <div
            className="modal fade"
            id="filterModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <button
                            type="button"
                            className="btn-close opacity-100"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <h1
                            className="modal-title fs-5 w-100 fw-bold"
                            id="exampleModalLabel"
                        >
                            Filters
                        </h1>
                    </div>
                    <div className="modal-body">
                        <section className="px-2 mb-4 border-bottom">
                            <span className="fs-4 fw-bold">Price Range</span>
                            <p className="text-muted">
                                The average price per night is £120
                            </p>
                            <PriceSlider min={50} max={2000} step={1} />
                        </section>
                        <section className="px-2 mb-4 border-bottom">
                            <span className="fs-4 fw-bold">Property type</span>
                            <div className="row mt-4 mb-5">
                                <div className="col md-4 ms-3">
                                    <div className="form-check">
                                        <input
                                            className="border border-dark-subtle fs-4 form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="anyType"
                                            value="option1"
                                        />
                                        <label
                                            className="ps-2 pt-1 form-check-label"
                                            htmlFor="anyType"
                                        >
                                            Any type
                                            <br />
                                            <small className="text-muted">
                                                Search rooms, entire homes or
                                                any type of place
                                            </small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col md-4 ms-3">
                                    <div className="form-check">
                                        <input
                                            className="border border-dark-subtle fs-4 form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="room"
                                            value="option2"
                                        />
                                        <label
                                            className="ps-2 pt-1 form-check-label"
                                            htmlFor="room"
                                        >
                                            Room
                                            <br />
                                            <small className="text-muted">
                                                A room in a home, plus access to
                                                shared spaces.
                                            </small>
                                        </label>
                                    </div>
                                </div>
                                <div className="col md-4 ms-3">
                                    <div className="form-check">
                                        <input
                                            className="border border-dark-subtle fs-4 form-check-input"
                                            type="radio"
                                            name="exampleRadios"
                                            id="entireHome"
                                            value="option3"
                                        />
                                        <label
                                            className="ps-2 pt-1 form-check-label"
                                            htmlFor="entireHome"
                                        >
                                            Entire home
                                            <br />
                                            <small className="text-muted">
                                                A room in a home, plus access to
                                                shared spaces.
                                            </small>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="px-2 mb-4 border-bottom">
                            <span className="fs-4 fw-bold">Rooms and beds</span>
                            <p className="mt-3 px-1">Bedrooms</p>
                            <ButtonGroup
                                buttons={[
                                    "Any",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8+",
                                ]}
                            />
                            <p className="mt-3 px-1">Beds</p>
                            <ButtonGroup
                                buttons={[
                                    "Any",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8+",
                                ]}
                            />
                            <p className="mt-3 px-1">Bathrooms</p>
                            <ButtonGroup
                                buttons={[
                                    "Any",
                                    "1",
                                    "2",
                                    "3",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8+",
                                ]}
                            />
                        </section>
                        <section className="px-2 mb-5">
                            <span className="fs-4 fw-bold">Property type</span>

                            <CardGroup
                                options={[
                                    {
                                        icon: "mdi mdi-home-outline",
                                        text: "House",
                                    },
                                    {
                                        icon: "mdi mdi-city-variant-outline",
                                        text: "Flat",
                                    },
                                    {
                                        icon: "mdi mdi-home-import-outline",
                                        text: "Guest House",
                                    },
                                    {
                                        icon: "mdi mdi-office-building-outline",
                                        text: "Hotel",
                                    },
                                ]}
                            />
                        </section>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                        <a href="#" className="ps-2 link-dark fw-bold">
                            Clear all
                        </a>

                        <button
                            type="button"
                            className="fw-bold px-4 py-3 btn btn-dark"
                            data-bs-dismiss="modal"
                        >
                            Show X homes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
