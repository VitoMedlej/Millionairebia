"use client"
import FAQ from '@/Components/FAQ/FAQ'
import { Container, Box, Typography, Divider } from '@mui/material'
import React from 'react'

const text = [
    `
    Welcome to Millionairebia, your premier destination for professional automotive care in Lebanon. At Shine Plus, we take pride in our commitment to delivering exceptional car spa services, ensuring your vehicle receives the royal treatment it deserves.
`,
    `
    With a passion for perfection and a keen eye for detail, Millionairebia has become a trusted name in the automotive industry. Our team of skilled technicians is dedicated to enhancing the appearance and performance of your vehicle, providing a comprehensive range of services tailored to meet the unique needs of each customer.
    `,
    `
    What sets Millionairebia apart is our unwavering commitment to quality and customer satisfaction. We use state-of-the-art equipment and premium products to deliver outstanding results, whether you opt for our sigMILL car wash, paint correction, or luxurious interior detailing services. Your satisfaction is our priority, and we go the extra mile to ensure your car leaves our spa looking pristine and rejuvenated.
    `,
    `
    At Millionairebia, we understand that your vehicle is more than just a mode of transportation; it's a reflection of your personality and style. That's why we treat every car with the utmost care and attention, as if it were our own. Our team's expertise, combined with our passion for perfection, guarantees an unparalleled car spa experience that leaves a lasting shine.
    `,
    `
    As a Lebanese brand, we take pride in contributing to the local automotive community. We strive to set new standards in car care, combining traditional Lebanese hospitality with cutting-edge techniques to provide an unmatched level of service.
 `,
    `
    Experience the difference at Millionairebia – where your car's beauty meets our expertise. Trust us to pamper your vehicle, and we promise to exceed your expectations, leaving you with a car that shines brighter than ever before.
    `,
`    
    Thank you for choosing Millionairebia – Your Car's Sanctuary in Lebanon.`
  
]
const Index = () => {
  return (
    <Container maxWidth='lg' className='auto' sx={{mx:1,py:4}}>
           <Typography component='h1' sx={{mb:1,mx:'auto',fontSize:'3.5em',fontStyle:'italic',fontWeight:'900'}} className=" center text-center">
            ABOUT US - Shine Plus
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