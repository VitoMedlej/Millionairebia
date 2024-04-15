"use client";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import {IoIosMenu} from 'react-icons/io'
// import {AiOutlinePhone} from 'react-icons/ci'

import { useEffect, useState} from 'react';
// import { CartContext, DrawerContext } from '../../../pages/_app'; import
import SearchModal from './SearchModal';
import Link from 'next/link';
import { Container, Divider, Typography} from '@mui/material';
// import { loadState } from '../../Utils/LocalstorageFn';
import {useRouter} from 'next/navigation';
// import {AiOutlinePhone, AiOutlineSearch, AiOutlineMenu} from 'react-icons/ai'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineCar} from 'react-icons/ai'

import NavButtom from './NavButtom';
import {  useDrawerContext } from '@/context/Contexts';
import Btn from '../Btn/Btn';



export const categories = [
    'Small Cars',
    'Business Cars',
    'Luxury Business Cars',
    'SUVs',
    '2 Door Cars'
]
export default function Navbar() {
    const {open, setOpen} = useDrawerContext();
    const [openModal,
        setOpenModal] = useState(false);
    

    const router = useRouter()
    // const localCart = [1]
   
   

    return ( <>
     <Box
     id='navy'
    className='center auto     flex'
        sx={{
            zIndex:12,
        flexWrap: 'wrap',
                width:'100%',
                boxShadow:'none',
        background:'black',
        border: 'none',
        px:0,
        flexGrow: 1,
        py:1,
    }}>
      
        <AppBar
     id='navy2'

    className='center relative  flex'

            sx={{
                transform:'translateY(1px)',
                boxShadow:'none',

                background:'black',
            // maxWidth: 'lg',
                width:'100%',
            margin: '0 auto',
        }}>
                  {/* <Box className='flex items-center row'
                   sx={{justifyContent:'flex-end',background:'#070707',py:.3}}>
<Container className='flex ' sx={{margin:0,justifyContent:'space-between',maxWidth:{xs:'100%',sm:'500px'}}}>

            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/533285/phone.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'white',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            +961 123 456 789
            </Typography>
            </Box>

            <Box className='flex row items-center'>
                <Box sx={{pr:.1,height:'20px'}}>

            <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="" className="img" />
                </Box>
            <Typography sx={{color:'white',fontSize:'.70em',textAlign:'end',fontWeight:600}}>
            @shineplus_carspa
            </Typography>
            </Box>
            <a className='decor-none' href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`}>
            <Btn sx={{display:{xs:'none',sm:'flex'},py:.2}}>
                                         
                                    BOOK NOW
                                  </Btn>
      </a>                        
       
</Container>

            </Box> */}

            <Toolbar
     id='navy3'

    className='center  relative  flex  w100  auto'

                sx={{
                
                    background:'black',
                    maxWidth:'xl',
                    py:2,
                px:'0 !important',
                
                flexWrap: 'wrap'
            }}> 
         

            <Box sx={{width:{xs:'97%',sm:'98%'}}} className="flex  items-center">

              <Box className="start  flex" sx={{
                width:'fit-content',
                zIndex:'124124124'}}>

              <Typography 
              className='underline cursor pointer'
              sx={{color:'#833AB4',
              zIndex:'124124124'
              ,fontSize:{xs:'.5em',sm:'.70em'},textAlign:'end',fontWeight:600}}>
            <a href="https://www.instagram.com/millionairebia/" target="_blank" rel="noreferrer" >
            @Millionairebia

            </a>
            </Typography>
              </Box>

            <Box 

className="absolute w100 row flex center items-center" sx={{

    right:'-50%',
    transform:'translateX(-50%)'
}}>

<Link className='white decor-none ' href={`/`}>

<Typography 
className=' cursor center white  gap1 white decor-none captialize'
id="button"
component='p' sx={{
    display:{xs:'none',md:'flex'},
    width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Home
</Typography>
</Link>
<Link className='white decor-none ' href={`/blog`}>

<Typography 
className=' cursor center white  gap1 white decor-none captialize'
id="button"
component='p' sx={{
    display:{xs:'none',md:'flex'},
    width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Blog
</Typography>
</Link>
<Link className='flex center   aling-center items-center '  href='/' color='inherit'>

<Box className='flex'
    sx={{
    mx: {
        sm: '1em'
    },
    height : {xs:'80px',sm:'100px'},
    width:{xs:'80px',sm: '120px'}
}}>
    <img
        className='img contain'
        src={`https://ucarecdn.com/76f845bd-a452-45cd-959f-d72f07854b9c/419002048_1346136676081363_2742258375729400010_n.jpg`}
        alt="Millionairebia  logo"/>
</Box>
</Link>
<Link className='white decor-none ' href={`/#contactsection`}>

<Typography 
className=' cursor center white  gap1 white decor-none captialize'
id="button"
component='p' sx={{
    display:{xs:'none',md:'flex'},
    width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
Contact
</Typography>
</Link>
<Link className='white decor-none ' href={`/about`}>

<Typography 
className=' cursor center white  gap1 white decor-none captialize'
id="button"
component='p' sx={{
    display:{xs:'none',md:'flex'},
    width:'max-content',
mx:'1em',
alignItems: 'center',

fontWeight:500,fontSize:{xs:'.86em',sm:'.95em'}}}>
About
</Typography>
</Link>
</Box>





              <Box  sx={{display:{xs:'none',md:'flex'}}} className=" w100 flex-end end">

<Btn
sx={{background:'black'}}
                            onClick={()=>router.push('/apply')}
                            >
                                Apply Now
                            </Btn>
                                </Box>


            <Box sx={{display:{xs:'flex',md:'none'}}} className=" w100 flex-end end">
                    <Box
                    onClick={()=>setOpen(!open)}
                    className="cursor pointer" sx={{pr:.5,width:'fit-content'}}>
                <img style={{width:'20px',filter:'invert(1)'}} src="https://cdn-icons-png.flaticon.com/128/2516/2516745.png" alt="" className="img cursor pointer" />
                    </Box>
            </Box>

            </Box>


               
{/* <NavButtom/> */}







  {/* <SearchInput/> */}
  {/* <SearchInput
mobile
                    />  */}

           
{/* <SearchModal openModal={openModal} setOpenModal={setOpenModal }/> */}
             
            </Toolbar>
        </AppBar>
    </Box> 

    < Divider sx={{color : '#00000017'}} />
     </>
    
    );
}