import React,{ useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-modal';
import Popup from 'reactjs-popup';
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
const Item = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const [purchaseStep, SetpurchaseStep] =useState('step1');
    const [purchaseStep2, SetpurchaseStep2] =useState('step1');
    const [TransferTokenmodalIsOpen, TransfersetIsOpen2] = React.useState(false);
    const [RemoveSalemodalIsOpen, RemoveSalesetIsOpen] = React.useState(false);
    const [BurnTokenmodalIsOpen, BurnTokensetIsOpen] = React.useState(false);
    const [ReportmodalIsOpen, ReportsetIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
    
    function closeModal() {
      setIsOpen(false);
      SetpurchaseStep("step1")
    }
    function openModal2() {
      setIsOpen2(true);
    }
    
    function closeModal2() {
      setIsOpen2(false);
      SetpurchaseStep2("step1")
    }
    function TransferopenModal() {
      TransfersetIsOpen2(true);
    }
    
    function TransfercloseModal() {
      TransfersetIsOpen2(false);
    }
    function RemoveSaleopenModal() {
      RemoveSalesetIsOpen(true);
    }
    
    function RemoveSalecloseModal() {
      RemoveSalesetIsOpen(false);
    }
    function BurnTokenopenModal() {
      BurnTokensetIsOpen(true);
    }
    
    function BurnTokenCloseModal() {
      BurnTokensetIsOpen(false);
    }
    function ReportopenModal() {
      ReportsetIsOpen(true);
    }
    
    function ReportCloseModal() {
      ReportsetIsOpen(false);
    }
  return (
    <div style={{ background: "var(--background)", padding: "5%" }}>
             <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       {purchaseStep == "step1" ?
        <><div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Check out</h4>
                      <div style={{ cursor: "pointer" }} onClick={closeModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "white" }}>You are about to purchase Whisky Bottle from IWC</p><div
                      style={{
                          display: "flex",
                          fontSize: "0.9rem",
                          justifyContent: "space-between",
                          marginTop: "10%",
                      }}
                  >
                          <p style={{ color: "var(--background2)" }}>0.007</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              ETH
                          </p>

                      </div><hr
                          style={{ color: "white" }}
                      ></hr><div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>Your balance</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              8.498 ETH
                          </p>

                      </div><div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>Service fee</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              0 ETH
                          </p>

                      </div><div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>You will pay</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              0.007 ETH
                          </p>

                      </div><div style={{ marginTop: "15%" }}>

                          <div style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>

                              <div style={{ background: "#311B1C", color: "#A17545", padding: "7%", borderRadius: "15px", width: "100%" }}>
                                  <div style={{ display: "flex" }}>
                                      <svg style={{ marginRight: "2%" }} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 27.167C21.8914 27.167 26.667 22.3914 26.667 16.5003C26.667 10.6093 21.8914 5.83366 16.0003 5.83366C10.1093 5.83366 5.33366 10.6093 5.33366 16.5003C5.33366 22.3914 10.1093 27.167 16.0003 27.167ZM16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z" fill="#A17545" />
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 9.83301C15.2639 9.83301 14.667 10.43 14.667 11.1663C14.667 11.9027 15.2639 12.4997 16.0003 12.4997C16.7367 12.4997 17.3337 11.9027 17.3337 11.1663C17.3337 10.43 16.7367 9.83301 16.0003 9.83301ZM16.0003 15.1663C15.2639 15.1663 14.667 15.7633 14.667 16.4997V21.833C14.667 22.5694 15.2639 23.1663 16.0003 23.1663C16.7367 23.1663 17.3337 22.5694 17.3337 21.833V16.4997C17.3337 15.7633 16.7367 15.1663 16.0003 15.1663Z" fill="#A17545" />
                                      </svg>
                                      <div>
                                          <h4 style={{ fontSize: "1rem" }}>THIS CREATOR IS NOT VERIFIED<br></br>
                                              <span style={{ fontSize: "0.8rem" }}>Purchase this Bottle at your own risk </span></h4>
                                      </div>


                                  </div>
                              </div>

                          </div>
                          <p onClick={()=>SetpurchaseStep("step2")} style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}> I UNDERSTAND, CONTINUE </p>
                          <Button
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                      </div></>: purchaseStep =="step2" ?  <><div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Follow steps</h4>
                      <div style={{ cursor: "pointer" }} onClick={closeModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><div style={{ marginTop: "5%" }}>

                          <div style={{ display: "flex", marginTop: "5%" }}>
                              <div style={{ marginRight: "7%" }}>
                              <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.825 17.996C38.9188 17.8424 39.6909 16.8274 39.4288 15.7544C38.7164 12.8375 37.3539 10.1097 35.4333 7.77944C33.0874 4.93319 30 2.79112 26.5126 1.59005C23.0252 0.388984 19.2735 0.175707 15.6725 0.973799C12.0714 1.77189 8.76118 3.55026 6.10777 6.1123C3.45435 8.67434 1.56112 11.9202 0.637372 15.4911C-0.286373 19.062 -0.204643 22.8188 0.873525 26.3462C1.95169 29.8735 3.9843 33.034 6.74663 35.4783C9.00813 37.4793 11.6866 38.9365 14.5768 39.7507C15.6399 40.0502 16.6813 39.3141 16.8732 38.2263C17.0651 37.1386 16.3331 36.1133 15.2778 35.7873C13.1123 35.1184 11.106 33.9946 9.3973 32.4826C7.18744 30.5272 5.56135 27.9988 4.69882 25.177C3.83629 22.3551 3.7709 19.3496 4.5099 16.4929C5.24889 13.6362 6.76348 11.0395 8.88621 8.98984C11.0089 6.94021 13.6571 5.51751 16.538 4.87904C19.4188 4.24057 22.4201 4.41119 25.2101 5.37204C28 6.33289 30.4699 8.04655 32.3467 10.3235C33.7978 12.0842 34.8507 14.1286 35.4433 16.3162C35.7321 17.3823 36.7312 18.1497 37.825 17.996Z" fill="#46392E"/>
<path d="M38 20.5C39.1046 20.5 40.0104 21.3976 39.9001 22.4967C39.7053 24.4382 39.227 26.3443 38.4776 28.1537C37.4725 30.5802 35.9993 32.785 34.1421 34.6421C32.285 36.4993 30.0802 37.9725 27.6537 38.9776C25.8443 39.727 23.9382 40.2053 21.9967 40.4001C20.8976 40.5104 20 39.6046 20 38.5C20 37.3954 20.8989 36.5129 21.9948 36.3752C23.4105 36.1973 24.7991 35.8304 26.1229 35.2821C28.0641 34.478 29.828 33.2994 31.3137 31.8137C32.7994 30.328 33.978 28.5641 34.7821 26.6229C35.3304 25.2991 35.6973 23.9105 35.8752 22.4948C36.0129 21.3989 36.8954 20.5 38 20.5Z" fill="#CF9658"/>
</svg>

                              </div>
                              <div>
                                  <p style={{ color: "white", marginBottom: "0%" }}>PURCHASING</p>
                                  <p style={{ color: "var(--background2)" }}>Sending transaction with your wallet</p>

                              </div>
                              

                          </div>
                          <div style={{ marginTop: "15%" }}>

<div style={{ display: "flex", marginTop: "5%", justifyContent: "center" }}>

    <div style={{ background: "#311B1C", color: "#A17545", padding: "5%", borderRadius: "15px", width: "100%" }}>
        <div style={{ display: "flex" }}>
            <svg style={{ marginRight: "1%" }} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 27.167C21.8914 27.167 26.667 22.3914 26.667 16.5003C26.667 10.6093 21.8914 5.83366 16.0003 5.83366C10.1093 5.83366 5.33366 10.6093 5.33366 16.5003C5.33366 22.3914 10.1093 27.167 16.0003 27.167ZM16.0003 29.8337C23.3641 29.8337 29.3337 23.8641 29.3337 16.5003C29.3337 9.13653 23.3641 3.16699 16.0003 3.16699C8.63653 3.16699 2.66699 9.13653 2.66699 16.5003C2.66699 23.8641 8.63653 29.8337 16.0003 29.8337Z" fill="#A17545" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0003 9.83301C15.2639 9.83301 14.667 10.43 14.667 11.1663C14.667 11.9027 15.2639 12.4997 16.0003 12.4997C16.7367 12.4997 17.3337 11.9027 17.3337 11.1663C17.3337 10.43 16.7367 9.83301 16.0003 9.83301ZM16.0003 15.1663C15.2639 15.1663 14.667 15.7633 14.667 16.4997V21.833C14.667 22.5694 15.2639 23.1663 16.0003 23.1663C16.7367 23.1663 17.3337 22.5694 17.3337 21.833V16.4997C17.3337 15.7633 16.7367 15.1663 16.0003 15.1663Z" fill="#A17545" />
            </svg>
            <div style={{display:"flex",alignItems:"center"}}>
                <div>
                <h4 style={{ fontSize: "0.7rem" }}>THIS CREATOR IS NOT VERIFIED<br></br>
                    <span style={{ fontSize: "0.8rem" }}>Purchase this Bottle at your own risk </span></h4>
                </div>
                    <img style={{marginLeft:"5%"}} height={50} width={50} src="/images/profile.png" />
            </div>


        </div>
    </div>

</div>
<p onClick={()=>SetpurchaseStep("step3")} style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}> I UNDERSTAND, CONTINUE </p>
<Button
    style={{
        color: "white",
        backgroundColor: "var(--background)",
        height: "2.5rem",
        marginTop: "1rem",
        marginRight: "1rem",
        borderColor: "var(--borderColor)",
        borderRadius: "0%",
        width: "100%",
        borderWidth: "0.1rem"
    }}
>
    CANCEL
</Button>{" "}
</div>
                      </div></>:purchaseStep =="step3" ?  <><div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}></h4>
                      <div style={{ cursor: "pointer" }} onClick={closeModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><div style={{ marginTop: "5%" }}>

                     <h1 style={{textAlign:"center",color:"white"}}>Yay! 🎉</h1>
                     <p style={{textAlign:"center",color:"white",marginTop:"10%"}}>You successfully purchasedWhisky Bottle from IWC</p>
                     <div style={{borderRadius:"15px", borderStyle:"solid",borderWidth:"0.1rem",borderColor:"var(--borderColor"}}>
                    <div style={{display:"flex",justifyContent:"space-between",color:"#676B79",padding:"5%",paddingBottom:"1%"}}>
                        <p>Status</p>
                        <p>Transaction ID</p>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",color:"#676B79",padding:"5%",paddingTop:"1%"}}>
                        <p style={{color:"#9757D7"}}>Processing</p>
                        <p style={{color:"white"}}>0msx836930...87r398</p>
                    </div>
                     </div>
                     <p style={{marginTop:"10%" ,color:"white",textAlign:"center"}}>Time to show-off</p>
                     <div style={{textAlign:"center"}}>
                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32ZM24 34C29.5228 34 34 29.5228 34 24C34 18.4771 29.5228 14 24 14C18.4771 14 14 18.4771 14 24C14 29.5228 18.4771 34 24 34Z" fill="#D2A163"/>
<path d="M24 22C24 21.4477 24.4477 21 25 21H26C26.5523 21 27 20.5523 27 20C27 19.4477 26.5523 19 26 19H25C23.3431 19 22 20.3432 22 22V24H21C20.4477 24 20 24.4477 20 25C20 25.5523 20.4477 26 21 26H22V32C22 32.5523 22.4477 33 23 33C23.5523 33 24 32.5523 24 32V26H26C26.5523 26 27 25.5523 27 25C27 24.4477 26.5523 24 26 24H24V22Z" fill="#D2A163"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="#46392E" stroke-width="2"/>
</svg>
<svg  style={{marginLeft:"5%"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.181 25.9998C13.5273 26.0045 12.4598 27.8884 13.4786 29.3157C14.9376 31.3596 17.5833 33 22.0003 33C28.8454 33 34.34 27.4217 33.5708 20.8311L34.6977 18.5773C35.4792 17.0143 34.1212 15.2362 32.4076 15.5789L30.9188 15.8767C30.5241 15.6684 30.1156 15.5113 29.7665 15.3974C29.0861 15.1755 28.2626 15 27.5003 15C26.131 15 24.9492 15.3513 24.01 16.0559C23.0815 16.7526 22.5585 17.6682 22.2715 18.509C22.1392 18.8966 22.0511 19.2853 21.9946 19.6584C21.4633 19.4912 20.9216 19.2663 20.3913 18.9915C19.1881 18.3683 18.2151 17.5782 17.6663 16.8855C16.7455 15.7233 14.794 15.8095 14.1092 17.3202C13.1441 19.4495 13.4089 21.9735 14.2764 24.0129C14.5672 24.6964 14.9454 25.3721 15.4075 25.9983C15.3284 25.9992 15.2527 25.9996 15.181 25.9998ZM22.0002 31C18.1369 31 16.1392 29.6007 15.1063 28.1537C15.0599 28.0887 15.1067 28 15.1865 27.9998C16.2374 27.9968 18.3944 27.9471 19.817 27.1145C19.8906 27.0714 19.8744 26.9629 19.7936 26.9358C16.4774 25.8208 14.5924 21.0986 15.9307 18.1459C15.9614 18.0782 16.0524 18.0693 16.0986 18.1275C17.6275 20.0572 20.9703 21.9472 23.8786 21.9989C23.9417 22 23.9894 21.9427 23.9798 21.8803C23.8626 21.1205 23.4151 17 27.5002 17C28.4757 17 29.9271 17.4758 30.4617 17.9633C30.4864 17.9858 30.5199 17.9961 30.5527 17.9895L32.7997 17.5401C32.8813 17.5238 32.946 17.6084 32.9088 17.6829L31.5151 20.4702C31.5054 20.4895 31.5024 20.5118 31.5061 20.5331C32.4822 26.02 27.9882 31 22.0002 31Z" fill="#D2A163"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="#46392E" stroke-width="2"/>
</svg>
<svg  style={{marginLeft:"5%"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M28 16H20C17.7909 16 16 17.7909 16 20V28C16 30.2091 17.7909 32 20 32H28C30.2091 32 32 30.2091 32 28V20C32 17.7909 30.2091 16 28 16ZM20 14C16.6863 14 14 16.6863 14 20V28C14 31.3137 16.6863 34 20 34H28C31.3137 34 34 31.3137 34 28V20C34 16.6863 31.3137 14 28 14H20Z" fill="#D2A163"/>
<path d="M29 20C29.5523 20 30 19.5523 30 19C30 18.4477 29.5523 18 29 18C28.4477 18 28 18.4477 28 19C28 19.5523 28.4477 20 29 20Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 24C29 26.7614 26.7614 29 24 29C21.2386 29 19 26.7614 19 24C19 21.2386 21.2386 19 24 19C26.7614 19 29 21.2386 29 24ZM27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21C25.6569 21 27 22.3431 27 24Z" fill="#D2A163"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="#46392E" stroke-width="2"/>
</svg>
<svg style={{marginLeft:"5%"}} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32ZM24 34C29.5228 34 34 29.5228 34 24C34 18.4771 29.5228 14 24 14C18.4771 14 14 18.4771 14 24C14 29.5228 18.4771 34 24 34Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8779 21.8539C20.2973 22.9183 20.2786 24.3212 20.8944 25.5528C21.1414 26.0468 20.9412 26.6474 20.4472 26.8944C19.9532 27.1414 19.3525 26.9412 19.1056 26.4472C18.2214 24.6788 18.2027 22.5817 19.1221 20.8961C20.0643 19.1687 21.921 18 24.5 18C26.457 18 27.9423 18.882 28.8692 20.1696C29.7746 21.4276 30.1239 23.0338 29.9538 24.5192C29.7836 26.0056 29.0762 27.4847 27.7299 28.3746C26.5809 29.134 25.1012 29.3769 23.3753 28.9852L22.4635 32.2676C22.3157 32.7998 21.7645 33.1113 21.2323 32.9635C20.7002 32.8157 20.3887 32.2645 20.5365 31.7324L21.7158 27.4868C21.7175 27.4804 21.7193 27.4739 21.7212 27.4675L23.0365 22.7324C23.1843 22.2002 23.7355 21.8887 24.2677 22.0365C24.7998 22.1843 25.1113 22.7355 24.9635 23.2676L23.9112 27.056C25.1622 27.3211 26.0396 27.0944 26.627 26.7061C27.37 26.215 27.8472 25.3358 27.9668 24.2917C28.0864 23.2467 27.8305 22.1502 27.2459 21.338C26.6827 20.5555 25.7931 20 24.5 20C22.5791 20 21.4357 20.8313 20.8779 21.8539Z" fill="#D2A163"/>
<rect x="1" y="1" width="46" height="46" rx="23" stroke="#46392E" stroke-width="2"/>
</svg>

                     </div>
                      </div></> :null  }
      </Modal>

      {/* place bid  */}
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
       {purchaseStep2 == "step1" ?
        <><div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
                      <div style={{ cursor: "pointer" }} onClick={closeModal2}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div>   <div style={{ marginTop: "15%" }}>
                    <div style={{textAlign:"center"}}>
                    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="80" height="80" rx="40" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M47 33.5H33C31.8954 33.5 31 34.3954 31 35.5V45.5C31 46.6046 31.8954 47.5 33 47.5H47C48.1046 47.5 49 46.6046 49 45.5V35.5C49 34.3954 48.1046 33.5 47 33.5ZM33 31.5C30.7909 31.5 29 33.2909 29 35.5V45.5C29 47.7091 30.7909 49.5 33 49.5H47C49.2091 49.5 51 47.7091 51 45.5V35.5C51 33.2909 49.2091 31.5 47 31.5H33Z" fill="#5F4529"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41 40.5C41 37.7386 43.2386 35.5 46 35.5H50C50.5523 35.5 51 35.9477 51 36.5C51 37.0523 50.5523 37.5 50 37.5H46C44.3431 37.5 43 38.8431 43 40.5C43 42.1569 44.3431 43.5 46 43.5H50C50.5523 43.5 51 43.9477 51 44.5C51 45.0523 50.5523 45.5 50 45.5H46C43.2386 45.5 41 43.2614 41 40.5Z" fill="#5F4529"/>
<path d="M47 40.5C47 41.0523 46.5523 41.5 46 41.5C45.4477 41.5 45 41.0523 45 40.5C45 39.9477 45.4477 39.5 46 39.5C46.5523 39.5 47 39.9477 47 40.5Z" fill="#5F4529"/>
</svg>

                    </div>
    <p style={{color:"white",textAlign:"center",marginTop:"7%",marginBottom:"10%"}}>You need to connect your wallet first to sign messages and send transaction to Ethereum network</p>
                          <p onClick={()=>SetpurchaseStep2("step2")} style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}>CONNECT WALLET</p>
                          <Button
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                      </div></>: purchaseStep2 =="step2" ? <><div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Place bid</h4>
                      <div style={{ cursor: "pointer" }} onClick={closeModal2}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "white",marginTop:"5%" }}>You are about to place a bit for Whisky Bottle from IWC</p>
                  <div
                      style={{
                          display: "flex",
                          fontSize: "0.9rem",
                          justifyContent: "space-between",
                          marginTop: "10%",
                      }}
                  >
                      </div>
                      <h4 style={{color:"white"}}>Your bid</h4>
                      <div style={{display:"flex",justifyContent:"space-between",height:"1%"}}>
                      <input placeholder="Enter Bid"
                          style={{background:"var(--background)",border:"none",outline:"none",color:"var(--background2)"}} />
                          <p style={{color:"white"}}>ETH</p>
                      </div>
                      <hr
                          style={{ color: "white" }}
                      ></hr>
                         <div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>Your balance</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              8.498 ETH
                          </p>

                      </div><div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>Service fee</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              0 ETH
                          </p>

                      </div><div
                          style={{
                              display: "flex",
                              fontSize: "0.9rem",
                              justifyContent: "space-between",
                          }}
                      >
                          <p style={{ color: "var(--background2)" }}>Total bid amount</p>
                          <p style={{ color: "white", textAlign: "left" }}>
                              0.007 ETH
                          </p>

                      </div><div style={{ marginTop: "15%" }}>

                          <p onClick={()=>SetpurchaseStep2("step3")} style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}>
                            PLACE BID </p>
                          <Button
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                      </div></>:purchaseStep2 =="step3" ?  <> <div style={{display:"flex",justifyContent:"space-between"}}>
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
<rect y="0.5" width="48" height="48" rx="24" fill="#46392E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 14.5C14.4477 14.5 14 14.9477 14 15.5C14 16.0523 14.4477 16.5 15 16.5H16V30.5C16 32.7091 17.7909 34.5 20 34.5H28C30.2091 34.5 32 32.7091 32 30.5V16.5H33C33.5523 16.5 34 16.0523 34 15.5C34 14.9477 33.5523 14.5 33 14.5H15ZM30 16.5H18V30.5C18 31.6046 18.8954 32.5 20 32.5H28C29.1046 32.5 30 31.6046 30 30.5V16.5Z" fill="#D2A163"/>
<path d="M24.7071 19.7929C24.3166 19.4024 23.6834 19.4024 23.2929 19.7929L20.2929 22.7929C19.9024 23.1834 19.9024 23.8166 20.2929 24.2071C20.6834 24.5976 21.3166 24.5976 21.7071 24.2071L23 22.9142V28.5C23 29.0523 23.4477 29.5 24 29.5C24.5523 29.5 25 29.0523 25 28.5V22.9142L26.2929 24.2071C26.6834 24.5976 27.3166 24.5976 27.7071 24.2071C28.0976 23.8166 28.0976 23.1834 27.7071 22.7929L24.7071 19.7929Z" fill="#D2A163"/>
</svg>

            </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>DEPOSIT ETH</p>
<p  style={{color:"var(--background2)"}} >Send transaction with your wallet</p>

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
                Start now
              </Button>{" "}
        </div>
        <div style={{marginTop:"15%"}}>
   
   <div style={{display:"flex",marginTop:"5%"}}>
     <div style={{marginRight:"7%"}}>
     <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="24" fill="#46392E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.7071 19.7929C31.0976 20.1834 31.0976 20.8166 30.7071 21.2071L22.7071 29.2071C22.3166 29.5976 21.6834 29.5976 21.2929 29.2071L17.2929 25.2071C16.9024 24.8166 16.9024 24.1834 17.2929 23.7929C17.6834 23.4024 18.3166 23.4024 18.7071 23.7929L22 27.0858L29.2929 19.7929C29.6834 19.4024 30.3166 19.4024 30.7071 19.7929Z" fill="#D2A163"/>
</svg>


       </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>APPROVE</p>
<p  style={{color:"var(--background2)"}} >Checking balance and approving</p>

</div>

</div>
<Button
                style={{
                  color: "white",
                  backgroundColor: "var(--background2)",
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
   
   <div style={{display:"flex",marginTop:"1%"}}>
   <div style={{marginRight:"7%"}}>
   <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="48" height="48" rx="24" fill="#46392E"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0228 30.8979L14.7474 27.6369C14.9124 26.8943 15.2858 26.2142 15.8237 25.6762L25.6717 15.8283C27.2338 14.2662 29.7664 14.2662 31.3285 15.8283L32.6717 17.1715C34.2338 18.7336 34.2338 21.2662 32.6717 22.8283L22.8237 32.6762C22.2858 33.2142 21.6056 33.5875 20.863 33.7526L17.6021 34.4772C15.4586 34.9535 13.5464 33.0414 14.0228 30.8979ZM16.6998 28.0708L15.9751 31.3317C15.8164 32.0462 16.4538 32.6836 17.1683 32.5248L20.4292 31.8002C20.7863 31.7208 21.1145 31.5451 21.3783 31.2925L17.2074 27.1216C16.9548 27.3855 16.7791 27.7137 16.6998 28.0708ZM18.6213 25.7071L22.7929 29.8787L28.3787 24.2929L24.2071 20.1213L18.6213 25.7071ZM31.2575 21.4141L29.7929 22.8787L25.6213 18.7071L27.0859 17.2425C27.8669 16.4615 29.1333 16.4615 29.9143 17.2425L31.2575 18.5857C32.0385 19.3667 32.0385 20.633 31.2575 21.4141Z" fill="#D2A163"/>
</svg>


       </div>
<div>
<p style={{color:"white",marginBottom:"0%"}}>SIGNATURE</p>
<p  style={{color:"var(--background2)"}} >Create a signature to place a bit</p>

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
   </div></> :null  }
      </Modal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "45% 40% 6%",
          gap: "4%",
        }}
      >
        <div
          style={{
            backgroundImage: "url(/images/productimg.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "100%",
          }}
        >
                <Button
                style={{
                  borderRadius: "0rem",
                  color: "white",
                  borderColor: "var(--background2)",
                  height: "2.5rem",
                  backgroundColor: "#A17545",
                  marginTop: "2%",
                  marginLeft:"2%",
                  fontSize:"0.8rem"
                }}
              >
                ART
              </Button>
              <Button
                style={{
                  borderRadius: "0rem",
                  color: "black",
                  borderColor: "var(--background2)",
                  height: "2.5rem",
                  backgroundColor: "var(--background2)",
                  marginTop: "2%",
                  marginLeft:"1%",                  fontSize:"0.8rem"

                }}
              >
                UNLOCKABLE
              </Button>

        </div>
        <div>
          <h3 style={{ color: "white", fontFamily: "fright" }}>Macallan</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "20% 20%",
              width: "100%",
            }}
          >
            <p
              style={{
                borderWidth: "0.1rem",
                borderStyle: "solid",
                borderColor: "var(--background2)",
                color: "var(--background2)",
                textAlign: "center",
                fontSize: "0.8rem",
              }}
            >
              30-Year-Old
            </p>
            <p
              style={{
                borderWidth: "0.1rem",
                borderStyle: "solid",
                borderColor: "var(--borderColor)",
                color: "var(--background2)",
                textAlign: "center",
                fontSize: "0.8rem",
                marginLeft: "2%",
              }}
            >
              Sherry Oak
            </p>
          </div>
          <div
            style={{
              display: "flex",
              color: "var(--background2)",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
              borderWidth: "0.1rem",
              padding: "1%",
              width: "100%",
              paddingBottom: "0%",
              height: "5%",
              fontSize: "0.7rem",
            }}
          >
            <Button
              style={{
                borderRadius: "0rem",
                color: "black",
                borderColor: "var(--borderColor)",
                backgroundColor: "var(--background2)",
                height: "1.5rem",
                paddingLeft: "10%",
                paddingRight: "10%",
                fontSize: "0.7rem",
              }}
            >
              INFO
            </Button>
            <p
              style={{
                marginLeft: "3%",
                padding: "0.2rem",
                paddingLeft: "8%",
                paddingRight: "8%",
                paddingBottom: "0%",
              }}
            >
              OWNERS
            </p>
            <p
              style={{
                marginLeft: "3%",
                padding: "0.2rem",
                paddingLeft: "8%",
                paddingRight: "8%",
                paddingBottom: "0%",
              }}
            >
              HISTORY
            </p>
            <p
              style={{
                marginLeft: "3%",
                padding: "0.2rem",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingBottom: "0%",
              }}
            >
              BIDS
            </p>
          </div>
          <p style={{ marginTop: "5%", color: "white" }}>DESCRIPTION</p>
          <p style={{ color: "var(--background2)", fontSize: "0.9rem" }}>
            This exceptional Macallan 30-Year-Old Sherry Oak is a limited
            edition release, with only 500 bottles produced. Aged in
            sherry-seasoned oak casks, it boasts rich flavors and a deep amber
            hue, making it a highly sought-after collectible among whiskey
            connoisseurs.
          </p>

          <div
            style={{
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "space-between",
              marginTop: "5%",
            }}
          >
            <p style={{ color: "var(--background2)" }}>RARITY LEVEL</p>
            <p style={{ color: "white", textAlign: "left" }}>LIMITED EDITION</p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "var(--background2)" }}>RARITY INDEX</p>
            <p style={{ color: "white", textAlign: "end" }}>92/100</p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "var(--background2)" }}>RARITY RANKING</p>
            <p style={{ color: "white", textAlign: "left" }}>#5 OUT OF 100</p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "var(--background2)" }}>BOTTLING DATE</p>
            <p style={{ color: "white", textAlign: "left" }}>JUNE 1990</p>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "0.9rem",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "var(--background2)" }}>Additional Details</p>
            <p style={{ color: "white", textAlign: "left" }}>
              RARE RELEASE, 1 OF 100
            </p>
          </div>
          <div
            style={{
              padding: "5%",
              background: "var(--background3)",
              borderColor: "var(--borderColor)",
              borderStyle: "solid",
              borderWidth: "0.1rem",
            }}
          >
            <div style={{ display: "flex",padding:"3%" }}>
              <img height={70} src="/images/profile.png" />
              <div>
                <p
                  style={{
                    color: "var(--background2)",
                    marginLeft: "5%",
                    marginBottom: "0%",
                  }}
                >
                  Highest bid by HIGHEST BID BY
                  <span style={{ color: "white" }}> KOHAKU TORA 1.46 ETH </span>
                  $2,764.89
                </p>
              </div>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"40% 40%",gap:"10%",marginLeft:"5%"}}>
              <Button
              onClick={openModal}
                style={{
                  borderRadius: "0rem",
                  color: "white",
                  borderColor: "var(--borderColor)",
                  height: "2.5rem",
                  backgroundColor: "var(--background)",
                  width: "100%",
                  marginTop: "5%",
                }}
              >
                PURCHASE NOW
              </Button>
              <Button
              onClick={openModal2}
                style={{
                  borderRadius: "0rem",
                  color: "white",
                  borderColor: "var(--background2)",
                  height: "2.5rem",
                  backgroundColor: "var(--background3)",
                  width: "100%",
                  marginTop: "5%",
                }}
              >
                PLACE A BID{" "}
              </Button>
            </div>
            <p style={{color:"var(--background2)",marginLeft:"5%",marginTop:"5%"}}>SERVICE FEE
