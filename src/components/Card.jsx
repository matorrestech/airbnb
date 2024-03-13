import React from "react"

import "./css/Card.css"

// import { accommodations } from "../../backend/dados"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

export default function card({ dados }, { dCard }) {
    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function Animate(e) {
        e.target.classList.toggle("animate")
    }

    if (dados.length === 0) {
        return (
            <div
                style={{ paddingTop: "180px", paddingBottom: "100px" }}
                className="d-flex justify-content-center align-items-center"
            >
                <div className="containerAirbnb row">
                    <div className="col mt-5">
                        <div className="card text-center">
                            <div className="card-body">
                                No accommodation found for this category.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div
                style={{ paddingTop: "180px", paddingBottom: "100px" }}
                className="container-fluid"
            >
                <div className="containerAirbnb row">
                    {dados.map((accommodation, index) => (
                        <div
                            key={accommodation.id}
                            className="position-relative mt-4 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2"
                        >
                            <div
                                onClick={Animate}
                                className="heartAnimation position-absolute top-0 end-0"
                            ></div>
                            <Swiper
                                className="imgContent"
                                navigation={true}
                                pagination={true}
                                modules={[Pagination, Navigation]}
                            >
                                {accommodation.images.map((images, index) => {
                                    return (
                                        <SwiperSlide
                                            className="swiperImg"
                                            key={index}
                                        >
                                            <img
                                                className="cardImage img-fluid"
                                                src={images}
                                            />
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                            <p className="d-flex justify-content-between mt-3 mb-0">
                                <span
                                    style={{
                                        display: "block",
                                        maxWidth: "200px",
                                    }}
                                    className="fw-bold text-truncate"
                                >
                                    {accommodation.city},{" "}
                                    {accommodation.country}
                                </span>
                                <span>
                                    <i className="mdi mdi-star"> </i>
                                    {accommodation.score}
                                </span>
                            </p>
                            <p className="text-muted my-0">
                                {getRandomInt(10, 500)} miles away
                            </p>
                            <p className="text-muted">
                                {getRandomInt(1, 30)}th Mar to{" "}
                                {getRandomInt(1, 30)}
                                th Apr
                            </p>
                            <p className="fw-bold">
                                £ {accommodation.price.toLocaleString("en-GB")}{" "}
                                night
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
