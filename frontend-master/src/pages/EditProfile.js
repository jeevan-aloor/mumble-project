import React from 'react'
import { Button } from 'react-bootstrap'

const EditProfile = () => {
  return (
    <div style={{background:"var(--background)",paddingLeft:"10%",paddingTop:"5%"}}>
        <div > 
            <h3 style={{color:"white",fontFamily:"fright"}}>Edit profile</h3>
            <p style={{color:"var(--background2)"}}>
                You can set preferred display name, create <span style={{color:"white"}}>YOUR PROFILE URL  </span> and manage other personal settings.</p>

        </div>
        <div style={{display:"grid",gridTemplateColumns:"30% 50%",gap:"2%",marginTop:"5%"}}>
            <div style={{display:"grid",gridTemplateColumns:"30% 50%",marginTop:"5%",gap:"15%"}}>
                <img height={140} src='/images/profile.png' />
                <div>                <p style={{color:"white"}}>PROFILE PHOTO</p>

              <p style={{color:"var(--background2)"}}>  We recommend an image<br></br>
of at least 400x400.<br></br>Gifs work too 🙌 </p>
<Button
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "0.5rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "50%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              UPLOAD
                          </Button>{" "}   
                </div>
            </div>
<div>
    <h4 style={{fontSize:"1rem",color:"white",marginLeft:"9%",marginBottom:"5%"}}>ACCOUNT INFO</h4>

        <form style={{width :"80%",marginLeft:"10%"}}>
        <div className="form-group">
          <label style={{color:"#3D3028",fontSize:"0.8rem",
}} htmlFor="exampleInputEmail1"> DISPLAY NAME</label>
          <input defaultValue={"ENTER YOUR DISPLAY NAME"}  style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderColor: "var(--borderColor)",
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background)" ,
                }} placeholder='John Doe'  type="text" className="form-control" id="exampleInputtext1" />
        </div>
        <div className="form-group">
          <label style={{color:"#3D3028",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">CUSTOM URL </label>
          <input defaultValue={"IWC.NET/YOUR CUSTOM URL"}  style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background)" ,
                }}  placeholder='john.doe@example.com' type="text" className="form-control" id="exampleInputtext1" />
        </div>
 
        <div className="form-group">
        <label style={{color:"#3D3028",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">BIO </label>        <textarea 
defaultValue={"ABOUT YOURSELT IN A FEW WORDS"} placeholder='Hello, I am having trouble accessing my account. Can you please help me resolve this issue? Thank you.'  style={{
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  backgroundColor: "var(--background)" ,
                }}  className="form-control" id="exampleFormControlTextarea1" rows={3} />
      </div>
       
    
      </form>
      <h4 style={{fontSize:"1rem",color:"white",marginLeft:"9%",marginBottom:"5%",marginTop:"5%"}}>SOCIAL</h4>

<form style={{width :"80%",marginLeft:"10%"}}>
<div className="form-group">
  <label style={{color:"#3D3028",fontSize:"0.8rem",
}} htmlFor="exampleInputEmail1"> PORTFOLIO OR WEBSITE</label>
  <input defaultValue={"ENTER URL"}  style={{
          height: "2rem",
          padding: "1.2rem",
          borderColor: "var(--borderColor)",
          borderWidth:"0.2rem",
          color:"var(--background2)",
          marginTop: "0.8rem",
          backgroundColor: "var(--background)" ,
        }} placeholder='John Doe'  type="text" className="form-control" id="exampleInputtext1" />
</div>

<label style={{color:"#3D3028",marginTop:"3%",marginBottom:"1%",fontSize:"0.8rem"
}} htmlFor="exampleInputtext1">TWITTER</label>
<div style={{
          borderWidth:"0.2rem",
          borderColor: "var(--borderColor)",
          borderStyle:"solid",padding:"0%"
          ,display:"flex",
          margin:"1%"
        }} className="form-group">

  <input defaultValue={"@TWITTER USERNAME"}  style={{
          height: "2rem",
          padding: "1.2rem",
          borderWidth:"0.2rem",
          color:"var(--background2)",
          borderColor: "var(--background)",
          boxShadow:"none",
          backgroundColor: "var(--background)" 
        }}  placeholder='john.doe@example.com' type="text" className="form-control" id="exampleInputtext1" />
        <Button
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginRight: "1rem",
                                  margin:"2%",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "50%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              VERIFY ACCOUNT
                          </Button>{" "}  
</div>

 

<Button
                              style={{
                                  color: "var(--background2)",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "70%",
                                  borderWidth: "0.2rem"
                              }}
                          ><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6673 6.99967C11.6673 9.577 9.57798 11.6663 7.00065 11.6663C4.42332 11.6663 2.33398 9.577 2.33398 6.99967C2.33398 4.42235 4.42332 2.33301 7.00065 2.33301C9.57798 2.33301 11.6673 4.42235 11.6673 6.99967ZM13.6673 6.99967C13.6673 10.6816 10.6825 13.6663 7.00065 13.6663C3.31875 13.6663 0.333984 10.6816 0.333984 6.99967C0.333984 3.31778 3.31875 0.333008 7.00065 0.333008C10.6825 0.333008 13.6673 3.31778 13.6673 6.99967ZM7.00065 2.66634C7.55294 2.66634 8.00065 3.11406 8.00065 3.66634V5.99967H10.334C10.8863 5.99967 11.334 6.44739 11.334 6.99967C11.334 7.55196 10.8863 7.99967 10.334 7.99967H8.00065V10.333C8.00065 10.8853 7.55294 11.333 7.00065 11.333C6.44837 11.333 6.00065 10.8853 6.00065 10.333V7.99967H3.66732C3.11503 7.99967 2.66732 7.55196 2.66732 6.99967C2.66732 6.44739 3.11503 5.99967 3.66732 5.99967H6.00065V3.66634C6.00065 3.11406 6.44837 2.66634 7.00065 2.66634Z" fill="#D2A163"/>
                          </svg> &nbsp;  &nbsp;  &nbsp; 
                          
                              ADD MORE SOCIAL ACCOUNT
                          </Button>{" "}   
</form>
<p style={{marginLeft:"10%",marginTop:"5%",color:"var(--background2)"}}>To update your settings you should sign message through your wallet. Click 'Update profile' then sign the message</p>
     <hr style={{color:"white",marginLeft:"10%",marginTop:"5%",marginBottom:"5%"}}></hr>
     
     <div style={{display:"flex",justifyContent:"space-between",marginLeft:"10%",widht:"80%",paddingBottom:"20%"}}>
        <h6 style={{color:"white"}}>UPDATE PROFILE</h6>
        <h6 style={{color:"var(--background2)"}}> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z" fill="#D2A163"/>
</svg> &nbsp; 
CLEAR ALL</h6>
     </div>
      </div>
        </div>

         </div>
  )
}

export default EditProfile