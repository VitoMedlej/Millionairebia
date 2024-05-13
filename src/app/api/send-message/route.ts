import client from '@/database/mongodb';
import { sendEmail } from '@/Utils/sendMail';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'


async function sendOrderConfirmationEmail(formState: any): Promise<boolean> {
  
  const applicant = formState;
  console.log('applicant: ', applicant);
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
      </style>
  </head>
  <body>
  
      <div className="container">
          <h2>You received a new message through the website:</h2>
          <div className="field">
              <label htmlFor="fullName">Full Name:</label>
              <div className="field-value">${applicant.FullName}</div>
          </div>
          <div className="field">
              <label htmlFor="phone">Phone:</label>
              <div className="field-value">${applicant.Phone}</div>
          </div>
          <div className="field">
              <label htmlFor="email">Email:</label>
              <div className="field-value">${applicant.email}</div>
          </div>
          <div className="field">
              <label htmlFor="message">Message:</label>
              <div className="field-value">${applicant.Message}</div>
          </div>

      </div>
  </body>
</html>`;

  const options = {
      from: '"Millionairebia.com" <info@millionairebia.com>',
      to: 'info@millionairebia.com',
      subject: "New message through the website!",
      html: htmlContent,
  };

  return  await sendEmail(options);
}

export  async function POST(req: NextRequest, res: NextApiResponse) {


  const {message} = await req.json()
  console.log('applicant: ', message);
  if (req.method === 'POST') {
    // Process a POST request
    if (!message) return NextResponse.json({success:false})
       const insertReq = await client.db("MILL").collection("Messages").insertOne({message});
      
    
    
    
    const result =  await sendOrderConfirmationEmail(message);
    console.log('result: ', result);

    if (insertReq?.acknowledged && result == true) {         
      return NextResponse.json({success:true});
     }


}
return NextResponse.json({success:false});

}