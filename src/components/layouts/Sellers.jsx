import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Paragraph from '../Paragraph'
import Product from '../Product'
import white_shoo from '../../assets/white_shoo.png'
import jacket from '../../assets/brown_jacket.png'
import bag from '../../assets/bag.png'
import loffer from '../../assets/loffer_shoo.png'
import red_glass from '../../assets/red_sunglass.png'
import t_shirt from '../../assets/t_shirt.png'
import pant from '../../assets/pant.png'
import watch from '../../assets/watch.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from '../List'

const Sellers = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let breadcumb = window.location.pathname;

  return (
    <section>
      
        <Container className='w-[1170px] py-8'>
        <Link>{breadcumb}</Link>
            <Flex className='justify-center gap-16'>
                <Link><Paragraph text="Best Sellers" className='text-4xl font-medium'/></Link>
                <Link><Paragraph text="New Arrivals" className='text-4xl font-medium text-[#C4C4C4]'/></Link>
                <Link><Paragraph text="Hot Sales" className='text-4xl font-medium text-[#C4C4C4]'/></Link>
            </Flex>
            <Slider {...settings}>
                <Product src={white_shoo} bg_text='New' para_text='Alhe Shoes'/>
                <Product src={jacket} bg_text='New' para_text='Jacket'/>
                <Product src={bag} bg_text='New' para_text='Bag'/>
                <Product src={loffer} bg_text='New' para_text='Shoes'/>
                <Product src={jacket} bg_text='New' para_text='Jacket'/>
            </Slider>
                
            <Slider {...settings}>
                <Product src={red_glass} bg_text='Sell' para_text='Sunglass'/>
                <Product src={t_shirt} bg_text='50% off' para_text='T_shirt'/>
                <Product src={pant} bg_text='New' para_text='Pant'/>
                <Product src={watch} bg_text='20% off' para_text='Watch'/>
                <Product src={t_shirt} bg_text='50% off' para_text='T_shirt'/>
            </Slider>
        </Container>
    </section>
  )
}

export default Sellers
