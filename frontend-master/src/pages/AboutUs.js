import React from 'react'
import { Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate()
  return (
    <div style={{background:"var(--background)"}}>
    <div style={{ width:"100%"  ,background:"var(--background)",padding:"5%",paddingBottom:"8%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>ABOUT US
</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Our Journey in the World of Rare Whiskey NFTs
</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>A passion for rare whiskey and cutting-edge technology brought us together to create the ultimate platform for whiskey enthusiasts and collectors.

</p>
 

        
    </div>
    <div style={{background:"var(--background3)" ,height:"90vh",display:"flex",alignItems:"center"}}>
    <div style={{width:"50%"}}>
        <div style={{marginLeft:"5%",padding:"5%"}}>
        <h1 style={{color:"var(--background2)",fontWeight:"380",fontFamily:"Fright"}}>Introduction
    </h1>
    <p style={{color:"white"}}>Safeguard your valuable NFT-backed whiskey bottles with our
secure storage facilities. Our state-of-the-art storage options
ensure the preservation and protection of your investment.
Explore our available plans and select the one that best suits
your needs.</p>
<Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background3)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius:"0%",
                  paddingLeft:"5%",
                  paddingRight:"5%",
                  borderWidth:"0.1rem"


                }}
              >
                DISCOVER OPTIONS
              </Button>{" "}
         </div>
  
    </div>
    <div style={{marginLeft:"5%"}}>
    <img width={500} src='/images/about.png' />
    </div>
      </div>

    

    {/* our mission */}
    <div style={{ width:"100%"  ,background:"var(--background)",padding:"5%",paddingBottom:"8%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>ABOUT US
</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Our Mission 
</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>"Empowering whiskey enthusiasts to discover, invest, and savor the world of rare whiskey NFTs."

</p>
 

        
    </div>

        {/* our story */}
        <div style={{ width:"100%"  ,background:"var(--background3)",padding:"5%",paddingBottom:"8%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>ABOUT US
</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Our Story 
</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>[Your Company Name] was born from the shared vision of our founders, [Founder 1] and [Founder 2], who saw the potential for combining their passion for rare whiskey with the power of blockchain technology. Driven by the desire to create a transparent and secure marketplace for whiskey collectors, they assembled a diverse and talented team to bring their vision to life.

</p>
 

        
    </div>
        {/* our team */}

    <div style={{ width:"100%"  ,background:"var(--background)",padding:"5%",paddingBottom:"8%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>ABOUT US
</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Our Team
</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>"Empowering whiskey enthusiasts to discover, invest, and savor the world of rare whiskey NFTs."

</p>
<div style={{display:"grid" ,gridTemplateColumns:"20% 20% 20% 20%",gap:"5%"}}>
    <div style={{borderStyle:"solid" ,borderColor:"var(--borderColor",padding:"2%",paddingTop:"5%"}}>
    <img src='/images/founder.png' style={{width:"100%"}} width={220}/>
        <p style={{color:"var(--background2)",marginTop:"1rem",fontWeight:"500"}}>Founder</p>
        <p style={{color:"white",fontWeight:"400",fontSize:"0.8rem"}}>CEO</p>
        <p style={{color:"white"}}>
        Over 15 years of experience in the whiskey industry, renowned whiskey connoisseur, and collector.
        </p>

    </div>
    <div style={{borderStyle:"solid" ,borderColor:"var(--borderColor",padding:"2%",paddingTop:"5%"}}>
    <img src='/images/founder.png' style={{width:"100%"}} width={220}/>
        <p style={{color:"var(--background2)",marginTop:"1rem",fontWeight:"500"}}>Founder</p>
        <p style={{color:"white",fontWeight:"400",fontSize:"0.8rem"}}>CEO</p>
        <p style={{color:"white"}}>
        Over 15 years of experience in the whiskey industry, renowned whiskey connoisseur, and collector.
        </p>

    </div>
    <div style={{borderStyle:"solid" ,borderColor:"var(--borderColor",padding:"2%",paddingTop:"5%"}}>
    <img src='/images/founder.png' style={{width:"100%"}} width={220}/>
        <p style={{color:"var(--background2)",marginTop:"1rem",fontWeight:"500"}}>Founder</p>
        <p style={{color:"white",fontWeight:"400",fontSize:"0.8rem"}}>CEO</p>
        <p style={{color:"white"}}>
        Over 15 years of experience in the whiskey industry, renowned whiskey connoisseur, and collector.
        </p>

    </div>
    <div style={{borderStyle:"solid" ,borderColor:"var(--borderColor",padding:"2%",paddingTop:"5%"}}>
    <img src='/images/founder.png' style={{width:"100%"}} width={220}/>
        <p style={{color:"var(--background2)",marginTop:"1rem",fontWeight:"500"}}>Founder</p>
        <p style={{color:"white",fontWeight:"400",fontSize:"0.8rem"}}>CEO</p>
        <p style={{color:"white"}}>
        Over 15 years of experience in the whiskey industry, renowned whiskey connoisseur, and collector.
        </p>

    </div>

</div>
 
{/* our achievements */}

        
    </div>
    <div style={{background:"var(--background3)" ,height:"90vh",display:"flex",alignItems:"center"}}>
    <div style={{width:"50%"}}>
        <div style={{marginLeft:"5%",padding:"5%"}}>
            <p style={{color:"white",fontSize:"0.7rem"}}>ABOUT US</p>
        <h1 style={{color:"var(--background2)",fontWeight:"380",fontFamily:"Fright"}}>Our Achievements
    </h1>

<ul   style={{color:"white"}}>
    <li>Launched our platform in 2022, attracting thousands of users within the first month.</li>
    <li>Established partnerships with leading whiskey distilleries and auction houses to source rare and valuable bottles.</li>
    <li>Successfully facilitated the trading of over $1 million worth of rare whiskey NFTs in our first year.</li>
</ul>
         </div>
  
    </div>
    <div style={{marginLeft:"10%"}}>
    <img width={350} src='/images/about2.png' />
    </div>
      </div>
      <div style={{ width:"100%"  ,background:"var(--background)",padding:"5%",paddingBottom:"8%"}}> 
    <p style={{color:"white",textAlign:"center",fontSize:"0.8rem"}}>ABOUT US
</p>
 <h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Our Future
</h1>
 <p style={{color:"white",textAlign:"center" ,marginTop:"2%",marginBottom:"5%"}}>As we continue to grow and evolve, [Your Company Name] remains committed to delivering a seamless and secure experience for our users. We are constantly exploring new ways to enhance our platform, expand our offerings, and foster a thriving community of whiskey collectors and enthusiasts.
</p>
 

        
    </div>
    <div style={{ width:"100%"  ,background:"var(--background3)",padding:"3%",paddingBottom:"8%",textAlign:"center"}}> 
<div style={{padding:"5%"}}>
<h1 style={{color:"var(--background2)",textAlign:"center",fontWeight:"200",fontFamily:"Fright"}}>Join us in our journey to redefine the world of rare whiskey NFTs. 
</h1>
<Button
                style={{
                  color: "var(--background)",
                  backgroundColor: "var(--background2)",
                  border: "none",
                  height: "2.5rem",
                  marginTop: "5rem",
                  marginLeft: "1rem",
                  marginRight: "1rem",
                  borderRadius:"0%",
                  paddingLeft:"3%",
                  paddingRight:"3%"

                }}
                // onClick={()=>navigate("/dashboard")}
              >
                Join Now
              </Button>{" "}
</div>


 

        
    </div>
    </div>
  )
}

export default Login