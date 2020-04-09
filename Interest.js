const mysql = require('mysql')

let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});
document.getElementById('btn-calc').addEventListener("click", Calculate)
document.getElementById('btn-submit').addEventListener("click",Recover)

function Calculate(){
	let Cname = document.forms["Main"]["name"].value
	let Issue_Date = document.forms["Main"]["date"].value
	let interest;
	con.query(`SELECT interest from loan where name = '${Cname}' and idate = '${Issue_Date}'`,function (err,rows) {
		interest = rows[0].interest;
		document.forms["Main"]["amount"].value = interest;
	})
	document.forms["Main"]["name"].value = Cname
	document.forms["Main"]["date"].value = Issue_Date
	event.preventDefault();
}

function Recover() {
	let Cname = document.forms["Main"]["name"].value
	let Issue_Date = document.forms["Main"]["date"].value
	let amount = document.forms["Main"]["amount"].value;
	let sql = `insert into recoveries values('${Cname}',${amount},CURRENT_DATE,'Interest,'No')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			con.query(`update loan set status = 2 where name='${Cname}' and idate = '${Issue_Date}'`,function (err) {
				if (err)
					throw err;
				else
					con.query(`update loan set rdate = DATE_ADD(CURRENT_DATE,INTERVAL 1 MONTH) where name='${Cname}' and idate = '${Issue_Date}'`,function (err) {
						if (err)
							throw err;
						else
							alert("The Interest for the Loan has Been Recovered")
					})
			})

	})
	event.preventDefault()
}

