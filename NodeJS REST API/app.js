// https://www.youtube.com/watch?v=F7NVpxxmmgM&list=PL0dzCUj1L5JE4w_OctDGyZOhML6OtJSqR
// load our app server using express somehow...
const express = require('express')
const app = express()
const mysql = require('mysql')
const morgan = require('morgan') // nodemon app.js
app.use(morgan('short')) // show the log

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false})) // help request easier
app.use(express.static('./public')) // 提供影像、CSS 檔案和 JavaScript 檔案等之類的靜態檔案



app.get("/", (req, res) => {
	console.log("THIS IS THE SERVER!")
	res.send("Hello from the ROOOT! Add nodemon!")
})


const router = require('./routes/user.js')
app.use(router)




// localhost:3003
app.listen(3003, () => {
	console.log("Server is up and listening on 3003...")
})


