import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import HomeCard from "../components/HomeCard";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import HomeFilter from "../components/homeFilter";
import DropdownButton from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const Profile = () => {

  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: "url(/images/profileBanner.png)",
            height: "36vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                background: "var(--background3)",
                marginLeft: "5%",
                marginTop: "10%",
                padding: "3%",
              }}
            >
              <img
                style={{ marginLeft: "12%", marginBottom: "5%" }}
                src="/images/profile.png"
              />{" "}
              <br></br>
              <h4
                style={{ color: "white", textAlign: "center", marginTop: "5%" }}
              >
                Enrico Cole <br></br>{" "}
                <span style={{ fontSize: "0.9rem" }}>
                  {" "}
                  0xc4c16a645...b21a{" "}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9896 9.67065C12.0046 9.92016 12.2651 10.0885 12.4769 9.95562C13.7923 9.13033 14.6668 7.66713 14.6668 5.99967C14.6668 3.42235 12.5775 1.33301 10.0002 1.33301C8.3327 1.33301 6.8695 2.20754 6.04421 3.52297C5.91137 3.7347 6.07967 3.99521 6.32918 4.01021C9.31307 4.1896 11.8102 6.68934 11.9896 9.67065Z"
                      fill="#CF9658"
                    />
                    <path
                      d="M10.6668 9.99967C10.6668 12.577 8.57749 14.6663 6.00016 14.6663C3.42283 14.6663 1.3335 12.577 1.3335 9.99967C1.3335 7.42235 3.42283 5.33301 6.00016 5.33301C8.57749 5.33301 10.6668 7.42235 10.6668 9.99967Z"
                      fill="#CF9658"
                    />
                  </svg>{" "}
                </span>
              </h4>
              <p
                style={{
                  color: "var(--background2)",
                  fontSize: "0.9rem",
                  textAlign: "center",
                }}
              >
                A wholesome farm owner in <br></br> Montana. Upcoming gallery
                solo <br></br> show in Germany
              </p>
              <div style={{ textAlign: "center" }}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.00016 13.333C10.9457 13.333 13.3335 10.9452 13.3335 7.99967C13.3335 5.05416 10.9457 2.66634 8.00016 2.66634C5.05464 2.66634 2.66683 5.05416 2.66683 7.99967C2.66683 10.9452 5.05464 13.333 8.00016 13.333ZM8.00016 14.6663C11.6821 14.6663 14.6668 11.6816 14.6668 7.99967C14.6668 4.31778 11.6821 1.33301 8.00016 1.33301C4.31826 1.33301 1.3335 4.31778 1.3335 7.99967C1.3335 11.6816 4.31826 14.6663 8.00016 14.6663Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.16429 12.1174C9.65676 11.1325 9.99984 9.67851 9.99984 7.99967C9.99984 6.32084 9.65676 4.86685 9.16429 3.88191C8.63195 2.81722 8.14321 2.66634 7.99984 2.66634C7.85647 2.66634 7.36773 2.81722 6.83538 3.88191C6.34292 4.86685 5.99984 6.32084 5.99984 7.99967C5.99984 9.67851 6.34292 11.1325 6.83538 12.1174C7.36773 13.1821 7.85647 13.333 7.99984 13.333C8.14321 13.333 8.63195 13.1821 9.16429 12.1174ZM7.99984 14.6663C9.84079 14.6663 11.3332 11.6816 11.3332 7.99967C11.3332 4.31778 9.84079 1.33301 7.99984 1.33301C6.15889 1.33301 4.6665 4.31778 4.6665 7.99967C4.6665 11.6816 6.15889 14.6663 7.99984 14.6663Z"
                    fill="#D2A163"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.6339 8.66634C14.6557 8.44707 14.6668 8.22467 14.6668 7.99967C14.6668 7.77467 14.6557 7.55228 14.6339 7.33301H1.36641C1.34464 7.55228 1.3335 7.77467 1.3335 7.99967C1.3335 8.22467 1.34464 8.44707 1.36641 8.66634H14.6339Z"
                    fill="#D2A163"
                  />
                </svg>
                <div style={{ display: "flex", marginTop: "10%" }}>
                  <Button
                    style={{
                      color: "black",
                      backgroundColor: "var(--background2)",
                      height: "2.5rem",
                      marginTop: "0.8rem",
                      marginRight: "1rem",
                      borderColor: "var(--background2)",
                      borderRadius: "0%",
                      borderWidth: "0.1rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    Follow
                  </Button>{" "}
                  <Button
                    style={{
                      color: "black",
                      backgroundColor: "var(--background3)",
                      height: "2.5rem",
                      marginTop: "0.8rem",
                      marginRight: "1rem",
                      borderColor: "var(--borderColor)",
                      borderRadius: "0%",
                      borderWidth: "0.1rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.99882 8.36614C8.02332 8.82573 7.67061 9.21815 7.21103 9.24265C6.58379 9.27609 6.087 9.31699 5.69878 9.35794C5.17743 9.41292 4.86065 9.73316 4.80799 10.1938C4.73238 10.8552 4.66667 11.8561 4.66667 13.3329C4.66667 14.8098 4.73238 15.8107 4.80799 16.472C4.86074 16.9335 5.17672 17.2528 5.69729 17.3078C6.60898 17.404 8.11604 17.4996 10.5 17.4996C12.884 17.4996 14.391 17.404 15.3027 17.3078C15.8233 17.2528 16.1393 16.9335 16.192 16.472C16.2676 15.8107 16.3333 14.8098 16.3333 13.3329C16.3333 11.8561 16.2676 10.8552 16.192 10.1938C16.1394 9.73316 15.8226 9.41292 15.3012 9.35794C14.913 9.31699 14.4162 9.27609 13.789 9.24265C13.3294 9.21815 12.9767 8.82573 13.0012 8.36614C13.0257 7.90656 13.4181 7.55385 13.8777 7.57835C14.5301 7.61313 15.0558 7.65614 15.476 7.70046C16.713 7.83092 17.6997 8.7085 17.8479 10.0045C17.9323 10.7432 18 11.8092 18 13.3329C18 14.8567 17.9323 15.9227 17.8479 16.6613C17.6998 17.9566 16.7154 18.8346 15.4776 18.9652C14.4933 19.0691 12.9257 19.1663 10.5 19.1663C8.07435 19.1663 6.50672 19.0691 5.52236 18.9652C4.28459 18.8346 3.30017 17.9566 3.15211 16.6613C3.06767 15.9227 3 14.8567 3 13.3329C3 11.8092 3.06767 10.7432 3.15211 10.0045C3.30026 8.7085 4.28697 7.83092 5.52397 7.70046C5.94422 7.65614 6.46994 7.61313 7.1223 7.57835C7.58189 7.55385 7.97432 7.90656 7.99882 8.36614Z"
                        fill="#D2A163"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.17259 5.17226C7.84715 5.4977 7.31951 5.4977 6.99408 5.17226C6.66864 4.84683 6.66864 4.31919 6.99408 3.99375L9.91074 1.07709C10.2362 0.751649 10.7638 0.751649 11.0893 1.07709L14.0059 3.99375C14.3314 4.31919 14.3314 4.84683 14.0059 5.17226C13.6805 5.4977 13.1528 5.4977 12.8274 5.17226L11.3333 3.67819V11.6663C11.3333 12.1266 10.9602 12.4997 10.5 12.4997C10.0398 12.4997 9.66667 12.1266 9.66667 11.6663V3.67819L8.17259 5.17226Z"
                        fill="#D2A163"
                      />
                    </svg>
                  </Button>{" "}
                  <Button
                    style={{
                      color: "black",
                      backgroundColor: "var(--background3)",
                      height: "2.5rem",
                      marginTop: "0.8rem",
                      marginRight: "1rem",
                      borderColor: "var(--borderColor)",
                      borderRadius: "0%",
                      borderWidth: "0.1rem",
                      fontSize: "0.7rem",
                    }}
                  >
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_95_1473)">
                        <path
                          d="M4.66667 8.33301C3.75 8.33301 3 9.08301 3 9.99967C3 10.9163 3.75 11.6663 4.66667 11.6663C5.58333 11.6663 6.33333 10.9163 6.33333 9.99967C6.33333 9.08301 5.58333 8.33301 4.66667 8.33301ZM16.3333 8.33301C15.4167 8.33301 14.6667 9.08301 14.6667 9.99967C14.6667 10.9163 15.4167 11.6663 16.3333 11.6663C17.25 11.6663 18 10.9163 18 9.99967C18 9.08301 17.25 8.33301 16.3333 8.33301ZM10.5 8.33301C9.58333 8.33301 8.83333 9.08301 8.83333 9.99967C8.83333 10.9163 9.58333 11.6663 10.5 11.6663C11.4167 11.6663 12.1667 10.9163 12.1667 9.99967C12.1667 9.08301 11.4167 8.33301 10.5 8.33301Z"
                          fill="#D2A163"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_95_1473">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Button>{" "}
                </div>

                <div style={{ marginTop: "20%" }}>
                  <svg
                    width="20"
                    style={{ marginLeft: "5%", marginRight: "5%" }}
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.65067 11.6665C1.27257 11.6704 0.382969 13.2403 1.23197 14.4298C2.44782 16.133 4.65261 17.5 8.33346 17.5C14.0377 17.5 18.6165 12.8514 17.9755 7.35925L18.9146 5.48108C19.5659 4.17857 18.4342 2.69685 17.0062 2.98245L15.7655 3.23057C15.4366 3.05702 15.0962 2.92606 14.8053 2.83117C14.2383 2.64627 13.552 2.5 12.9168 2.5C11.7757 2.5 10.7909 2.79276 10.0082 3.37994C9.23446 3.96053 8.79863 4.72354 8.55946 5.42421C8.44921 5.74717 8.37579 6.07112 8.32868 6.38203C7.88596 6.24269 7.43453 6.05522 6.99258 5.82629C5.98992 5.30693 5.17912 4.64852 4.72175 4.07126C3.95439 3.10275 2.32819 3.17456 1.75754 4.43351C0.953258 6.20789 1.17388 8.31122 1.89683 10.0108C2.13915 10.5803 2.45436 11.1434 2.83945 11.6652C2.77352 11.666 2.71046 11.6663 2.65067 11.6665ZM8.33337 15.8333C5.11392 15.8333 3.4492 14.6672 2.58841 13.4614C2.54973 13.4072 2.58873 13.3333 2.65529 13.3332C3.53099 13.3307 5.32849 13.2892 6.51399 12.5954C6.5753 12.5595 6.56181 12.4691 6.49447 12.4465C3.731 11.5173 2.16014 7.58216 3.27546 5.12158C3.30103 5.06517 3.37687 5.05772 3.41534 5.10628C4.6894 6.71432 7.47507 8.28933 9.89871 8.33242C9.95129 8.33333 9.99104 8.28558 9.98304 8.23361C9.88538 7.60044 9.51246 4.16667 12.9167 4.16667C13.7296 4.16667 14.9391 4.56319 15.3846 4.96942C15.4052 4.98819 15.4331 4.99672 15.4605 4.99125L17.333 4.61675C17.401 4.60315 17.4549 4.67371 17.4239 4.73573L16.2625 7.05849C16.2544 7.07462 16.2519 7.09312 16.255 7.11088C17.0684 11.6833 13.3234 15.8333 8.33337 15.8333Z"
                      fill="#D2A163"
                    />
                  </svg>
                  <svg
                    style={{ marginLeft: "5%", marginRight: "5%" }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.3332 3.33366H6.6665C4.82555 3.33366 3.33317 4.82604 3.33317 6.66699V13.3337C3.33317 15.1746 4.82555 16.667 6.6665 16.667H13.3332C15.1741 16.667 16.6665 15.1746 16.6665 13.3337V6.66699C16.6665 4.82604 15.1741 3.33366 13.3332 3.33366ZM6.6665 1.66699C3.90508 1.66699 1.6665 3.90557 1.6665 6.66699V13.3337C1.6665 16.0951 3.90508 18.3337 6.6665 18.3337H13.3332C16.0946 18.3337 18.3332 16.0951 18.3332 13.3337V6.66699C18.3332 3.90557 16.0946 1.66699 13.3332 1.66699H6.6665Z"
                      fill="#D2A163"
                    />
                    <path
                      d="M14.1668 6.66667C14.6271 6.66667 15.0002 6.29357 15.0002 5.83333C15.0002 5.3731 14.6271 5 14.1668 5C13.7066 5 13.3335 5.3731 13.3335 5.83333C13.3335 6.29357 13.7066 6.66667 14.1668 6.66667Z"
                      fill="#D2A163"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.1668 9.99967C14.1668 12.3008 12.3013 14.1663 10.0002 14.1663C7.69898 14.1663 5.8335 12.3008 5.8335 9.99967C5.8335 7.69849 7.69898 5.83301 10.0002 5.83301C12.3013 5.83301 14.1668 7.69849 14.1668 9.99967ZM12.5002 9.99967C12.5002 11.3804 11.3809 12.4997 10.0002 12.4997C8.61941 12.4997 7.50016 11.3804 7.50016 9.99967C7.50016 8.61892 8.61941 7.49967 10.0002 7.49967C11.3809 7.49967 12.5002 8.61892 12.5002 9.99967Z"
                      fill="#D2A163"
                    />
                  </svg>
                  <svg
                    style={{ marginLeft: "5%", marginRight: "5%" }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.99984 16.667C13.6818 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6818 3.33366 9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667ZM9.99984 18.3337C14.6022 18.3337 18.3332 14.6027 18.3332 10.0003C18.3332 5.39795 14.6022 1.66699 9.99984 1.66699C5.39746 1.66699 1.6665 5.39795 1.6665 10.0003C1.6665 14.6027 5.39746 18.3337 9.99984 18.3337Z"
                      fill="#D2A163"
                    />
                    <path
                      d="M9.99984 8.33301C9.99984 7.87277 10.3729 7.49967 10.8332 7.49967H11.6665C12.1268 7.49967 12.4998 7.12658 12.4998 6.66634C12.4998 6.20611 12.1268 5.83301 11.6665 5.83301H10.8332C9.45242 5.83301 8.33317 6.9523 8.33317 8.33301V9.99967H7.49984C7.0396 9.99967 6.6665 10.3728 6.6665 10.833C6.6665 11.2933 7.0396 11.6663 7.49984 11.6663H8.33317V16.6663C8.33317 17.1266 8.70625 17.4997 9.1665 17.4997C9.62675 17.4997 9.99984 17.1266 9.99984 16.6663V11.6663H11.6665C12.1268 11.6663 12.4998 11.2933 12.4998 10.833C12.4998 10.3728 12.1268 9.99967 11.6665 9.99967H9.99984V8.33301Z"
                      fill="#D2A163"
                    />
                  </svg>
                </div>
                <hr
                  style={{
                    color: "white",
                    marginTop: "30%",
                    marginBottom: "30%",
                  }}
                ></hr>
                <p style={{ color: "var(--background2)" }}>
                  Member Since Mar 15, 2021
                </p>
              </div>
            </div>
            <div style={{ marginTop: "13%" }}>
              <Button
                style={{
                  color: "var(--background2)",
                  backgroundColor: "var(--background3)",
                  height: "2.5rem",
                  marginTop: "0.8rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius: "0%",
                  borderWidth: "0.1rem",
                  fontSize: "0.7rem",
                }}
              >
                EDIT COVER PHOTO &nbsp;&nbsp; <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.00016 2.66634C6.69867 2.66634 5.49894 2.77368 4.53597 2.90086C3.66931 3.01532 3.01581 3.66882 2.90135 4.53548C2.77417 5.49845 2.66683 6.69819 2.66683 7.99967C2.66683 9.30116 2.77417 10.5009 2.90135 11.4639C3.01581 12.3305 3.66931 12.984 4.53597 13.0985C5.49894 13.2257 6.69867 13.333 8.00016 13.333C9.30165 13.333 10.5014 13.2257 11.4644 13.0985C12.331 12.984 12.9845 12.3305 13.099 11.4639C13.2262 10.5009 13.3335 9.30116 13.3335 7.99967C13.3335 6.69819 13.2262 5.49845 13.099 4.53548C12.9845 3.66882 12.331 3.01532 11.4644 2.90086C10.5014 2.77368 9.30165 2.66634 8.00016 2.66634ZM4.36139 1.579C2.89686 1.77242 1.77291 2.89637 1.57949 4.3609C1.44652 5.36773 1.3335 6.62719 1.3335 7.99967C1.3335 9.37216 1.44652 10.6316 1.57949 11.6384C1.77291 13.103 2.89686 14.2269 4.36139 14.4203C5.36822 14.5533 6.62768 14.6663 8.00016 14.6663C9.37265 14.6663 10.6321 14.5533 11.6389 14.4203C13.1035 14.2269 14.2274 13.103 14.4208 11.6384C14.5538 10.6316 14.6668 9.37216 14.6668 7.99967C14.6668 6.62719 14.5538 5.36773 14.4208 4.3609C14.2274 2.89637 13.1035 1.77242 11.6389 1.579C10.6321 1.44603 9.37265 1.33301 8.00016 1.33301C6.62768 1.33301 5.36822 1.44603 4.36139 1.579Z" fill="#CF9658"/>
<path d="M5.99992 7.33366C6.7363 7.33366 7.33325 6.73671 7.33325 6.00033C7.33325 5.26395 6.7363 4.66699 5.99992 4.66699C5.26354 4.66699 4.66659 5.26395 4.66659 6.00033C4.66659 6.73671 5.26354 7.33366 5.99992 7.33366Z" fill="#CF9658"/>
<path d="M12.0808 8.47185L13.277 9.66807C13.2357 10.2922 13.1755 10.8713 13.109 11.3857L11.138 9.41466C10.8776 9.15431 10.4555 9.15431 10.1952 9.41466L8.74746 10.8624C7.96641 11.6434 6.70008 11.6434 5.91904 10.8624L5.80465 10.748C5.5443 10.4876 5.1222 10.4876 4.86185 10.748L3.2558 12.354C3.06975 12.1018 2.94527 11.799 2.90109 11.4645C2.877 11.2821 2.85362 11.0912 2.83154 10.8927L3.91904 9.80519C4.70009 9.02414 5.96641 9.02414 6.74746 9.80519L6.86184 9.91957C7.12219 10.1799 7.5443 10.1799 7.80465 9.91957L9.25237 8.47185C10.0334 7.6908 11.2997 7.69081 12.0808 8.47185Z" fill="#CF9658"/>
</svg>

              </Button>{" "}
              <Button
                style={{
                  color: "var(--background2)",
                  backgroundColor: "var(--background3)",
                  height: "2.5rem",
                  marginTop: "0.8rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius: "0%",
                  borderWidth: "0.1rem",
                  fontSize: "0.7rem",
                }}
              >
                EDIT PROFILE &nbsp;&nbsp; <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 14.6667C0 14.2985 0.298477 14 0.666667 14H11.3333C11.7015 14 12 14.2985 12 14.6667V14.6667C12 15.0349 11.7015 15.3333 11.3333 15.3333H0.666667C0.298477 15.3333 0 15.0349 0 14.6667V14.6667Z" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.13807 2.08133C8.87772 1.82098 8.45561 1.82098 8.19526 2.08133L7.6095 2.6671L10 5.05762L10.5858 4.47185C10.8461 4.2115 10.8461 3.78939 10.5858 3.52905L9.13807 2.08133ZM2.6095 7.66709L6.66669 3.6099L9.05721 6.00043L5.00002 10.0576L2.6095 7.66709ZM1.66669 8.6099L1.33333 8.94326V11.3338H3.72386L4.05721 11.0004L1.66669 8.6099ZM7.25245 1.13852C8.0335 0.357472 9.29983 0.357472 10.0809 1.13852L11.5286 2.58624C12.3096 3.36729 12.3096 4.63362 11.5286 5.41466L4.66667 12.2766C4.41662 12.5266 4.07748 12.6671 3.72386 12.6671H1.33333C0.596954 12.6671 0 12.0702 0 11.3338V8.94326C0 8.58964 0.140476 8.2505 0.390524 8.00045L7.25245 1.13852Z" fill="#CF9658"/>
</svg>

              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingRight: "5rem",
          paddingLeft: "30rem",
          paddingTop: "5%",
          background: "var(--background)",
        }}
      >
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
              display: "flex",
              color: "var(--background2)",
              alignItems: "center",
            }}
          >
            <p
              style={{
                margin: "1rem",
                background: "var(--background2)",
                padding: "0.3rem",
                color: "black",
                fontWeight: "bold",
              }}
            >
              ON SALE
            </p>
            <p style={{ margin: "1rem" }}>COLLECTIBLES</p>
            <p style={{ margin: "1rem" }}>CREATED</p>
            <p style={{ margin: "1rem" }}>LIKES</p>
            <p style={{ margin: "1rem" }}>FOLLOWING</p>
            <p style={{ margin: "1rem" }}>FOLLOWERS</p>
          </div>
        </div>

        <div
          style={{
            paddingBottom: "10%",
            display: "grid",
            gridTemplateColumns: "25% 25% 25% ",
            gap: "8%",
            gridRowGap: "10%",
            height:"90vh"
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
        </div>
      </div>
    </div>
  );
};

export default Profile;
