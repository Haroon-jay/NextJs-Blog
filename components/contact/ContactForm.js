import React,{useState,useEffect} from 'react'
import classes from "./contact-form.module.css"
import Notification from "../ui/notification"
const ContactForm = () => {
    const [enteredEmail,setEmail]=useState("")
    const [enteredName,setName]=useState("")
    const [enteredMsg,setMsg]=useState("")
    const [reqStatus,setReqStatus]=useState()
  
    useEffect(()=>{
        console.log(reqStatus)
     if(reqStatus==="error"  || reqStatus==="success"){
         const timer=setTimeout(()=>{
           setReqStatus("")
         },3000)

         return ()=>clearTimeout(timer)    
     }
    
    }
    ,[reqStatus])
    const sendMessage=async(e)=>{
     e.preventDefault()
     setReqStatus("pending")
    try{
     const res=await  fetch("/api/contact",{
          method:"POST",
          body:JSON.stringify({email:enteredEmail,name:enteredName,message:enteredMsg}),
          headers:{
              'Content-Type':"application/json"
          }
      })
    if(res.status>=400){
        throw new Error("Something went Wrong!")
    }
    setReqStatus("success")
    setEmail("")
    setMsg("")
    setName("")
     const data=await res.json()
    }catch(e){
      setReqStatus("error")
    } 
    }
    let notificationData
    if(reqStatus==='pending'){
        notificationData={
                status:"pending",
                title:"Sending message...",
                message:"Your message is on its way"      
        }
    }
    if(reqStatus==='success'){
        notificationData={
            status:"success",
            title:"success",
            message:"Message sent Succesfully!"
        }
    }
    if(reqStatus==="error"){
        notificationData={
            status:"error",
            title:"error",
            message:"Something went wrong!"
        }
    }
    return (
        <div className={classes.contact}>
            <h1>How can I help you?</h1>
            <form className={classes.form} onSubmit={sendMessage}>
                <div className={classes.controls}>
                    <div className={classes.control}> 
                 <label htmlFor="email">Your Email</label>
                 <input required value={enteredEmail} onChange={(e)=>setEmail(e.target.value)} type="email" id="email"/>
                 </div>
                 <div className={classes.control}> 
                 <label htmlFor="name">Your Name</label>
                 <input required value={enteredName} onChange={e=>setName(e.target.value)} type="name" id="name"/>
                 </div>
                 <div className={classes.control}> 
                 <label htmlFor="message">Your Message</label>
                 <textarea required value={enteredMsg} onChange={e=>setMsg(e.target.value)} id="message" rows="5"/>
                 </div>
                 <div className={classes.actions}>
                     <button type="submit">Send Message</button>
                 </div>
                    </div>
                  
            </form>
            { reqStatus && notificationData && <Notification status={notificationData.status} message={notificationData.message} title={notificationData.title} />}
        </div>
    )
}

export default ContactForm
