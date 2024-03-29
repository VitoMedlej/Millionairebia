"use client"
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import ApplyForm from './ApplyForm'

const page = () => {
  return (
    <Box sx={{py:20}} className='relative'>
    <Box className="absolute w100 h100" sx={{top:0,right:0,height:'100%'}}>
        <img src="https://danielasulek.com/wp-content/uploads/2021/09/shutterstock_281520980-scaled.jpg" alt="" className="img" />
      </Box>
    <Box sx={{
      borderRadius:'8px',
      px:{xs:2},py:6,textAlign:'center',color:'white',width:{xs:'90%',sm:'50%'}}} 
    
    className='relative bg3 auto '>
      <Box className='center auto text-center' sx={{pb:2}}>
          <Typography className='clr2' sx={{fontSize:'2em',fontWeight:800}}>
            Welcome
          </Typography>
          <Typography className='auto text-center' sx={{maxWidth:'400px',fontSize:'.85em',fontWeight:400}}>
            To apply for a membership, please fill in the forms below and click submit.
          </Typography>
      </Box>
          <ApplyForm></ApplyForm>
    </Box>
    </Box>

  )
}

export default page