import client from '@/database/mongodb';
import { sendEmail } from '@/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


export async function sendWelcomeEmail({toEmail} : {toEmail:string}): Promise<boolean> {
  
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
              padding: 20px;
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
          .field-value {
              margin-bottom: 10px;
              font-size: 16px;
          }
          .imgg {
            width : 100px;
          }
      </style>
  </head>
  <body>
  <div class="container">
  <div class='cont'>
  <img class='imgg' src='https://ucarecdn.com/09c3a7b0-509a-485d-a988-7a8bae7dd575/logobia.jpg' />
  </div>
      <h2>Welcome to Millionairebia</h2>
      <p>Hello dear,</p>
      <p>Thank you for taking the time to apply for our membership to join Millionairebia Club.</p>
      <p>We appreciate your interest in joining our exclusive community of accomplished individuals.</p>
      <p>Your application has been received, and we will carefully review the information you provided.</p>
      <p>Our team will be in touch with you soon regarding the status of your application.</p>
      <p>In the meantime, if you have any questions or need further assistance, please don't hesitate to contact us.</p>
      <p>Thank you once again for your interest in our club.</p>
      <p>We look forward to the possibility of welcoming you as a member.</p>
      <p style={{marginTop:'0.2em'}}>Warm regards,</p>
    </div>
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

