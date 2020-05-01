const mysql = require('mysql')

let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});
document.getElementById('btn-calc-interest').addEventListener("click", Calculate)
document.getElementById('btn-submit-interest').addEventListener("click",Recover)
let id;
function Calculate(){
	let Cname = document.forms["Interest-form"]["name"].value
	let Issue_Date = document.forms["Interest-form"]["date"].value
	let interest;
	con.query(`SELECT interest,id from loan where name = '${Cname}' and idate = '${Issue_Date}'`,function (err,rows) {
		interest = rows[0].interest;
		id = rows[0].id;
		if(rows.length >1){
			alert("Multiple Records With Same Name And Issue Date!!")
			return;
		}
		document.forms["Interest-form"]["interest"].value = interest;
	})
	document.forms["Interest-form"]["name"].value = Cname
	document.forms["Interest-form"]["date"].value = Issue_Date
	event.preventDefault();
}

function Recover() {
	let Cname = document.forms["Interest-form"]["name"].value
	let Issue_Date = document.forms["Interest-form"]["date"].value
	let amount = document.forms["Interest-form"]["interest"].value;
	let sql = `insert into recoveries(name,principle,date,interest,id) values('${Cname}',0,CURRENT_DATE,${amount},'${id}')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			con.query(`update loan set status = 2 where id='${id}'`,function (err) {
				if (err)
					throw err;
				else
					con.query(`update loan set rdate = DATE_ADD(idate,INTERVAL 1 MONTH) where id = '${id}'`,function (err) {
						if (err)
							throw err;
						else
							alert("The Interest for the Loan has Been Recovered")
					})
			})

	})
	event.preventDefault()
}

