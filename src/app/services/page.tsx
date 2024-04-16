"use client"
import React from 'react'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import Preloader4 from '../../Components/Preloader4'
import { Container,Grid, Box, Typography } from '@mui/material'
import Btn from '@/Components/Btn/Btn'
import { useRouter } from 'next/navigation'
import CarWashTable from './CarWashTable'
import CarPriceTable from './CarPriceTable'



let dataArray = [
  { 
    category: 'Luxury Concierge Services',
    img: 'https://www.insignia.com/wp-content/uploads/2020/08/paz004-1024x768.jpeg',
    description: "Experience luxury like never before with Millionairebia's exclusive concierge services, spanning over 120 countries worldwide. From arranging private jet and yacht trips to booking luxury accommodations, restaurants, nightlife, and spa experiences, our dedicated team ensures every aspect of your journey is meticulously curated to perfection. Elevate your travel and lifestyle with unparalleled access to the finest destinations and experiences, tailored to your every desire."
  },
  { 
    category: 'Luxury Consultations',
    img: 'https://th.bing.com/th/id/R.572c841145d8851a0ca10739db7ba16a?rik=IcDRK7hr4tyCdw&pid=ImgRaw&r=0',
    description: "Unlock the secrets to a luxury life with Millionairebia's bespoke consultation services. Whether you seek expert advice on investment opportunities, wealth management strategies, or lifestyle enhancements, our experienced consultants are here to guide you every step of the way. With personalized solutions tailored to your unique goals and aspirations, embark on a journey to elevate your wealth, well-being, and overall quality of life."
  },
  { 
    category: 'Healthcare Services & Consultation',
    img: 'https://th.bing.com/th/id/R.63c5a349e19fef9ca2d1bac17bf7360f?rik=XsBgGhN3TdXJpg&pid=ImgRaw&r=0',
    description: "Prioritize your well-being with Millionairebia's comprehensive healthcare services and expert consultations. From routine check-ups to specialized treatments and life coaching sessions, our team of healthcare professionals is committed to helping you achieve optimal health and vitality. With access to top-tier medical facilities and personalized care plans, take control of your health and wellness journey with confidence and peace of mind."
  },
  { 
    category: 'Fashion Advice and Personal Shop Assistants',
    img: 'https://th.bing.com/th/id/R.650a9c8ca3c44ad5f701071e7ecf2660?rik=B0hW0SZf1XIunA&pid=ImgRaw&r=0',
    description: "Elevate your style with Millionairebia's fashion advisory services and personalized shopping experiences. Whether you're seeking wardrobe updates, style consultations, or assistance with special occasion outfits, our team of fashion experts is here to curate the perfect look for every occasion. With access to the latest trends, luxury brands, and exclusive collections, redefine your personal style and make a lasting impression wherever you go."
  },
  { 
    category: 'Business Lounges Worldwide',
    img: 'https://th.bing.com/th/id/R.a0b7e0ebe1f924b3c638b5b9c8290e6e?rik=ZZTbqhJpGPy%2f4g&pid=ImgRaw&r=0',
    description: "Conduct business in style with Millionairebia's global network of over 3800 luxurious business lounges across 120 countries. Whether you're hosting meetings, networking with industry leaders, or simply need a professional space to work remotely, our premium lounges offer unparalleled comfort, convenience, and sophistication. With personalized assistance from our worldwide team, elevate your business endeavors and make meaningful connections in any corner of the world."
  },
  { 
    category: 'Business Partnership and PR Services',
    img: 'https://th.bing.com/th/id/R.31c475f6a8d0e47fb3e8d0e9426c269b?rik=EWaE4C6sX4xkzA&riu=http%3a%2f%2fwww.5wpr.com%2fnew%2fwp-content%2fuploads%2f2016%2f09%2fluxury-public-relations.jpg&ehk=JhKf7b6i2uzXh%2bMRm3evBy2OT6K2cAiZoA0ffruqZeA%3d&risl=&pid=ImgRaw&r=0',
    description: "Forge strategic alliances and elevate your brand with Millionairebia's business partnership and PR services. From identifying lucrative opportunities to crafting compelling brand narratives and managing public relations campaigns, our team of experts is dedicated to helping you achieve your business objectives and enhance your industry presence. With access to our extensive network of contacts and resources, unlock new avenues for growth and success."
  },
  { 
    category: 'Authentic Brands Seller',
    img: 'https://www.apetogentleman.com/wp-content/uploads/2020/08/best-luxury-brands-800x533.jpg',
    description: "Discover authenticity with Millionairebia's curated selection of genuine luxury brands and products. From designer fashion and accessories to fine jewelry and watches, our platform offers discerning consumers access to authentic, high-quality merchandise from trusted sellers around the world. Shop with confidence knowing that every item has been carefully vetted for quality and authenticity, ensuring a premium shopping experience like no other."
  },
  { 
    category: 'Real Estate and Land Sales',
    img: 'https://th.bing.com/th/id/R.1a2f0c22a1cb3a7fd625e386f80255bc?rik=3XNq3yMtx7DHnQ&pid=ImgRaw&r=0',
    description: "Explore unparalleled luxury living with Millionairebia's exclusive real estate and land sales services. Whether you're searching for a lavish villa overlooking the sea, a sprawling estate in the countryside, or a prime parcel of land for development, our experienced real estate professionals are here to assist you every step of the way. With access to prestigious properties and investment opportunities worldwide, turn your dreams of luxury homeownership into reality."
  },
  { 
    category: 'Events Planning and Management',
  
    img: 'https://th.bing.com/th/id/R.925d774240ab95e0b9ba1bbcbb348949?rik=0qPcecQKUhAk8g&riu=http%3a%2f%2fwww.forever-events.com%2fwp-content%2fuploads%2f2018%2f07%2fluxury-event-planners.jpg&ehk=VwO7iDiWi8zpeORRwveb5NNnD71joSC4Zrdbu2shvZA%3d&risl=&pid=ImgRaw&r=0',
    description: "Bring your vision to life with Millionairebia's comprehensive events planning and management services. Whether you're hosting a lavish gala, a corporate retreat, or an intimate celebration, our team of event specialists is dedicated to delivering unforgettable experiences tailored to your unique requirements. From concept development and venue selection to logistics coordination and on-site management, let us handle every detail while you enjoy a seamless and stress-free event."
  },
  { 
    category: 'Social Media Coverage and Success Stories',
    img: 'https://img.socialmediatraining.org.uk/wp-content/uploads/2020/03/iStock-1077572732.jpg',
    description: "Maximize your brand's visibility and share your success stories with Millionairebia's comprehensive social media coverage and digital magazine features. With our Instagram official page and international website, gain exposure to a global audience of luxury enthusiasts and influencers. Our collaborative media partners ensure that your brand is showcased in a professional and engaging manner, helping you connect with your target audience and elevate your brand presence in the luxury lifestyle market."
  }
];
const Index = () => {
  const router= useRouter();
  const isValidDescription = (description : any) => {
    return /\b(compact|sedan|SUV)\s+\$\d+\b/g.test(description);
  };
  
  // Add the "isValid" property to each object
  const carPricesWithValidity = dataArray.map((item) => ({
    ...item,
    isValid: isValidDescription(item.description),
  }));
  // console.log('carPricesWithValidity: ', carPricesWithValidity);
  return (
    <>
    <Preloader4 res={undefined}/>
    <Container sx={{mt:{xs:4,sm:8},maxWidht:'lg'}} >

  
     { carPricesWithValidity.map((i,index)=>{ return <Grid className='items-center' key={i?.category} sx={{
  py:{xs:5,sm:5,md:6},
  justifyContent:'space-around !important',
  flexDirection:{xs:'column',sm: index % 2 ? 'row' :'row-reverse'}}} container>
        <Grid sx={{width:'100%'}} item xs={12} sm={6}>
            <Box sx={{width:'100%'}}>
            <Typography className='clr' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pb:1,maxWidth:'800px',}}>
        Our Services
      </Typography>

      <Typography
      className='white'
      sx={{whiteSpace:'pre-wrap',fontWeight:900,fontSize:{xs:'1.75em',md:'2.4em'},pb:1,maxWidth:'600px',fontStyle:'',textTransform:'uppercase'}}>
      {/* Professional washing and cleaning of your car */}
      {i?.category}
      </Typography>


      {  i?.isValid  && (
    <CarPriceTable data={i?.description}/>
  )   }


        {
          !i?.isValid && (<Typography className='white' sx={{whiteSpace:'pre-wrap',
          
          fontWeight:400,
          pb:{xs:2,sm:0},
          fontSize:{xs:'.8em',sm:'.89em'},maxWidth:'550px',fontStyle:'',textTransform:''}}>
  
          {i?.description}
          
              </Typography>)
        }

 
      {/* <a className='decor-none' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=${encodeURIComponent(`Hello, I would like to know more about ${i?.category}`)}`}>

      <Btn sx={{my:2}}>
        Book Now
      </Btn>
      </a> */}
            </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
            <Box sx={{minWidth:{xs:'90vw',sm:'200px'}, width:{xs:'100%',sm:'300px',md:'500px'},height:{xs:'300px',sm:'250px',md:'350px'}}}>
              <img style={{borderRadius:'6px'}} src={i?.img} alt="" className="img cover" />
            </Box>
        </Grid>
        </Grid>})}
    </Container>
 
    </>
  )
}

export default Index
