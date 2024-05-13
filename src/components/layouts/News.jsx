import React from 'react'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import mens from '../../assets/man.png'
import excessories from '../../assets/excessories.png'
import shirt from '../../assets/shirt.png'

const News = () => {
  return (
    <section className='pb-10'>
        <Paragraph text='Latest News' className="text-center text-2xl text-[#AE2424]"/>
        <Heading text='Fashion New Trends' as='h3' className="text-center font-Poppins text-5xl font-medium"/>
        <Container className="w-[85%] ">
            <Flex className='relative justify-between'>
                <div className='mt-32'>
                    <Images src={mens}/>
                    <div className='absolute -bottom-24 left-20 text-center bg-white px-6'>
                        <Paragraph text='16 February 2020' className='text-xs font-medium'/>
                        <Paragraph text='What Curling Irons' className='text-base font-medium pt-4'/>
                        <Paragraph text='Are The Best Ones' className='text-base font-medium'/>
                        <Paragraph text='Read More' className='text-base font-medium underline pt-6'/>
                    </div>
                </div>
                <div className='mt-32'>
                    <Images src={excessories}/>
                    <div className='absolute -bottom-24 left-[500px] text-center bg-white px-6'>
                        <Paragraph text='16 February 2020' className='text-xs font-medium'/>
                        <Paragraph text='What Curling Irons' className='text-base font-medium pt-4'/>
                        <Paragraph text='Are The Best Ones' className='text-base font-medium'/>
                        <Paragraph text='Read More' className='text-base font-medium underline pt-6'/>
                    </div>
                </div>
                <div className='mt-32'>
                    <Images src={shirt}/>
                    <div className='absolute -bottom-24 right-20 text-center bg-white px-6'>
                        <Paragraph text='16 February 2020' className='text-xs font-medium'/>
                        <Paragraph text='What Curling Irons' className='text-base font-medium pt-4'/>
                        <Paragraph text='Are The Best Ones' className='text-base font-medium'/>
                        <Paragraph text='Read More' className='text-base font-medium underline pt-6'/>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default News
