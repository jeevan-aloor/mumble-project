import { Button, Form } from "react-bootstrap";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Upload2.css";
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    background:"#211715",
    width:"30%",
    padding:"2%",
    transform: 'translate(-50%, -50%)',
  },
};
const Upload2 = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div style={{ background: "var(--background)" }}>
      <div style={{ padding: "15%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "60% 30%",
            gap: "15%",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1
                style={{
                  color: "white",
                  fontFamily: "fright",
                  fontWeight: "300",
                }}
              >
                Create single <br></br> collectible
              </h1>
              <div>
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <h4 style={{fontFamily:"fright",color:"white"}}>Follow steps</h4>
     <div style={{cursor:"pointer"}} onClick={closeModal}>
     <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD"/>
<rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2"/>
</svg>
      </div>
         </div>
        <div style={{marginTop:"5%"}}>
   
        <div style={{display:"flex",marginTop:"5%"}}>
        <div style={{marginRight:"7%"}}>
          <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="24" fill="#5F4529"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7071 19.7929C31.0976 20.1834 31.0976 20.8166 30.7071 21.2071L22.7071 29.2071C22.3166 29.5976 21.6834 29.5976 21.2929 29.2071L17.2929 25.2071C16.9024 24.8166 16.9024 24.1834 17.2929 23.7929C17.6834 23.4024 18.3166 23.4024 18.7071 23.7929L22 27.0858L29.2929 19.7929C29.6834 19.4024 30.3166 19.4024 30.7071 19.7929Z" fill="#FCFCFD"/>
</svg>
            </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>UPLOAD FILES & MINT TOKEN</p>
<p  style={{color:"var(--background2)"}} >Call contract method</p>

</div>

</div>
<Button
                style={{
                  color: "white",
                  backgroundColor: "var(--borderColor)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  border:"none",
                  borderRadius:"0%",
                width:"100%",


                }}
              >
                Done
              </Button>{" "}
        </div>
        <div style={{marginTop:"15%"}}>
   
   <div style={{display:"flex",marginTop:"5%"}}>
     <div style={{marginRight:"7%"}}>
     <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="24" fill="#46392E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0226 30.8979L14.7473 27.6369C14.9123 26.8943 15.2857 26.2142 15.8236 25.6762L25.6715 15.8283C27.2336 14.2662 29.7663 14.2662 31.3284 15.8283L32.6715 17.1715C34.2336 18.7336 34.2336 21.2662 32.6715 22.8283L22.8236 32.6762C22.2857 33.2142 21.6055 33.5875 20.8629 33.7526L17.602 34.4772C15.4585 34.9535 13.5463 33.0414 14.0226 30.8979ZM16.6997 28.0708L15.975 31.3317C15.8162 32.0462 16.4536 32.6836 17.1681 32.5248L20.429 31.8002C20.7861 31.7208 21.1144 31.5451 21.3782 31.2925L17.2073 27.1216C16.9547 27.3855 16.779 27.7137 16.6997 28.0708ZM18.6212 25.7071L22.7928 29.8787L28.3785 24.2929L24.207 20.1213L18.6212 25.7071ZM31.2573 21.4141L29.7928 22.8787L25.6212 18.7071L27.0857 17.2425C27.8668 16.4615 29.1331 16.4615 29.9142 17.2425L31.2573 18.5857C32.0384 19.3667 32.0384 20.633 31.2573 21.4141Z" fill="#D2A163"/>
</svg>

       </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>SIGN SELL ORDER</p>
<p  style={{color:"var(--background2)"}} >Sign sell order using your wallet</p>

</div>

</div>
<Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background)",
                  height: "2.5rem",
                  marginTop: "1rem",
                  marginRight: "1rem",
                  border:"none",
                  borderRadius:"0%",
                width:"100%",


                }}
              >
                START NOW
              </Button>{" "}
   </div>
   <div style={{marginTop:"15%"}}>
   
   <div style={{display:"flex",marginTop:"5%"}}>
   <div style={{marginRight:"7%"}}>
   <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="24" fill="#46392E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29.7422 20.5H18.2578C17.1042 20.5 16.1898 21.4734 16.2617 22.6248L16.7617 30.6248C16.8276 31.6788 17.7017 32.5 18.7578 32.5H29.2422C30.2984 32.5 31.1725 31.6788 31.2383 30.6248L31.7383 22.6248C31.8103 21.4734 30.8959 20.5 29.7422 20.5ZM18.2578 18.5C15.9506 18.5 14.1217 20.4467 14.2656 22.7495L14.7656 30.7495C14.8974 32.8577 16.6456 34.5 18.7578 34.5H29.2422C31.3545 34.5 33.1027 32.8577 33.2345 30.7495L33.7345 22.7495C33.8784 20.4467 32.0495 18.5 29.7422 18.5H18.2578Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 19.5C19 16.7386 21.2386 14.5 24 14.5C26.7614 14.5 29 16.7386 29 19.5V21.5C29 22.0523 28.5523 22.5 28 22.5C27.4477 22.5 27 22.0523 27 21.5V19.5C27 17.8431 25.6569 16.5 24 16.5C22.3431 16.5 21 17.8431 21 19.5V21.5C21 22.0523 20.5523 22.5 20 22.5C19.4477 22.5 19 22.0523 19 21.5V19.5Z" fill="#D2A163"/>
