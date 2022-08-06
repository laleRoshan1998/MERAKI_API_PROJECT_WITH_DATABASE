const express = require('express')
const app = express()
const port = 3000
app.use(express.json())



require("./sheeds/meraki")
const router = require("./routes/router")

app.use("/",router)




app.listen(port,()=>{
    console.log('server is connected...............');
})


