const mysql = require('mysql2')
let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});


let element;
let stat = ``;
let res;
let html = ``;
let Pperc = 0.0;
let Iperc = 0.0;
let Gperc = 0.0;
let TextClass='success';

element=document.getElementById('dash-table')
function getData() {
	// Analyse Procedure Call
	con.query('Call analyse()')
	// Table Data
	con.query(`SELECT name,principle,interest,status FROM loan where status=3 and rdate=CURRENT_DATE()`, function (err, result) {
		if (err)
			throw err;
		else {
			for (res of result) {
				html = html + `<tr><td class="text-center" >${res.name}</td><td class="text-center" >${res.principle}</td><td class="text-center" >${res.interest}</td>`
				stat = `${res.status}`;
				switch (stat) {
					case '0' : {
						html = html + '<td><div  class="badge badge-success" >Paid</div></td>';
						break;
					}
					case '1' : {
						html = html + '<td><div  class="badge badge-info" >Principle Paid</div></td>';
						break;
					}
					case '2' : {
						html = html + '<td><div  class="badge badge-warning" >Interest Paid</div></td>';
						break;
					}
					case '3' : {
						html = html + '<td><div  class="badge badge-danger" >Not Paid</div></td>';
						break;
					}
					default : {
						html = html + '<td><div  class="badge badge-danger" >Error</div></td>';
						break;
					}
				}
				html = html +'<td class="text-center">\n' +
					'\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-focus"><a class="btn-link" href="pages/Interest.html">Interest</a></button>\n' +
					'\t\t\t\t\t\t\t\t\t\t\t\t<button type="button" class="btn btn-focus"><a class="btn-link" href="pages/Whole.html">Both</a></button>\n' +
					'\t\t\t\t\t\t\t\t\t\t\t</td>\n' +
					'\t\t\t\t\t\t\t\t\t\t</tr>'
			}
			element.innerHTML = html;
		}

	});
	// Total Number of Loans
	con.query('SELECT COUNT(*) as num from loan where MONTH(idate) = MONTH(CURRENT_DATE)-1',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('NO_Loans')
		element.innerHTML=`<span>${result[0].num}</span>`
	})
	// Total Principle
	con.query('SELECT SUM(principle) as sum from recoveries where MONTH(date) = MONTH(CURRENT_DATE)-1',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Principle')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	// Total Interest
	con.query('SELECT SUM(interest) as sum from recoveries where MONTH(date) = MONTH(CURRENT_DATE)-1',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Interest')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	// Monthly Number of Loans
	con.query('SELECT COUNT(*) as num from loan where MONTH(idate) = MONTH(CURRENT_DATE)',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Loans')
		element.innerHTML=`<span>${result[0].num}</span>`
	})
	// Monthly Principle
	con.query('SELECT SUM(principle) as sum from recoveries where MONTH(date) = MONTH(CURRENT_DATE) ',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Principle')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	// Monthly Interest
	con.query('SELECT SUM(interest) as sum from recoveries where MONTH(date) = MONTH(CURRENT_DATE) ',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Interest')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	// Interest and Principle Percent
	con.query('select p_percent,i_percent from analytics where month = month(CURRENT_DATE()) AND year = YEAR(CURRENT_DATE())',function (err,res) {
		if (err)
			throw err;
		Iperc = res[0].i_percent
		Pperc = res[0].p_percent
		if(Pperc < 0)
			TextClass='danger'
		element = document.getElementById('Principle_Increment')
		element.innerHTML=`<div class="widget-numbers mt-0 fsize-3 text-${TextClass}">${Pperc}%</div>`
		element = document.getElementById('Principle_Increment_Properties')
		element.setAttribute('aria-valuenow',`${Pperc}`)
		element.setAttribute('class',`bg-${TextClass}`)
		element.setAttribute('style',`width :${Pperc}%;`)
		if(Iperc < 0)
			TextClass='danger'
		element = document.getElementById('Interest_Increment')
		element.innerHTML=`<div class="widget-numbers mt-0 fsize-3 text-${TextClass}">${Iperc}%</div>`
		element = document.getElementById('Interest_Increment_Properties')
		element.setAttribute('aria-valuenow',`${Iperc}`)
		element.setAttribute('class',`bg-${TextClass}`)
		element.setAttribute('style',`width :${Iperc}%;`)
	})
	// Monthly Growth
	con.query('SELECT i_percent from analytics where month = (MONTH(CURRENT_DATE)-1) AND year = YEAR(CURRENT_DATE) ',function (err, result) {
		if (err)
			throw err;
		let Gpercent =result[0].i_percent;
		element = document.getElementById('Monthly_Growth')
		Gperc = Iperc - Gpercent
		if(Gperc < 0)
			TextClass='danger'
		element.innerHTML=`<div class="widget-numbers mt-0 fsize-3 text-${TextClass}">${Gperc}%</div>`
		element = document.getElementById('Monthly_Growth_Properties')
		element.setAttribute('aria-valuenow',`${Gperc}`)
		element.setAttribute('style',`width :${Gperc}%;`)
		element.setAttribute('class',`bg-${TextClass}`)
	})

}


getData()
