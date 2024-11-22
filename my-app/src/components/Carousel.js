import React from 'react'

export default function  () {
  return (
    <div> 
         <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
                <div className="carousel-caption">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                <div className="carousel-item active">
                    <img src="https://imgs.search.brave.com/Uzqz9i5RmvhOLDoi73YuY0Fg-N5tw_sMxfdzEa_WCVI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg1LzI5LzEz/LzM2MF9GXzU4NTI5/MTMzOF8wSjhROHZZ/YktEQ3U4eXFxd0FP/OFBzUVo0RVNQMnpk/OC5qcGc" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    </div>
  )
}
