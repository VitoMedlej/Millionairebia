"use client"
// import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
  ` Our mission at Millionairebia is to redefine luxury living by providing unparalleled concierge services, expert consultations, and exclusive access to the world's most prestigious destinations and experiences. We envision a world where every individual has the opportunity to indulge in the finest luxuries and elevate their lifestyle to new heights. Through our commitment to excellence, integrity, and innovation, we aim to inspire and empower our members to live their best lives, one extraordinary experience at a time.  `
    ,

]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto white' sx={{mx:1,py:4}}>
           <Typography component='h1' sx={{color:'white',mb:1,mx:'auto',fontSize:'2.5em',fontStyle:'',fontWeight:'900'}} className=" center text-center">
            ABOUT US - Millionairebia
        </Typography>
        
        {/* <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/0f405681-7972-40ce-872a-9fe8bbc1918a/logobia.jpg" alt="" className="img contain" />
        </Box> */}
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{
                                fontSize:'1.1em',
                                maxWidth:'md',py:1}}
                            
                            className='auto text-center'>{i}</Typography>
                    })
                } 
        </Box>
        {/* <Divider></Divider>
        <Typography sx={{pt:4, mb:1,mx:'auto',fontSize:'2.5em',fontWeight:'600'}} className=" center text-center">
            Frequently Asked Questions
        </Typography>
            <FAQ/> */}
    </Container>
  )
}

export default Index