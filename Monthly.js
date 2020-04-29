const mysql = require('mysql')
const uuid = require('uuid')
const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});

document.getElementById('btn-submit-Monthly').addEventListener('click',Monthly_Insert)

function Monthly_Insert() {
	let name = document.forms['Monthly-form']['name'].value
	let address = document.forms['Monthly-form']['address'].value
	let phone = document.forms['Monthly-form']['phone'].value
	let asset = document.forms['Monthly-form']['asset'].value
	let principle = parseFloat(document.forms['Monthly-form']['principle'].value)
	let rate = parseFloat(document.forms['Monthly-form']['rate'].value)
	let returnDate = document.forms['Monthly-form']['Return_Date'].value
	let interest = (principle*rate)/100
	let amount = principle+interest
	let uid = uuid.v1();
	let sql = `insert into loan(id,name,phone,address,asset,principle,rate,interest,amount,idate,rdate) values('${uid}','${name}','${phone}','${address}','${asset}',${principle},${rate},${interest},${amount},CURRENT_DATE,'${returnDate}')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			alert("The Loan has been added")
	})
	event.preventDefault()
}
