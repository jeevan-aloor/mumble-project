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
          VALUATION
        </p>
        <h1
          style={{
            color: "var(--background2)",
            textAlign: "center",
            fontWeight: "200",
            fontFamily: "Fright",
          }}
        >
          Estimate the Value of Your Rare Whiskey Bottles
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "2%",
            marginBottom: "5%",
          }}
        >
          Utilize our proprietary valuation algorithm to determine the potential
          worth of your whiskey collection.
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
          <img width={500} src="/images/valuation.png" />
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
        <h1
          style={{
            color: "var(--background2)",
            fontWeight: "200",
            fontFamily: "Fright",
            fontSize: "2rem",
            marginLeft: "1%",
          }}
        >
          How It Works
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "25% 25% 25% 25%",
            columnGap: "2%",
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
            <h3
              style={{
                color: "white",
                fontSize: "0.8rem",
                background: "#5F4529",
                width: "24%",
                textAlign: "center",
                padding: "2%",
              }}
            >
              Step 1
            </h3>
            <h1
              style={{
                fontSize: "0.9rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              Input your bottle details
            </h1>
            <p style={{ color: "white" }}>
              Provide information about your whiskey bottle, such as the
              distillery, age, cask type, bottling date, and any other relevant
              details.
            </p>
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
            <h3
              style={{
                color: "white",
                fontSize: "0.8rem",
                background: "#5F4529",
                width: "24%",
                textAlign: "center",
                padding: "2%",
              }}
            >
              Step 2
            </h3>
            <h1
              style={{
                fontSize: "0.9rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              Receive an instant valuation
            </h1>
            <p style={{ color: "white" }}>
              Follow the guided steps to securely store your NFT-backed whiskey
              bottles.
            </p>
          </div>{" "}
          <div
            style={{
              background: "var(--background)",
              padding: "5%",
              margin: "5%",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
            }}
          >
            <h3
              style={{
                color: "white",
                fontSize: "0.8rem",
                background: "#5F4529",
                width: "24%",
                textAlign: "center",
                padding: "2%",
              }}
            >
              Step 3
            </h3>
            <h1
              style={{
                fontSize: "0.9rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              Review the valuation breakdown
            </h1>
            <p style={{ color: "white" }}>
              Understand the factors that contribute to your bottle's value,
              including comparable sales, rarity, and market trends.
            </p>
          </div>{" "}
          <div
            style={{
              background: "var(--background)",
              padding: "5%",
              margin: "5%",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
            }}
          >
            <h3
              style={{
                color: "white",
                fontSize: "0.8rem",
                background: "#5F4529",
                width: "24%",
                textAlign: "center",
                padding: "2%",
              }}
            >
              Step 4
            </h3>
            <h1
              style={{
                fontSize: "0.9rem",
                color: "var(--background2)",
                marginBottom: "5%",
                marginTop: "5%",
              }}
            >
              Mint your whiskey NFT
            </h1>
            <p style={{ color: "white" }}>
              Mint your whiskey NFT: If you're interested in turning your rare
              whiskey bottle into a tradeable NFT, explore our minting options
              and start the process.
            </p>
          </div>
        </div>
        <p style={{ color: "white", marginLeft: "2%", marginTop: "5%" }}>
          *Please note that the estimated value provided by our tool is for
          informational purposes only and may not reflect the actual sale price
          in the market. Consult with a professional appraiser or conduct
          additional research before making any investment decisions.
        </p>
      </div>
      <div style={{ display: "grid", background: "var(--background3)" }}>
        <div style={{ marginLeft: "5%", marginTop: "5%" }}>
          {" "}
          <p style={{ color: "white", fontSize: "0.8rem" }}>OUR TOOL</p>
          <h1
            style={{
              color: "var(--background2)",
              fontWeight: "380",
              fontFamily: "Fright",
            }}
          >
            Valuation Tool
          </h1>
          <p
            style={{ color: "white", marginBottom: "2%", paddingRight: "10%" }}
          >
            Discover the potential worth of your rare whiskey bottles with our
            Valuation Tool, a sophisticated algorithm designed to provide
            accurate value estimates based on key factors such as age,
            distillery, and rarity.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "50% 30%",gap:"5%" }}>
          <div
            style={{ width: "100%", paddingTop: "2%", paddingBottom: "20%" }}
          >
            <form style={{ width: "80%", marginLeft: "10%" }}>
              <div className="form-group">
                <label
                  style={{ color: "white", fontSize: "0.8rem" }}
                  htmlFor="exampleInputEmail1"
                >
                  {" "}
                  DISTILLERY
                </label>
                <input
                  style={{
                    height: "2rem",
                    padding: "1.2rem",
                    borderColor: "var(--borderColor)",
                    borderWidth: "0.2rem",
                    color: "var(--background2)",
                    marginTop: "0.8rem",
                    backgroundColor: "var(--background3)",
                  }}
                  placeholder="MACALLAN"
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                />
              </div>
              <div className="form-group">
                <label
                  style={{
                    color: "white",
                    marginTop: "3%",
                    marginBottom: "1%",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="exampleInputtext1"
                >
                  AGE{" "}
                </label>
                <input
                  style={{
                    height: "2rem",
                    padding: "1.2rem",
                    borderWidth: "0.2rem",
                    color: "var(--background2)",
                    borderColor: "var(--borderColor)",
                    marginTop: "0.8rem",
                    backgroundColor: "var(--background3)",
                  }}
                  placeholder="30"
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                />
              </div>
              <div className="form-group">
                <label
                  style={{
                    color: "white",
                    marginTop: "3%",
                    marginBottom: "1%",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="exampleInputtext1"
                >
                  CASK TYPE{" "}
                </label>
                <input
                  style={{
                    height: "2rem",
                    padding: "1.2rem",
                    borderWidth: "0.2rem",
                    color: "var(--background2)",
                    borderColor: "var(--borderColor)",
                    marginTop: "0.8rem",
                    backgroundColor: "var(--background3)",
                  }}
                  placeholder="SHERRY OAK"
                  type="text"
                  className="form-control"
                  id="exampleInputtext1"
                />
              </div>
              <div className="form-group">
                <label
                  style={{
                    color: "white",
                    marginTop: "3%",
                    marginBottom: "1%",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="exampleInputtext1"
                >
                  BOTTLING DATE{" "}
                </label>{" "}
                <input
                  placeholder="JANUARY 2020"
                  style={{
                    borderWidth: "0.2rem",
                    color: "var(--background2)",
                    borderColor: "var(--borderColor)",
                    backgroundColor: "var(--background3)",
                  }}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <div className="form-group">
                <label
                  style={{
                    color: "white",
                    marginTop: "3%",
                    marginBottom: "1%",
                    fontSize: "0.8rem",
                  }}
                  htmlFor="exampleInputtext1"
                >
                  ADDITIONAL DETAILS{" "}
                </label>{" "}
                <textarea
                  placeholder="LIMITED EDITION, 1 OF 500"
                  style={{
                    borderWidth: "0.2rem",
                    color: "var(--background2)",
                    borderColor: "var(--borderColor)",
                    backgroundColor: "var(--background3)",
                  }}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                  defaultValue={""}
                />
              </div>
              <button
                style={{
                  color: "black",
                  width: "100%",
                  borderRadius: "1%",
                  background: "var(--background2)",
                  marginTop: "5%",
                  border: "none",
                }}
                type="submit"
                className="btn btn-primary"
              >
                SUBMIT{" "}
              </button>
            </form>
          </div>
          <div
            style={{
              background: "var(--background)",
              borderStyle: "solid",
              borderColor: "var(--borderColor)",
              padding:"5%",
              marginBottom:"30%"
            }}
          >
            <h3 style={{color:"white",fontWeight:"400",fontSize:"1.5rem"}}>Results</h3>
            <h4  style={{color:"var(--background2)",fontFamily:"fright",marginBottom:"4%"}}>Glenfiddich 40-Year-Old</h4> 
            <div style={{display:"grid" ,gridTemplateColumns:"50% 50%",gap:"1%",fontSize:"0.9rem"}}>
                <p style={{color:"var(--background2)"}}>DISTILLERY</p>
                <p style={{color:"white", textAlign:"end"}}>GLENFIDDICH</p>
            </div>
            <div style={{display:"grid" ,gridTemplateColumns:"50% 50%",gap:"1%",fontSize:"0.9rem"}}>
                <p style={{color:"var(--background2)"}}>AGE</p>
                <p style={{color:"white", textAlign:"end"}}>40</p>
            </div>
            <div style={{display:"grid" ,gridTemplateColumns:"50% 50%",gap:"1%",fontSize:"0.9rem"}}>
                <p style={{color:"var(--background2)"}}>CASK TYPE</p>
                <p style={{color:"white", textAlign:"end"}}>Bourbon Oak</p>
            </div>
            <div style={{display:"grid" ,gridTemplateColumns:"50% 50%",gap:"1%",fontSize:"0.9rem"}}>
                <p style={{color:"var(--background2)"}}>BOTTLING DATE</p>
                <p style={{color:"white", textAlign:"end"}}>JUNE 1990</p>
            </div>
            <div style={{display:"grid" ,gridTemplateColumns:"50% 50%",gap:"1%",fontSize:"0.9rem"}}>
                <p style={{color:"var(--background2)"}}>ADDITIONAL DETAILS</p>
                <p style={{color:"white", textAlign:"end"}}>RARE RELEASE, 1 OF 100</p>
            </div>
            <hr style={{color:"white" ,marginTop:"3%",marginBottom:"3%"}}></hr>
            <p style={{color:"white",fontSize:"0.9rem"}}>ESTIMATED VALUE</p>
            <h3  style={{color:"var(--background2)"}}>$12,000</h3>
            <p style={{color:"white",fontSize:"0.9rem"}}>VALUATION BREAKDOWN</p>
            <ul style={{color:"var(--background2)",fontSize:"0.8rem"}}>
                <li>Comparable Sales: $4,800 - $5,200</li>
                <li>Rarity Factor: +5% (Limited Edition)</li>
                <li>Market Trend: +2% (Increased demand for Macallan)</li>
            </ul>

          </div>
        </div>
        <h2 style={{color:"var(--background2)",paddingBottom:"5%",paddingLeft:"15%",paddingRight:"15%",fontFamily:"fright",textAlign:"center"}}>Explore the potential worth of your whiskey collection with our valuation tool and make informed decisions about your investments.</h2>

      </div>
    </div>
  );
};

export default Login;
