
const {Router}=require("express")
const {JeevModel}=require("./model")

const john=Router()

john.get("/",async(req,res)=>{
    const agedata=req.query

    try {
        let data=await JeevModel.find(agedata)
        
        res.send(data)

        
    } catch (error) {
        res.send("error")
        console.log(error)
        
    }

})

john.post("/add",async(req,res)=>{
    const data=req.body
    try {
        const adddata=new JeevModel(data)
        await adddata.save()
        console.log(data)
        res.send("added successufully")

        
    } catch (error) {
        res.send("error")
        console.log(error)
        
    }
})




john.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try {
        await JeevModel.findByIdAndUpdate({_id:ID},payload)
        
        
        res.send("edited")

        
    } catch (error) {
        res.send("error")
        console.log(error)
        
    }

})
john.delete("/delete/:id",async(req,res)=>{
    const ID=req.params.id
    
    try {
        await JeevModel.findByIdAndDelete({_id:ID})
        res.send("delted")
        
        
     

        
    } catch (error) {
        res.send("error")
        console.log(error)
        
    }

})

module.exports={
    john
}