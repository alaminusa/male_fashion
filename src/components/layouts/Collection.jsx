import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Images from '../Images'
import jacket from '../../assets/jacket.png'
import shoo from '../../assets/shoo.png'
import sunglass from '../../assets/sunglass.png'

const Collection = () => {
  return (
    <section className='h-[1100px] mt-24'>
        <Container className='max-w-6xl'>
            <Flex className='relative'>
                <div className='text-inherit mx-auto py-40 z-10 mt-8'>
                    <Paragraph text='Clothing' className='text-4xl font-medium'/>
                    <Paragraph text='Collection 2021' className='text-4xl font-medium py-3' />
                    <Paragraph text='Show Now' className='underline'/>
                </div>
                <div className='bg-[#F1EFF2] w-[350px] h-[374px] absolute top-0 right-40'>
                  <Images src={jacket} className=' ml-28'/>
                </div>
            </Flex>
            
            <Flex className='relative'>
              <div className='bg-[#F1EFF2] w-[350px] h-[374px] mb-20 absolute top-3 left-4'>
                <Images src={sunglass} className=' ml-16'/>
                <Paragraph text='Accessories' className='text-4xl font-medium py-3' />
                <Paragraph text='Show Now' className='underline'/>
              </div>
                <div className=' text-inherit mx-auto py-40 z-10'>
                    <Paragraph text='Shoes' className='text-4xl font-medium absolute top-24 right-[545px]'/>
                    <Paragraph text='Collection 2021' className='text-4xl font-medium py-3 absolute top-36 right-96' />
                    <Paragraph text='Show Now' className='underline absolute top-56 right-[568px]'/>
                </div>
                <div className='bg-[#F1EFF2] w-[350px] h-[374px] absolute top-0 right-24'>
                  <Images src={shoo} className=' ml-16'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Collection
