import client from '@/database/mongodb';
import { sendEmail } from '@/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'
import { sendWelcomeEmail } from '../welcome-email/route';



async function sendOrderConfirmationEmail(formState: any): Promise<boolean> {
  
  const applicant = formState;
  console.log('applicant: ', applicant);
  const htmlContent = `<html lang="en">
  <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Applicant's Application</title>
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
            max-width:100px;
          }
      </style>
  </head>
  <body>
  <div class="container">
  <div class='cont'>
    <img class='imgg' src='https://ucarecdn.com/09c3a7b0-509a-485d-a988-7a8bae7dd575/logobia.jpg' />
    </div>
          <h2>You Received A New Application From ${applicant?.FullName}:</h2>
          <div class="field">
              <label htmlFor="fullName">Full Name:</label>
              <div class="field-value">${applicant.FullName}</div>
          </div>
          <div class="field">
              <label htmlFor="phone">Phone:</label>
              <div class="field-value">${applicant.Phone}</div>
          </div>
          <div class="field">
              <label htmlFor="email">Email:</label>
              <div class="field-value">${applicant.email}</div>
          </div>
          <div class="field">
              <label htmlFor="message">Message:</label>
              <div class="field-value">${applicant.Message}</div>
          </div>
          <div class="field">
              <label htmlFor="country">Country:</label>
              <div class="field-value">${applicant.country}</div>
          </div>
          <div class="field">
              <label htmlFor="company">Company:</label>
              <div class="field-value">${applicant.company}</div>
          </div>
          <div class="field">
              <label htmlFor="position">Position:</label>
              <div class="field-value">${applicant.position}</div>
          </div>
      </div>
  </body>
</html>`;

  const options = {
      from: '"Millionairebia.com" <info@millionairebia.com>',
      to: 'info@millionairebia.com',
      subject: "New registration through the website!",
      html: htmlContent,
  };

  return  await sendEmail(options);
}

// Call the function to send email


export  async function POST(req: NextRequest, res: NextApiResponse) {
  const {applicant} = await req.json()
  if (req.method === 'POST') {
      console.log('applicant: ', applicant);
    if (!applicant || !applicant?.email) return NextResponse.json({success:false})
       const insertReq = await client.db("MILL").collection("Applicants").insertOne(applicant);
       const result =  await sendOrderConfirmationEmail(applicant);
       const welcomeEmail =  await sendWelcomeEmail(applicant?.email);
       console.log('welcomeEmail: ', welcomeEmail);
       console.log('result: ', result);

       if (insertReq?.acknowledged && result == true && welcomeEmail === true) {         
         return NextResponse.json({success:true});
        }
}
return NextResponse.json({success:false});

}