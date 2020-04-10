const mysql = require('mysql')

let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});
document.getElementById('btn-calc-whole').addEventListener("click", Calculate)
document.getElementById('btn-submit-whole').addEventListener("click",Recover)

function Calculate(){
	let Cname = document.forms["Whole-form"]["name"].value
	let Issue_Date = document.forms["Whole-form"]["date"].value
	let amount;
	con.query(`SELECT (principle+interest) as amount from loan where name = '${Cname}' and idate = '${Issue_Date}'`,function (err,rows) {
		amount = rows[0].amount;
		document.forms["Whole-form"]["amount"].value = amount;
	})
	document.forms["Whole-form"]["name"].value = Cname
	document.forms["Whole-form"]["date"].value = Issue_Date
	event.preventDefault();
}

function Recover() {
	let Cname = document.forms["Whole-form"]["name"].value
	let Issue_Date = document.forms["Whole-form"]["date"].value
	let amount = document.forms["Whole-form"]["amount"].value;
	let sql = `insert into recoveries values('${Cname}',${amount},CURRENT_DATE,'Whole','No')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			con.query(`update loan set status = 0 where name='${Cname}' and idate = '${Issue_Date}'`,function (err) {
				if (err)
					throw err;
				else
					alert("The Complete Loan amount has been Cleared")
			})
	})
	event.preventDefault()
}

