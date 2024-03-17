"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react";
// import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from 'next/navigation';
import { Autoplay } from 'swiper';
import Btn from './Btn/Btn';
import useLanguage from '@/Hooks/useLanguage';



const Preloader4 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img:`https://th.bing.com/th/id/R.c1c0845f0d16c0b2ee4e596901075796?rik=qV1Gz5ziGW0c7Q&pid=ImgRaw&r=0`},
     ])
     const redir = () => {
        router.push('/')
        // console.log('abc')
     }
    useEffect(() => {
        console.log('res: ', res);
    if (res && res?.MainCarousel && res?.MainCarousel?.length > 0) {
        console.log('res?.MainCarousel: ', res?.MainCarousel);
        // console.log('res: ', );
        setImgs(res?.MainCarousel)
    }
    }, [])
  const {text} = useLanguage()
    
    return (
        <Box
            sx={{
            // py: {xs:'.75em',sm:'2em',md:'3em'},
            // width: {xs:'98%',md:'74%',lg:'80%'},
            width:'100%',
            maxWidth:'none',
            // maxWidth: 'lg',
            minHeight:'500px',
            maxHeight:{sm:'90vh',md:'700px',lg:'750px'},
            margin: '0 auto',
         
            height : {xs:'100vh',sm:'550px',md:'100%'},
             
            display: {
                xs: 'flex'
            },
            // mt:20,
        }}>
            <Swiper
            
                navigation={false}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                autoplay={{
                delay: 3000,
                disableOnInteraction: true
            }}
                modules={[Autoplay]}
                className="mySwiper swiper">
    
                {imgs.map((item) => {
    
                    return <SwiperSlide 
                     
                    className='ztop  ' key={item.img}>
                        <Box
                            sx={{
                                position:'relative',
                                height: '100%',
                            width:'100%'
                        }}>
                        <Container className='auto center text-center ' sx={{width:'100%'}} maxWidth='lg' disableGutters>
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',zIndex:1123,height:'100%',background:'black',opacity:.55}} className="absolute">

                            </Box>
                            <Box 
                            className='auto center text-center'
                            sx={{
                                top:'50%',
                                px:{xs:4,sm:5,md:6},
                                // maxWidth:'850px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                                          <Typography 
                                                          className='clr2 center text-center auto'
                                sx={{fontWeight:700,fontSize:{xs:'1.185em',sm:'1.2em'},mt:1,maxWidth:'600px'}}>
                                   Millionairebia

                                </Typography>
                                <Typography 
                                
                                sx={{color:'white',fontSize:{xs:'2.15em',sm:'3.1em',md:'3.65em',lg:'3.5em'},fontWeight:'900'}}>
                             
                           Explore Millionairebia Offerings
                                </Typography>
                                <Typography 
                                className='center auto text-center'
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                               Discover a range of options designed to pamper your vehicle, ensuring it radiates elegance on every road. 

                                </Typography>
                                <Box className="flex auto">

                                <Btn
                                              onClick={()=>router.push('/apply')}

                                
                                className='bg white borderColor ' sx={{mx:'auto',mt:3}}>
                               Apply Now
                               

                                </Btn>
                            
                                </Box>
                            </Box>
                            </Container>
                            <img
            
                                className={`img   
                                `}
                                // ${item?.className}
                                src={`${item.img}`}
                                alt="Main Carousel Image"/>
           
                        </Box>
                    </SwiperSlide>
                })
    }
    
            </Swiper>
    
        </Box>
    )
}

export default Preloader4