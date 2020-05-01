const mysql = require('mysql')

let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});
document.getElementById('btn-calc-whole').addEventListener("click", Calculate)
document.getElementById('btn-submit-whole').addEventListener("click",Recover)
let principle,interest,id;
function Calculate(){
	let Cname = document.forms["Whole-form"]["name"].value
	let Issue_Date = document.forms["Whole-form"]["date"].value
	let amount;
	con.query(`SELECT principle,interest,times,amount,id from loan where name = '${Cname}' and idate = '${Issue_Date}'`,function (err,rows) {
		if(rows.lenght > 1){
			alert("Multiple Records With Same Name And Issue Date!!")
			return;
		}
		principle = rows[0].principle
		interest = rows[0].interest
		amount = rows[0].amount
		id = rows[0].id;

		let times = parseInt(rows[0].times)
		if (times >0){
			principle = principle/times
			interest = interest/times
		}
		document.forms["Whole-form"]["amount"].value = amount;
	})
	document.forms["Whole-form"]["name"].value = Cname
	document.forms["Whole-form"]["date"].value = Issue_Date
	event.preventDefault();
}

function Recover() {
	let Cname = document.forms["Whole-form"]["name"].value
	let sql = `insert into recoveries values('${Cname}',${principle},CURRENT_DATE,${interest},'${id}')`
	con.query(sql,function (err) {
		if (err)
			throw err;
		else
			con.query(`update loan set status = 0 where id = '${id}'`,function (err) {
				if (err)
					throw err;
				else
					alert("The Complete Loan amount has been Cleared")
			})
	})
	event.preventDefault()
}


