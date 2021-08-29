// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {MongoClient} from "mongodb"
export default async function handler(req, res) {
if(req.method=="POST"){
  const {email,name,message}=req.body
  const newMessage={...req.body}
  if(!email || !email.includes("@") || !name || name.trim()==="" || !message || message.trim()===""){
    res.status(422).json({message:"Invalid input"})
  return
  }
  let client
  try{
   client=await MongoClient.connect("mongodb+srv://Haroon:<password>@cluster0.5duo6.mongodb.net/my-blog?retryWrites=true&w=majority")
   console.log("Connectionto Db ESTABLISHED")
  }catch(e){
   console.log(e,"Connection to Db failed")
   return res.status(500).json({message:"Connection failed"})
  }
  const db=client.db()
  try{
  const res=await db.collection("messages").insertOne(req.body)
  newMessage._id=res.insertedId
  }catch(e){
    client.close()
    res.status(500).json({message:"Inserting Failed!!!!"})
  }
  client.close()
  return res.status(201).json({success:true,message:newMessage})
}

}
