import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import Heading from '../Heading'
import instagram1 from '../../assets/instagram1.png'
import instagram2 from '../../assets/instagram2.png'
import instagram3 from '../../assets/instagram3.png'
import instagram4 from '../../assets/instagram4.png'
import Paragraph from '../Paragraph'


const Instagram = () => {
  return (
    <section className='h-[757px] mt-32'>
        <Container className='max-w-[1170px]'>
            <Flex className="justify-between gap-28">
                <div className='flex w-1/2'>
                    <div>
                        <Images src={instagram1}/>
                        <Images src={instagram3}/>
                    </div>
                    <div>
                        <Images src={instagram2}/>
                        <Images src={instagram4}/>
                    </div>
                </div>
                <div className='w-1/2 pr-36 mt-16'>
                    <Heading text='Instagram' as="h3" className="text-5xl font-medium font-Poppins"/>
                    <Paragraph className="text-2xl text-[#C4C4C4] py-7" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales euismod lobortis nibh vel purus nec rhoncus. Viverra mauris, ullamcorper nulla quam posuere nibh donec nisi, ut.'/>
                    <Heading text="#Male_Fashion" as='h4' className="text-4xl font-semibold font-Poppins text-[#AE2424]"/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Instagram