</svg>

       </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>SIGN LOCK ORDER</p>
<p  style={{color:"var(--background2)"}} >Sign lock order using your wallet</p>

</div>

</div>
<Button
           style={{
             color: "white",
             backgroundColor: "var(--background2)",
             height: "2.5rem",
             marginTop: "1rem",
             marginRight: "1rem",
             borderColor: "var(--background2)",
             borderRadius:"0%",
           width:"100%",
             borderWidth:"0.1rem"


           }}
         >
           START NOW
         </Button>{" "}
   </div>
      </Modal>
    </div>
              <Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background)",
                  height: "2.5rem",
                  marginTop: "0.8rem",
                  marginRight: "1rem",
                  borderColor: "var(--background2)",
                  borderRadius: "0%",
                  paddingLeft: "3%",
                  paddingRight: "3%",
                  borderWidth: "0.1rem",
                  fontSize: "0.7rem",
                }}
              >
                SWITCH TO MULTIPLE
              </Button>{" "}
            </div>
            <h4 style={{ color: "white", marginTop: "8%", fontSize: "1rem" }}>
              UPLOAD FILE
            </h4>
            <p style={{ color: "var(--background2)" }}>
              Drag or choose your file to upload
            </p>
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <img
                  style={{ width: "100%" }}
                  src="/images/uploadfield.png"
                />{" "}
              </div>
              <aside>
                <ul style={{ color: "var(--background2)", fontSize: "0.8rem" }}>
                  {files}
                </ul>
              </aside>
            </section>
            <div
              style={{
                width: "100%",
                background: "var(--background)",
                paddingBottom: "8%",
              }}
            >
              <h4
                style={{
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "8%",
                  marginBottom: "7%",
                }}
              >
                BOTTLE DETAILS
              </h4>

              <form>
                <div style={{ display: "flex", marginBottom: "4%" }}>
                  <div
                    className="form-group"
                    style={{ flexBasis: "30%", marginRight: "5%" }}
                  >
                    <label
                      style={{
                        color: "white",
                        marginTop: "3%",
                        marginBottom: "1%",
                        fontSize: "0.7rem",
                      }}
                      htmlFor="exampleInputPassword1"
                    >
                      DISTILLERY{" "}
                    </label>
                    <input
                      style={{
                        height: "2rem",
                        padding: "1.2rem",
                        borderWidth: "0.2rem",
                        borderColor: "var(--borderColor)",
                        marginTop: "0.8rem",
                        borderRadius: "0%",
                        color: "var(--background2)",
                        backgroundColor: "var(--background)",
                      }}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="form-group" style={{ flexBasis: "30%" }}>
                    <label
                      style={{
                        color: "white",
                        marginTop: "3%",
                        marginBottom: "1%",
                        fontSize: "0.8rem",
                      }}
                      htmlFor="exampleInputPassword1"
                    >
                      AGE
                    </label>
                    <input
                      style={{
                        height: "2rem",
                        padding: "1.2rem",
                        borderWidth: "0.2rem",
                        borderColor: "var(--borderColor)",
                        marginTop: "0.8rem",
                        borderRadius: "0%",
                        color: "var(--background2)",

                        backgroundColor: "var(--background)",
                      }}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div
                    className="form-group"
                    style={{ flexBasis: "30%", marginLeft: "3%" }}
                  >
                    <label
                      style={{
                        color: "white",
                        marginTop: "3%",
                        marginBottom: "1%",
                        fontSize: "0.8rem",
                      }}
                      htmlFor="exampleInputPassword1"
                    >
                      CASK TYPE
                    </label>
                    <input
                      style={{
                        height: "2rem",
                        padding: "1.2rem",
                        borderWidth: "0.2rem",
                        borderColor: "var(--borderColor)",
                        marginTop: "0.8rem",
                        borderRadius: "0%",
                        color: "var(--background2)",

                        backgroundColor: "var(--background)",
                      }}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    style={{ color: "white", fontSize: "0.8rem" }}
                    htmlFor="exampleInputEmail1"
                  >
                    BOTTLING DATE
                  </label>
                  <input
                    style={{
                      height: "2rem",
                      padding: "1.2rem",
                      borderColor: "var(--borderColor)",
                      borderWidth: "0.2rem",
                      marginTop: "0.8rem",
                      borderRadius: "0%",
                      color: "var(--background2)",

                      backgroundColor: "var(--background)",
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
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
                    htmlFor="exampleInputPassword1"
                  >
                    ADDITIONAL DETAILS
                  </label>
                  <input
                    style={{
                      height: "2rem",
                      padding: "1.2rem",
                      borderWidth: "0.2rem",
                      borderRadius: "0%",
                      borderColor: "var(--borderColor)",
                      marginTop: "0.8rem",
                      color: "var(--background2)",

                      backgroundColor: "var(--background)",
                    }}
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </form>
              <hr
                style={{ color: "var(--background2)", marginTop: "10%" }}
              ></hr>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <div>
                  {" "}
                  <h4 style={{ color: "white", fontSize: "1.2rem" }}>
                    PUT ON SALE
                  </h4>
                  <p style={{ color: "var(--background2)" }}>
                    You’ll receive bids on this Bottle
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      defaultChecked
                    />
                  </Form>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <div>
                  {" "}
                  <h4 style={{ color: "white", fontSize: "1.2rem" }}>
                    INSTANT SALE PRICE
                  </h4>
                  <p style={{ color: "var(--background2)" }}>
                    YEnter the price for which the Bottle will be instantly sold
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      defaultChecked
                    />
                  </Form>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <div>
                  {" "}
                  <h4 style={{ color: "white", fontSize: "1.2rem" }}>
                    CHOOSE COLLECTION
                  </h4>
                  <p style={{ color: "var(--background2)" }}>
                    Choose an exiting collection or create a new one
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      defaultChecked
                    />
                  </Form>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "5%",
                }}
              >
                <div>
                  {" "}
                  <h4 style={{ color: "white", fontSize: "1.2rem" }}>
                    UNLOCK ONCE PURCHASED
                  </h4>
                  <p style={{ color: "var(--background2)" }}>
                    Content will be unlocked after successful transaction
                  </p>
                </div>
                <div style={{ marginTop: "5%" }}></div>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "23% 23% 23% 23%",
                  gap: "5%",
                  marginTop: "5%",
                }}
              >
                <div
                  style={{
                    background: "#100804",
                    paddingTop: "15%",
                    paddingBottom: "15%",
                    paddingLeft: "8%",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#FCFCFD" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 11C17 10.4477 16.5523 10 16 10C15.4477 10 15 10.4477 15 11V15H11C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H15V21C15 21.5523 15.4477 22 16 22C16.5523 22 17 21.5523 17 21V17H21C21.5523 17 22 16.5523 22 16C22 15.4477 21.5523 15 21 15H17V11Z"
                      fill="#D2A163"
                    />
                  </svg>
                  <h4
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      marginTop: "10%",
                    }}
                  >
                    CREATE <br></br> COLLECTION
                  </h4>
                </div>
                <div
                  style={{
                    background: "#100804",
                    paddingTop: "15%",
                    paddingBottom: "15%",
                    paddingLeft: "8%",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#5F4529" />
                  </svg>

                  <h4
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      marginTop: "10%",
                    }}
                  >
                    CRYPTO <br></br> LEGEND - <br></br> PROFESSOR
                  </h4>
                </div>
                <div
                  style={{
                    background: "#100804",
                    paddingTop: "15%",
                    paddingBottom: "15%",
                    paddingLeft: "8%",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#A17545" />
                  </svg>

                  <h4
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      marginTop: "10%",
                    }}
                  >
                    CRYPTO <br></br> LEGEND - <br></br> PROFESSOR
                  </h4>
                </div>
                <div
                  style={{
                    background: "#100804",
                    paddingTop: "15%",
                    paddingBottom: "15%",
                    paddingLeft: "8%",
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#E9B781" />
                  </svg>

                  <h4
                    style={{
                      color: "white",
                      fontSize: "0.9rem",
                      marginTop: "10%",
                    }}
                  >
                    LEGEND - <br></br> PHOTOGRAPHY
                  </h4>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10%",
                }}
              >
                <div>
                  <p  onClick={openModal} style={{ color: "white",cursor:"pointer" }}>
                    Create Bottle &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <svg
                      width="10"
                      height="7"
                      viewBox="0 0 10 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.39397 0.843309C6.66452 0.593571 7.08629 0.61044 7.33603 0.880985L9.48988 3.21429C9.72561 3.46967 9.72561 3.86329 9.48988 4.11867L7.33603 6.45203C7.0863 6.72257 6.66453 6.73945 6.39398 6.48971C6.12343 6.23998 6.10656 5.81821 6.35629 5.54766L7.47736 4.33315L1.00001 4.33315C0.63182 4.33315 0.333343 4.03467 0.333343 3.66648C0.333343 3.29829 0.63182 2.99982 1.00001 2.99982L7.47734 2.99982L6.3563 1.78536C6.10656 1.51482 6.12343 1.09305 6.39397 0.843309Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </p>
                </div>
                <div style={{ marginLeft: "5%" }}>
                  <p style={{ color: "white" }}>
                    AUTO SAVING &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 0.333496C6.63181 0.333496 6.33334 0.631973 6.33334 1.00016V3.00016C6.33334 3.36835 6.63181 3.66683 7 3.66683C7.36819 3.66683 7.66667 3.36835 7.66667 3.00016V1.00016C7.66667 0.631973 7.36819 0.333496 7 0.333496Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M7 10.3335C6.63181 10.3335 6.33334 10.632 6.33334 11.0002V13.0002C6.33334 13.3684 6.63181 13.6668 7 13.6668C7.36819 13.6668 7.66667 13.3684 7.66667 13.0002V11.0002C7.66667 10.632 7.36819 10.3335 7 10.3335Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M13 6.3335C13.3682 6.3335 13.6667 6.63197 13.6667 7.00016C13.6667 7.36835 13.3682 7.66683 13 7.66683H11C10.6318 7.66683 10.3333 7.36835 10.3333 7.00016C10.3333 6.63197 10.6318 6.3335 11 6.3335H13Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M3.66667 7.00016C3.66667 6.63197 3.36819 6.3335 3 6.3335H1C0.631813 6.3335 0.333336 6.63197 0.333336 7.00016C0.333336 7.36835 0.631813 7.66683 1 7.66683H3C3.36819 7.66683 3.66667 7.36835 3.66667 7.00016Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M10.7713 2.28618C11.0316 2.02583 11.4537 2.02583 11.7141 2.28618C11.9744 2.54653 11.9744 2.96864 11.7141 3.22899L10.2999 4.64321C10.0395 4.90356 9.61741 4.90356 9.35706 4.64321C9.09671 4.38286 9.09671 3.96075 9.35706 3.7004L10.7713 2.28618Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M4.64296 9.35715C4.38261 9.0968 3.9605 9.0968 3.70015 9.35715L2.28593 10.7714C2.02558 11.0317 2.02558 11.4538 2.28593 11.7142C2.54628 11.9745 2.96839 11.9745 3.22874 11.7142L4.64296 10.3C4.90331 10.0396 4.90331 9.6175 4.64296 9.35715Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M11.7141 10.7714C11.9744 11.0318 11.9744 11.4539 11.7141 11.7142C11.4537 11.9746 11.0316 11.9746 10.7713 11.7142L9.35704 10.3C9.09669 10.0397 9.09669 9.61757 9.35704 9.35722C9.61739 9.09687 10.0395 9.09687 10.2999 9.35722L11.7141 10.7714Z"
                        fill="#FCFCFD"
                      />
                      <path
                        d="M4.64302 4.64312C4.90337 4.38277 4.90337 3.96066 4.64302 3.70031L3.22881 2.28609C2.96846 2.02574 2.54635 2.02574 2.286 2.28609C2.02565 2.54644 2.02565 2.96855 2.286 3.2289L3.70021 4.64312C3.96056 4.90347 4.38267 4.90347 4.64302 4.64312Z"
                        fill="#FCFCFD"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "12%",
              borderWidth: "0.1rem",
              height: "38%",
              borderStyle: "solid",
              borderColor: "var(--borderColor)",
            }}
          >
            <h3 style={{ color: "white", marginBottom: "10%" }}>Preview</h3>
            <img
              style={{ width: "100%" }}
              width={230}
              src="/images/productimg.png"
            />

            <div>
              <div className="personalcardText">
                <div>
                  <h4 style={{ color: "white", fontSize: "1rem" }}>
                    Ardbeg 25-Year -{" "}
                  </h4>{" "}
                  <h4 style={{ color: "white", fontSize: "1rem" }}>
                    Old Bourbon Oak
                  </h4>
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
            <div className="personalcardText2">
              <h4 style={{ color: "#CF9658", fontSize: "0.8rem" }}>
                Flavor Profile
              </h4>
              <h4 style={{ color: "white", fontSize: "0.8rem" }}>
                Peaty, Smoky, Floral
              </h4>
            </div>
            <h4
              style={{
                color: "var(--background2)",
                marginTop: "5%",
                fontSize: "1.2rem",
              }}
            >
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
                  d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#D2A163"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.29289 8.29289C8.68342 7.90237 9.31658 7.90237 9.70711 8.29289L12 10.5858L14.2929 8.29289C14.6834 7.90237 15.3166 7.90237 15.7071 8.29289C16.0976 8.68342 16.0976 9.31658 15.7071 9.70711L13.4142 12L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L12 13.4142L9.70711 15.7071C9.31658 16.0976 8.68342 16.0976 8.29289 15.7071C7.90237 15.3166 7.90237 14.6834 8.29289 14.2929L10.5858 12L8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289Z"
                  fill="#D2A163"
                />
              </svg>{" "}
              CLEAR ALL
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload2;
