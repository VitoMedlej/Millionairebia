"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'

// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'white',background:'black'}}>
    <div className="container " style={{color:'white',background:'black'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/76f845bd-a452-45cd-959f-d72f07854b9c/419002048_1346136676081363_2742258375729400010_n.jpg' alt="Millionairebia Lebanon Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.95em',color:"2b2b2b" }}  className='footer-p '>
          At Millionairebia, we believe in crafting success stories. Our private members club is a testament to this belief. Spanning across 120 countries, we offer a luxury experience that is unparalleled. From boardrooms to breathtaking experiences, we redefine what luxury means.
          </Typography>
          {/* <SMicons/> */}

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='link-title'>Site links</li>
            <li><Link  href="/">Home</Link></li>
            {/* <li><Link href="/rental/collection">All Products</Link></li>  */}
            <li><Link href="/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/apply">Apply For Memebership</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'white'}}>
            <li className='link-title'>Contact</li>
            {/* <li><Link href="mailto:sales@thecraftroom-lb.com">sales@petstown.com</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}
            
            <li><a href="https://www.facebook.com/Millionairebia/" target="_blank" rel="noreferrer" >Facebook </a></li>
            <li><a href="https://www.instagram.com/millionairebia/" target="_blank" rel="noreferrer" >Instagram</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >Whatsapp</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+961 123 456 789</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>

    <div className="site-footer__bottom " style={{color:'white',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'white'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'white' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

