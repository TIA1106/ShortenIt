import clientPromise from "../../lib/mongodb";

export async function POST(request) {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("shortenit");
    const collection = db.collection("url");

    const member=await collection.findOne({shorturl:body.shorturl})
    if(member){
      return Response.json({
      success: false,
      error: true,
      message: "this name already exists,try again",
    });
    }

    await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });

    return Response.json({
      success: true,
      error: false,
      message:""
    });
  }

