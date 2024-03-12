import React from "react"
import { useState } from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import required modules
import { Pagination, Navigation } from "swiper/modules"

//Import CSS
import "./css/Categories.css"

//Import Categories Dados
import { categories } from "../../backend/dados"

export default function Categories() {
    const [idChecked, setIdChecked] = useState(1)

    const handleClick = (e, id) => {
        console.log("id checked is:", id)
        setIdChecked(id)
    }

    return (
        <div
            style={{
                marginTop: "80px",
                position: "fixed",
                top: 0,
                zIndex: 998,
            }}
            className="bg-white pt-2 container-fluid d-flex justify-content-between align-items-center"
        >
            <div className="containerAirbnb  d-flex justify-content-between align-items-center row">
                <div className="col-sm-11">
                    <Swiper
                        breakpoints={{
                            100: {
                                slidesPerView: 3,
                                slidesPerGroup: 3,
                                spaceBetween: 1,
                            },
                            576: {
                                slidesPerView: 4,
                                slidesPerGroup: 4,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 6,
                                slidesPerGroup: 6,
                                spaceBetween: 7,
                            },
                            992: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7,
                            },
                            1200: {
                                slidesPerView: 8,
                                slidesPerGroup: 8,
                                spaceBetween: 7,
                            },
                            1400: {
                                slidesPerView: 10,
                                slidesPerGroup: 10,
                                spaceBetween: 7,
                            },
                            1600: {
                                slidesPerView: 14,
                                slidesPerGroup: 13,
                                spaceBetween: 7,
                            },
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {categories.map((dados, index) => {
                            return (
                                <SwiperSlide
                                    key={dados.id}
                                    virtualIndex={index}
                                    className={
                                        dados.id === idChecked ? "active" : ""
                                    }
                                    onClick={(e) => handleClick(e, dados.id)}
                                >
                                    <img className="mb-2" src={dados.image} />
                                    <span>{dados.title}</span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="col-sm-1">
                    <button
                        className="d-none d-md-flex d-lg-none w-100 justify-content-center float-end btn btnFiltro"
                        data-bs-toggle="modal"
                        data-bs-target="#filterModal"
                    >
                        <i className="mdi mdi-filter-variant me-2"></i>
                    </button>
                    <button
                        className="d-none d-lg-flex btn btnFiltro float-end"
                        data-bs-toggle="modal"
                        data-bs-target="#filterModal"
                    >
                        <i className="mdi mdi-filter-variant me-2"></i> Filtros
                    </button>
                </div>
            </div>
        </div>
    )
}
