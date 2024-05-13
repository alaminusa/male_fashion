import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import List from '../List'
import Down from '../Icons/Down'



const Header = () => {
  return (
    <section className='h-[70px] bg-black text-white '>
        <Container className='max-w-6xl'>
            <Flex className='justify-between'>
                <Paragraph text='Free Shipping, 30 days return or refund gurantee' className=' text-xl font-medium mt-5'/>
                <ul className='flex mt-5 font-Poppins text- font-medium gap-7'>
                    <List text='SIGN IN'/>
                    <List text='FAQS'/>
                    <List text='USD'/>
                    <div className='mt-2'>
                        <Down/>
                    </div>
                </ul>
            </Flex>
        </Container>
    </section>
  )
}

export default Header
