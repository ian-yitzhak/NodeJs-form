const express = require('express')
require('./db.js')

const app = express()


app.set("view engine" , "ejs")
app.use(express.urlencoded({ extended: false }))
app.get('/', (req,res)=>{
	res.render('home')
})

app.get('/success', (req,res)=>{
	res.render('success')
})

app.post("/", async function (req, res) {

	const context = {
		name: req.body.name, 
		email: req.body.email, 
		contact: req.body.contact
	}
	try{
		await context.save()
		res.redirect('/success')
	}catch(err){
		console.log(err)
	}
  
  

 
});

const port = 3000;
app.listen(port, ()=> console.log(`listening on ${port}`))