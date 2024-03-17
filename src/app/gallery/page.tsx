"use client"
import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Index = () => {
    const [imgs,setImgs] = useState([]);

    // const fetchDataAndSetImgs = async () => {
    //     try {
    //       const response = await fetch('https://api.jsonbin.io/v3/b/65bcd509dc746540189f3df5', {
    //         method: 'GET',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'X-Master-Key': '$2a$10$tKlp8yokSY5sQ58K9UJosuUM4/0k2FCFKG2LqzaNegXtNdlivpIwG'
    //         }
    //       });
      
    //       if (!response?.ok) {
    //         throw new Error(`Failed to fetch data. Status: ${response?.status}`);
    //       }
      
    //       const data = await response.json();
    //       setImgs(data?.record); // Assuming 'record' is the property containing the images in the response
    //       console.log('Data fetched and set to setImgs:', setImgs);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
      
    // useEffect(() => {
      
    
    //    fetchDataAndSetImgs()
    // }, [])

  return (
    <Box>
         <Container sx={{maxWidth:'lg'}}>
    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pt:{xs:8,sm:10},pb:1,maxWidth:'800px',}}>
    Our gallery
      </Typography>
      <Typography sx={{fontWeight:900,fontSize:'2.5em',maxWidth:'800px',fontStyle:'italic',textTransform:'uppercase'}}>
      Stories From ShinePlus Car Spa  
      </Typography>
      </Container>
      <Container sx={{py:4}} className='flex row wrap justify-between '>
        {

imgs && imgs.map((i:any)=>{
                return <Box 
                key={i?.img}
                className='flex '
                sx={{
                  mt:2,
                  width:{xs:'95%',sm:'48%'},mx:'auto',my:2,minHeight:{xs:"300px",sm:'400px'}}}>
                            <img src={i?.img} alt="" className="img contain" />

                </Box>
            })
        }
      </Container>
    </Box>
  )
}

export default Index
