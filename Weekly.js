const mysql = require('mysql')

const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});

document.getElementById('btn-submit-Weekly').addEventListener('click',Weekly_Insert)

function Weekly_Insert() {
	let name = document.forms['Weekly-form']['name'].value
	let address = document.forms['Weekly-form']['address'].value
	let phone = document.forms['Weekly-form']['phone'].value
	let asset = document.forms['Weekly-form']['asset'].value
	let principle = parseFloat(document.forms['Weekly-form']['principle'].value)
	let rate = parseFloat(document.forms['Weekly-form']['rate'].value)
	let returnDate = document.forms['Weekly-form']['Return_Date'].value
	let interest = (principle*rate)/100;
	let sql = `insert into loan(name,phone,address,asset,principle,rate,interest,idate,rdate) values('${name}','${phone}','${address}','${asset}',${principle},${rate},${interest},CURRENT_DATE(),'${returnDate}')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			alert("The Loan has been added")
	})
	event.preventDefault()
}
