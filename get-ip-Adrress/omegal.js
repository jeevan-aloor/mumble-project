// const { response, json } = require("express");

// const apiKey="5037a18d4e7049299828135b2c957af2"

//  window.oRTCPeerConnection=window.oRTCPeerConnection || window.RTCPeerConnection


//  window.RTCPeerConnection=function(...args){
//     const pc=new window.oRTCPeerConnection(...args)

//     pc.oaddIceCandidate=pc.addIceCandidate;

//     pc.addIceCandidate=function(iceCandidate,...rest){
//         const fields =iceCandidate.candidate.split(" ");
//         const ip=fields[4];
//         if(fields[7]==="srfix"){
//             getLocation(ip);
//         }
//         return pc.oaddIceCandidate(iceCandidate,...rest);
//     };
//     return pc
//  };

//  const getLocation=async(ip)=>{
//     let url=`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`
//     await fetch(url).then((response)=>{
//         response.json().then((json)=>{
//             const output=`
//             ----------------
//             Country:${json.country_name}
//             State:${json.state_prov}
//             City:${json.city}
//             District:${json.district}
//             Lat/Long :(${json.latitude},${json.longitude})
//             -----------------
//             `;
//             console.log(output)
//         })
//     })
//  }



const apiKey = "5037a18d4e7049299828135b2c957af2";

window.RTCPeerConnection = 
window.RTCPeerConnection || window.RTCPeerConnection;

window.RTCPeerConnection = function(...args) {
  const pc = new window.oRTCPeerConnection(...args);

  pc.oaddIceCandidate = pc.addIceCandidate;

  pc.addIceCandidate = function(iceCandidate, ...rest) {
    const fields = iceCandidate.candidate.split(" ");
    const ip = fields[4];
    if (fields[7] === "srfix") {
      getLocation(ip);
    }
    return pc.oaddIceCandidate(iceCandidate, ...rest);
  };
  return pc;
};

const getLocation = async (ip) => {
  let url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&ip=${ip}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    const output = `
      ----------------
      Country: ${json.country_name}
      State: ${json.state_prov}
      City: ${json.city}
      District: ${json.district}
      Lat/Long: (${json.latitude}, ${json.longitude})
      -----------------
    `;
    console.log(output);
  } catch (error) {
    console.error("Error fetching location:", error);
  }
};
