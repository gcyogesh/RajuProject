import React, { useEffect, useState } from 'react'

export default function Card() {
    const [cardData, setCardData] = useState([]);

    const fetchData = async () => {
        try {
            const api = "http://localhost:5000/api/carddata"
            const response = await fetch(api, {
                method: "GET",
                headers: {
                    'content-type': "application/json",
                    body: JSON.stringify()
                }
            })
            const result = await response.json();
            setCardData(result.data);
            console.log(result)

        } catch (err) {
            console.log(err, "error getting data");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="card-container">
            {cardData.map((item, index) => {
                const { title, description, image, price } = item
                return (
                    <div key={index} className="card mt-3" style={{ "width": "33rem", "maxHeight": "560px" }} >
                        <img src="https://images.pexels.com/photos/258356/pexels-photo-258356.jpeg?auto=compress&cs=tinysrgb&w=600" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-title">{title}</h2>
                            <p className="card-text">{description}</p>
                            <div className='container w-100'>
                                <select className='m-2 h-100  bg-success rounded'>
                                    {Array.from(Array(6), (e, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>
                                <select className='m-2 h-100  bg-success rounded'>
                                    <option value="half">Half</option>
                                    <option value="full">Full</option>
                                </select>
                                <div className='d-inline h-100 fs-5'>
                                    ${price}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
