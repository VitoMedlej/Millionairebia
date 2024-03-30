import client from '@/database/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server'
import { type NextRequest } from 'next/server'

export  async function POST(req: NextRequest, res: NextApiResponse) {
  // const applicant = req?.body.get('applicant')
  const {applicant} = await req.json()
  console.log('applicant: ', applicant);
  if (req.method === 'POST') {
    // Process a POST request
    if (!applicant) return NextResponse.json({success:false})
       const insertReq = await client.db("MILL").collection("Applicants").insertOne(applicant);
       if (insertReq?.acknowledged) {         
         return NextResponse.json({success:true});
        }
}
return NextResponse.json({success:false});

}