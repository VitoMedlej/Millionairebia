
// "use client"
import PreLoader from "@/Components/PreLoader"
// import { server } from "@/Utils/Server"
// import { IProduct } from "@/Types/Types"
// import { server } from "@/Utils/Server"
// import { Box,  Container, Typography } from "@mui/material"
// import { useEffect, useState } from "react"


const fetchDataAndSetImgs = async () => {
  try {

  
  const req = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/get-images`,
  // {cache: 'no-store',next:{revalidate:0} })
  {next:{revalidate:1000} })
  let res = req &&  await req.json();
  if (res?.success && res?.data?.Images) return res
  return null;
}
catch(e) {
  console.log('e: fetch images', e);
  return null;

}
}
export default async function Home() {
  // export default function Home() {
//   const [data,setData] = useState< {
//     products: IProduct[] | never[] ; 
//     featuredProducts:IProduct[] | never[];
// }>({
//     products : [],
//     featuredProducts :[]
//   })

//    const InitialFetch = async () => {
//     try {
  
//       const req = await fetch(`${server}/api/get-data`,{ next: { revalidate: 400 } })
//       const res = await req.json()
    
//       if (res?.success && res?.data) {
//         setData(res?.data)
//       }
//       return null
//     }
//     catch(er) {
//       console.log('er getAll: ', er);
  
//     }
//   }
//   useEffect(() => {
    
//     InitialFetch()

//   }, [])
const imgs = await fetchDataAndSetImgs()

try {
  return <PreLoader imgs={imgs} />

}
catch(e) {
  return <PreLoader imgs={null} />

}
    


}
