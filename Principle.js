const mysql = require('mysql')

let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});
document.getElementById('btn-calc-principle').addEventListener("click", Calculate)
document.getElementById('btn-submit-principle').addEventListener("click",Recover)

function Calculate(){
	let Cname = document.forms["Principle-form"]["name"].value
	let Issue_Date = document.forms["Principle-form"]["date"].value
	let amount;
	con.query(`SELECT principle from loan where name = '${Cname}' and idate = '${Issue_Date}'`,function (err,rows) {
		amount = rows[0].principle;
		document.forms["Principle-form"]["principle"].value = amount;
	})
	document.forms["Principle-form"]["name"].value = Cname
	document.forms["Principle-form"]["date"].value = Issue_Date
	event.preventDefault();
}

function Recover() {
	let Cname = document.forms["Principle-form"]["name"].value
	let Issue_Date = document.forms["Principle-form"]["date"].value
	let amount = document.forms["Principle-form"]["principle"].value;
	let sql = `insert into recoveries(name,principle,date,interest) values('${Cname}',${amount},CURRENT_DATE,0)`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			con.query(`update loan set status = 1 where name='${Cname}' and idate = '${Issue_Date}'`,function (err) {
				if (err)
					throw err;
				else
					alert("The Principle amount for the Loan has Been Recovered")
			})
	})
	event.preventDefault()
}

