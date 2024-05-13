"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Container, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
    'Thank you for choosing Millionairebia.',
    'By accessing our website and utilizing our services, you agree to comply with the following terms and conditions:',
    '   - Users must be at least 18 years old to access our services.',
    '   - All content provided on our website is for informational purposes only.',
    '   - We reserve the right to modify or discontinue our services at any time without prior notice.',
    '   - Users are responsible for maintaining the confidentiality of their account information.',
    '   - Any misuse or unauthorized use of our services may result in account termination.',
    '   - By submitting any content to our platform, users grant Millionairebia the right to use, reproduce, modify, adapt, publish, translate, create derivative works, and distribute such content worldwide.'
  ]
const Index = () => {
  return (
    <Container className='white' sx={{pb:4,mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,color:'white',fontWeight:600,fontSize:'2em'}}>
            Terms And Conditions
        </Typography>
        <Box>
            {
                text.map(i=>{
                    return <Typography className='white' sx={{maxWidth:'md',my:1}} key={i}>
                        {i}
                    </Typography>
                })
            }
        </Box>
        <Box className='flex col wrap'>
            <Link className='color2' href='/privacy-policy'>
                Privacy Policy
            </Link>
            <Link className='color2' href='/rules-and-regulations'>
                Rules & Regulations
            </Link>
        </Box>
    </Container>
  )
}

export default Index