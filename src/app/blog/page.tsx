"use client"
import Btn from '@/Components/Btn/Btn';
import { Box, Container, Typography } from '@mui/material'
import { useRouter } from 'next/navigation';
import React from 'react'



export const postsArray = [
    {
      title: 'Step into the Extravagance of MillionaireBia: Where Luxury Knows No Bounds',
      date: 'Mar 9, 2024',
      img: 'https://th.bing.com/th/id/OIP.h1V8JR6KtYHM-XWUW1678AHaEK?rs=1&pid=ImgDetMain',
      id: '3',
      tags: ['Luxury Lifestyle', 'Private Clubs', 'Exclusive Events'],
    },
    {
      title: 'Experience Elegance like Never Before at MillionaireBia: Your Gateway to Opulence',
      date: 'Jan 20, 2023',
      img: 'https://assets-global.website-files.com/658352c9dc46a8af3404d0e2/659e3c84b484e8cc77446e83_buqhco678Hi77cjQhVJSp1X2J2RDe9lCOsqWk2HqMFE.webp',
      id: '1',
      tags: ['Elite Membership', 'Luxury Amenities', 'Premier Service'],
    },
    {
      title: 'Revel in the Exclusivity of MillionaireBia: Where Every Moment is Extraordinary',
      date: 'Sept 14, 2023',
      img: 'https://www.varchev.com/wp-content/uploads/2019/10/The-Millionaire-Mindset.jpg',
      id: '2',
      tags: ['High Society', 'VIP Treatment', 'Luxury Retreats'],
    },
    
  ];


const page = () => {
    const router = useRouter()

  return (
    <Container sx={{py:12,maxWidth:'lg'}}>
        <Typography component='h1'
         className='center auto white text-center'
          sx={{py:4,fontSize:'2em',fontWeight:800}}>
        Latest from Our Blog
        </Typography>
        <Box className='wrap row flex justify-between space-between gap'>
        {postsArray && postsArray.map(i=>{

return <Box key={i.id} className='shadow' sx={{maxWidth:'400px',my:1,width:{xs:'99%',sm:'48%',md:'32%'},}}>
               <Box sx={{width:'100%',height:'260px'}}>
                   <img style={{borderRadius:'4px'}} src={i.img} alt="Blog Post Image" className="img" />
               </Box>
               <Box sx={{px:1}}>
               <Typography className='clr2' sx={{ pt: '.25em', fontWeight: '600', fontSize: '.8em' }}>
     {i.tags.map((word, index) => (
       <React.Fragment key={index}>
         {index > 0 && ' • '}
         {word}
       </React.Fragment>
     ))}
   </Typography>
                   <Typography
                   
                   onClick={()=>router.push(`/blog/${i.id}?title=${i.title.replaceAll(' ', '-')}`)}
                   className='pointer white' sx={{fontWeight:'700',fontSize:{xs:'1.05em',sm:'1.15em',md:'1.25em'}}}>
                       {i.title}
                   </Typography>
               </Box>
               <Box className='flex items-center  align-center ' sx={{mt:2,gap:1.55,px:1}}>
                   <Btn
                    onClick={()=>router.push(`/blog/${i.id}?title=${i.title.replaceAll(' ', '-')}`)} 
                      sx={{px:2}}>
                       <Typography className='clr2' sx={{
                        fontWeight:'600 !important',textAlign:'left',fontSize:".8em"}}>
                       Read Now
                       </Typography>
                   </Btn>
               <Typography className='white' sx={{fontWeight:'300',fontSize:'.75em'}}>
                       {i.date} | OnBeirut 
                   </Typography>
               </Box>
           </Box>
                  })}
        </Box>
    </Container>
  )
}

export default page