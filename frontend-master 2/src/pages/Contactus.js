import React from 'react'
import "./contact.css"
const Login = () => {
  return (
    <div style={{ width:"100%"  ,background:"var(--background)",paddingTop:"5%",paddingBottom:"0%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>CONTACT US</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"380",fontFamily:"Fright"}}>Get in Touch with Our Team</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>We're here to help! Reach out to us with any questions, concerns, or feedback regarding our platform and services.
</p>
 
 <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,background:"var(--background)"}}>
    
    </div>
    
    <div style={{background:"var(--background3",padding:"5%"}}>
        <div style={{marginLeft:"9%"}}>    <p style={{color:"white",fontSize:"0.8rem"}}>CONTACT US</p>
 <h1 style={{color:"var(--background2)",fontWeight:"380",fontFamily:"Fright"}}>Contact Form</h1>
 <p style={{color:"white" ,marginTop:"2%",marginBottom:"5%"}}>We're here to help! Reach out to us with any questions, concerns, or feedback regarding our platform and services.
</p></div>


    <form style={{width :"80%",marginLeft:"10%"}}>
        <div className="form-group">
          <label style={{color:"white",fontSize:"0.8rem",
}} htmlFor="exampleInputEmail1"> NAME</label>
          <input  style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderColor: "var(--borderColor)",
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background3)" ,
                }} placeholder='John Doe'  type="text" className="form-control" id="exampleInputtext1" />
        </div>
        <div className="form-group">
          <label style={{color:"white",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">EMAIL </label>
          <input  style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background3)" ,
                }}  placeholder='john.doe@example.com' type="text" className="form-control" id="exampleInputtext1" />
        </div>
  <div className="form-group" >
          <label style={{color:"white",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">SUBJECT </label>
          <input  style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background3)" ,
                }} placeholder='I need assistance with my account'  type="text" className="form-control" id="exampleInputtext1" />
        </div>
        <div className="form-group">
        <label style={{color:"white",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">MESSAGE </label>        <textarea placeholder='Hello, I am having trouble accessing my account. Can you please help me resolve this issue? Thank you.'  style={{
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  backgroundColor: "var(--background3)" ,
                }}  className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>
       
        <button style={{color:"black",width:"100%",borderRadius:"1%",background:"var(--background2)" ,marginTop:"5%",border:"none"}} type="submit" className="btn btn-primary">SUBMIT </button>
    
      </form>
      </div>
    </div>
  )
}

export default Login