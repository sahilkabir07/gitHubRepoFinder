import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { BASE_URL } from '../utils/baseUrl';


const Body = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch(`${BASE_URL}/users`)
            .then(res => res.json())
            .then(data => setdata(res)
            )
    })
    return (
        <div>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Body