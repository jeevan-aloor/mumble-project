import React from "react";
 import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import PersonalCard from "../components/personalCard"
function Home() {
  return (
    <div >
      <div
        style={{
          paddingRight: "5rem",
          paddingLeft: "5rem",
          paddingTop: "5%",
          background: "var(--background)",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "var(--background)",
            padding: "5%",
            paddingBottom: "4%",
          }}
        >
          <p
            style={{ color: "white", textAlign: "center", fontSize: "0.8rem" }}
          >
            CREATE ACCOUNT
          </p>
          <h1
            style={{
              color: "var(--background2)",
              textAlign: "center",
              fontWeight: "200",
              fontFamily: "Fright",
            }}
          >
            Exclusive Whiskey Recommendations Tailored for You
          </h1>
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "2%",
              marginBottom: "5%",
            }}
          >
            Discover new whiskey gems handpicked by our AI system based on your
            taste preferences and purchase history.
          </p>
        </div>
        <h1
          style={{
            color: "var(--background2)",
            fontWeight: "200",
            fontFamily: "Fright",
            marginBottom: "3%",
          }}
        >
          Your Preferences
        </h1>
        {/* filter */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <label
              htmlFor="customRange1"
              style={{ color: "white" }}
              className="form-label"
            >
              FAVORITE BRANDS
            </label>
            <div
              style={{
                borderColor: "var(--background2)",
                borderWidth: "0.1rem",
                borderStyle: "solid",
                padding: "0.3rem",
              }}
            >
              <Dropdown as={ButtonGroup}>
                <Button
                  style={{
                    backgroundColor: "var(--background)",
                    border: "none",
                    fontSize: "0.8rem",
                  }}
                >
                  MACALLAN &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </Button>

                <Dropdown.Toggle
                  split
                  style={{
                    borderRadius: "0rem",
                    height: "2rem",
                    backgroundColor: "var(--background)",
                    border: "none",
                  }}
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="customRange1"
              style={{ color: "white" }}
              className="form-label"
            >
              PREFERRED FLAVORS
            </label>
            <div
              style={{
                borderColor: "var(--background2)",
                borderWidth: "0.1rem",
                borderStyle: "solid",
                padding: "0.3rem",
              }}
            >
              <Dropdown as={ButtonGroup}>
                <Button
                  style={{
                    backgroundColor: "var(--background)",
                    border: "none",
                    fontSize: "0.8rem",
                  }}
                >
                 SHERRY OAK &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </Button>

                <Dropdown.Toggle
                  split
                  style={{
                    borderRadius: "0rem",
                    height: "2rem",
                    backgroundColor: "var(--background)",
                    border: "none",
                  }}
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>{" "}
          <div>
            <label
              htmlFor="customRange1"
              style={{ color: "white" }}
              className="form-label"
            >
              WHISKEY TYPES
            </label>
            <div
              style={{
                borderColor: "var(--background2)",
                borderWidth: "0.1rem",
                borderStyle: "solid",
                padding: "0.3rem",
              }}
            >
              <Dropdown as={ButtonGroup}>
                <Button
                  style={{
                    backgroundColor: "var(--background)",
                    border: "none",
                    fontSize: "0.8rem",
                  }}
                >
                  SINGLE MALT &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                </Button>

                <Dropdown.Toggle
                  split
                  style={{
                    borderRadius: "0rem",
                    height: "2rem",
                    backgroundColor: "var(--background)",
                    border: "none",
                  }}
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>{" "}
        </div>
        <h1
          style={{
            marginTop: "5%",
            color: "var(--background2)",
            fontWeight: "200",
            fontFamily: "Fright",
          }}
        >
          AI Recommendations
        </h1>
        <p style={{ color: "white" }}>
          Curated Whiskey Selections Powered by AI
        </p>
        {/* cards */}
        <div
          style={{
            marginTop: "3%",
            paddingBottom: "10%",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% ",
            gap: "12.5%",
            gridRowGap: "5%",
            height:"100%"
          }}
        >
          <PersonalCard/>
          <PersonalCard/>
          <PersonalCard/>
          <PersonalCard/>
          <PersonalCard/>
          <PersonalCard/>
        </div>
      </div>
    </div>
  );
}

export default Home;
