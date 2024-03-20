"use client"
import React, { useState } from 'react'
import { Box,  Container, Divider, Grid, TextField, Typography } from "@mui/material"
// import ContactSection from './ContactSection/ContactSection'
// import HomeProductCollection from './HomeProductCollection/HomeProductCollection'
// import HomeProductsCarousel from './HomeProductsCarousel/HomeProductsCarousel'
import MainCarousel from './MainCarousel/MainCarousel'
import { useRouter } from 'next/navigation'
// import Perks from './Perks/Perks'
// import FullscreenPoster from './FullscreenPoster/FullscreenPoster'
// import Testimonials from './Testimonials/Testimonials'
import Btn from './Btn/Btn'
import useLanguage from '@/Hooks/useLanguage'
import ContactSection from './ContactSection/ContactSection'
// import { FacebookEmbed, InstagramEmbed } from 'react-social-media-embed'

const 
PreLoader = ({data,resImages}:any) => {
  const router= useRouter();
  const [email,setEmail] = useState('')
  // const textsArray = [
  //   {
  //     id: 1,
  //     title: `Exceptional Customer Service`,
  //     desc: text('Our dedicated team is here to assist you at every step of your rental journey. We prioritize your satisfaction and convenience.', 'مكملاتنا مصنوعة فقط من أرقى المكونات الطبيعية، مما يضمن لك الحصول على أفضل النتائج دون أي مواد كيميائية ضارة أو مواد إضافية.')
  //   },
  //   {
  //     id: 2,
  //     title: text('Flexible Rental Options', 'النقاء والفعالية'),
  //     desc: text(`Whether you need a car for a day, a week, or longer, we offer flexible rental durations to suit your schedule. You're in control of your rental experience with Millionairebia.`, 'نحن نختار مكوناتنا بعناية بسبب نقاوتها وفعاليتها، مما يضمن لك الحصول على أفضل النتائج من مكملاتنا.')
  //   },
  //   {
  //     id: 3,
  //     title: text('Competitive Pricing', 'صياغة خبيرة'),
  //     desc: text(`We offer affordable rates without compromising on the quality of our service. Enjoy the best value for your money when you choose Millionairebia.`, 'تم صياغة مكملاتنا بخبرة من قبل فريق من المحترفين ذوي الخبرة، مما يضمن لك الحصول على أفضل النتائج في كل مرة.')
  //   },
  //   {
  //     id: 4,
  //     title: text('Diverse Selection of Vehicles', 'قيمة عظيمة'),
  //     desc: text('Our extensive fleet includes business cars, SUVs, and family cars, ensuring you find the right vehicle for your specific needs.', 'تقدم مكملاتنا قيمة عظيمة للمال، حيث توفر لك أعلى جودة من المكونات بسعر معقول.')
  //   }
  // ];
  

  return (
    <Box >
      <MainCarousel resImages={resImages}/>
    
      <Grid sx={{py:16,px:2,maxWidth:'lg'}} className='auto' container>
           
      <Grid className='w100' item sm={12} md={5}>
      <Box sx={{
                    width:'100%',
                    height:{xs:'300px',sm:'450px'}}}>

                <img src="https://i.pinimg.com/originals/c3/3e/34/c33e34888f8bfb399894ec7560ad4acb.jpg" alt="" className="img" />
              </Box>
            </Grid>
            <Grid item sm={12} md={7}>
            <Container sx={{px:0}}>

            <Typography 
                                                          className='clr2 '
                                sx={{fontWeight:700,fontSize:{xs:'1.185em',sm:'1.2em'},mt:1,maxWidth:'600px'}}>
                                 Where Boundaries Fade
                                </Typography>
            <Typography   
            className='white'
                                
                                sx={{fontSize:{xs:'1.55em',sm:'2.1em',md:'3em',lg:'3em'},fontWeight:'900'}}>
               Unlock the World of Luxury
                </Typography>
                <Typography 
                                className='white'
                                sx={{fontSize:{xs:'.85em',sm:'1em'},mt:1,maxWidth:'600px'}}>
              With Millionairebia's presence felt across continents, our private members club offers access to a tapestry of experiences that redefine opulence. Join our global community and unlock a lifestyle where every moment is an epitome of grandeur and achievement.
                </Typography>
                <Btn
                onClick={()=>router.push('/apply')}
                             
                                
                                className=' ' sx={{mt:3,mb:{xs:3,sm:0}}}>
                               Apply Now

                                </Btn>
                                </Container>

            </Grid>
          
        </Grid>

        <Grid sx={{py:4,px:2,maxWidth:'lg'}} className='auto' container>

                 <Grid item sm={12} md={7}>
                 <Container sx={{px:0}}>

     
                 <Typography 
                                                               className='clr2 '
                                     sx={{fontWeight:700,fontSize:{xs:'1.185em',sm:'1.2em'},mt:1,maxWidth:'600px'}}>
                                    Experience Opulence Redefined
                                     </Typography>
                 <Typography   
                 className='white'
                                     
                                     sx={{fontSize:{xs:'1.55em',sm:'2.1em',md:'3em',lg:'3em'},fontWeight:'900'}}>
                   Exclusive Membership Opportunities
                     </Typography>
                     <Typography 
                                     className='white'
                                     sx={{fontSize:{xs:'.85em',sm:'1em'},mt:1,maxWidth:'600px'}}>
                From lavish events to bespoke travel experiences, we invite you to indulge in the finer things life has to offer.
                     </Typography>
                     <Btn
                     onClick={()=>router.push('/apply')}
                                  
                                     
                                     className=' ' sx={{mt:3,mb:{xs:3,sm:0}}}>
                                    Apply Now
     
                                     </Btn>
                                     </Container>
     
                 </Grid>

                            
           <Grid className='w100' item sm={12} md={5}>
                   <Box sx={{
                    width:'100%',
                    height:{xs:'300px',sm:'450px'}}}>
                     <img src="https://th.bing.com/th/id/OIP.yVIiRcUs7zNhmk3oPemLGAHaHa?rs=1&pid=ImgDetMain" alt="" className="img" />
                   </Box>
                 </Grid>
               
             </Grid>


             <Grid sx={{py:16,px:2,maxWidth:'lg'}} className='auto' container>
           
           <Grid className='w100' item sm={12} md={5}>
           <Box sx={{
                         width:'100%',
                         height:{xs:'300px',sm:'450px',lg:'500px'}}}>
     
                     <img src="https://i.pinimg.com/originals/91/c4/f6/91c4f6c599e7b29910b8306076ae3bb8.jpg" alt="" className="img" />
                   </Box>
                 </Grid>
                 <Grid item sm={12} md={7}>
                 <Container sx={{px:0}}>
     
                 <Typography 
                                                               className='clr2 '
                                     sx={{fontWeight:700,fontSize:{xs:'1.185em',sm:'1.2em'},mt:1,maxWidth:'600px'}}>
                                     Elevate Your Lifestyle
                                     </Typography>
                 <Typography   
                 className='white'
                                     
                                     sx={{fontSize:{xs:'1.55em',sm:'2.1em',md:'3em',lg:'3em'},fontWeight:'900'}}>
                   Join Our Elite Community 
                     </Typography>
                     <Typography 
                                     className='white'
                                     sx={{fontSize:{xs:'.85em',sm:'1em'},mt:1,maxWidth:'600px'}}>
                  Whether you're a seasoned entrepreneur, a creative visionary, or a connoisseur of luxury, our club offers a platform where aspirations are nurtured, connections are forged, and dreams become reality.
                     </Typography>
                     <Btn
                     onClick={()=>router.push('/apply')}
                                  
                                     
                                     className=' ' sx={{mt:3,mb:{xs:3,sm:0}}}>
                                    Apply Now
     
                                     </Btn>
                                     </Container>
     
                 </Grid>
               
             </Grid>

<Divider sx={{color:'#c7ac7f ',border:'0.1px solid #c7ac7f '}}></Divider>

             <Container sx={{
              px:{xs:1},
              py:4,my:4}} className=' auto center text-center'>

<Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic'}}>
Become a Member
  </Typography>
  <Typography className='white' sx={{fontWeight:800,fontSize:{xs:'2.5em',sm:'2em',md:'2.5em'}}}>
  Join the Millionairebia Family
  </Typography>
  <Typography className='white auto' sx={{pt:1,fontWeight:300,fontSize:{xs:'.88em',sm:'1em',md:'1em'},maxWidth:'800px'}}>
  As a member, you gain exclusive access to our private club that spans across 120 countries. From boardrooms to breathtaking experiences, we offer opportunities that redefine luxury.
  </Typography>
  <Btn
  sx={{mt:2,mx:'auto'}}
  onClick={()=>router.push('/apply')}
  >
    Apply Now
  </Btn>
</Container>
<Container maxWidth='lg' sx={{height:{xs:'100%',sm:'500px'}}} className="auto">
  <img src="https://th.bing.com/th/id/R.988b8a74860d28993d70fd137f90fa6d?rik=GuQgbxGaTzv6XQ&riu=http%3a%2f%2fwww.beautifullife.info%2fwp-content%2fuploads%2f2018%2f12%2f05%2fal_mirqab_yacht_photos.jpg&ehk=wkzhaD24Z6vMbQFvBC4LOVbuStlzRVuo2m3bcxEe1N8%3d&risl=&pid=ImgRaw&r=0" alt="" className="img" />
</Container>



    <Container sx={{py:4,maxWidth:'lg'}}>
    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pt:{xs:8,sm:10},pb:1,maxWidth:'800px',}}>
        Our Events
      </Typography>
      <Typography className='white' sx={{fontWeight:900,fontSize:'2.5em',maxWidth:'800px',fontStyle:'italic',textTransform:''}}>
      Four signature events
      </Typography>
      <Box sx={{mt:6}} className='flex wrap justify-around'>
          {
            [
              {
                img:`https://lirp.cdn-website.com/05b938f9/dms3rep/multi/opt/luca-bravo-TaCk3NspYe0-unsplash-607h.jpg`,
                title:`New York`
              },
              {
                img: `https://lirp.cdn-website.com/05b938f9/dms3rep/multi/opt/muzammil-soorma-KTdzeb28jyo-unsplash-607h.jpg`,
                title:`Miami`
              },
              {
                title:'Dubai',
                img:'https://lirp.cdn-website.com/05b938f9/dms3rep/multi/opt/christoph-schulz-7tb-b37yHx4-unsplash-607h.jpg'
              }
              ,
              {
                title:`Monaco`,
                img:`https://lirp.cdn-website.com/05b938f9/dms3rep/multi/opt/joachim-lesne-IF9KinCYXkI-unsplash-607h.jpg`
              }
            ].map(i=>{
              return <Box className='relative cursor pointer'
              onClick={()=>router.push(`/apply?id=${encodeURIComponent(i?.title.toLowerCase())}`)}
              key={i.title} sx={{my:1,minWidth:{sm:'auto',md:'250px'},height:'300px',width:{xs:'49%',sm:'48%',md:'24%'}}}>
                <Box sx={{height:'100%'}}>

                 <img src={i.img} alt="" className="img" />
                </Box>
                <Box sx={{bottom:'15%',color:'white',left:'10%',fontWeight:'700',textTransform:'',fontSize:'1.5em',textShadow:'1px 1px 3px #0000002e'}} className="absolute">
                  {i.title}
                </Box>
              </Box>
            })
          }
      </Box>
    </Container>


      
   
   <Container maxWidth='lg' sx={{pb:16,pt:4,px:{xs:1}}}>
   <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pt:{xs:8,sm:10},pb:1}}>
        Subscribe to Our Newsletters
      </Typography>
      <Typography className='white' sx={{fontWeight:700,fontSize:'2em',fontStyle:'italic',textTransform:''}}>
      Get The Millionairebia's Club newsletters to enjoy discounts to our partners products, and services.
      </Typography>
      <TextField 
       name={'Email'} value={email} onChange={(e)=>setEmail(e?.target?.value)} 
       variant='filled' sx={{width:'99%',py:1
       ,'& .MuiInputBase-input': { // targets the input itself
        border:'1px solid white',
        color: 'white', // changes the color of the input text
      }
       }} type='text' placeholder='Email Address'/>
       <Btn sx={{mx:'auto',mt:2}}>
        Subscribe
       </Btn>
   </Container>
   
      



                              {/* <Container sx={{maxWidth:'lg'}}>
                                    {
                                      [].map(i=>{
                                        return <Box sx={{height:{xs:'95%',sm:'32%'},width:{xs:'95%',sm:'32%'}}}>
                                              <img src="" alt="" className="img" />
                                        </Box>
                                      })
                                    }
                              </Container> */}

                              {/* <Container id='Gallery' sx={{maxWidth:'lg',mx:'auto',mt:2}}>
                              <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pt:{xs:8,sm:10},pb:1,maxWidth:'800px',}}>
        Our Social Media
      </Typography>
      <Typography sx={{fontWeight:900,fontSize:'2.5em',maxWidth:'800px',fontStyle:'italic',textTransform:''}}>
      View Our Instagram
      </Typography>
                              <div className='wrap row' style={{ marginTop:'1em',display: 'flex', justifyContent: 'center' }}>
                              <Box sx={{height:{xs:'95%',sm:'32%'},width:{xs:'95%',sm:'32%'}}}>

  <InstagramEmbed url="https://www.instagram.com/p/C1aPiCFsRzB/"  height={'100%'} width='100%' />
                              </Box>
  <Box sx={{height:{xs:'95%',sm:'32%'},width:{xs:'95%',sm:'32%'}}}>

  <InstagramEmbed url="https://www.instagram.com/p/C1SXvVjsZO2/"  height={'100%'} width='100%' />
  </Box>
  <Box sx={{height:{xs:'95%',sm:'32%'},width:{xs:'95%',sm:'32%'}}}>
  <InstagramEmbed url="https://www.instagram.com/p/C092W1MseCj/" height={'100%'} width='100%' />
                                        </Box>
                                      
         
</div> 
                                </Container>      */}


{/* <Box sx={{mt:4}} className='bg'>
    
    <Container sx={{py:{xs:8,sm:12}}}>
      <Grid className='center items-center' container >

    <Grid  xs={12} sm={4} md={5}>

    <Typography className='clr2' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',maxWidth:'800px',}}>
    DRY CLEANING
      </Typography>
      <Typography className='white' sx={{pr:{sm:1,md:2},fontWeight:900,fontSize:{xs:'2.5em',sm:'2em',md:'2.5em'},maxWidth:'800px',fontStyle:'italic',textTransform:''}}>
      Dry cleaning any dirt inside the car and trunk
      </Typography>
      <Btn
      sx={{mt:1,mb:{xs:4,sm:0}}}
      onClick={()=>router.push('/apply')}
      >
        Apply Now
      </Btn>
    </Grid>

<Grid xs={12} sm={8} md={7}>
    <Box>
      <img style={{borderRadius:'5px'}} src="https://ucarecdn.com/53fae8a6-f75c-4f41-bfd9-8d11652690d3/pic.PNG" alt="" className="img" />
    </Box>
</Grid>
      </Grid>
    </Container>
</Box> */}


<ContactSection/>

  </Box>
  )
}

export default PreLoader