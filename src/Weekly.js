const mysql = require('mysql2')
const uuid = require('uuid')
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
	let period = parseInt(document.forms['Weekly-form']['period'].value)
	let times = parseInt(document.forms['Weekly-form']['times'].value)
	let interest = (principle*rate)/100;
	let amount = principle + interest
	let weekly_amount = amount/times
	let weekly_principle = principle/times
	let weekly_interest = interest/times
	let issueDate = ``
	let returnDate = ``

	for (let i = 0; i < times; i++) {
		issueDate = `DATE_ADD(CURRENT_DATE(),INTERVAL ${period*i} DAY)`
		returnDate = `DATE_ADD(CURRENT_DATE(),INTERVAL ${period*(i+1)} DAY)`
		let uid = uuid.v1();
		let sql = `insert into loan(id,name,phone,address,asset,principle,rate,interest,amount,idate,rdate) values('${uid}','${name}','${phone}','${address}','${asset}',${weekly_principle},${rate},${weekly_interest},${weekly_amount},${issueDate},${returnDate})`
		console.log(sql)
		con.query(sql,function (err) {
			if (err)
				throw err
		})
	}
	alert("The Loan has been added")
	event.preventDefault()
}
