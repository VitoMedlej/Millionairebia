// "use client"
// import React from 'react'
// import MainCarousel from '../../Components/MainCarousel/MainCarousel'
// import Preloader4 from '../../Components/Preloader4'
// import { Container,Grid, Box, Typography } from '@mui/material'
// import Btn from '@/Components/Btn/Btn'
// import { useRouter } from 'next/navigation'
// import CarWashTable from './CarWashTable'
// import CarPriceTable from './CarPriceTable'



// let dataArray = [
     
//   { category: 'Car Wash',
//   comp : CarWashTable,
//   img:`https://bloximages.newyork1.vip.townnews.com/tylerpaper.com/content/tncms/assets/v3/editorial/f/94/f94116ae-48b4-11e8-967f-bbdb9a67b1ea/5ae0c652c4392.image.jpg?resize=1200%2C801`,
//   description: 'Basic car wash for compact $3, sedan $4, SUV $5\nPremium car wash for compact $6, sedan $7, SUV $8\nUltimate car wash for compact $9, sedan $10, SUV $11' },
//   { img: ' https://th.bing.com/th/id/OIP.qCO9u9p3W-mJdM8-3fj6uAHaE8?w=1615&h=1078&rs=1&pid=ImgDetMain', category: 'Headlights Restoration', description: '$20 for all cars' },

//   { img: 'https://www.theartofcleanliness.com/wp-content/uploads/ultimate-engine-bay-cleaning-detailing-guide-featured.jpg', category: 'Engine Bay Treatment', description: '$20 for all cars' },
//   { img: 'https://th.bing.com/th/id/R.30b930c61903ce960daa6fc67c42c4a0?rik=o52DkTU8QtrSiA&riu=http%3a%2f%2fimages.summitmedia-digital.com%2ftopgear%2fimages%2f2021%2f06%2f04%2fwindshield-water-repellent-guide-1622798797.jpg&ehk=56zjL%2bqzmGf8jQbFuKUIcI5kfAPOGYR9WV40v%2bfazmg%3d&risl=&pid=ImgRaw&r=0', category: 'Rain Repellent Full Windows', description: 'Compact $30, sedan $40, SUV $50' },
//   { img: 'https://th.bing.com/th/id/R.1b326e69c2bec48d47de921cb9979130?rik=3Wv9OpyS1yNQGA&pid=ImgRaw&r=0', category: 'Paint Correction (Polish 2 Step)', description: 'Compact $70, sedan $80, SUV $90' },
//   { img: 'https://cimg0.ibsrv.net/cimg/www.mbworld.org/1600x900_85-1/688/display-2--365688.jpg', category: 'Paint Correction with Ceramic Protection (1 Year Warranty)', description: 'Compact $120, sedan $130, SUV $140' },
//   { img: 'https://www.familyhandyman.com/wp-content/uploads/2021/06/car-detailing-GettyImages-1214083986.jpg?w=1200', category: 'Interior Detailing', description: 'Compact $70, sedan $80, SUV $90' },
//   { img: 'https://autodetaillosangeles.com/wp-content/uploads/2021/04/carwash-service-removing-of-dirt-from-mats.jpg', category: 'Full Interior Detailing', description: 'Compact $80, sedan $90, SUV $100' },
//   { img: 'https://images-na.ssl-images-amazon.com/images/I/817cjATnhOL._AC_SL1500_.jpg', category: 'Door Edge Guard', description: '$5 per unit' },
//   { img: 'https://th.bing.com/th/id/R.9fcb77a26c9f77cda67aae00c7a5fe22?rik=VRR02kVXt2pDtg&pid=ImgRaw&r=0', category: 'AC Bacteria Treatment', description: 'One shot $10\nFoam $15' },
//   // { img: 'https://th.bing.com/th/id/R.ec21500c25cfad0f5ae19c65c3c7aa70?rik=YmeRPeXkt5n7eg&pid=ImgRaw&r=0', category: 'Full Treatment Package', description: 'Compact $200, Sedan $225, SUV $250' },
//   { img: 'https://3.bp.blogspot.com/-S_v2FYVwyJM/WXlPjg3xP_I/AAAAAAAAxCY/JmOcrP9VKe03uWi4ueVu1iiqGkre_HvigCK4BGAYYCw/s1600/Paint%2Band%2BBody%2BShop%2BOwings%2BMills%252C%2BMD%2B-%2BMarks%2BBody%2BShop-743215.jpg', category: 'Body Paint Per Panel', description: '$100 per panel' },
//   { img: 'https://th.bing.com/th/id/R.a2a3f82aaffad3254d87667622aeb6f4?rik=FrkactpBvwEF4Q&pid=ImgRaw&r=0', category: 'Xpel Tinting Windows Full Car Windows', description: 'Compact $225, sedan $275, SUV $350' },
//   { img: 'https://twiistedmedia.com/wp-content/uploads/2021/01/car-wrap-s63-metallic-purple-twiistedmedia5-2048x1365.jpg', category: 'Vinyl Wrap', description: 'Starting price $1,350' },
//   { img: 'https://th.bing.com/th/id/R.3ba40c3433be3f9a230304f9e71e16fd?rik=006kh2F5SkA7pg&pid=ImgRaw&r=0', category: 'Upholstery Repair', description: 'Starting price $75' },
//   { img: 'https://www.mandmbodyrepair.co.uk/wp-content/uploads/sites/53/2020/11/M-and-M-Body-Repairs-wheel-repair-1536x1056.jpg', category: 'Rims Repair and Paint (4 Units)', description: '$300' }
// ]
// const Index = () => {
//   const router= useRouter();
//   const isValidDescription = (description : any) => {
//     return /\b(compact|sedan|SUV)\s+\$\d+\b/g.test(description);
//   };
  
