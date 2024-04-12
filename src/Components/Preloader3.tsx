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
import {gsap} from 'gsap';


export const animateFn = (
    className: string,
    duration?: number,
    delay?: number,
    trigger?: { name?: string; start?: string; markers?: boolean } | boolean,
     stagger ?: number
  ) => {
    gsap.to(`.${className}`, {
      opacity: 1,
      y: 0,
      delay: delay || 0,
      duration: duration || 0.5,
      markers: false,
      stagger : stagger || 0,
    
      scrollTrigger:
        trigger === true
          ? {
              trigger: `.${className}`,
              start: 'top 50%',
              markers: false,
            }
          : trigger !== false && trigger !== undefined
          ? {
              trigger: `.${trigger?.name || className}`,
              start: trigger?.start || 'top 50%',
              markers: trigger?.markers || false,
            }
          : undefined, // Set scrollTrigger to undefined when trigger is not provided or is undefined
    });
  };

const Preloader3 = ({res}:{res:any}) => {
    const router = useRouter()
    const [imgs,setImgs] = useState([
        {img:`https://lirp.cdn-website.com/05b938f9/dms3rep/multi/opt/home2-b70c3823-9c60670a-45e534c5-1920w.png`},
        {img : `https://www.dubai-developments.com/images/vm.jpg`},
        {img:`https://danielasulek.com/wp-content/uploads/2021/09/shutterstock_281520980-scaled.jpg`},
     ])
     const redir = () => {
        router.push('/apply')
        // console.log('abc')
     }

  
  
    useEffect(() => {
        if (res) {
            setImgs(res)
        }

    animateFn('title-1',.8,.15,false)

    animateFn('sub-title-1',.5,.8,false)

    animateFn('text-1',.5,1,false)

    animateFn('btn-1',.5,1,false)
    }, [])

    
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
         
            height : {xs:'600px',sm:'550px',md:'100%'},
             
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
                delay: 4000,
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
                            
                      
                            <Box sx={{pointerEvents:'none',top:0,right:0,width:'100%',
                            zIndex:1123,height:'100%',background:'black',opacity:.75}} className="absolute">

                            </Box>
                            <Box 
                            className='auto center text-center'
                            sx={{
                                top:'50%',
                                px:{xs:1,sm:5,md:6},
                                // maxWidth:'850px',
                                transform:'translateY(-50%)',
                                zIndex:123456,
                                position:'absolute'}}>
                                                          <Typography 
                                                          className='clr2 op0 y10 sub-title-1   center text-center auto'
                                sx={{fontWeight:700,fontSize:{xs:'1.185em',sm:'1.2em'},mt:1,maxWidth:'600px'}}>
                                   Welcome to Millionairebia

                                </Typography>
                                <Typography 
                                
                                className='title-1 op0 y20'
                                sx={{color:'white',
                                fontSize:{xs:'1.6em',sm:'3.1em',md:'3.65em',
                                lg:'3.5em'},fontWeight:'900'}}>
                             
                             Where Luxury Meets Success Worldwide
                                </Typography>
                                <Typography 
                                className='center op0 y10 text-1 auto text-center'
                                sx={{color:'white',fontSize:{xs:'.85em',sm:'.87em'},mt:1,maxWidth:'600px'}}>
                                 With a presence in 120 countries, we redefine luxury from boardrooms to breathtaking experiences.

                                </Typography>
                                <Box className="flex auto">

                                <Btn
                                onClick={()=>redir()}
                                
                                className='btn-1  op0 ' sx={{mx:'auto',mt:3}}>
                             Join Us
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

export default Preloader3