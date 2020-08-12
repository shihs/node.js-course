// contain all of my user related routes

const express = require('express')
const mysql = require('mysql')
const router = express.Router()


router.get('/messages', (requ, res) => {
	console.log("Show some messages or whatever...")
	res.end()
})



router.get("/users", (req, res) => {
	const connection = getConnection()
	const queryString = "SELECT * FROM user"
	connection.query(queryString, (err, rows, fields) => {
		if (err) {
			console.log("Faile to query the users: " + err)
			res.sendStatus(500)
			return
		}
		res.json(rows)
	})
})


router.get('/user/:id', (req, res) => {
	console.log("I think we fetched users successfully.")
	
	const connection = getConnection()

	const userId = req.params.id
	const queryString = "SELECT * FROM user WHERE id = ?"
	connection.query(queryString, [userId], (err, rows, fields) => {
		if (err) {
			console.log("Faile to query the user: " + err)
			res.send(err)
			res.end()
			return
		}
		res.json(rows)
	})
	console.log("Connect successfully!")
	// connection.release()
})

router.post('/table_create', (req, res) => {
	console.log("Trying to create a new table...")
		
	const tableName = req.body.create_table

	const queryString = "CREATE TABLE `"+tableName+"` (`id` INT NOT NULL AUTO_INCREMENT,`first_name` VARCHAR(100),`last_name` VARCHAR(100), CONSTRAINT PK PRIMARY KEY (`id`));"
	getConnection().query(queryString, (err, results, fields) => {
		if (err) {
			console.log("Failed to create a new table: " + err)
			res.sendStatus(500)
			return
		}

		// console.log("Inserted a new user with id: ", results.insertId)
		// res.send("A new table is added!")
		res.end()
	})

	res.end()
})

router.post('/user_create', (req, res) => {
	console.log("Trying to create a new user...")
		
	const firstName = req.body.create_first_name
	const lastName = req.body.create_last_name

	const queryString = "INSERT INTO user (first_name, last_name) VALUES (?, ?)"
	getConnection().query(queryString, [firstName, lastName], (err, results, fields) => {
		if (err) {
			console.log("Failed to insert new user: " + err)
			res.sendStatus(500)
			return
		}

		console.log("Inserted a new user with id: ", results.insertId)
		res.end()
	})

	res.end()
})


// connection pool
const pool = mysql.createPool({
	connectionLimit: 10, // 連線池可建立的總連線數上限(預設最多為10個連線數)
	host: 'localhost',  
	user: 'root', 
	password: 'admin123', 
	database: 'test',
	port: 3306
})


function getConnection() {
	return pool
}

module.exports = router





