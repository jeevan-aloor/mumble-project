
const mongoose=require("mongoose")

const jeevschema=mongoose.Schema({
    "name":String,
    "age":Number,
    "course":String
})

const JeevModel=new mongoose.model("jeevdata",jeevschema)


module.exports={
    JeevModel
}