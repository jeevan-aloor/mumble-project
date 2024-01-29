import React from 'react'
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import "./homejavasc";

const homeFilter = () => {
  return (
    <div style={{ display: "flex",justifyContent:"space-between" }}>
    <div>
      <label
        htmlFor="customRange1"
        style={{ color: "var(--borderColor)" }}
        className="form-label"
      >
        PRICE
      </label>
      <div
        style={{
          borderColor: "var(--borderColor)",
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
            Highest price &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </Button>

          <Dropdown.Toggle
            split
            style={{
              borderRadius: "0rem",
              height: "2rem",
              backgroundColor: "var(--background)",
              borderColor: "var(--borderColor)",
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
        style={{ color: "var(--borderColor)" }}
        className="form-label"
      >
        LIKES
      </label>
      <div
        style={{
          borderColor: "var(--borderColor)",
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
            Most liked &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </Button>

          <Dropdown.Toggle
            split
            style={{
              borderRadius: "0rem",
              height: "2rem",
              backgroundColor: "var(--background)",
              borderColor: "var(--borderColor)",
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
        style={{ color: "var(--borderColor)" }}
        className="form-label"
      >
        CREATER
      </label>
      <div
        style={{
          borderColor: "var(--borderColor)",
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
            VERIFIED ONLY &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          </Button>

          <Dropdown.Toggle
            split
            style={{
              borderRadius: "0rem",
              height: "2rem",
              backgroundColor: "var(--background)",
              borderColor: "var(--borderColor)",
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
    </div>
    <div style={{ flexBasis: "18%" }}>
      <label
        htmlFor="customRange1"
        style={{ color: "var(--borderColor)" }}
        className="form-label"
      >
        PRICE RANGE
      </label>
      <br></br>
      <div className="slidecontainer">
        <input
        style={{width:"90%"}}
          type="range"
          className="slider"
          min={1}
          max={100}
          defaultValue={50}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <p>0.01 ETH</p>
          <p>10 ETH</p>
        </div>
      </div>{" "}
    </div>{" "}
  </div>  )
}

export default homeFilter