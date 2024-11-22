import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                    <img src="https://imgs.search.brave.com/Bg6UWk4uU8TJfZF-ufuUOfnvWJTGqMlAv9Am9cEn6Xs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTM1/Mjc0NjAxL3Bob3Rv/L2R1bXBsaW5ncy1v/bi1wbGF0ZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bGd6/ZTNqakZqYXVCZ1lh/cHRhQ25UajQ0UHhk/cE9nd1o1RkRISTFp/M0xkST0" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Momos</h5>
                        <p className="card-text">Tasty</p>
                        <div className='container w-100'>
                            <select className='m-2 h-100 bg-success rounded'>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>

                            <select className='m-2 h-100 bg-success rounded'>
                                <option value="Half">Half</option>
                                <option value="Full">Full</option>
                            </select>

                            <div className='d-inline h-100 fs-5'>
                                Total
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