<span style={{color:"white"}}>1.5% </span>
2.563 ETH
$4,540.62</p>
          </div>
        </div>
        <div>
            <div style={{marginTop:"3%" ,borderWidth:"0.1rem",background:"var(--borderColor)",textAlign:"center",width:"50%",padding:"5%"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#D2A163"/>
</svg>

            </div>
            <div style={{marginTop:"20%",borderWidth:"0.1rem",borderStyle:"solid" ,borderColor:"var(--borderColor)",width:"50%",textAlign:"center",padding:"5%"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.99858 10.0396C9.02798 10.5911 8.60474 11.062 8.05324 11.0914C7.30055 11.1315 6.7044 11.1806 6.23854 11.2297C5.61292 11.2957 5.23278 11.68 5.16959 12.2328C5.07886 13.0264 5 14.2275 5 15.9997C5 17.772 5.07886 18.973 5.16959 19.7666C5.23289 20.3204 5.61207 20.7036 6.23675 20.7695C7.33078 20.885 9.13925 20.9997 12 20.9997C14.8608 20.9997 16.6692 20.885 17.7632 20.7695C18.3879 20.7036 18.7671 20.3204 18.8304 19.7666C18.9211 18.973 19 17.7719 19 15.9997C19 14.2275 18.9211 13.0264 18.8304 12.2328C18.7672 11.68 18.3871 11.2957 17.7615 11.2297C17.2956 11.1806 16.6995 11.1315 15.9468 11.0914C15.3953 11.062 14.972 10.5911 15.0014 10.0396C15.0308 9.48806 15.5017 9.06482 16.0532 9.09422C16.8361 9.13595 17.4669 9.18757 17.9712 9.24075C19.4556 9.3973 20.6397 10.4504 20.8175 12.0056C20.9188 12.892 21 14.1712 21 15.9997C21 17.8282 20.9188 19.1074 20.8175 19.9938C20.6398 21.5481 19.4585 22.6017 17.9732 22.7585C16.7919 22.8831 14.9108 22.9997 12 22.9997C9.08922 22.9997 7.20806 22.8831 6.02684 22.7585C4.54151 22.6017 3.36021 21.5481 3.18253 19.9938C3.0812 19.1074 3 17.8282 3 15.9997C3 14.1712 3.0812 12.892 3.18253 12.0056C3.36031 10.4504 4.54436 9.3973 6.02877 9.24075C6.53306 9.18757 7.16393 9.13595 7.94676 9.09422C8.49827 9.06482 8.96918 9.48806 8.99858 10.0396Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 6.20711C8.81658 6.59763 8.18342 6.59763 7.79289 6.20711C7.40237 5.81658 7.40237 5.18342 7.79289 4.79289L11.2929 1.29289C11.6834 0.902369 12.3166 0.902369 12.7071 1.29289L16.2071 4.79289C16.5976 5.18342 16.5976 5.81658 16.2071 6.20711C15.8166 6.59763 15.1834 6.59763 14.7929 6.20711L13 4.41421V14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V4.41421L9.20711 6.20711Z" fill="#D2A163"/>
</svg>


            </div> 
            <div style={{marginTop:"20%",borderWidth:"0.1rem",borderStyle:"solid" ,borderColor:"var(--borderColor)",width:"50%",textAlign:"center",padding:"5%"}}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.80957C10.8321 3.6888 9.24649 3 7.5 3C3.91015 3 1 5.91015 1 9.5C1 15.8683 7.97034 19.385 10.8138 20.5547C11.5796 20.8697 12.4204 20.8697 13.1862 20.5547C16.0297 19.385 23 15.8682 23 9.5C23 5.91015 20.0899 3 16.5 3C14.7535 3 13.1679 3.6888 12 4.80957Z" fill="#A17545"/>
</svg>



            </div> 
            <div style={{marginTop:"20%",borderWidth:"0.1rem",borderStyle:"solid" ,borderColor:"var(--borderColor)",width:"50%",textAlign:"center",padding:"5%"}}>
         
<Popup trigger={   <svg style={{cursor:"pointer"}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_133_2884)">
<path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="#D2A163"/>
</g>
<defs>
<clipPath id="clip0_133_2884">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg> } position="bottom top">
<div style={{background:"var(--background3)",padding:"6%",width:"230px"}}> 

 <div style={{display:"flex",marginTop:"10%"}}>
 <svg style={{marginRight:"5%"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 16.668C13.6812 16.668 16.666 13.6832 16.666 10.0013C16.666 6.3194 13.6812 3.33464 9.99935 3.33464C6.31745 3.33464 3.33268 6.3194 3.33268 10.0013C3.33268 13.6832 6.31745 16.668 9.99935 16.668ZM9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z" fill="#D2A163"/>
<path d="M9.16602 5.83431C9.16602 5.37407 9.53911 5.00098 9.99935 5.00098C10.4596 5.00098 10.8327 5.37407 10.8327 5.83431C12.2134 5.83431 13.3327 6.9536 13.3327 8.33431C13.3327 8.79455 12.9596 9.16764 12.4993 9.16764C12.0391 9.16764 11.666 8.79455 11.666 8.33431C11.666 7.87407 11.2929 7.50098 10.8327 7.50098H8.9522C8.61005 7.50098 8.33268 7.77834 8.33268 8.12049C8.33268 8.38715 8.50332 8.62389 8.75629 8.70821L11.7695 9.7126C12.703 10.0238 13.3327 10.8974 13.3327 11.8815C13.3327 13.1441 12.3091 14.1676 11.0465 14.1676H10.8327C10.8327 14.6279 10.4596 15.001 9.99935 15.001C9.53911 15.001 9.16602 14.6279 9.16602 14.1676C7.7853 14.1676 6.66602 13.0484 6.66602 11.6676C6.66602 11.2074 7.03911 10.8343 7.49935 10.8343C7.95959 10.8343 8.33268 11.2074 8.33268 11.6676C8.33268 12.1279 8.70578 12.501 9.16602 12.501H11.0465C11.3886 12.501 11.666 12.2236 11.666 11.8815C11.666 11.6148 11.4954 11.3781 11.2424 11.2937L8.22924 10.2894C7.2957 9.97817 6.66602 9.10453 6.66602 8.12049C6.66602 6.85787 7.68957 5.83431 8.9522 5.83431H9.16602Z" fill="#D2A163"/>
</svg>

<p style={{color:"var(--background2)"}}>  Change price
 </p>

 </div>
 <hr style={{ color: "white",margin:"0%" }} />
 <div style={{display:"flex",marginTop:"6%"}}>

 <svg style={{marginRight:"5%"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 3.33464C8.37249 3.33464 6.87282 3.46881 5.6691 3.62778C4.58579 3.77086 3.7689 4.58774 3.62583 5.67106C3.46685 6.87477 3.33268 8.37444 3.33268 10.0013C3.33268 11.6282 3.46685 13.1278 3.62583 14.3315C3.7689 15.4149 4.58579 16.2317 5.6691 16.3748C6.87282 16.5338 8.37249 16.668 9.99935 16.668C11.6262 16.668 13.1259 16.5338 14.3296 16.3748C15.4129 16.2317 16.2298 15.4149 16.3729 14.3315C16.5318 13.1278 16.666 11.6282 16.666 10.0013C16.666 8.37444 16.5318 6.87477 16.3729 5.67106C16.2298 4.58774 15.4129 3.77086 14.3296 3.62778C13.1259 3.46881 11.6262 3.33464 9.99935 3.33464ZM5.45088 1.97546C3.62022 2.21724 2.21529 3.62217 1.97351 5.45283C1.80729 6.71137 1.66602 8.2857 1.66602 10.0013C1.66602 11.7169 1.80729 13.2912 1.97351 14.5498C2.21529 16.3804 3.62022 17.7854 5.45088 18.0271C6.70942 18.1934 8.28374 18.3346 9.99935 18.3346C11.715 18.3346 13.2893 18.1934 14.5478 18.0271C16.3785 17.7854 17.7834 16.3804 18.0252 14.5498C18.1914 13.2912 18.3327 11.7169 18.3327 10.0013C18.3327 8.2857 18.1914 6.71137 18.0252 5.45284C17.7834 3.62217 16.3785 2.21724 14.5478 1.97546C13.2893 1.80925 11.715 1.66797 9.99935 1.66797C8.28374 1.66797 6.70942 1.80925 5.45088 1.97546Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16074 6.49505C7.83531 6.82049 7.83531 7.34813 8.16074 7.67357L10.4882 10.001L8.16074 12.3284C7.83531 12.6538 7.83531 13.1815 8.16074 13.5069C8.48618 13.8323 9.01382 13.8323 9.33926 13.5069L12.2559 10.5902C12.5814 10.2648 12.5814 9.73716 12.2559 9.41172L9.33926 6.49505C9.01382 6.16962 8.48618 6.16962 8.16074 6.49505Z" fill="#D2A163"/>
</svg>

<p onClick={TransferopenModal} style={{color:"var(--background2)",cursor:"pointer"}}> Transfer token
 </p>
 
 </div>
 <hr style={{ color: "white",margin:"0%" }} />
 <div style={{display:"flex",marginTop:"6%"}}>
 <svg style={{marginRight:"5%"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 16.668C13.6812 16.668 16.666 13.6832 16.666 10.0013C16.666 6.3194 13.6812 3.33464 9.99935 3.33464C6.31745 3.33464 3.33268 6.3194 3.33268 10.0013C3.33268 13.6832 6.31745 16.668 9.99935 16.668ZM9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91009 6.91205C7.23553 6.58661 7.76317 6.58661 8.0886 6.91205L9.99935 8.82279L11.9101 6.91205C12.2355 6.58661 12.7632 6.58661 13.0886 6.91205C13.414 7.23748 13.414 7.76512 13.0886 8.09056L11.1779 10.0013L13.0886 11.912C13.414 12.2375 13.414 12.7651 13.0886 13.0906C12.7632 13.416 12.2355 13.416 11.9101 13.0906L9.99935 11.1798L8.0886 13.0906C7.76317 13.416 7.23553 13.416 6.91009 13.0906C6.58466 12.7651 6.58466 12.2375 6.91009 11.912L8.82084 10.0013L6.91009 8.09056C6.58466 7.76512 6.58466 7.23748 6.91009 6.91205Z" fill="#D2A163"/>
</svg>


<p style={{color:"var(--background2)",cursor:"pointer"}} onClick={RemoveSaleopenModal}> Remove from sale
 </p>

 </div>
 <hr style={{ color: "white",margin:"0%" }} />
 <div style={{display:"flex",marginTop:"6%"}}>
 <svg style={{marginRight:"5%"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346ZM8.0886 6.91205C7.76317 6.58661 7.23553 6.58661 6.91009 6.91205C6.58466 7.23748 6.58466 7.76512 6.91009 8.09056L8.82084 10.0013L6.91009 11.912C6.58466 12.2375 6.58466 12.7651 6.91009 13.0906C7.23553 13.416 7.76317 13.416 8.0886 13.0906L9.99935 11.1798L11.9101 13.0906C12.2355 13.416 12.7632 13.416 13.0886 13.0906C13.414 12.7651 13.414 12.2375 13.0886 11.912L11.1779 10.0013L13.0886 8.09056C13.414 7.76512 13.414 7.23748 13.0886 6.91205C12.7632 6.58661 12.2355 6.58661 11.9101 6.91205L9.99935 8.82279L8.0886 6.91205Z" fill="#A17545"/>
</svg>

<p onClick={BurnTokenopenModal} style={{color:"var(--background2)",cursor:"pointer"}}> Burn token
 </p>

 </div>
 <hr style={{ color: "white",margin:"0%" }} />

 <div style={{display:"flex",marginTop:"6%"}}>
 <svg  style={{marginRight:"5%"}} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 16.668C13.6812 16.668 16.666 13.6832 16.666 10.0013C16.666 6.3194 13.6812 3.33464 9.99935 3.33464C6.31745 3.33464 3.33268 6.3194 3.33268 10.0013C3.33268 13.6832 6.31745 16.668 9.99935 16.668ZM9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z" fill="#D2A163"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99935 5.83398C9.53911 5.83398 9.16602 6.20708 9.16602 6.66732C9.16602 7.12756 9.53911 7.50065 9.99935 7.50065C10.4596 7.50065 10.8327 7.12756 10.8327 6.66732C10.8327 6.20708 10.4596 5.83398 9.99935 5.83398ZM9.99935 9.16732C9.53911 9.16732 9.16602 9.54041 9.16602 10.0007V13.334C9.16602 13.7942 9.53911 14.1673 9.99935 14.1673C10.4596 14.1673 10.8327 13.7942 10.8327 13.334V10.0007C10.8327 9.54041 10.4596 9.16732 9.99935 9.16732Z" fill="#D2A163"/>
</svg>


<p onClick={ReportopenModal} style={{color:"var(--background2)",cursor:"pointer"}}> Report
 </p>

 </div>
</div>
</Popup>

{/* transfer modal */}
<Modal
        isOpen={TransferTokenmodalIsOpen}
        onRequestClose={TransfercloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Transfer token</h4>
                      <div style={{ cursor: "pointer" }} onClick={TransfercloseModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "var(--background2)",marginTop:"5%" }}>
                    You can transfer tokens from your address to another</p>
                    <h4 style={{ color: "white" }}>
                    Receiver address</h4>
                    <div style={{height:"1%"}}>
                      <input placeholder="Paste address"
                          style={{background:"var(--background)",border:"none",outline:"none",color:"var(--background2)"}} />
                       <hr
                          style={{ color: "white" }}
                      ></hr>
                      </div>
                      <p style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}> I UNDERSTAND, CONTINUE </p>
                          <Button 
                          onClick={TransfercloseModal}
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                     
      </Modal>
      {/* remove sale modal */}
<Modal
        isOpen={RemoveSalemodalIsOpen}
        onRequestClose={RemoveSalecloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Remove from sale</h4>
                      <div style={{ cursor: "pointer" }} onClick={RemoveSalecloseModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "var(--background2)",marginTop:"5%" }}>
                  Do you really want to remove your Bottle from sale? You can put it on sale anytime</p>
                   
                      <p style={{ color: "white", marginTop: "5%", textAlign: "center", fontSize: "0.8rem" ,cursor:"pointer" }}>Remove now </p>
                          <Button 
                          onClick={RemoveSalecloseModal}
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                     
      </Modal>


            {/* burn Token modal */}
<Modal
        isOpen={BurnTokenmodalIsOpen}
        onRequestClose={BurnTokenCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Burn token</h4>
                      <div style={{ cursor: "pointer" }} onClick={BurnTokenCloseModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "var(--background2)",marginTop:"5%" }}>
                  Are you sure to burn this token? This action cannot be undone. Token will be transfered to zero address</p>
                   
                  <Button 
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background2)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CONTINUE
                          </Button>{" "}                          <Button 
                          onClick={BurnTokenCloseModal}
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                     
      </Modal>

              {/*Report  modal */}
<Modal
        isOpen={ReportmodalIsOpen}
        onRequestClose={ReportCloseModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
       
       <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <h4 style={{ fontFamily: "fright", color: "white" }}>Report</h4>
                      <div style={{ cursor: "pointer" }} onClick={ReportCloseModal}>
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2929 13.2929C13.6834 12.9024 14.3166 12.9024 14.7071 13.2929L20 18.5858L25.2929 13.2929C25.6834 12.9024 26.3166 12.9024 26.7071 13.2929C27.0976 13.6834 27.0976 14.3166 26.7071 14.7071L21.4142 20L26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C26.3166 27.0976 25.6834 27.0976 25.2929 26.7071L20 21.4142L14.7071 26.7071C14.3166 27.0976 13.6834 27.0976 13.2929 26.7071C12.9024 26.3166 12.9024 25.6834 13.2929 25.2929L18.5858 20L13.2929 14.7071C12.9024 14.3166 12.9024 13.6834 13.2929 13.2929Z" fill="#FCFCFD" />
                              <rect x="1" y="1" width="38" height="38" rx="19" stroke="#46392E" stroke-width="2" />
                          </svg>
                      </div>
                  </div><p style={{ color: "var(--background2)",marginTop:"5%" }}>
                  Describe why you think this Bottle should be removed from marketplace</p>
                  <div className="form-group">
        <label style={{color:"white",marginTop:"3%",marginBottom:"1%",                  fontSize:"0.8rem",
}} htmlFor="exampleInputtext1">MESSAGE </label>        <textarea placeholder='Tell us the details'  style={{
                  borderWidth:"0.2rem",
                  color:"var(--background2)",
                  borderColor: "var(--borderColor)",
                  backgroundColor: "var(--background3)" ,
                }}  className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
      </div>
                  <Button 
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--background)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              SEND NOW
                          </Button>{" "}                          <Button 
                          onClick={ReportCloseModal}
                              style={{
                                  color: "white",
                                  backgroundColor: "var(--background)",
                                  height: "2.5rem",
                                  marginTop: "1rem",
                                  marginRight: "1rem",
                                  borderColor: "var(--borderColor)",
                                  borderRadius: "0%",
                                  width: "100%",
                                  borderWidth: "0.1rem"
                              }}
                          >
                              CANCEL
                          </Button>{" "}
                     
      </Modal>
            </div> 
        </div>
      </div>
    </div>
  );
};

export default Item;
