const mongoose = require('mongoose');
const { user, password } = require('../secrete');

const ConnectionDB=async(options={})=>{
    try {
        const url=`mongodb+srv://${user}:${password}@cluster0.0fy1kbx.mongodb.net/doc`
        await mongoose.connect(`${url}`,{ useNewUrlParser: true,  useUnifiedTopology: true })
        console.log("Connection is done");
        mongoose.connection.on('error',(error)=>{
            console.error("Db connection is error",error)
        })
    } catch (error) {
        console.log("Coundn't connect database ",error.toString());
    }
}

module.exports=ConnectionDB