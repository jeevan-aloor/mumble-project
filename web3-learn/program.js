let Web3=require("web3")

// console.log(Web3)
let web3=new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/874e223eb559487a93d6e8b0fa86ddbe"))
// console.log(web3)

let conn=web3.eth.getBalance("0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef")

let ame=conn.then(function(result){
    console.log(web3.utils.fromWei(result,"ether"));
})

console.log(ame)



