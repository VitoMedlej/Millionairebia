import client from '@/database/mongodb';
import { sendEmail } from '@/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


export async function sendWelcomeEmail(toEmail : string): Promise<boolean> {
  
  const htmlContent = `<html lang="en">
  <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Website Message</title>
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              padding: 20px;
          }
          .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
              padding: 20px 20px 0 20px;
          }
          .container2 {
            max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
              padding: 0 20px;
    background: black;
          }
          .field {
              margin-bottom: 20px;
              display:flex;
              flex-direction: row;
              gap:1;
              padding-bottom: .25em
          }
          .field label {
              font-weight: bold;
              display: block;
              margin-bottom: 5px;
          }
          .auto {
            margin:0 auto;
            align-items: center;
            justify-content: center;
          }
          .field-value {
              margin-bottom: 10px;
              font-size: 16px;
          }
          .imgg {
            width : 100px;
          }
          .w100 {
            width: 100%;
          }
          .flex{
            display: flex;
          }
          .center {
            text-align: center;
          }
          .clr {
            color: #c7ac7f;
          }
          .mt {
            margin-top: .25em;
          }
          .fm {
            width: 70px;
          }
          .icon {
            width: 20px;
            height: 20px;
            filter: invert(1);
          }
          .mt2 {
            margin-top: 2em;

          }
          .p0 {
            margin: 1em 0 0 0 !important;
            padding-bottom: 2em;
          }
.footer {
    background: rgb(3, 3, 3);
    color: white;
    text-align: center;
    justify-content: center;
    padding: 1em 0;
    
}
li {
    margin: .5em;
    gap:1em;
    list-style: none !important;
}
a {
    color: #c7ac7f;

}
.link-title {
    color: white;
    font-weight: 700;
    text-align: left;
    padding: 0 0  1em 0;
}
.white {
    color: white;
}
.gap2 {
    gap:.75em;
}
.py {
    padding: 2em 0;
}
</style>
  </head>
  <body>
  <div class="container">
  <div class='cont flex auto w100'>
  <img class='imgg flex ' src='https://ucarecdn.com/09c3a7b0-509a-485d-a988-7a8bae7dd575/logobia.jpg' />
  </div>
      <h1 class="mt clr w100 flex auto center">Welcome to Millionairebia</h1>
      <p class="mt2">Hello dear,</p>
      <p>Thank you for taking the time to apply for our membership to join Millionairebia Club.</p>
      <p>We appreciate your interest in joining our exclusive community of accomplished individuals.</p>
      <p>Your application has been received, and we will carefully review the information you provided.</p>
      <p>Our team will be in touch with you soon regarding the status of your application.</p>
      <p>In the meantime, if you have any questions or need further assistance, please don't hesitate to contact us.</p>
      <p>Thank you once again for your interest in our club.</p>
      <p>We look forward to the possibility of welcoming you as a member.</p>
      <p class="p0" >Warm regards,</p>
 
    </div>
  </div>
  <div class="container2">
    <footer class="footer">
      
        <ul class='ul-white' style='padding:0 !important; color:black;'>
            <li class='link-title'>Contact</li>
            <li >
                <a class='flex row gap2' href="mailto:Info@millionairebia.com">
                    <div style='opacity:.8; width:17px; max-width:17px; height:17px; max-height:17px;'>
                        <img  class="icon" src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="" class="img" />
                    </div>
                    Info@millionairebia.com
                </a>
            </li>
            <li>
                <a class='flex row gap2' href="https://www.instagram.com/millionairebia/" target="_blank" rel="noreferrer">
                    <div style='opacity:.8; width:17px; max-width:17px; height:17px; max-height:17px;'>
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt="" class="img" />
                    </div>@millionairebia
                </a>
            </li>
            <li>
                <a href='https://wa.me/+96170312490' rel="noreferrer" class='flex row gap2' target='_blank'>
                    <div style='opacity:.8; width:17px; max-width:17px; height:17px; max-height:17px;'>
                        <img class="icon" src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt="" class="img" />
                    </div>
                    +961 70 312 490
                </a>
            </li>
        </ul>
        <div class="py">
            <img class="fm" src="https://ucarecdn.com/76f845bd-a452-45cd-959f-d72f07854b9c/419002048_1346136676081363_2742258375729400010_n.jpg" alt="">
          </div>
          <a class="white" href='www.Millionairebia.com' rel="noreferrer" class='mt flex auto row gap2 center' target='_blank'>
         
            www.Millionairebia.com
        </a>
      
      </footer>
  </div>

      </div>
  </body>
</html>`;

  const options = {
      from: '"Millionairebia.com" <info@millionairebia.com>',
      to: toEmail,
      subject: "Welcome to Millionairebia",
      html: htmlContent,
  };

  return  await sendEmail(options);
}

