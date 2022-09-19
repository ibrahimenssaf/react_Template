import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Portfolio.css'
export const Portfolio = () => {

    const [myimages, setMyImages] = useState([]);

    useEffect(() => {
        axios.get('js/data.json').then((res) => setMyImages(res.data.portfolio))
    }, [])


    const portfolioImages = myimages.map((ele) => {
        return (
            <div className='box' key={ele.id}>
                <img src={ele.image} id={ele.id} alt=''/>
            </div>
        )
    })
  return (
    <div className='portfolio' id='portfolio'>
        <h2>My Portfolio</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVASCRIPT</li>
            <li>PHP</li>
        </ul>
        <div className='portofolio-images'>
            {portfolioImages}
        </div>
    </div>
  )
}
