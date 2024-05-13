import React from 'react'
import Images from '../Images'
import offer from '../../assets/offer_banner.png'
import { Link } from 'react-router-dom'

const Offer = () => {
  return (
    <>
     <Link><Images src={offer} className="pt-5 pb-12"/> </Link>
    </>
  )
}

export default Offer
