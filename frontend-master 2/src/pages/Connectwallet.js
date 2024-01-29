import React,{ useState } from 'react'

const Connectwallet = () => {
  return (
    <div style={{background:"var(--background)",padding:"10%",paddingTop:"5%"}}> 
    <div style={{display:"flex",alignItems:"center"}}>
    <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.51444 0.609004C7.83808 -0.0153393 6.78365 0.0268318 6.1593 0.703196L0.774683 6.53646C0.185354 7.1749 0.185348 8.15896 0.774671 8.7974L6.15929 14.6308C6.78363 15.3072 7.83806 15.3493 8.51443 14.725C9.1908 14.1007 9.23298 13.0462 8.60865 12.3699L5.80596 9.3336L21.9994 9.3336C22.9198 9.3336 23.666 8.58741 23.666 7.66694C23.666 6.74646 22.9198 6.00027 21.9993 6.00027L5.80602 6.00027L8.60863 2.96414C9.23298 2.28778 9.19081 1.23335 8.51444 0.609004Z" fill="#FCFCFD"/>
</svg> &nbsp;&nbsp;&nbsp;&nbsp;
<h3 style={{color:"white",fontFamily:"fright"}}>Connect your wallet</h3>
    </div>
    <hr style={{color:"var(--background2)"}}></hr>
    <div style={{display:"grid",gridTemplateColumns:"60% 40%",marginTop:"5%"}}>
        <div>
            <div style={{display:"flex",alignItems:"center",marginTop:"5%"}}>
            <svg style={{marginRight:"5%"}} width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="54" rx="32" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 25H25C23.8954 25 23 25.8954 23 27V37C23 38.1046 23.8954 39 25 39H39C40.1046 39 41 38.1046 41 37V27C41 25.8954 40.1046 25 39 25ZM25 23C22.7909 23 21 24.7909 21 27V37C21 39.2091 22.7909 41 25 41H39C41.2091 41 43 39.2091 43 37V27C43 24.7909 41.2091 23 39 23H25Z" fill="#FCFCFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 32C33 29.2386 35.2386 27 38 27H42C42.5523 27 43 27.4477 43 28C43 28.5523 42.5523 29 42 29H38C36.3431 29 35 30.3431 35 32C35 33.6569 36.3431 35 38 35H42C42.5523 35 43 35.4477 43 36C43 36.5523 42.5523 37 42 37H38C35.2386 37 33 34.7614 33 32Z" fill="#FCFCFD"/>
<path d="M39 32C39 32.5523 38.5523 33 38 33C37.4477 33 37 32.5523 37 32C37 31.4477 37.4477 31 38 31C38.5523 31 39 31.4477 39 32Z" fill="#FCFCFD"/>
</svg> 
<p style={{color:"white"}}>MetaMask</p>

            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:"5%"}}>
            <svg style={{marginRight:"5%"}} width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="54" rx="32" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 25H25C23.8954 25 23 25.8954 23 27V37C23 38.1046 23.8954 39 25 39H39C40.1046 39 41 38.1046 41 37V27C41 25.8954 40.1046 25 39 25ZM25 23C22.7909 23 21 24.7909 21 27V37C21 39.2091 22.7909 41 25 41H39C41.2091 41 43 39.2091 43 37V27C43 24.7909 41.2091 23 39 23H25Z" fill="#FCFCFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 32C33 29.2386 35.2386 27 38 27H42C42.5523 27 43 27.4477 43 28C43 28.5523 42.5523 29 42 29H38C36.3431 29 35 30.3431 35 32C35 33.6569 36.3431 35 38 35H42C42.5523 35 43 35.4477 43 36C43 36.5523 42.5523 37 42 37H38C35.2386 37 33 34.7614 33 32Z" fill="#FCFCFD"/>
<path d="M39 32C39 32.5523 38.5523 33 38 33C37.4477 33 37 32.5523 37 32C37 31.4477 37.4477 31 38 31C38.5523 31 39 31.4477 39 32Z" fill="#FCFCFD"/>
</svg> 
<p style={{color:"white"}}>Coinbase Wallet</p>

            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:"5%"}}>
            <svg style={{marginRight:"5%"}} width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="54" rx="32" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 25H25C23.8954 25 23 25.8954 23 27V37C23 38.1046 23.8954 39 25 39H39C40.1046 39 41 38.1046 41 37V27C41 25.8954 40.1046 25 39 25ZM25 23C22.7909 23 21 24.7909 21 27V37C21 39.2091 22.7909 41 25 41H39C41.2091 41 43 39.2091 43 37V27C43 24.7909 41.2091 23 39 23H25Z" fill="#FCFCFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 32C33 29.2386 35.2386 27 38 27H42C42.5523 27 43 27.4477 43 28C43 28.5523 42.5523 29 42 29H38C36.3431 29 35 30.3431 35 32C35 33.6569 36.3431 35 38 35H42C42.5523 35 43 35.4477 43 36C43 36.5523 42.5523 37 42 37H38C35.2386 37 33 34.7614 33 32Z" fill="#FCFCFD"/>
<path d="M39 32C39 32.5523 38.5523 33 38 33C37.4477 33 37 32.5523 37 32C37 31.4477 37.4477 31 38 31C38.5523 31 39 31.4477 39 32Z" fill="#FCFCFD"/>
</svg> 
<p style={{color:"white"}}>Trust Wallet</p>

            </div>
            <div style={{display:"flex",alignItems:"center",marginTop:"5%"}}>
            <svg style={{marginRight:"5%"}} width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="54" height="54" rx="32" fill="#CF9658"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 25H25C23.8954 25 23 25.8954 23 27V37C23 38.1046 23.8954 39 25 39H39C40.1046 39 41 38.1046 41 37V27C41 25.8954 40.1046 25 39 25ZM25 23C22.7909 23 21 24.7909 21 27V37C21 39.2091 22.7909 41 25 41H39C41.2091 41 43 39.2091 43 37V27C43 24.7909 41.2091 23 39 23H25Z" fill="#FCFCFD"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33 32C33 29.2386 35.2386 27 38 27H42C42.5523 27 43 27.4477 43 28C43 28.5523 42.5523 29 42 29H38C36.3431 29 35 30.3431 35 32C35 33.6569 36.3431 35 38 35H42C42.5523 35 43 35.4477 43 36C43 36.5523 42.5523 37 42 37H38C35.2386 37 33 34.7614 33 32Z" fill="#FCFCFD"/>
<path d="M39 32C39 32.5523 38.5523 33 38 33C37.4477 33 37 32.5523 37 32C37 31.4477 37.4477 31 38 31C38.5523 31 39 31.4477 39 32Z" fill="#FCFCFD"/>
</svg> 
<p style={{color:"white"}}>Connect Wallet</p>

            </div>
        </div>
    <div>
        <img width={340} height={340} src='/images/conectwallet.png' />
    </div>

    </div>

    </div>
  )
}

export default Connectwallet