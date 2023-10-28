require('dotenv').config()

const user=process.env.USER_NAME

const password=process.env.PASSWORD

const port=process.env.PORT||5000

module.exports={user,password,port}