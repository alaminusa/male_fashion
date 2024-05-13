import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import logo from '../../assets/logo.png'
import List from '../List'
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { RiShoppingBagLine } from "react-icons/ri";
import { useRef } from "react";

const Nav = () => {
  let dropRef = useRef(null);

  let handleDrop = () => {

    if (dropRef.current.style.display == "block") {
      dropRef.current.style.display = "none"
    }
    else{
      dropRef.current.style.display = "block"
    }

  };

  return (

    
    <nav className='h-[90px]'>
        <Container className='max-w-6xl'>
            <Flex className='justify-between'>
                <div className='w-1/4 mt-8'>
                  <Images src={logo}/>
                </div>
                <ul className='w-1/3 flex font-Poppins font-medium text-xl gap-10 mt-8 '>
                    <List className='hover:text-green-500'  text='Home'/>
                    <List className='hover:text-green-500'  text='Shop'/>
                    <List className='hover:text-green-500' text='Blog'/>
                    <List className='hover:text-green-500' text='Contact'/>
                </ul>
                <div className=' flex justify-between gap-10 mt-8'>
                  <IoSearch onClick={handleDrop} className='cursor-pointer'/>
                  <CiHeart className='cursor-pointer'/>
                  <RiShoppingBagLine className='cursor-pointer'/>
                </div> 
            </Flex>
            <div className='flex justify-end'>
            <input type="search" className=' hidden text-center border-2 outline-0 w-32 rounded-md cursor-pointer' ref={dropRef} placeholder='Search Product'/>
            </div>
        </Container>
    </nav>
  )
}

export default Nav
