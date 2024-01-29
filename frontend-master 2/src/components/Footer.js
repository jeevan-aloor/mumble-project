import React from 'react'
import { InputGroup,Form } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{borderStyle:"solid",borderColor:"var(--borderColor)",borderWidth:"0.1rem",background:"var(--background)",borderBottom:"none"}}>

              <div style={{ padding:"5%",paddingBottom:"1%", display:"grid",gridTemplateColumns:"15% 15% 15% 20%",gap:"12%",gridRowGap:"2%" }}>
 
 <div>
    <img src='/images/headerLogo.png' style={{marginBottom:"20%"}} />
    <h4  style={{fontSize:"1rem", color:"white"}}>Discover, Invest, and Savor the World of Rare Whiskey NFTs</h4>
 </div>
 <div> 
 <h4  style={{color:"white",fontSize:"1rem",marginBottom:"20%" }}>STACKS</h4>
    <p style={{color:"var(--background2)" ,fontWeight:"600"}}>DISCOVER</p>
    <p style={{color:"var(--background2)" }}>CONNECT WALLET</p>
    <p style={{color:"var(--background2)" }}>CREATE BOTTLE</p>
 </div>
 <div> 
    <h4  style={{color:"white",fontSize:"1rem",marginBottom:"20%" }}>INFO</h4>
    <p style={{color:"var(--background2)" ,fontWeight:"600"}}>DOWNLOAD</p>
    <p style={{color:"var(--background2)" ,fontWeight:"600"}}>DEMOS</p>
    <p style={{color:"var(--background2)" ,fontWeight:"600"}}>SUPPORT</p>
 </div><div >
    <h4  style={{color:"white",fontSize:"1rem",marginBottom:"20%" }}>JOIN NEWSLETTER</h4>
    <p  style={{color:"white",marginTop:"2rem"}}>Subscribe our newsletter to get more free design course and resource</p>
    
    <div style={{display:"flex"}}>
       <Form.Control
                style={{
                  height: "2rem",
                  padding: "1.2rem",
                  borderRight: "none",
                  borderWidth: "0.01rem",
                  borderRadius: "2%",
                  borderColor: "#42352B",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background)",
                  color: "var(--background2)",
                }}
                placeholder="Enter your email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                className="no-outline"
              />
              <InputGroup.Text
                id="basic-addon2"
                style={{
                  height: "2.5rem",
                  borderLeft: "none",
                  borderRadius: "2%",
                  borderColor: "var(--borderColor)",
                  marginTop: "0.8rem",
                  backgroundColor: "var(--background)",
                  color: "var(--background2)",
                  padding:"0.1rem"
                }}
              >
<svg width="40" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="32" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0909 11.2652C18.4968 10.8906 19.1294 10.9159 19.504 11.3217L22.7348 14.8217C23.0884 15.2047 23.0884 15.7952 22.7348 16.1782L19.504 19.6783C19.1294 20.0841 18.4968 20.1094 18.091 19.7348C17.6851 19.3602 17.6598 18.7276 18.0344 18.3217L19.716 16.5L10 16.5C9.44771 16.5 9 16.0523 9 15.5C9 14.9477 9.44771 14.5 10 14.5L19.716 14.5L18.0344 12.6783C17.6598 12.2725 17.6851 11.6398 18.0909 11.2652Z" fill="#FCFCFD"/>
</svg>

              </InputGroup.Text>
              </div>
 </div>
        </div>
        <hr style={{height: '3px', borderWidth: 0, backgroundColor: "#3F342A", width:"90%",marginLeft:"5%" }} />

        <div style={{display:"flex",justifyContent:"space-between",paddingLeft:"5%",paddingRight:"5%"}}>
            <p style={{color:"#795C3C"}}>Copyright © 2023 IWC LLC. All rights reserved</p>
<p  style={{color:"white"}}>We use cookies for better service.
<span style={{color:"#795C3C"}}> &nbsp; &nbsp; Accept</span></p>
        </div>

    </footer>
    
  )
}

export default Footer