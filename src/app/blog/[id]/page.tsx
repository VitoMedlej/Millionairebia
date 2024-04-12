"use client"
import { server } from '@/Utils/Server'
import { Box, Container, Typography } from '@mui/material'
import { useParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import  './blogpost.css'

const Index = () => {
  const router = useRouter()
  const [data,setData] = useState<any>(null)
  console.log('data: ', data);
  const {id} = useParams()
  console.log('data: ', data);
  console.log('id: ', id);


  const fetchPosts = async () => {
    try {
      const req = await fetch(`${server}/api/get-post-by-id?id=${id}`,{ cache: 'no-store' })

            const res = await req.json()
            console.log('res: ', res);
          
            if (res?.success && res?.product) {
              setData(res?.product)
            }
            return null
    } 
    catch (e) {
      console.log('e: ', e);

    }
  }

  useEffect(() => {
     fetchPosts()
  }, [])
  if (!data) return <></>;
  return (
    <Container className={'blog '} sx={{px:{xs:1,sm:1.5},py:8}} >
        <Box sx={{color:'white',pb:2}}>
                <Typography component='h1' sx={{py:5,fontWeight:900,fontSize:{xs:'1.55em',sm:'1.7em',md:'2.5em'}}}>
               {data?.title}
                </Typography>
        </Box>
        <Box sx={{height:{xs:'300px',sm:'500px'}}}>
            <img src={data?.images[0]} alt="" className="img" />
        </Box>
        <Box>
        <main 
      className='gray blog' 
      style={{whiteSpace:'pre-wrap',maxWidth:'100%'}}
      dangerouslySetInnerHTML={{ __html: data?.description }}
    />
        </Box>
    </Container>
  )
}

export default Index