const mysql = require('mysql')
let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});







let i = 0;
let element;
let stat = ``;
let record;
con.connect(function (err) {
	if (err)
		throw err;
});
let Pperc;
let Iperc = 0.0;
let Gperc = 0.0;
let TextClass='success';
function getData() {
	//TODO : Add Date functionality to the query
	con.query(`SELECT name,principle,interest,status FROM loan `, function (err, result) {
		if (err)
			throw err;
		for (record of result) {
			switch (i) {
				case 0 : {
					element = document.getElementById('row1_name')
					element.innerHTML=`${record.name}`;
					element = document.getElementById('row1_principle')
					element.innerHTML=`${record.principle}`;
					element = document.getElementById('row1_interest')
					element.innerHTML=`${record.interest}`;
					element = document.getElementById('row1_status')
					stat =`${record.status}` ;
					switch (stat) {
						case '0' : {
							element.innerHTML='<div  class="badge badge-success" >Principle Paid</div>';
							break;
						}
						case '1' : {
							element.innerHTML='<div  class="badge badge-info" >Principle Paid</div>';
							break;
						}
						case '2' : {
							element.innerHTML='<div  class="badge badge-warning" >Interest Paid</div>';
							break;
						}
						case '3' : {
							element.innerHTML='<div  class="badge badge-danger" >Not Paid</div>';
							break;
						}
						default :{ element.innerHTML='<div  class="badge badge-danger" >Error</div>';
							break;
						}
					}
					break;
				}
				case 1 : {
					element = document.getElementById('row2_name')
					element.innerHTML=`${record.name}`;
					element = document.getElementById('row2_principle')
					element.innerHTML=`${record.principle}`;
					element = document.getElementById('row2_interest')
					element.innerHTML=`${record.interest}`;
					element = document.getElementById('row2_status')
					stat =`${record.status}` ;
					switch (stat) {
						case '0' : {
							element.innerHTML='<div  class="badge badge-success" >Principle Paid</div>';
							break;
						}
						case '1' : {
							element.innerHTML='<div  class="badge badge-info" >Principle Paid</div>';
							break;
						}
						case '2' : {
							element.innerHTML='<div  class="badge badge-warning" >Interest Paid</div>';
							break;
						}
						case '3' : {
							element.innerHTML='<div  class="badge badge-danger" >Not Paid</div>';
							break;
						}
						default :{ element.innerHTML='<div  class="badge badge-danger" >Error</div>';
							break;
						}
					}
					break;
				}
				case 2 : {
					element = document.getElementById('row3_name')
					element.innerHTML=`${record.name}`;
					element = document.getElementById('row3_principle')
					element.innerHTML=`${record.principle}`;
					element = document.getElementById('row3_interest')
					element.innerHTML=`${record.interest}`;
					element = document.getElementById('row3_status')
					stat =`${record.status}` ;
					switch (stat) {
						case '0' : {
							element.innerHTML='<div  class="badge badge-success" >Principle Paid</div>';
							break;
						}
						case '1' : {
							element.innerHTML='<div  class="badge badge-info" >Principle Paid</div>';
							break;
						}
						case '2' : {
							element.innerHTML='<div  class="badge badge-warning" >Interest Paid</div>';
							break;
						}
						case '3' : {
							element.innerHTML='<div  class="badge badge-danger" >Not Paid</div>';
							break;
						}
						default :{ element.innerHTML='<div  class="badge badge-danger" >Error</div>';
							break;
						}
					}
					break;
				}
				case 3 : {
					element = document.getElementById('row4_name')
					element.innerHTML=`${record.name}`;
					element = document.getElementById('row4_principle')
					element.innerHTML=`${record.principle}`;
					element = document.getElementById('row4_interest')
					element.innerHTML=`${record.interest}`;
					element = document.getElementById('row4_status')
					stat =`${record.status}` ;
					switch (stat) {
						case '0' : {
							element.innerHTML='<div  class="badge badge-success" >Paid</div>';
							break;
						}
						case '1' : {
							element.innerHTML='<div  class="badge badge-info" >Principle Paid</div>';
							break;
						}
						case '2' : {
							element.innerHTML='<div  class="badge badge-warning" >Interest Paid</div>';
							break;
						}
						case '3' : {
							element.innerHTML='<div  class="badge badge-danger" >Not Paid</div>';
							break;
						}
						default :{ element.innerHTML='<div  class="badge badge-danger" >Error</div>';
							break;
						}
					}
					break;
				}
			}
			i++;
		}

	});
	con.query('SELECT COUNT(*) as num from loan',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('NO_Loans')
		element.innerHTML=`<span>${result[0].num}</span>`
	})
	con.query('SELECT SUM(principle) as sum from loan',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Principle')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	con.query('SELECT SUM(interest) as sum from loan',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Interest')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	con.query('SELECT COUNT(*) as num from loan where MONTH(idate) = MONTH(CURRENT_DATE)',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Loans')
		element.innerHTML=`<span>${result[0].num}</span>`
	})
	con.query('SELECT SUM(principle) as sum from loan where MONTH(idate) = MONTH(CURRENT_DATE)',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Principle')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	con.query('SELECT SUM(interest) as sum from loan where MONTH(rdate) = MONTH(CURRENT_DATE)',function (err, result){
		if (err)
			throw err;
		element = document.getElementById('Month_Interest')
		element.innerHTML=`<span>${result[0].sum}</span>`
	})
	con.query('SELECT p_percent from analytics where month = MONTH(CURRENT_DATE) AND year = YEAR(CURRENT_DATE) ',function (err, result) {
		if (err)
			throw err;
		Pperc = result[0].p_percent;
		if(Pperc < 0)
			TextClass='danger'
		element = document.getElementById('Principle_Increment')
		element.innerHTML=`<div class="widget-numbers mt-0 fsize-3 text-${TextClass}">${Pperc}%</div>`
		element = document.getElementById('Principle_Increment_Properties')
		element.setAttribute('aria-valuenow',`${Pperc}`)
		element.setAttribute('class',`bg-${TextClass}`)
		element.setAttribute('style',`width :${Pperc}%;`)

	})
	con.query('SELECT i_percent from analytics where month = MONTH(CURRENT_DATE) AND year = YEAR(CURRENT_DATE) ',function (err, result) {
		if (err)
			throw err;
		Iperc = result[0].i_percent;
		if(Iperc < 0)
			TextClass='danger'
		element = document.getElementById('Interest_Increment')
		element.innerHTML=`<div class="widget-numbers mt-0 fsize-3 text-${TextClass}">${Iperc}%</div>`
		element = document.getElementById('Interest_Increment_Properties')
		element.setAttribute('aria-valuenow',`${Iperc}`)
		element.setAttribute('class',`bg-${TextClass}`)
		element.setAttribute('style',`width :${Iperc}%;`)
	})
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
