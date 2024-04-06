"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `
    Welcome to Millionairebia, where luxury meets distinction, and success finds its home. Established as a premier enclave within the vibrant tapestry of the Arab region, Millionairebia stands as a testament to opulence, sophistication, and unparalleled exclusivity.
`,
    `
    Our mission is simple: to provide a sanctuary where individuals of substantial means can come together to network, socialize, and celebrate their shared success. Whether it's forging new connections, exploring lucrative business opportunities, or simply indulging in the finer things in life, Millionairebia offers a haven for those who demand nothing but the best.


    `,
    `
    As we continue to evolve and grow, our commitment to excellence remains unwavering. We invite you to join us on this extraordinary journey, where every moment is an opportunity to elevate your lifestyle and embrace the extraordinary. Welcome to Millionairebia – where luxury knows no bounds.
    `,

]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto white' sx={{mx:1,py:4}}>
           <Typography component='h1' sx={{color:'white',mb:1,mx:'auto',fontSize:'3.5em',fontStyle:'italic',fontWeight:'900'}} className=" center text-center">
            ABOUT US - Millionairebia
        </Typography>
        
        {/* <Box sx={{width:'100%',height:'400px'}}>
            <img src="https://ucarecdn.com/0f405681-7972-40ce-872a-9fe8bbc1918a/logobia.jpg" alt="" className="img contain" />
        </Box> */}
    
        <Box sx={{my:4}}>
                {
                    text.map(i=>{
                            return <Typography key={i} sx={{maxWidth:'md',py:1}} className='auto text-center'>{i}</Typography>
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