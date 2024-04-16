import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers on Your Email</h1>
        <p>Subscribe Our Newsletter Stay and Updates</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>

    </div>
  )
}