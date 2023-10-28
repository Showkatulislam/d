
const mongoose = require('mongoose');

const documentSchema=new mongoose.Schema({
    title:{
        type:String,
        default:"Untitle",
    },
    parentId:{
        type:String,
        default:'root'
    },
    isArchived:{
        type:Boolean,
        default:false
    }
})

const document=mongoose.model("document",documentSchema);

module.exports=document