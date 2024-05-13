import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Heading from '../Heading'
import Button from '../Button'
import Images from '../Images'
import circle from '../../assets/circle.png'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <section className='bg-[#F2F3EC] h-[821px]'>
        <Container className="w-[1110px]">
            <Flex>
                <div className='w-1/3 py-60'>
                    <Paragraph text="Summer Collection" className='font-medium text-lg text-[#AE2424]'/>
                    <Heading text="Fall - Winter" as="h1" className='font-Poppins font-medium text-[40px] pt-10 pb-7'/>
                    <Heading text="Collection 2021" as="h1" className='font-Poppins font-medium text-[40px]'/>
                    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu sed arcu, sit id vulputate purus tristique egestas." className='text-sm py-6 mr-20'/>
                    <Button text='Shop Now >' className='font-medium text-lg'/>
                </div>
                <div className='relative w-2/3'>
                    <Images src={circle} className='ml-[279px] mt-52'/>
                    <Images src={hero} className='absolute top-10 right-3 h-[80%]'/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Hero
