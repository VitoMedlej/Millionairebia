"use client"
import {Box, Divider, Typography} from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
// import Link from 'next/link'
// import { IProduct } from '@/Types/Types'
import Btn from '../Btn/Btn'
import SwiperCarousel from './SwiperCarousel/SwiperCarousel'
import { useRouter } from 'next/navigation'
// import Perks from '../Perks/Perks'
const ProductCollection = ({sx,delay,Collectiontitle,selectedCars,setQuickView} : {
    Collectiontitle: string,
    delay : number,
    selectedCars: any[],
    sx ?: any;
    setQuickView ?: Dispatch<SetStateAction<{
        isOpen: boolean;
        productId: null | string;
    }>>
}) => {
    
    const router = useRouter()

    return (
        <Box
            sx={{
            maxWidth: 'lg',
            width :'99%',
            margin: '0 auto',
            // my: '3em',
            mt:'4em',
            mb:'3em',
            ...sx,
        }}>
            <Box className="flex justify-between" sx={{width:'100%'}}>

            <Typography
                className='sectionTitle   box'
                sx={{
             
                fontSize: {
                    xs: '1.2em',
                    sm: '1.4em'
                },
                padding:.5,
                fontWeight: '500'
            }}>
              {Collectiontitle}
            </Typography>
            <Box className='flex gap1 gap'>

            <Btn
            
            onClick={()=>router.push('/')}>
                View All
            </Btn>
            <Btn
            sx={{':hover':{color:'white'},color:'green'}}
           >
    <a className='flex center items-center ' style={{color:'green',textDecoration:'none',borderRadius:'2000px'}} href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} target='_blank' rel='noopener'>

              CHAT NOW
              <Box className='center flex align-center' sx={{width:'30px',ml:1}}>
      <img src="https://www.7979.org.my/uploads/1/2/6/3/126376279/whatsapp-icon_1.png" alt="Whatsapp Icon" className="img" />
      </Box>
    </a>
     
            </Btn>
            </Box>

            </Box>
            
            <Box
                sx={{
                display: {
                    xs: "flex",
                 
                }
            }}>
                <SwiperCarousel
                delay={delay}
                
                selectedCars={selectedCars}/>
            </Box>
            

   
{/* <Divider  light /> */}
        
                </Box>
                
                )
                
            }

export default ProductCollection