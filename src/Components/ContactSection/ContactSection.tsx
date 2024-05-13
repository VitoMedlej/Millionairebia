"use client"
import {  Container,Box, Grid, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import Btn from '@/Components/Btn/Btn'
import {CiLocationOn} from 'react-icons/ci'
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";




const Index = () => {
 
  const form :any = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
      const [Phone, setPhone] = useState('')
const [FullName, setFullName] = useState('')
const [Message, setMessage] = useState('')


let url = `${process.env.NEXT_PUBLIC_URL}/api/send-message`;
  const sendMessage = async(e : any) => {

    e.preventDefault();
    if (!form.current) 
    return;
  
  if ( !FullName || !Phone || !Message ) {
    setStatus(400)
    return;
  }
  // window.open(url);

  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({message:{FullName,Phone,email,Message}})
});
    const res = await rawResponse.json();

    console.log('res: ', res);
    setStatus(res?.success ? 200 : 400)

    if (res?.success && form?.current) {
      form?.current?.reset()
      setFullName('')
      setPhone('')
      setMessage('')
}
};

  return (
    <>
 

 {/* <Perks/> */}

  
    <Grid id='contactsection' container maxWidth='lg'  className='auto'  sx={{
      // background:'white',
      pt:8,pb:5}}>
    <Box className='flex auto w100'>
       
                {/* <Divider></Divider> */}
        </Box>
      
   
        <Grid sx={{mb:{xs:5,sm:0}}} item xs={12} sm={6} md={5} >
    <Container >
        <Typography component='h1' className='clr2' sx={{fontSize:{xs:'1.75em'},my:3,fontWeight:'800'}}>
        Contact Information:
        </Typography>
  
  <a className='flex auto  items-center align-center gap gap1 white' href='https://wa.me/+96170312490' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
        +961 70 312 490
        </Typography>
  </a>

  <a className='flex auto  items-center align-center gap gap1 white' href='https://www.instagram.com/millionairebia/' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
    Instagram
        </Typography>
  </a>

  {/* <a className='flex auto  items-center align-center gap gap1 white' href='https://www.instagram.com/millionairebia/' target='_blank' rel='noopener'>
    
        <Typography sx={{fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
    Facebook
        </Typography>
  </a> */}
  {/* <a className='flex auto  items-center align-center gap gap1 white' href='' target='_blank' rel='noopener'>
  <CiLocationOn/>
        <Typography sx={{my:2,fontSize:{xs:'1.15em'},fontWeight:'500'}}>
                    
        Beirut / Lebanon
        </Typography>
  </a> */}
  

    </Container>
        </Grid> 

        <Grid sx={{
          // background:'white',
          mt:{xs:2,sm:0}}} className='auto col center flex' item xs={12} sm={8} md={5.5}>
          <Typography component='h1' sx={{color:'green',fontWeight:'500',textAlign:'center'}} className='p'>{status === 200 ? 'Message Sent Successfully!' : ""}</Typography>
            <Box ref={form} onSubmit={(e : any)=>sendMessage(e)} component='form' sx={{gap:1,
          py:2.5,
          margin : '0 auto',
          maxWidth:'sm',
          px:'1em',
            
         }} className='flex space-between wrap white'>
          <Typography component='p' sx={{width:'100%',fontWeight:'600',fontSize:'1.12em'}} className='h1 white'>Leave us a message</Typography>
               <TextField 
              
              value={FullName}

              onChange={(e)=>setFullName(e?.target?.value)} 
              name={'FullName'} sx={{
                color:'white',
                borderColor:'white'
                ,'& .MuiInputBase-input': { // targets the input itself
                  border:'1px solid white',
                  color: 'white', // changes the color of the input text
                },
                width:'99%',py:1}} variant='filled' placeholder='Full Name'/>
           {/* <DatePicker name='StartDate' selected={startDate} onChange={(date:Date) => setStartDate(date)} /> */}
           {/* <DatePicker  name='EndDate' selected={endDate} onChange={(date:Date) => setEndDate(date)} /> */}
            {/* <DatePicker
  label="Controlled picker"
  value={date1}
  onChange={(newValue) => setDate2(`${newValue}`)}
/>

<DatePicker
  label="Controlled picker"
  value={date2}
  onChange={(newValue) => setDate2(`${newValue}`)}
/> */}
             
              <TextField name={'Email'}
               onChange={(e)=>setEmail(e?.target?.value)} 
               variant='filled' sx={{
                '& .MuiInputBase-input': { // targets the input itself
                  border:'1px solid white',
                  color: 'white', // changes the color of the input text
                },
                width:'99%',py:1}} 
               type='text' placeholder='Email Address'/>
              <TextField name={'Phone'} 
              value={Phone}
            type='number'
              onChange={(e)=>setPhone(e?.target?.value)} 
              variant='filled' sx={{
                '& .MuiInputBase-input': { // targets the input itself
                  border:'1px solid white',
                  color: 'white', // changes the color of the input text
                },
                width:'99%',py:1,}} placeholder='Phone Number'/>
              <TextField 
              value={Message}
              onChange={(e)=>setMessage(e?.target?.value)} 
              
              name={'Message'} 
              variant='filled'   sx={{width:'99%',py:1,
               
               '& .MuiInputBase-input': { // targets the input itself
                border:'1px solid white',
                color: 'white', // changes the color of the input text
              },
               }} placeholder='Message'/>
              <Btn
submit
   
>
                <Typography>
                    Send Message
                </Typography>
              </Btn>
              <Typography sx={{pt:1,fontSize:'.67em'}}>
          {
           `By clicking Send, you confirm that you give us consent to send you emails, and that you comply with our acceptable use policy, which includes maintaining up-to-date mailing lists and ensuring all recipients have opted in to receive emails.`
          }
          </Typography>
            </Box>
        </Grid>
       
    </Grid>


   
    </>
  )
}

export default Index