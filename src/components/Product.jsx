import React from 'react'
import Images from './Images'
import Badge from './Badge'
import Paragraph from './Paragraph'
import Flex from './Flex'
import star from '../../src/assets/star.png'

const Product = ({src, bg_text, para_text}) => {
  return (
    <section className='py-14'>
        <div className='w-[271px] bg-[#F1EFF2] h-72 relative'>
            <Images src={src} className="w-full h-full"/>
            <Badge text={bg_text} className="absolute top-4 left-0"/>
        </div>
        <Paragraph text={para_text} className='text-xs mt-7'/>
            <Flex className='text-xs py-2'>
              <Images src={star}/>
              <Images src={star}/>
              <Images src={star}/>
              <Images src={star}/>
              <Images src={star}/>
            </Flex>
            <Paragraph text="Rs.3500" className='font-bold  text-sm font-Roboto'/>
    </section>
  )
}

export default Product
