import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {
    const [search, setSearch] = useState('');
    const [foodCat, setFoodCat] = useState([]);
    const [foodItem, setFoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/foodData", {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            }
        })
        response = await response.json();

        // console.log(response[0],response[1]);
        setFoodItem(response[0]);
        setFoodCat(response[1]);
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <div>
            <div> <Navbar /> </div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-caption" style={{ zIndex: "10" }}>

                            <div className="d-flex justify-content-center">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}} />
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img src="https://t3.ftcdn.net/jpg/01/14/51/60/360_F_114516029_Z2B6FO30AB6ZR3v9WHXjpXmJScaiLtzk.jpg" alt="..." style={{height:"850px",objectFit:"fill",width:"2000px",filter: "brightness(30%)"}} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg" className="d-block w-100" alt="..." style={{height:"850px",objectFit:"fill", filter: "brightness(30%)" }} />
                        </div>
                        <div className="carousel-item">
                            <img src="https://th.bing.com/th/id/OIP.64vXNk6FRg6TzVCW7u2zLAHaFj?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..." style={{height:"850px",objectFit:"fill", filter: "brightness(30%)"}} />
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
            <div className='container'>
                {
                    foodCat
                        ? foodCat.map((data) => {
                            return (<div className='row mb-4'>
                                <div key={data._id} className="fs-4 m-3">
                                    {data.CategoryName}
                                </div>
                                <hr />
                                {foodItem != [] ? foodItem.filter((e) => 
                                    (e.CategoryName === data.CategoryName) && (e.name.toLowerCase().includes(search.toLowerCase())))
                                .map((ele) => {
                                    return (
                                        <div key={ele._id} className="col-12 col-md-6 col-lg-3">
                                            <Card foodItem = {ele}  
                                                options={ele.options[0]}
                                                
                                            ></Card>
                                        </div>
                                    )
                                }) : <div>Data not Found</div>}
                            </div>
                            )
                        })
                        : ""
                }
            </div>
            <div> <Footer /> </div>
        </div>
    )
}
