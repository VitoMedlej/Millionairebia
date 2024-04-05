"use client"
import {  Container,Box, Grid, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import Btn from '@/Components/Btn/Btn'
import {CiLocationOn} from 'react-icons/ci'




const Index = () => {
 
  const form :any = useRef();
  const [status,
      setStatus] = useState(0)
  const [email,
      setEmail] = useState('')
      const [country,
        setCountry] = useState('')
        const [company,
          setcompany] = useState('')
          const [position,
            setPosition] = useState('')
        
      const [Phone, setPhone] = useState('')
const [FullName, setFullName] = useState('')
const [Message, setMessage] = useState('')

let url = `${process.env.NEXT_PUBLIC_URL}/api/apply`;
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
    body: JSON.stringify({applicant:{FullName,Phone,email,Message}})
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
 


  
    <Grid id='applysection' container maxWidth='lg'  className='auto'  sx={{
      // background:'white',
      }}>
    <Box className='flex auto w100'>
       
        </Box>
        <Box className='center auto text-center' sx={{
          display: status === 200 ? 'none' : 'block'
          ,
          pb:2}}>
          <Typography className='clr2' sx={{fontSize:'2em',fontWeight:800}}>
            Welcome
          </Typography>
          <Typography className='auto text-center' sx={{maxWidth:'400px',fontSize:'.85em',fontWeight:400}}>
          To initiate your membership application, kindly complete the provided forms below and click on &quot;Apply&quot;
          </Typography>
      </Box>
   

        <Grid sx={{
          // background:'white',
       }} className='auto col center flex' item xs={12} sm={12} >
          <Typography component='h1' sx={{color:'white',fontWeight:'500',textAlign:'center'}} 
          className='p'>{status === 200 ? 'Thank you for your application! We have received your membership request. You will receive a confirmation email shortly. We appreciate your interest and look forward to welcoming you as a member.' : ""}</Typography>
            <Box ref={form} onSubmit={(e : any)=>sendMessage(e)} component='form' sx={{gap:1,
          margin : '0 auto',
          display: status === 200 ? 'none' : 'flex'
        //   maxWidth:'sm',
            
         }} className=' space-between wrap white'>
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
 <TextField 
value={country}
onChange={(e)=>setCountry(e?.target?.value)} 
name={'country'} sx={{
  color:'white',
  borderColor:'white'
  ,'& .MuiInputBase-input': { 
    border:'1px solid white',
    color: 'white', 
  },
  width:'99%',py:1}} variant='filled' placeholder='Country'/>

<TextField 
value={company}
onChange={(e)=>setcompany(e?.target?.value)} 
name={'company'} sx={{
  color:'white',
  borderColor:'white'
  ,'& .MuiInputBase-input': { 
    border:'1px solid white',
    color: 'white', 
  },
  width:'99%',py:1}} variant='filled' placeholder='Company Name'/>

<TextField 
value={position}
onChange={(e)=>setPosition(e?.target?.value)} 
name={'position'} sx={{
  color:'white',
  borderColor:'white'
  ,'& .MuiInputBase-input': { 
    border:'1px solid white',
    color: 'white', 
  },
  width:'99%',py:1}} variant='filled' placeholder='Position'/>
             
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
               }} placeholder='Comment Box'/>
              <Btn
submit
   
>
                <Typography>
                Apply
                </Typography>
              </Btn>
            </Box>
        </Grid>
       
    </Grid>


   
    </>
  )
}

export default Index