import React from "react";
import { Button } from "react-bootstrap";

const Login = () => {
  return (
    <div style={{ background: "var(--background)" }}>
      <div
        style={{
          width: "100%",
          background: "var(--background)",
          padding: "5%",
          paddingBottom: "8%",
        }}
      >
        <p style={{ color: "white", textAlign: "center", fontSize: "0.8rem" }}>
        LOYALTY AND SUBSCRIPTION
        </p>
        <h1
          style={{
            color: "var(--background2)",
            textAlign: "center",
            fontWeight: "200",
            fontFamily: "Fright",
          }}
        >
          Exclusive Benefits for Loyal Whiskey Enthusiasts
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          Unlock premium features and enjoy special perks with our loyalty and subscription programs.
        </p>
      </div>
      <div
        style={{
          background: "var(--background3)",
          height: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ marginLeft: "5%", padding: "5%" }}>
            <h1
              style={{
                color: "var(--background2)",
                fontWeight: "380",
                fontFamily: "Fright",
              }}
            >
              Introduction
            </h1>
            <p style={{ color: "white" }}>
              Accurately assessing the value of rare whiskey bottles can be a
              challenging task. At [Your Company Name], we have developed a
              sophisticated valuation tool that takes into account various
              factors, such as age, distillery, rarity, and bottle condition, to
              provide you with an estimated value for your prized possessions.
            </p>
            <Button
              style={{
                color: "white",
                backgroundColor: "var(--background3)",
                height: "2.5rem",
                marginTop: "1rem",
                marginRight: "1rem",
                borderColor: "var(--background2)",
                borderRadius: "0%",
                paddingLeft: "5%",
                paddingRight: "5%",
                borderWidth: "0.1rem",
              }}
            >
              LEARN MORE
            </Button>{" "}
          </div>
        </div>
        <div style={{ marginLeft: "5%" }}>
          <img width={480} src="/images/subscription.png" />
        </div>
      </div>

      {/* How it works */}
      <div
        style={{
          width: "100%",
          background: "var(--background)",
          padding: "5%",
          paddingBottom: "8%",
        }}
      >
        <p     style={{
                        marginLeft: "1%",
                        fontSize: "0.8rem",
                        color: "var(--background2)",

          }}>LOYALTY AND SUBSCRIPTION</p>
        <h1
          style={{
            color: "var(--background2)",
            fontWeight: "200",
            fontFamily: "Fright",
            fontSize: "2rem",
            marginLeft: "1%",
          }}
        >
         Loyalty Program
        </h1>
        <p     style={{
                        marginLeft: "1%",
                        fontSize: "0.8rem",
                        color: "white",
                        paddingRight:"10%"

          }}>Unlock exclusive perks and rewards with our Loyalty Program, designed to enrich your whiskey NFT experience through referral bonuses, whiskey points, and priority access to rare bottles and special events.</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "32% 32% 32% ",
            columnGap: "1%",
            paddingRight: "5%",
          }}
        >
          <div
            style={{
              background: "var(--background)",
              padding: "5%",
              margin: "5%",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
            }}
          >
       
            <h1
              style={{
                fontSize: "1.2rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
Referral Program            </h1>
            <ul style={{ color: "white" }}>
            <li>Invite friends to join IWC  and earn rewards when they sign up and make their first purchase.</li>
            <li>Get 2% royalty fees on each referral sale for life.</li>
            </ul>
          </div>
          <div
            style={{
              background: "var(--background)",
              padding: "5%",
              margin: "5%",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
            }}
          >
       
            <h1
              style={{
                fontSize: "1.2rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
Whiskey Points        </h1>
            <ul style={{ color: "white" }}>
            <li>Earn points with each purchase on our platform, which can be redeemed for discounts on future transactions.
</li>
            </ul>
          </div>
          <div
            style={{
              background: "var(--background)",
              padding: "5%",
              margin: "5%",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
            }}
          >
       
            <h1
              style={{
                fontSize: "0.9rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
Referral Program            </h1>
            <ul style={{ color: "white" }}>
            <li>Gain early access to rare whiskey NFT releases and special events on our platform.</li>
            <li>Demo Data: Loyal members receive a 24-hour head start on limited edition whiskey NFT drops.</li>
            </ul>
          </div>
        </div>
   
      </div>
      <div style={{ display: "grid", background: "var(--background3)" }}>
        <div style={{ marginLeft: "5%", marginTop: "5%" }}>
          {" "}
          <p style={{ color: "white", fontSize: "0.8rem" }}>AVAILABLE PROGRAMS</p>
          <h1
            style={{
              color: "var(--background2)",
              fontWeight: "380",
              fontFamily: "Fright",
            }}
          >
            Subscription Program
          </h1>
          <p
            style={{ color: "white", marginBottom: "2%", paddingRight: "10%" }}
          >
           Elevate your whiskey NFT journey with our Subscription Programs, offering premium benefits such as reduced transaction fees, personalized recommendations, and expert portfolio consultations tailored to your unique preferences and goals.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"30% 30% 30%",columnGap:"1%",paddingLeft:"4%",paddingBottom:"5%"}}>
 <div style={{borderColor:"var(--borderColor)",background:"var(--background)",borderStyle:"solid",padding:"5%",margin:"5%"}}>
        <h3 style={{color:"white",fontSize:"0.8rem"}}>SILVER SUBSCRIPTION</h3>
        <h1 style={{fontSize:"1.3rem",color:"var(--background2)",marginBottom:"5%",marginTop:"5%"}}>$10/Month</h1>
        <p style={{color:"white"}}>Benefits:</p>
        <ul style={{color:"white",fontSize:"0.8rem"}}>
            <li>Access to premium content, and newsletter</li>
            <li>Members have access to NFT collection </li>
            <li>Up to 5  bottles stored  free</li>
        </ul>
        <Button
                style={{
                  color: "black",
                  backgroundColor: "var(--background2)",
                  height: "2.5rem",
                  marginTop: "6rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius:"0%",
                  paddingLeft:"5%",
                  paddingRight:"5%",
                  borderWidth:"0.1rem",
                  width:"100%"



                }}
              >
                SUBSCRIBE
              </Button>{" "}
    </div>
    <div style={{borderColor:"var(--borderColor)",background:"var(--background)",borderStyle:"solid",padding:"5%",margin:"5%"}}>
        <h3 style={{color:"white",fontSize:"0.8rem"}}>GOLD SUBSCRIPTION</h3>
        <h1 style={{fontSize:"1.3rem",color:"var(--background2)",marginBottom:"5%",marginTop:"5%"}}>$20/Month</h1>
        <p style={{color:"white"}}>Benefits:</p>
        <ul style={{color:"white",fontSize:"0.8rem"}}>
            <li>Reduced transaction fees 5% </li>
            <li>Priority access to rare whiskey NFTs,  </li>
            <li>Personalised whiskey recommendations</li>
            <li>Access to premium content, newsletter, and exclusive online events.</li>
            <li>Up to 15  bottles stored  free</li>
            <li>Customer monthly  report </li>
        </ul>
        <Button
                style={{
                  color: "black",
                  backgroundColor: "var(--background2)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius:"0%",
                  paddingLeft:"5%",
                  paddingRight:"5%",
                  borderWidth:"0.1rem",
                  width:"100%"



                }}
              >
                SUBSCRIBE
              </Button>{" "}
    </div>
    <div style={{borderColor:"var(--borderColor)",background:"var(--background)",borderStyle:"solid",padding:"5%",margin:"5%"}}>
        <h3 style={{color:"white",fontSize:"0.8rem"}}>PLATINUM SUBSCRIPTION</h3>
        <h1 style={{fontSize:"1.3rem",color:"var(--background2)",marginBottom:"5%",marginTop:"5%"}}>$40/Month</h1>
        <p style={{color:"white"}}>Benefits:</p>
        <ul style={{color:"white",fontSize:"0.8rem"}}>
            <li>All the features of sliver and gold </li>
            <li>Reduced transaction fees  3%  </li>
            <li>Priority access to rare whiskey NFTs</li>
            <li>Annual in-person viewing access</li>
            <li>Up to 30 bottles stored free</li>
            <li>Free shipping  </li>
            <li>Quarterly physical inspections
                     </li>
        </ul>
        <Button
                style={{
                  color: "black",
                  backgroundColor: "var(--background2)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius:"0%",
                  paddingLeft:"5%",
                  paddingRight:"5%",
                  borderWidth:"0.1rem",
                  width:"100%"



                }}
              >
                SUBSCRIBE
              </Button>{" "}
    </div>
  </div>
         <h2 style={{color:"var(--background2)",paddingBottom:"8%",paddingLeft:"15%",paddingTop:"8%",paddingRight:"15%",fontFamily:"fright",textAlign:"center"}}>
         Join our loyalty or subscription program today and start enjoying the exclusive benefits tailored to your whiskey NFT experience.</h2>

      </div>
    </div>
  );
};

export default Login;
