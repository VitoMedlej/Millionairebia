"use client"
import { Container, Typography, Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const text =[
    'At Millionairebia, we strive to maintain a community of luxury enthusiasts who uphold the highest standards of conduct. By becoming a member, you agree to adhere to the following rules and regulations:',
    '   - Treat all members and staff with respect and professionalism.',
    '   - Refrain from engaging in any illegal or unethical activities.',
    '   - Respect the privacy and confidentiality of fellow members.',
    '   - Any behavior deemed inappropriate or offensive by Millionairebia may result in membership termination.',
    '   - Members are encouraged to report any violations of these rules to our support team for investigation and action.'
  ]
const page = () => {
   return (
    <Container className='white' sx={{pb:4,mx:1,mt:24}} maxWidth='lg' >
        <Typography component='h1' sx={{mb:1,fontWeight:600,fontSize:'2em'}}>
        Rules & Regulations
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
            <Link href='/privacy-policy'>
                Privacy Policy
            </Link>
        </Box>
    </Container>
   )
}

export default page