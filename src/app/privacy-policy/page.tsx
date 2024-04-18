"use client"
import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text = [
    'Protecting your privacy is paramount to us at Millionairebia. Our Privacy Policy outlines how we collect, use, and safeguard your personal information:',
    '   - We collect personal information, such as name, email address, and payment details, to provide our services and improve user experience.',
    '   - Your personal information is securely stored and only accessed by authorized personnel for legitimate business purposes.',
    '   - We may share your information with trusted third-party service providers who assist us in delivering our services.',
    '   - You have the right to access, update, or delete your personal information at any time.',
    '   - We use cookies and similar technologies to enhance your browsing experience and track usage patterns on our website.',
    '   - By using our website and services, you consent to the collection and use of your personal information as described in this Privacy Policy.'
  ]
const Index = () => {
  return (
    <Container className='white' sx={{pb:4,mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
           Privacy Policy
        </Typography>
        <Box>
            {
                text.map(i=>{
                    return <Typography sx={{maxWidth:'md',my:1}} key={i}>
                        {i}
                    </Typography>
                })
            }
        </Box>
        <Box>
            <Link href='/terms-and-conditions'>
                Terms and conditions
            </Link>
            <Link href='/rules-and-regulations'>
                Rules & Regulations
            </Link>
        </Box>
    </Container>
  )
}

export default Index