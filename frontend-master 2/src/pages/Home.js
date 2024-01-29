import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import HomeFilter from "../components/homeFilter";
import HomeCard from "../components/HomeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
function Home() {
  const images = [
    {
      original: "/images/productimg.png",
      thumbnail: "/images/productimg.png",
    },
    {
      original: "/images/about.png",
      thumbnail: "/images/about.png",
    },
    {
      original: "/images/valuation.png",
      thumbnail: "/images/valuation.png",
    },
  ];
  const images2 = [
    {
      original: "/images/about.png",
      thumbnail: "/images/about.png",
    },
    {
      original: "/images/productimg.png",
      thumbnail: "/images/productimg.png",
    },
    {
      original: "/images/valuation.png",
      thumbnail: "/images/valuation.png",
    },
  ];
  const images3 = [
    {
      original: "/images/valuation.png",
      thumbnail: "/images/valuation.png",
    },
    {
      original: "/images/productimg.png",
      thumbnail: "/images/productimg.png",
    },
    {
      original: "/images/about.png",
      thumbnail: "/images/about.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.0909 7.76521C14.4968 7.3906 15.1294 7.4159 15.504 7.82172L18.7348 11.3217C19.0884 11.7047 19.0884 12.2952 18.7348 12.6782L15.504 16.1783C15.1294 16.5841 14.4968 16.6094 14.091 16.2348C13.6851 15.8602 13.6598 15.2276 14.0344 14.8217L15.716 13L6 13C5.44771 13 5 12.5523 5 12C5 11.4477 5.44771 11 6 11L15.716 11L14.0344 9.17829C13.6598 8.77247 13.6851 8.13981 14.0909 7.76521Z"
          fill="#D2A163"
        />
      </svg>
    ),
    prevArrow: (
      <svg
        width="14"
        height="10"
        viewBox="0 0 14 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.90906 0.765207C4.50324 0.390601 3.87058 0.415904 3.49597 0.821722L0.265201 4.32168C-0.0883963 4.70474 -0.0884 5.29518 0.265194 5.67824L3.49597 9.17828C3.87057 9.58411 4.50323 9.60941 4.90905 9.23481C5.31487 8.86021 5.34018 8.22755 4.96558 7.82173L3.28397 5.99997L13 5.99997C13.5523 5.99997 14 5.55225 14 4.99997C14 4.44768 13.5523 3.99997 13 3.99997L3.284 3.99997L4.96557 2.17829C5.34018 1.77247 5.31487 1.13981 4.90906 0.765207Z"
          fill="#D2A163"
        />
      </svg>
    ),
  };
  return (
    <div>
      <div
        style={{
          paddingTop: "5%",
          background: "var(--background)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "var(--background2)" }}>
            Create, explore, & collect digital art NFTs.
          </p>
          <h1 style={{ color: "white", fontFamily: "fright" }}>
            Discover, Invest, and Savor the World <br></br> of Rare Whiskey NFTs
          </h1>
          <Button
            style={{
              color: "white",
              fontSize: "0.7rem",
              backgroundColor: "var(--background)",
              height: "2.5rem",
              marginTop: "1rem",
              marginRight: "1rem",
              borderColor: "var(--background2)",
              borderRadius: "0%",
              paddingLeft: "5%",
              paddingRight: "5%",
              borderWidth: "0.1rem",
              width: "20%",
            }}
          >
            START YOUR SEARCH
          </Button>{" "}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "46% 40%",
            padding: "5%",
            gap: "10%",
            paddingTop: "10%",
          }}
        >
          <img
            style={{ width: "90%", marginLeft: "10%" }}
            src="/images/productimg.png"
          />
          <div>
            <h3 style={{ color: "white", fontFamily: "fright" }}>
              Rare whiskey <br></br> Bottle
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "40% 40%",
                gap: "10%",
                marginTop: "5%",
              }}
            >
              <div style={{ display: "flex" }}>
                <img width={40} height={40} src="/images/profile.png" />
                <div>
                  <p
                    style={{
                      color: "var(--background2)",
                      fontSize: "0.7rem",
                      marginLeft: "10%",
                      marginBottom: "0%",
                    }}
                  >
                    Creator
                  </p>
                  <p
                    style={{ color: "white", marginLeft: "10%", width: "100%" }}
                  >
                    Enrico Cole
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <svg
                  width="41"
                  height="40"
                  viewBox="0 0 41 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.5" width="40" height="40" rx="20" fill="#5F4529" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.5 12C18.5478 12 16.7482 12.161 15.3037 12.3518C14.0037 12.5235 13.0235 13.5037 12.8518 14.8037C12.661 16.2482 12.5 18.0478 12.5 20C12.5 21.9522 12.661 23.7518 12.8518 25.1963C13.0235 26.4963 14.0037 27.4765 15.3037 27.6482C16.7482 27.839 18.5478 28 20.5 28C22.4522 28 24.2518 27.839 25.6963 27.6482C26.9963 27.4765 27.9765 26.4963 28.1482 25.1963C28.339 23.7518 28.5 21.9522 28.5 20C28.5 18.0478 28.339 16.2482 28.1482 14.8037C27.9765 13.5037 26.9963 12.5235 25.6963 12.3518C24.2518 12.161 22.4522 12 20.5 12ZM15.0418 10.369C12.845 10.6591 11.1591 12.345 10.869 14.5418C10.6695 16.0521 10.5 17.9413 10.5 20C10.5 22.0587 10.6695 23.9479 10.869 25.4582C11.1591 27.655 12.845 29.3409 15.0418 29.631C16.5521 29.8305 18.4413 30 20.5 30C22.5587 30 24.4479 29.8305 25.9582 29.631C28.155 29.3409 29.8409 27.655 30.131 25.4582C30.3305 23.9479 30.5 22.0587 30.5 20C30.5 17.9413 30.3305 16.0521 30.131 14.5418C29.8409 12.345 28.155 10.6591 25.9582 10.369C24.4479 10.1695 22.5587 10 20.5 10C18.4413 10 16.5521 10.1695 15.0418 10.369Z"
                    fill="#FCFCFD"
                  />
                </svg>
                <div>
                  <p
                    style={{
                      color: "var(--background2)",
                      fontSize: "0.7rem",
                      marginLeft: "10%",
                      marginBottom: "0%",
                    }}
                  >
                    Instant price
                  </p>
                  <p
                    style={{ color: "white", marginLeft: "10%", width: "100%" }}
                  >
                    4.689 ETH
                  </p>
                </div>
              </div>
            </div>
            <div
              style={{
                background: "var(--background3)",
                padding: "5%",
                textAlign: "center",
                paddingTop: "5%",
              }}
            >
              <h4 style={{ color: "white", fontWeight: "400" }}>CURRENT</h4>
              <h3 style={{ fontFamily: "fright", color: "white" }}>
                1.00 <span>ETH</span>
              </h3>
              <h4 style={{ color: "var(--background2)" }}>$3,618.36</h4>
              <h5 style={{ color: "white" }}>AUCTION ENDING IN</h5>
              <div
                style={{
                  fontFamily: "fright",
                  display: "grid",
                  gridTemplateColumns: "23% 23% 23%",
                  gap: "5%",
                  marginTop: "5%",
                  paddingLeft: "20%",
                }}
              >
                <div>
                  <h4 style={{ color: "white" }}>19</h4>
                  <h4 style={{ color: "var(--background2)" }}>HRS</h4>
                </div>
                <div>
                  <h4 style={{ color: "white" }}>24</h4>
                  <h4 style={{ color: "var(--background2)" }}>MINS</h4>
                </div>
                <div>
                  <h4 style={{ color: "white" }}>19</h4>
                  <h4 style={{ color: "var(--background2)" }}>SECS</h4>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", width: "100%" }}>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  borderColor: "var(--background)",
                  borderRadius: "0%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  borderWidth: "0.1rem",
                  width: "100%",
                }}
              >
                PLACE A BID
              </Button>{" "}
              <Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  borderColor: "var(--borderColor)",
                  borderRadius: "0%",
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  borderWidth: "0.1rem",
                  width: "100%",
                }}
              >
                VIEW BOTTLE
              </Button>{" "}
            </div>
            <div style={{ marginTop: "10%" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.90906 7.26521C9.50324 6.8906 8.87058 6.9159 8.49597 7.32172L5.2652 10.8217C4.9116 11.2047 4.9116 11.7952 5.26519 12.1782L8.49597 15.6783C8.87057 16.0841 9.50323 16.1094 9.90905 15.7348C10.3149 15.3602 10.3402 14.7276 9.96558 14.3217L8.28397 12.5L18 12.5C18.5523 12.5 19 12.0523 19 11.5C19 10.9477 18.5523 10.5 18 10.5L8.284 10.5L9.96557 8.67829C10.3402 8.27247 10.3149 7.63981 9.90906 7.26521Z"
                  fill="#D2A163"
                />
              </svg>
              <svg
                style={{ marginLeft: "5%" }}
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.0909 15.2652C22.4968 14.8906 23.1294 14.9159 23.504 15.3217L26.7348 18.8217C27.0884 19.2047 27.0884 19.7952 26.7348 20.1782L23.504 23.6783C23.1294 24.0841 22.4968 24.1094 22.091 23.7348C21.6851 23.3602 21.6598 22.7276 22.0344 22.3217L23.716 20.5L14 20.5C13.4477 20.5 13 20.0523 13 19.5C13 18.9477 13.4477 18.5 14 18.5L23.716 18.5L22.0344 16.6783C21.6598 16.2725 21.6851 15.6398 22.0909 15.2652Z"
                  fill="#D2A163"
                />
                <rect
                  x="1"
                  y="1"
                  width="38"
                  height="38"
                  rx="19"
                  stroke="#46392E"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div
          style={{
            display: "grid",
            gap: "5%",
            gridTemplateColumns: "35% 55%",
            paddingBottom: "10%",
            paddingTop: "5%",
            padding: "5%",
          }}
        >
          <div>
            <img
              style={{ width: "100%" }}
              width={230}
              src="/images/productimg.png"
            />

            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5%",
                }}
              >
                <img width={40} height={40} src="/images/profile.png" />
                <h4
                  style={{
                    color: "white",
                    marginLeft: "5%",
                    width: "100%",
                    fontSize: "1rem",
                  }}
                >
                  Rare Whisky Bottle <br></br>
                  <span style={{ fontSize: "0.7rem" }}>18 IN STOCK </span>{" "}
                </h4>

                <p style={{ color: "var(--background2)", width: "40%" }}>
                  Highest bid <br></br>{" "}
                  <span
                    style={{
                      borderWidth: "0.1rem",
                      borderStyle: "solid",
                      borderColor: "var(--background2)",
                      color: "var(--background2)",
                      textAlign: "center",
                      fontSize: "0.8rem",
                    }}
                  >
                    1.125 ETH
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "70% 50%" }}>
              <div
                style={{
                  borderWidth: "0.1rem",
                  borderRightColor: "var(--borderColor)",
                  borderStyle: "solid",
                  borderTop: "none",
                  borderLeft: "none",
                  borderBottom: "none",
                }}
              >
                <div style={{ marginTop: "5%" }}>
                  <div style={{ display: "flex" }}>
                    <img height={136} width={130} src="/images/home1.png" />
                    <div style={{ marginLeft: "3%", width: "100%" }}>
                      <h5 style={{ color: "white", marginBottom: "3%" }}>
                        Rare whiskey <br></br> Bottle
                      </h5>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "10% 30% 30%",
                          gap: "5%",
                        }}
                      >
                        <img height={30} width={30} src="/images/profile.png" />
                        <span
                          style={{
                            borderWidth: "0.1rem",
                            borderStyle: "solid",
                            marginTop: "5%",
                            borderColor: "var(--background2)",
                            color: "var(--background2)",
                            textAlign: "center",
                            fontSize: "0.6rem",
                            width: "100%",
                            height: "1.3rem",
                            padding: "1%",
                          }}
                        >
                          1.125 ETH
                        </span>
                        <p
                          style={{
                            marginTop: "5%",
                            color: "var(--background2)",
                            fontSize: "0.6rem",
                          }}
                        >
                          1 OF 12
                        </p>
                      </div>
                      <Button
                        style={{
                          color: "white",
                          fontSize: "0.7rem",
                          backgroundColor: "var(--background)",
                          marginTop: "0.5rem",
                          marginBottom: "5%",
                          marginRight: "1rem",
                          borderColor: "var(--background2)",
                          borderRadius: "0%",
                          paddingLeft: "5%",
                          paddingRight: "5%",
                          borderWidth: "0.2rem",
                          width: "40%",
                        }}
                      >
                        PLACE A BID{" "}
                      </Button>{" "}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <div style={{ display: "flex" }}>
                    <img height={136} width={130} src="/images/home1.png" />
                    <div style={{ marginLeft: "3%", width: "100%" }}>
                      <h5 style={{ color: "white", marginBottom: "3%" }}>
                        Rare whiskey <br></br> Bottle
                      </h5>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "10% 30% 30%",
                          gap: "5%",
                        }}
                      >
                        <img height={30} width={30} src="/images/profile.png" />
                        <span
                          style={{
                            borderWidth: "0.1rem",
                            borderStyle: "solid",
                            marginTop: "5%",
                            borderColor: "var(--background2)",
                            color: "var(--background2)",
                            textAlign: "center",
                            fontSize: "0.6rem",
                            width: "100%",
                            height: "1.3rem",
                            padding: "1%",
                          }}
                        >
                          1.125 ETH
                        </span>
                        <p
                          style={{
                            marginTop: "5%",
                            color: "var(--background2)",
                            fontSize: "0.6rem",
                          }}
                        >
                          1 OF 12
                        </p>
                      </div>
                      <Button
                        style={{
                          color: "white",
                          fontSize: "0.7rem",
                          backgroundColor: "var(--background)",
                          marginTop: "0.5rem",
                          marginBottom: "5%",
                          marginRight: "1rem",
                          borderColor: "var(--background2)",
                          borderRadius: "0%",
                          paddingLeft: "5%",
                          paddingRight: "5%",
                          borderWidth: "0.2rem",
                          width: "40%",
                        }}
                      >
                        PLACE A BID{" "}
                      </Button>{" "}
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <div style={{ display: "flex" }}>
                    <img height={136} width={130} src="/images/home1.png" />
                    <div style={{ marginLeft: "3%", width: "100%" }}>
                      <h5 style={{ color: "white", marginBottom: "3%" }}>
                        Rare whiskey <br></br> Bottle
                      </h5>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "10% 30% 30%",
                          gap: "5%",
                        }}
                      >
                        <img height={30} width={30} src="/images/profile.png" />
                        <span
                          style={{
                            borderWidth: "0.1rem",
                            borderStyle: "solid",
                            marginTop: "5%",
                            borderColor: "var(--background2)",
                            color: "var(--background2)",
                            textAlign: "center",
                            fontSize: "0.6rem",
                            width: "100%",
                            height: "1.3rem",
                            padding: "1%",
                          }}
                        >
                          1.125 ETH
                        </span>
                        <p
                          style={{
                            marginTop: "5%",
                            color: "var(--background2)",
                            fontSize: "0.6rem",
                          }}
                        >
                          1 OF 12
                        </p>
                      </div>
                      <Button
                        style={{
                          color: "white",
                          fontSize: "0.7rem",
                          backgroundColor: "var(--background)",
                          marginTop: "0.5rem",
                          marginBottom: "5%",
                          marginRight: "1rem",
                          borderColor: "var(--background2)",
                          borderRadius: "0%",
                          paddingLeft: "5%",
                          paddingRight: "5%",
                          borderWidth: "0.2rem",
                          width: "40%",
                        }}
                      >
                        PLACE A BID{" "}
                      </Button>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/*  */}
              <div>
                <p
                  style={{
                    color: "var(--background2)",
                    marginLeft: "15%",
                    fontSize: "0.7rem",
                  }}
                >
                  Latest upload from creators 🔥
                </p>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "12%",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="52"
                    height="62"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#E9B781"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#FCFCFD"
                    />
                    <path
                      d="M11.81 17.18C11.25 17.18 10.746 17.048 10.298 16.784C9.85 16.516 9.494 16.15 9.23 15.686C8.97 15.222 8.84 14.694 8.84 14.102V11.348C8.84 10.72 8.97 10.168 9.23 9.692C9.494 9.216 9.858 8.846 10.322 8.582C10.79 8.318 11.328 8.186 11.936 8.186C12.392 8.186 12.82 8.272 13.22 8.444C13.62 8.616 13.966 8.872 14.258 9.212L13.34 10.07C13.176 9.858 12.97 9.69 12.722 9.566C12.478 9.438 12.216 9.374 11.936 9.374C11.576 9.374 11.26 9.46 10.988 9.632C10.716 9.8 10.502 10.022 10.346 10.298C10.194 10.574 10.118 10.87 10.118 11.186V12.77L9.872 12.494C10.12 12.17 10.428 11.914 10.796 11.726C11.164 11.538 11.558 11.444 11.978 11.444C12.514 11.444 12.992 11.57 13.412 11.822C13.836 12.07 14.168 12.408 14.408 12.836C14.652 13.264 14.774 13.746 14.774 14.282C14.774 14.822 14.638 15.312 14.366 15.752C14.098 16.188 13.738 16.536 13.286 16.796C12.838 17.052 12.346 17.18 11.81 17.18ZM11.81 15.974C12.122 15.974 12.406 15.898 12.662 15.746C12.918 15.594 13.122 15.39 13.274 15.134C13.426 14.878 13.502 14.594 13.502 14.282C13.502 13.97 13.426 13.686 13.274 13.43C13.126 13.174 12.924 12.97 12.668 12.818C12.412 12.666 12.128 12.59 11.816 12.59C11.504 12.59 11.218 12.666 10.958 12.818C10.702 12.97 10.498 13.174 10.346 13.43C10.194 13.686 10.118 13.97 10.118 14.282C10.118 14.59 10.194 14.872 10.346 15.128C10.498 15.384 10.702 15.59 10.958 15.746C11.214 15.898 11.498 15.974 11.81 15.974Z"
                      fill="#100804"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      stroke="#211715"
                      stroke-width="2"
                    />
                  </svg>
                  <div style={{ marginLeft: "5%" }}>
                    <h6 style={{ color: "white", marginTop: "5%" }}>
                      PAYTON HARRIS{" "}
                    </h6>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
                <hr
                  style={{ color: "white", width: "80%", marginLeft: "10%" }}
                ></hr>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "12%",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#E6E8EC"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#FCFCFD"
                    />
                    <path
                      d="M8.6 16.994L8.606 15.878L12.368 12.506C12.672 12.238 12.878 11.982 12.986 11.738C13.098 11.494 13.154 11.25 13.154 11.006C13.154 10.698 13.086 10.422 12.95 10.178C12.814 9.93 12.626 9.734 12.386 9.59C12.146 9.446 11.87 9.374 11.558 9.374C11.238 9.374 10.952 9.45 10.7 9.602C10.452 9.75 10.258 9.948 10.118 10.196C9.978 10.444 9.91 10.712 9.914 11H8.63C8.63 10.44 8.756 9.95 9.008 9.53C9.264 9.106 9.614 8.776 10.058 8.54C10.502 8.3 11.01 8.18 11.582 8.18C12.126 8.18 12.614 8.304 13.046 8.552C13.478 8.796 13.818 9.132 14.066 9.56C14.318 9.988 14.444 10.476 14.444 11.024C14.444 11.42 14.392 11.756 14.288 12.032C14.184 12.308 14.028 12.564 13.82 12.8C13.612 13.036 13.352 13.292 13.04 13.568L10.136 16.16L9.998 15.8H14.444V16.994H8.6Z"
                      fill="#100804"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      stroke="#211715"
                      stroke-width="2"
                    />
                  </svg>

                  <div style={{ marginLeft: "5%" }}>
                    <h6 style={{ color: "white", marginTop: "5%" }}>
                      PAYTON HARRIS{" "}
                    </h6>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
                <hr
                  style={{ color: "white", width: "80%", marginLeft: "10%" }}
                ></hr>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "12%",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#A17545"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#FCFCFD"
                    />
                    <path
                      d="M11.258 17.162C10.83 17.162 10.428 17.082 10.052 16.922C9.676 16.758 9.35 16.526 9.074 16.226C8.802 15.926 8.604 15.572 8.48 15.164L9.692 14.828C9.808 15.2 10.01 15.486 10.298 15.686C10.586 15.882 10.906 15.978 11.258 15.974C11.574 15.97 11.852 15.896 12.092 15.752C12.332 15.608 12.52 15.414 12.656 15.17C12.792 14.922 12.86 14.638 12.86 14.318C12.86 13.838 12.71 13.442 12.41 13.13C12.114 12.818 11.726 12.662 11.246 12.662C11.11 12.662 10.97 12.682 10.826 12.722C10.686 12.762 10.554 12.814 10.43 12.878L9.842 11.888L12.89 9.194L13.022 9.554H8.822V8.36H14.018V9.554L11.486 11.99L11.474 11.582C12.018 11.582 12.49 11.704 12.89 11.948C13.29 12.188 13.598 12.516 13.814 12.932C14.034 13.344 14.144 13.806 14.144 14.318C14.144 14.87 14.014 15.36 13.754 15.788C13.498 16.216 13.152 16.552 12.716 16.796C12.284 17.04 11.798 17.162 11.258 17.162Z"
                      fill="#100804"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      stroke="#211715"
                      stroke-width="2"
                    />
                  </svg>

                  <div style={{ marginLeft: "5%" }}>
                    <h6 style={{ color: "white", marginTop: "5%" }}>
                      PAYTON HARRIS{" "}
                    </h6>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
                <hr
                  style={{ color: "white", width: "80%", marginLeft: "10%" }}
                ></hr>
                <div
                  style={{
                    display: "flex",
                    marginLeft: "12%",
                    alignItems: "center",
                  }}
                >
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="4"
                      y="4"
                      width="48"
                      height="48"
                      rx="24"
                      fill="#FFD166"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      fill="#FCFCFD"
                    />
                    <path
                      d="M12.5 17V15.494H8.6V14.306L11.408 8.36H12.842L10.034 14.306H12.5V11.966H13.772V14.306H14.63V15.494H13.772V17H12.5Z"
                      fill="#100804"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="22"
                      height="22"
                      rx="11"
                      stroke="#211715"
                      stroke-width="2"
                    />
                  </svg>

                  <div style={{ marginLeft: "5%" }}>
                    <h6 style={{ color: "white", marginTop: "5%" }}>
                      PAYTON HARRIS{" "}
                    </h6>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
                <hr
                  style={{ color: "white", width: "80%", marginLeft: "10%" }}
                ></hr>
              </div>
            </div>
          </div>
        </div>
        {/* section 3  carousel  */}

        <div style={{ background: "black", padding: "5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 style={{ color: "var(--background2)", marginLeft: "5%" }}>
              Popular <br></br>
              <span
                style={{
                  color: "white",
                  fontSize: "2rem",
                  fontFamily: "fright",
                }}
              >
                Sellers{" "}
              </span>
            </h4>
            <div
              style={{
                borderColor: "var(--borderColor)",
                borderWidth: "0.1rem",
                borderStyle: "solid",
                height: "2.4rem",
                backgroundColor: "var(--background)",
                width: "15%",
                marginRight: "6%",
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
                  TODAY
                </Button>
                &nbsp; &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
          <Slider style={{ padding: "2%", height: "50vh" }} {...settings}>
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="slick-custom">
              <div style={{ padding: "5%" }}>
                <svg
                  width="53"
                  style={{ marginRight: "5%" }}
                  height="24"
                  viewBox="0 0 53 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="53" height="24" rx="12" fill="#CF9658" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6673 7.33333H13.334C12.9658 7.33333 12.6673 7.63181 12.6673 8V10.6667C12.6673 12.5076 14.1597 14 16.0007 14C17.8416 14 19.334 12.5076 19.334 10.6667V8C19.334 7.63181 19.0355 7.33333 18.6673 7.33333ZM13.334 6C12.2294 6 11.334 6.89543 11.334 8V10.6667C11.334 13.244 13.4233 15.3333 16.0007 15.3333C18.578 15.3333 20.6673 13.244 20.6673 10.6667V8C20.6673 6.89543 19.7719 6 18.6673 6H13.334Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.66602 9.3335C8.66602 8.22893 9.56145 7.3335 10.666 7.3335H12.666V12.6668H11.3327C9.85992 12.6668 8.66602 11.4729 8.66602 10.0002V9.3335ZM10.666 8.66683H11.3327V11.3335C10.5963 11.3335 9.99935 10.7365 9.99935 10.0002V9.3335C9.99935 8.96531 10.2978 8.66683 10.666 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M23.3327 9.3335C23.3327 8.22893 22.4373 7.3335 21.3327 7.3335H19.3327V12.6668H20.666C22.1388 12.6668 23.3327 11.4729 23.3327 10.0002V9.3335ZM21.3327 8.66683H20.666V11.3335C21.4024 11.3335 21.9993 10.7365 21.9993 10.0002V9.3335C21.9993 8.96531 21.7009 8.66683 21.3327 8.66683Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M16.0007 14C15.6325 14 15.334 14.2985 15.334 14.6667V16.6667H14.0007C13.6325 16.6667 13.334 16.9651 13.334 17.3333C13.334 17.7015 13.6325 18 14.0007 18H18.0007C18.3688 18 18.6673 17.7015 18.6673 17.3333C18.6673 16.9651 18.3688 16.6667 18.0007 16.6667H16.6673V14.6667C16.6673 14.2985 16.3688 14 16.0007 14Z"
                    fill="#FCFCFD"
                  />
                  <path
                    d="M30.334 16.994L30.982 14.564H28.72L29.038 13.37H31.306L31.72 11.792H29.458L29.782 10.61H32.038L32.644 8.36H33.874L33.268 10.61H34.918L35.524 8.36H36.754L36.148 10.61H38.41L38.098 11.792H35.83L35.404 13.37H37.666L37.354 14.564H35.086L34.438 16.994H33.214L33.856 14.564H32.206L31.558 16.994H30.334ZM32.53 13.37H34.174L34.6 11.792H32.95L32.53 13.37ZM41.4788 17V9.74L39.8528 10.73V9.332L41.4788 8.36H42.7568V17H41.4788Z"
                    fill="#FCFCFD"
                  />
                </svg>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 4C10.4482 4 8.64855 4.161 7.2041 4.35177C5.90411 4.52346 4.92385 5.50372 4.75217 6.80371C4.5614 8.24816 4.40039 10.0478 4.40039 12C4.40039 13.9522 4.5614 15.7518 4.75217 17.1963C4.92385 18.4963 5.90411 19.4765 7.2041 19.6482C8.64855 19.839 10.4482 20 12.4004 20C14.3526 20 16.1522 19.839 17.5967 19.6482C18.8967 19.4765 19.8769 18.4963 20.0486 17.1963C20.2394 15.7518 20.4004 13.9522 20.4004 12C20.4004 10.0478 20.2394 8.24816 20.0486 6.80371C19.8769 5.50372 18.8967 4.52346 17.5967 4.35177C16.1522 4.16101 14.3526 4 12.4004 4ZM6.94223 2.36899C4.74543 2.65912 3.05952 4.34504 2.76938 6.54184C2.56992 8.05208 2.40039 9.94127 2.40039 12C2.40039 14.0587 2.56992 15.9479 2.76938 17.4582C3.05951 19.655 4.74543 21.3409 6.94223 21.631C8.45247 21.8305 10.3417 22 12.4004 22C14.4591 22 16.3483 21.8305 17.8586 21.631C20.0553 21.3409 21.7413 19.655 22.0314 17.4582C22.2309 15.9479 22.4004 14.0587 22.4004 12C22.4004 9.94127 22.2309 8.05208 22.0314 6.54184C21.7413 4.34504 20.0553 2.65912 17.8586 2.36899C16.3483 2.16953 14.4591 2 12.4004 2C10.3417 2 8.45247 2.16953 6.94223 2.36899Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.4004 17C12.9527 17 13.4004 16.5523 13.4004 16V13H16.4004C16.9527 13 17.4004 12.5523 17.4004 12C17.4004 11.4477 16.9527 11 16.4004 11H13.4004V8C13.4004 7.44772 12.9527 7 12.4004 7C11.8481 7 11.4004 7.44772 11.4004 8V11H8.40039C7.84811 11 7.40039 11.4477 7.40039 12C7.40039 12.5523 7.84811 13 8.40039 13H11.4004V16C11.4004 16.5523 11.8481 17 12.4004 17Z"
                    fill="#D2A163"
                  />
                </svg>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.3736 13.516C17.9254 13.494 18.3549 13.0287 18.3328 12.4769L18.1424 7.71753C18.1216 7.19663 17.7041 6.77913 17.1832 6.75829L12.4238 6.56789C11.872 6.54581 11.4067 6.97527 11.3846 7.52712C11.3626 8.07896 11.792 8.54421 12.3439 8.56629L14.8211 8.6654L7.95086 15.5357C7.56033 15.9262 7.56033 16.5594 7.95085 16.9499C8.34138 17.3404 8.97454 17.3404 9.36507 16.9499L16.2353 10.0796L16.3344 12.5568C16.3565 13.1086 16.8217 13.5381 17.3736 13.516Z"
                    fill="#D2A163"
                  />
                </svg>
                <hr style={{ color: "white" }}></hr>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <div>
                    <img
                      width={80}
                      style={{ marginLeft: "5%", marginBottom: "5%" }}
                      src="/images/profile.png"
                    />
                    <p style={{ color: "white" }}>Payton Harris</p>
                    <p style={{ color: "white" }}>
                      2.456{" "}
                      <span style={{ color: "var(--background2)" }}>ETH</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div style={{ padding: "5%" }}>
          <h1
            style={{ color: "white", marginBottom: "7%", fontFamily: "fright" }}
          >
            Recommendation
          </h1>

          <div
            style={{
              paddingBottom: "10%",
              display: "grid",
              gridTemplateColumns: "19% 19% 19% 19%",
              gap: "8%",
              gridRowGap: "10%",
            }}
          >
            <div>
              <img
                style={{ width: "100%" }}
                width={230}
                src="/images/productimg.png"
              />

              <div>
                <div className="cardText">
                  <div>
                    <h4 style={{ color: "white" }}>Ardbeg 25-Year - </h4>{" "}
                    <h4 style={{ color: "white" }}>Old Bourbon Oak</h4>
                  </div>
                  <svg
                    width="70"
                    height="23"
                    viewBox="0 0 90 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7048 17.18C12.0168 17.18 11.4108 17.04 10.8868 16.76C10.3668 16.48 9.95877 16.086 9.66277 15.578C9.37077 15.07 9.22477 14.474 9.22477 13.79V8.372L10.6888 8.36V13.754C10.6888 14.078 10.7428 14.368 10.8508 14.624C10.9628 14.88 11.1128 15.098 11.3008 15.278C11.4888 15.454 11.7048 15.588 11.9488 15.68C12.1928 15.772 12.4448 15.818 12.7048 15.818C12.9728 15.818 13.2268 15.772 13.4668 15.68C13.7108 15.584 13.9268 15.448 14.1148 15.272C14.3028 15.092 14.4508 14.874 14.5588 14.618C14.6668 14.362 14.7208 14.074 14.7208 13.754V8.36H16.1848V13.79C16.1848 14.474 16.0368 15.07 15.7408 15.578C15.4488 16.086 15.0408 16.48 14.5168 16.76C13.9968 17.04 13.3928 17.18 12.7048 17.18ZM17.8615 17V8.36H19.3255L23.3335 14.45V8.36H24.7975V17H23.3335L19.3255 10.91V17H17.8615ZM30.1288 17.18C29.2648 17.18 28.5248 16.992 27.9088 16.616C27.2928 16.236 26.8188 15.708 26.4868 15.032C26.1588 14.356 25.9948 13.572 25.9948 12.68C25.9948 11.788 26.1588 11.004 26.4868 10.328C26.8188 9.652 27.2928 9.126 27.9088 8.75C28.5248 8.37 29.2648 8.18 30.1288 8.18C31.1248 8.18 31.9548 8.43 32.6188 8.93C33.2828 9.426 33.7488 10.096 34.0168 10.94L32.5588 11.342C32.3908 10.778 32.1048 10.338 31.7008 10.022C31.2968 9.702 30.7728 9.542 30.1288 9.542C29.5488 9.542 29.0648 9.672 28.6768 9.932C28.2928 10.192 28.0028 10.558 27.8068 11.03C27.6148 11.498 27.5168 12.048 27.5128 12.68C27.5128 13.312 27.6088 13.864 27.8008 14.336C27.9968 14.804 28.2888 15.168 28.6768 15.428C29.0648 15.688 29.5488 15.818 30.1288 15.818C30.7728 15.818 31.2968 15.658 31.7008 15.338C32.1048 15.018 32.3908 14.578 32.5588 14.018L34.0168 14.42C33.7488 15.264 33.2828 15.936 32.6188 16.436C31.9548 16.932 31.1248 17.18 30.1288 17.18ZM38.9881 17.18C38.1241 17.18 37.3841 16.992 36.7681 16.616C36.1521 16.236 35.6781 15.708 35.3461 15.032C35.0181 14.356 34.8541 13.572 34.8541 12.68C34.8541 11.788 35.0181 11.004 35.3461 10.328C35.6781 9.652 36.1521 9.126 36.7681 8.75C37.3841 8.37 38.1241 8.18 38.9881 8.18C39.8521 8.18 40.5921 8.37 41.2081 8.75C41.8281 9.126 42.3021 9.652 42.6301 10.328C42.9621 11.004 43.1281 11.788 43.1281 12.68C43.1281 13.572 42.9621 14.356 42.6301 15.032C42.3021 15.708 41.8281 16.236 41.2081 16.616C40.5921 16.992 39.8521 17.18 38.9881 17.18ZM38.9881 15.818C39.5681 15.822 40.0501 15.694 40.4341 15.434C40.8221 15.174 41.1121 14.808 41.3041 14.336C41.5001 13.864 41.5981 13.312 41.5981 12.68C41.5981 12.048 41.5001 11.5 41.3041 11.036C41.1121 10.568 40.8221 10.204 40.4341 9.944C40.0501 9.684 39.5681 9.55 38.9881 9.542C38.4081 9.538 37.9261 9.666 37.5421 9.926C37.1581 10.186 36.8681 10.552 36.6721 11.024C36.4801 11.496 36.3841 12.048 36.3841 12.68C36.3841 13.312 36.4801 13.862 36.6721 14.33C36.8641 14.794 37.1521 15.156 37.5361 15.416C37.9241 15.676 38.4081 15.81 38.9881 15.818ZM44.3224 17V8.36H45.6244L48.6124 14.48L51.6004 8.36H52.9024V17H51.5524V11.462L48.9004 17H48.3244L45.6784 11.462V17H44.3224ZM54.588 17V8.36H55.89L58.878 14.48L61.866 8.36H63.168V17H61.818V11.462L59.166 17H58.59L55.944 11.462V17H54.588ZM68.5077 17.18C67.6437 17.18 66.9037 16.992 66.2877 16.616C65.6717 16.236 65.1977 15.708 64.8657 15.032C64.5377 14.356 64.3737 13.572 64.3737 12.68C64.3737 11.788 64.5377 11.004 64.8657 10.328C65.1977 9.652 65.6717 9.126 66.2877 8.75C66.9037 8.37 67.6437 8.18 68.5077 8.18C69.3717 8.18 70.1117 8.37 70.7277 8.75C71.3477 9.126 71.8217 9.652 72.1497 10.328C72.4817 11.004 72.6477 11.788 72.6477 12.68C72.6477 13.572 72.4817 14.356 72.1497 15.032C71.8217 15.708 71.3477 16.236 70.7277 16.616C70.1117 16.992 69.3717 17.18 68.5077 17.18ZM68.5077 15.818C69.0877 15.822 69.5697 15.694 69.9537 15.434C70.3417 15.174 70.6317 14.808 70.8237 14.336C71.0197 13.864 71.1177 13.312 71.1177 12.68C71.1177 12.048 71.0197 11.5 70.8237 11.036C70.6317 10.568 70.3417 10.204 69.9537 9.944C69.5697 9.684 69.0877 9.55 68.5077 9.542C67.9277 9.538 67.4457 9.666 67.0617 9.926C66.6777 10.186 66.3877 10.552 66.1917 11.024C65.9997 11.496 65.9037 12.048 65.9037 12.68C65.9037 13.312 65.9997 13.862 66.1917 14.33C66.3837 14.794 66.6717 15.156 67.0557 15.416C67.4437 15.676 67.9277 15.81 68.5077 15.818ZM73.842 17V8.36H75.306L79.314 14.45V8.36H80.778V17H79.314L75.306 10.91V17H73.842Z"
                      fill="#A17545"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="88"
                      height="21"
                      stroke="#A17545"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <h4 style={{ color: "var(--background2)" }}>$900</h4>
              <hr style={{ color: "white" }} />
              <div className="cardText2">
                <h4 style={{ color: "#CF9658" }}>Flavor Profile</h4>
                <h4 style={{ color: "white" }}>Peaty, Smoky, Floral</h4>
              </div>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                width={230}
                src="/images/productimg.png"
              />

              <div>
                <div className="cardText">
                  <div>
                    <h4 style={{ color: "white" }}>Ardbeg 25-Year - </h4>{" "}
                    <h4 style={{ color: "white" }}>Old Bourbon Oak</h4>
                  </div>
                  <svg
                    width="70"
                    height="23"
                    viewBox="0 0 90 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7048 17.18C12.0168 17.18 11.4108 17.04 10.8868 16.76C10.3668 16.48 9.95877 16.086 9.66277 15.578C9.37077 15.07 9.22477 14.474 9.22477 13.79V8.372L10.6888 8.36V13.754C10.6888 14.078 10.7428 14.368 10.8508 14.624C10.9628 14.88 11.1128 15.098 11.3008 15.278C11.4888 15.454 11.7048 15.588 11.9488 15.68C12.1928 15.772 12.4448 15.818 12.7048 15.818C12.9728 15.818 13.2268 15.772 13.4668 15.68C13.7108 15.584 13.9268 15.448 14.1148 15.272C14.3028 15.092 14.4508 14.874 14.5588 14.618C14.6668 14.362 14.7208 14.074 14.7208 13.754V8.36H16.1848V13.79C16.1848 14.474 16.0368 15.07 15.7408 15.578C15.4488 16.086 15.0408 16.48 14.5168 16.76C13.9968 17.04 13.3928 17.18 12.7048 17.18ZM17.8615 17V8.36H19.3255L23.3335 14.45V8.36H24.7975V17H23.3335L19.3255 10.91V17H17.8615ZM30.1288 17.18C29.2648 17.18 28.5248 16.992 27.9088 16.616C27.2928 16.236 26.8188 15.708 26.4868 15.032C26.1588 14.356 25.9948 13.572 25.9948 12.68C25.9948 11.788 26.1588 11.004 26.4868 10.328C26.8188 9.652 27.2928 9.126 27.9088 8.75C28.5248 8.37 29.2648 8.18 30.1288 8.18C31.1248 8.18 31.9548 8.43 32.6188 8.93C33.2828 9.426 33.7488 10.096 34.0168 10.94L32.5588 11.342C32.3908 10.778 32.1048 10.338 31.7008 10.022C31.2968 9.702 30.7728 9.542 30.1288 9.542C29.5488 9.542 29.0648 9.672 28.6768 9.932C28.2928 10.192 28.0028 10.558 27.8068 11.03C27.6148 11.498 27.5168 12.048 27.5128 12.68C27.5128 13.312 27.6088 13.864 27.8008 14.336C27.9968 14.804 28.2888 15.168 28.6768 15.428C29.0648 15.688 29.5488 15.818 30.1288 15.818C30.7728 15.818 31.2968 15.658 31.7008 15.338C32.1048 15.018 32.3908 14.578 32.5588 14.018L34.0168 14.42C33.7488 15.264 33.2828 15.936 32.6188 16.436C31.9548 16.932 31.1248 17.18 30.1288 17.18ZM38.9881 17.18C38.1241 17.18 37.3841 16.992 36.7681 16.616C36.1521 16.236 35.6781 15.708 35.3461 15.032C35.0181 14.356 34.8541 13.572 34.8541 12.68C34.8541 11.788 35.0181 11.004 35.3461 10.328C35.6781 9.652 36.1521 9.126 36.7681 8.75C37.3841 8.37 38.1241 8.18 38.9881 8.18C39.8521 8.18 40.5921 8.37 41.2081 8.75C41.8281 9.126 42.3021 9.652 42.6301 10.328C42.9621 11.004 43.1281 11.788 43.1281 12.68C43.1281 13.572 42.9621 14.356 42.6301 15.032C42.3021 15.708 41.8281 16.236 41.2081 16.616C40.5921 16.992 39.8521 17.18 38.9881 17.18ZM38.9881 15.818C39.5681 15.822 40.0501 15.694 40.4341 15.434C40.8221 15.174 41.1121 14.808 41.3041 14.336C41.5001 13.864 41.5981 13.312 41.5981 12.68C41.5981 12.048 41.5001 11.5 41.3041 11.036C41.1121 10.568 40.8221 10.204 40.4341 9.944C40.0501 9.684 39.5681 9.55 38.9881 9.542C38.4081 9.538 37.9261 9.666 37.5421 9.926C37.1581 10.186 36.8681 10.552 36.6721 11.024C36.4801 11.496 36.3841 12.048 36.3841 12.68C36.3841 13.312 36.4801 13.862 36.6721 14.33C36.8641 14.794 37.1521 15.156 37.5361 15.416C37.9241 15.676 38.4081 15.81 38.9881 15.818ZM44.3224 17V8.36H45.6244L48.6124 14.48L51.6004 8.36H52.9024V17H51.5524V11.462L48.9004 17H48.3244L45.6784 11.462V17H44.3224ZM54.588 17V8.36H55.89L58.878 14.48L61.866 8.36H63.168V17H61.818V11.462L59.166 17H58.59L55.944 11.462V17H54.588ZM68.5077 17.18C67.6437 17.18 66.9037 16.992 66.2877 16.616C65.6717 16.236 65.1977 15.708 64.8657 15.032C64.5377 14.356 64.3737 13.572 64.3737 12.68C64.3737 11.788 64.5377 11.004 64.8657 10.328C65.1977 9.652 65.6717 9.126 66.2877 8.75C66.9037 8.37 67.6437 8.18 68.5077 8.18C69.3717 8.18 70.1117 8.37 70.7277 8.75C71.3477 9.126 71.8217 9.652 72.1497 10.328C72.4817 11.004 72.6477 11.788 72.6477 12.68C72.6477 13.572 72.4817 14.356 72.1497 15.032C71.8217 15.708 71.3477 16.236 70.7277 16.616C70.1117 16.992 69.3717 17.18 68.5077 17.18ZM68.5077 15.818C69.0877 15.822 69.5697 15.694 69.9537 15.434C70.3417 15.174 70.6317 14.808 70.8237 14.336C71.0197 13.864 71.1177 13.312 71.1177 12.68C71.1177 12.048 71.0197 11.5 70.8237 11.036C70.6317 10.568 70.3417 10.204 69.9537 9.944C69.5697 9.684 69.0877 9.55 68.5077 9.542C67.9277 9.538 67.4457 9.666 67.0617 9.926C66.6777 10.186 66.3877 10.552 66.1917 11.024C65.9997 11.496 65.9037 12.048 65.9037 12.68C65.9037 13.312 65.9997 13.862 66.1917 14.33C66.3837 14.794 66.6717 15.156 67.0557 15.416C67.4437 15.676 67.9277 15.81 68.5077 15.818ZM73.842 17V8.36H75.306L79.314 14.45V8.36H80.778V17H79.314L75.306 10.91V17H73.842Z"
                      fill="#A17545"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="88"
                      height="21"
                      stroke="#A17545"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <h4 style={{ color: "var(--background2)" }}>$900</h4>
              <hr style={{ color: "white" }} />
              <div className="cardText2">
                <h4 style={{ color: "#CF9658" }}>Flavor Profile</h4>
                <h4 style={{ color: "white" }}>Peaty, Smoky, Floral</h4>
              </div>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                width={230}
                src="/images/productimg.png"
              />

              <div>
                <div className="cardText">
                  <div>
                    <h4 style={{ color: "white" }}>Ardbeg 25-Year - </h4>{" "}
                    <h4 style={{ color: "white" }}>Old Bourbon Oak</h4>
                  </div>
                  <svg
                    width="70"
                    height="23"
                    viewBox="0 0 90 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7048 17.18C12.0168 17.18 11.4108 17.04 10.8868 16.76C10.3668 16.48 9.95877 16.086 9.66277 15.578C9.37077 15.07 9.22477 14.474 9.22477 13.79V8.372L10.6888 8.36V13.754C10.6888 14.078 10.7428 14.368 10.8508 14.624C10.9628 14.88 11.1128 15.098 11.3008 15.278C11.4888 15.454 11.7048 15.588 11.9488 15.68C12.1928 15.772 12.4448 15.818 12.7048 15.818C12.9728 15.818 13.2268 15.772 13.4668 15.68C13.7108 15.584 13.9268 15.448 14.1148 15.272C14.3028 15.092 14.4508 14.874 14.5588 14.618C14.6668 14.362 14.7208 14.074 14.7208 13.754V8.36H16.1848V13.79C16.1848 14.474 16.0368 15.07 15.7408 15.578C15.4488 16.086 15.0408 16.48 14.5168 16.76C13.9968 17.04 13.3928 17.18 12.7048 17.18ZM17.8615 17V8.36H19.3255L23.3335 14.45V8.36H24.7975V17H23.3335L19.3255 10.91V17H17.8615ZM30.1288 17.18C29.2648 17.18 28.5248 16.992 27.9088 16.616C27.2928 16.236 26.8188 15.708 26.4868 15.032C26.1588 14.356 25.9948 13.572 25.9948 12.68C25.9948 11.788 26.1588 11.004 26.4868 10.328C26.8188 9.652 27.2928 9.126 27.9088 8.75C28.5248 8.37 29.2648 8.18 30.1288 8.18C31.1248 8.18 31.9548 8.43 32.6188 8.93C33.2828 9.426 33.7488 10.096 34.0168 10.94L32.5588 11.342C32.3908 10.778 32.1048 10.338 31.7008 10.022C31.2968 9.702 30.7728 9.542 30.1288 9.542C29.5488 9.542 29.0648 9.672 28.6768 9.932C28.2928 10.192 28.0028 10.558 27.8068 11.03C27.6148 11.498 27.5168 12.048 27.5128 12.68C27.5128 13.312 27.6088 13.864 27.8008 14.336C27.9968 14.804 28.2888 15.168 28.6768 15.428C29.0648 15.688 29.5488 15.818 30.1288 15.818C30.7728 15.818 31.2968 15.658 31.7008 15.338C32.1048 15.018 32.3908 14.578 32.5588 14.018L34.0168 14.42C33.7488 15.264 33.2828 15.936 32.6188 16.436C31.9548 16.932 31.1248 17.18 30.1288 17.18ZM38.9881 17.18C38.1241 17.18 37.3841 16.992 36.7681 16.616C36.1521 16.236 35.6781 15.708 35.3461 15.032C35.0181 14.356 34.8541 13.572 34.8541 12.68C34.8541 11.788 35.0181 11.004 35.3461 10.328C35.6781 9.652 36.1521 9.126 36.7681 8.75C37.3841 8.37 38.1241 8.18 38.9881 8.18C39.8521 8.18 40.5921 8.37 41.2081 8.75C41.8281 9.126 42.3021 9.652 42.6301 10.328C42.9621 11.004 43.1281 11.788 43.1281 12.68C43.1281 13.572 42.9621 14.356 42.6301 15.032C42.3021 15.708 41.8281 16.236 41.2081 16.616C40.5921 16.992 39.8521 17.18 38.9881 17.18ZM38.9881 15.818C39.5681 15.822 40.0501 15.694 40.4341 15.434C40.8221 15.174 41.1121 14.808 41.3041 14.336C41.5001 13.864 41.5981 13.312 41.5981 12.68C41.5981 12.048 41.5001 11.5 41.3041 11.036C41.1121 10.568 40.8221 10.204 40.4341 9.944C40.0501 9.684 39.5681 9.55 38.9881 9.542C38.4081 9.538 37.9261 9.666 37.5421 9.926C37.1581 10.186 36.8681 10.552 36.6721 11.024C36.4801 11.496 36.3841 12.048 36.3841 12.68C36.3841 13.312 36.4801 13.862 36.6721 14.33C36.8641 14.794 37.1521 15.156 37.5361 15.416C37.9241 15.676 38.4081 15.81 38.9881 15.818ZM44.3224 17V8.36H45.6244L48.6124 14.48L51.6004 8.36H52.9024V17H51.5524V11.462L48.9004 17H48.3244L45.6784 11.462V17H44.3224ZM54.588 17V8.36H55.89L58.878 14.48L61.866 8.36H63.168V17H61.818V11.462L59.166 17H58.59L55.944 11.462V17H54.588ZM68.5077 17.18C67.6437 17.18 66.9037 16.992 66.2877 16.616C65.6717 16.236 65.1977 15.708 64.8657 15.032C64.5377 14.356 64.3737 13.572 64.3737 12.68C64.3737 11.788 64.5377 11.004 64.8657 10.328C65.1977 9.652 65.6717 9.126 66.2877 8.75C66.9037 8.37 67.6437 8.18 68.5077 8.18C69.3717 8.18 70.1117 8.37 70.7277 8.75C71.3477 9.126 71.8217 9.652 72.1497 10.328C72.4817 11.004 72.6477 11.788 72.6477 12.68C72.6477 13.572 72.4817 14.356 72.1497 15.032C71.8217 15.708 71.3477 16.236 70.7277 16.616C70.1117 16.992 69.3717 17.18 68.5077 17.18ZM68.5077 15.818C69.0877 15.822 69.5697 15.694 69.9537 15.434C70.3417 15.174 70.6317 14.808 70.8237 14.336C71.0197 13.864 71.1177 13.312 71.1177 12.68C71.1177 12.048 71.0197 11.5 70.8237 11.036C70.6317 10.568 70.3417 10.204 69.9537 9.944C69.5697 9.684 69.0877 9.55 68.5077 9.542C67.9277 9.538 67.4457 9.666 67.0617 9.926C66.6777 10.186 66.3877 10.552 66.1917 11.024C65.9997 11.496 65.9037 12.048 65.9037 12.68C65.9037 13.312 65.9997 13.862 66.1917 14.33C66.3837 14.794 66.6717 15.156 67.0557 15.416C67.4437 15.676 67.9277 15.81 68.5077 15.818ZM73.842 17V8.36H75.306L79.314 14.45V8.36H80.778V17H79.314L75.306 10.91V17H73.842Z"
                      fill="#A17545"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="88"
                      height="21"
                      stroke="#A17545"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <h4 style={{ color: "var(--background2)" }}>$900</h4>
              <hr style={{ color: "white" }} />
              <div className="cardText2">
                <h4 style={{ color: "#CF9658" }}>Flavor Profile</h4>
                <h4 style={{ color: "white" }}>Peaty, Smoky, Floral</h4>
              </div>
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                width={230}
                src="/images/productimg.png"
              />

              <div>
                <div className="cardText">
                  <div>
                    <h4 style={{ color: "white" }}>Ardbeg 25-Year - </h4>{" "}
                    <h4 style={{ color: "white" }}>Old Bourbon Oak</h4>
                  </div>
                  <svg
                    width="70"
                    height="23"
                    viewBox="0 0 90 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.7048 17.18C12.0168 17.18 11.4108 17.04 10.8868 16.76C10.3668 16.48 9.95877 16.086 9.66277 15.578C9.37077 15.07 9.22477 14.474 9.22477 13.79V8.372L10.6888 8.36V13.754C10.6888 14.078 10.7428 14.368 10.8508 14.624C10.9628 14.88 11.1128 15.098 11.3008 15.278C11.4888 15.454 11.7048 15.588 11.9488 15.68C12.1928 15.772 12.4448 15.818 12.7048 15.818C12.9728 15.818 13.2268 15.772 13.4668 15.68C13.7108 15.584 13.9268 15.448 14.1148 15.272C14.3028 15.092 14.4508 14.874 14.5588 14.618C14.6668 14.362 14.7208 14.074 14.7208 13.754V8.36H16.1848V13.79C16.1848 14.474 16.0368 15.07 15.7408 15.578C15.4488 16.086 15.0408 16.48 14.5168 16.76C13.9968 17.04 13.3928 17.18 12.7048 17.18ZM17.8615 17V8.36H19.3255L23.3335 14.45V8.36H24.7975V17H23.3335L19.3255 10.91V17H17.8615ZM30.1288 17.18C29.2648 17.18 28.5248 16.992 27.9088 16.616C27.2928 16.236 26.8188 15.708 26.4868 15.032C26.1588 14.356 25.9948 13.572 25.9948 12.68C25.9948 11.788 26.1588 11.004 26.4868 10.328C26.8188 9.652 27.2928 9.126 27.9088 8.75C28.5248 8.37 29.2648 8.18 30.1288 8.18C31.1248 8.18 31.9548 8.43 32.6188 8.93C33.2828 9.426 33.7488 10.096 34.0168 10.94L32.5588 11.342C32.3908 10.778 32.1048 10.338 31.7008 10.022C31.2968 9.702 30.7728 9.542 30.1288 9.542C29.5488 9.542 29.0648 9.672 28.6768 9.932C28.2928 10.192 28.0028 10.558 27.8068 11.03C27.6148 11.498 27.5168 12.048 27.5128 12.68C27.5128 13.312 27.6088 13.864 27.8008 14.336C27.9968 14.804 28.2888 15.168 28.6768 15.428C29.0648 15.688 29.5488 15.818 30.1288 15.818C30.7728 15.818 31.2968 15.658 31.7008 15.338C32.1048 15.018 32.3908 14.578 32.5588 14.018L34.0168 14.42C33.7488 15.264 33.2828 15.936 32.6188 16.436C31.9548 16.932 31.1248 17.18 30.1288 17.18ZM38.9881 17.18C38.1241 17.18 37.3841 16.992 36.7681 16.616C36.1521 16.236 35.6781 15.708 35.3461 15.032C35.0181 14.356 34.8541 13.572 34.8541 12.68C34.8541 11.788 35.0181 11.004 35.3461 10.328C35.6781 9.652 36.1521 9.126 36.7681 8.75C37.3841 8.37 38.1241 8.18 38.9881 8.18C39.8521 8.18 40.5921 8.37 41.2081 8.75C41.8281 9.126 42.3021 9.652 42.6301 10.328C42.9621 11.004 43.1281 11.788 43.1281 12.68C43.1281 13.572 42.9621 14.356 42.6301 15.032C42.3021 15.708 41.8281 16.236 41.2081 16.616C40.5921 16.992 39.8521 17.18 38.9881 17.18ZM38.9881 15.818C39.5681 15.822 40.0501 15.694 40.4341 15.434C40.8221 15.174 41.1121 14.808 41.3041 14.336C41.5001 13.864 41.5981 13.312 41.5981 12.68C41.5981 12.048 41.5001 11.5 41.3041 11.036C41.1121 10.568 40.8221 10.204 40.4341 9.944C40.0501 9.684 39.5681 9.55 38.9881 9.542C38.4081 9.538 37.9261 9.666 37.5421 9.926C37.1581 10.186 36.8681 10.552 36.6721 11.024C36.4801 11.496 36.3841 12.048 36.3841 12.68C36.3841 13.312 36.4801 13.862 36.6721 14.33C36.8641 14.794 37.1521 15.156 37.5361 15.416C37.9241 15.676 38.4081 15.81 38.9881 15.818ZM44.3224 17V8.36H45.6244L48.6124 14.48L51.6004 8.36H52.9024V17H51.5524V11.462L48.9004 17H48.3244L45.6784 11.462V17H44.3224ZM54.588 17V8.36H55.89L58.878 14.48L61.866 8.36H63.168V17H61.818V11.462L59.166 17H58.59L55.944 11.462V17H54.588ZM68.5077 17.18C67.6437 17.18 66.9037 16.992 66.2877 16.616C65.6717 16.236 65.1977 15.708 64.8657 15.032C64.5377 14.356 64.3737 13.572 64.3737 12.68C64.3737 11.788 64.5377 11.004 64.8657 10.328C65.1977 9.652 65.6717 9.126 66.2877 8.75C66.9037 8.37 67.6437 8.18 68.5077 8.18C69.3717 8.18 70.1117 8.37 70.7277 8.75C71.3477 9.126 71.8217 9.652 72.1497 10.328C72.4817 11.004 72.6477 11.788 72.6477 12.68C72.6477 13.572 72.4817 14.356 72.1497 15.032C71.8217 15.708 71.3477 16.236 70.7277 16.616C70.1117 16.992 69.3717 17.18 68.5077 17.18ZM68.5077 15.818C69.0877 15.822 69.5697 15.694 69.9537 15.434C70.3417 15.174 70.6317 14.808 70.8237 14.336C71.0197 13.864 71.1177 13.312 71.1177 12.68C71.1177 12.048 71.0197 11.5 70.8237 11.036C70.6317 10.568 70.3417 10.204 69.9537 9.944C69.5697 9.684 69.0877 9.55 68.5077 9.542C67.9277 9.538 67.4457 9.666 67.0617 9.926C66.6777 10.186 66.3877 10.552 66.1917 11.024C65.9997 11.496 65.9037 12.048 65.9037 12.68C65.9037 13.312 65.9997 13.862 66.1917 14.33C66.3837 14.794 66.6717 15.156 67.0557 15.416C67.4437 15.676 67.9277 15.81 68.5077 15.818ZM73.842 17V8.36H75.306L79.314 14.45V8.36H80.778V17H79.314L75.306 10.91V17H73.842Z"
                      fill="#A17545"
                    />
                    <rect
                      x="1"
                      y="1"
                      width="88"
                      height="21"
                      stroke="#A17545"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <h4 style={{ color: "var(--background2)" }}>$900</h4>
              <hr style={{ color: "white" }} />
              <div className="cardText2">
                <h4 style={{ color: "#CF9658" }}>Flavor Profile</h4>
                <h4 style={{ color: "white" }}>Peaty, Smoky, Floral</h4>
              </div>
            </div>
          </div>
        </div>

        <div style={{ background: "black", padding: "5%" }}>
          <h2
            style={{
              marginTop: "3%",
              marginLeft: "5%",
              marginBottom: "5%",
              fontFamily: "fright",
              color: "white",
            }}
          >
            Hot collections
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "32% 32% 32%",
              gap: "1%",
            }}
          >
            <div>
              <ImageGallery items={images} />
              <p style={{ color: "white", marginLeft: "10%" }}>
                Awesome collection
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "10% 30% 30%",
                  gap: "5%",
                  marginLeft: "10%",
                }}
              >
                <img height={30} width={30} src="/images/profile.png" />
                <p
                  style={{
                    marginTop: "5%",
                    color: "white",
                    fontSize: "0.6rem",
                  }}
                >
                  BYTYRESELITTEL
                </p>
                <span
                  style={{
                    borderWidth: "0.1rem",
                    borderStyle: "solid",
                    marginTop: "5%",
                    borderColor: "white",
                    color: "white",
                    textAlign: "center",
                    fontSize: "0.6rem",
                    width: "100%",
                    height: "1.3rem",
                    padding: "1%",
                  }}
                >
                  BOTTLES
                </span>
              </div>
            </div>

            <div>
              <ImageGallery items={images2} />
              <p style={{ color: "white", marginLeft: "10%" }}>
                Awesome collection
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "10% 30% 30%",
                  gap: "5%",
                  marginLeft: "10%",
                }}
              >
                <img height={30} width={30} src="/images/profile.png" />
                <p
                  style={{
                    marginTop: "5%",
                    color: "white",
                    fontSize: "0.6rem",
                  }}
                >
                  BYTYRESELITTEL
                </p>
                <span
                  style={{
                    borderWidth: "0.1rem",
                    borderStyle: "solid",
                    marginTop: "5%",
                    borderColor: "white",
                    color: "white",
                    textAlign: "center",
                    fontSize: "0.6rem",
                    width: "100%",
                    height: "1.3rem",
                    padding: "1%",
                  }}
                >
                  BOTTLES
                </span>
              </div>
            </div>
            <div>
              <ImageGallery items={images3} />
              <p style={{ color: "white", marginLeft: "10%" }}>
                Awesome collection
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "10% 30% 30%",
                  gap: "5%",
                  marginLeft: "10%",
                }}
              >
                <img height={30} width={30} src="/images/profile.png" />
                <p
                  style={{
                    marginTop: "5%",
                    color: "white",
                    fontSize: "0.6rem",
                  }}
                >
                  BYTYRESELITTEL
                </p>
                <span
                  style={{
                    borderWidth: "0.1rem",
                    borderStyle: "solid",
                    marginTop: "5%",
                    borderColor: "white",
                    color: "white",
                    textAlign: "center",
                    fontSize: "0.6rem",
                    width: "100%",
                    height: "1.3rem",
                    padding: "1%",
                  }}
                >
                  BOTTLES
                </span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: "5%" }}>
          <h1 style={{ color: "white", marginBottom: "7%" }}>Discover</h1>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1%",
            }}
          >
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
                  RECENTLY ADDED
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
            <div
              style={{
                display: "flex",
                color: "var(--background2)",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  margin: "1rem",
                  background: "#46392E",
                  padding: "0.3rem",
                  color: "white",
                }}
              >
                ALL BOTTLES
              </p>
              <p style={{ margin: "1rem" }}>REGION</p>
              <p style={{ margin: "1rem" }}>AGE</p>
              <p style={{ margin: "1rem" }}>TYPE</p>
              <p style={{ margin: "1rem" }}>PRICE</p>
              <p style={{ margin: "1rem" }}>PRICE</p>
              <p style={{ margin: "1rem" }}>HOT</p>
            </div>
            <Button
              style={{
                color: "white",
                borderRadius: "0.2rem",
                paddingLeft: "1.8rem",
                paddingRight: "1.8rem",
                backgroundColor: "var(--background2)",
                border: "none",
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
                fontWeight: "3rem",
                fontSize: "1.2rem",
              }}
            >
              Filter{" "}
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.529247 0.528758C0.789596 0.268409 1.21171 0.268409 1.47206 0.528758L5.00065 4.05735L8.52925 0.528758C8.7896 0.268409 9.21171 0.268409 9.47206 0.528758C9.73241 0.789108 9.73241 1.21122 9.47206 1.47157L5.94346 5.00016L9.47206 8.52876C9.73241 8.78911 9.73241 9.21122 9.47206 9.47157C9.21171 9.73192 8.7896 9.73192 8.52925 9.47157L5.00065 5.94297L1.47206 9.47157C1.21171 9.73192 0.789596 9.73192 0.529247 9.47157C0.268897 9.21122 0.268897 8.78911 0.529247 8.52876L4.05784 5.00016L0.529247 1.47157C0.268897 1.21122 0.268897 0.789108 0.529247 0.528758Z"
                  fill="#FCFCFD"
                />
              </svg>
            </Button>{" "}
          </div>

          {/* filter */}
          <hr
            style={{
              height: "2px",
              borderWidth: 0,
              color: "gray",
              backgroundColor: "gray",
              marginTop: "3%",
              marginBottom: "3%",
            }}
          />

          <HomeFilter />

          <div
            style={{
              paddingBottom: "10%",
              display: "grid",
              gridTemplateColumns: "19% 19% 19% 19%",
              gap: "8%",
              gridRowGap: "10%",
            }}
          >
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
            <HomeCard />
          </div>
        </div>
      </div>
      <div
        style={{
          background: "black",
          display: "flex",
          alignItems: "center",
          paddingTop:'7%'
        }}
      >
        <div style={{ width: "50%" }}>
          <div style={{ marginLeft: "5%", padding: "5%" }}>
            <p
              style={{
                color: "var(--background2)",
                fontWeight: "380",
                fontFamily: "Fright",
              }}
            >
              Save your time with Stacks
            </p>
            <h2 style={{ color: "white", fontFamily: "Fright" }}>
              Earn Rare Whisky <br></br> Bottles with IWC
            </h2>
            <p style={{ color: "var(--background2)" }}>
              A creative agency that lead and inspire
            </p>
            <div style={{ display: "flex" }}>
              <Button
                style={{
                  color: "black",
                  backgroundColor: "var(--background2)",
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
                EARN NOW
              </Button>{" "}
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
                DISCOVER MORE
              </Button>{" "}
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "4%", background: "black",display:"flex",alignItems:"end" }}>
          <img
            height={420}
             src="/images/homebottom2.png"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