//   // Add the "isValid" property to each object
//   const carPricesWithValidity = dataArray.map((item) => ({
//     ...item,
//     isValid: isValidDescription(item.description),
//   }));
//   console.log('carPricesWithValidity: ', carPricesWithValidity);
//   return (
//     <>
//     <Preloader4 res={undefined}/>
//     <Container sx={{maxWidht:'lg'}} >

  
//      { carPricesWithValidity.map((i,index)=>{ return <Grid className='items-center' key={i?.category} sx={{
//   py:{xs:4,sm:5},
//   justifyContent:'space-around !important',
//   flexDirection:{xs:'column',sm: index % 2 ? 'row' :'row-reverse'}}} container>
//         <Grid sx={{width:'100%'}} item xs={12} sm={6}>
//             <Box sx={{width:'100%'}}>
//             <Typography className='clr' sx={{fontWeight:700,fontSize:'1.15em',fontStyle:'italic',pb:1,maxWidth:'800px',}}>
//         Our Services
//       </Typography>
//       <Typography sx={{whiteSpace:'pre-wrap',fontWeight:900,fontSize:{xs:'1.75em',md:'2.4em'},pb:1,maxWidth:'600px',fontStyle:'',textTransform:'uppercase'}}>
//       {/* Professional washing and cleaning of your car */}
//       {i?.category}
//       </Typography>


//       {  i?.isValid &&  !i?.comp && (
//     <CarPriceTable data={i?.description}/>
//   )   }


//         {
//           !i?.isValid && !i?.comp && (<Typography sx={{whiteSpace:'pre-wrap',fontWeight:400,fontSize:'.89em',maxWidth:'450px',fontStyle:'',textTransform:''}}>
  
//           {i?.description}
          
//               </Typography>)
//         }

//      {   i?.comp &&(
//     React.createElement(i.comp)
//   ) }
//       <a className='decor-none' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}?text=${encodeURIComponent(`Hello, I would like to know more about ${i?.category}`)}`}>

//       <Btn sx={{my:2}}>
//         Book Now
//       </Btn>
//       </a>
//             </Box>
//         </Grid>
//         <Grid item xs={12} sm={6} md={5}>
//             <Box sx={{minWidth:{xs:'90vw',sm:'200px'}, width:{xs:'100%',sm:'300px',md:'500px'},height:{xs:'300px',sm:'250px',md:'350px'}}}>
//               <img style={{borderRadius:'6px'}} src={i?.img} alt="" className="img cover" />
//             </Box>
//         </Grid>
//         </Grid>})}
//     </Container>
 
//     </>
//   )
// }

// export default Index
"use client"
import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page