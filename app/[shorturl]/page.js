import { redirect } from "next/navigation"
import clientPromise from "../lib/mongodb"
export default async function Page({params}){
    const shorturl=(await params).shorturl
    const client = await clientPromise;
    const db = client.db("shortenit");
    const collection = db.collection("url");
    const member=await collection.findOne({shorturl:shorturl})
    if(member){
      return redirect(member.url)
    }
    else{
      return redirect(process.env.NEXT_PUBLIC_HOST)
    }
}