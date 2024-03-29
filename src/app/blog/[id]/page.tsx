"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Index = () => {
    const data = {
        description :''
    }
    const {description} = data
  return (
    <Container sx={{px:{xs:1,sm:1.5},py:8}} >
        <Box sx={{color:'white',pb:2}}>
                <Typography sx={{fontWeight:900,fontSize:{xs:'1.55em',sm:'1.7em'}}}>
                Step into the Extravagance of MillionaireBia: Where Luxury Knows No Bounds
                </Typography>
        </Box>
        <Box sx={{height:{xs:'300px',sm:'500px'}}}>
            <img src="https://th.bing.com/th/id/OIP.h1V8JR6KtYHM-XWUW1678AHaEK?rs=1&pid=ImgDetMain" alt="" className="img" />
        </Box>
        <Box>
        <Typography 
      className='gray' 
      sx={{whiteSpace:'pre-wrap',maxWidth:'100%'}}
      dangerouslySetInnerHTML={{ __html: description }}
    />
        </Box>
    </Container>
  )
}

export default Index