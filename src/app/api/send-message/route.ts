import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'




export  async function POST(req: NextRequest, res: NextApiResponse) {


  const {message} = await req.json()
  console.log('applicant: ', message);
  if (req.method === 'POST') {
    // Process a POST request
    if (!message) return NextResponse.json({success:false})
       const insertReq = await client.db("MILL").collection("Messages").insertOne({message});
       if (insertReq?.acknowledged) {         
         return NextResponse.json({success:true});
        }
}
return NextResponse.json({success:false});

}