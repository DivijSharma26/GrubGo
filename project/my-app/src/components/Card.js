import React, { useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    const dispatch = useDispatchCart();
    const [quantity, setQuantity] = useState(1);
    const [selectedOption, setSelectedOption] = useState(Object.keys(props.options)[0]);

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.foodItem._id,
                name: props.foodItem.foodName,
                img: props.foodItem.img,
                price: props.options[selectedOption] * quantity,
                quantity: quantity,
                option: selectedOption
            }
        });
    };

    let options = props.options;
    let priceOptions = Object.keys(options);

    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                    <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "250px", objectFit: "fill" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.foodName}</h5>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-success rounded' value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                                {priceOptions.map((data) => {
                                    return <option key={data} value={data}>{data}</option>
                                })}
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total price: {options[selectedOption] * quantity}
                            </div>
                        </div>
                        <hr></hr>
                        <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
