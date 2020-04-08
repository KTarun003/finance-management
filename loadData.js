const mysql = require('mysql')
let con = mysql.createConnection({
	host: "localhost",
	user: "con",
	password: "root",
	database: "finance"
});


let d = new Date();
let record;
const ye = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(d)
const mo = new Intl.DateTimeFormat('en', {month: 'numeric'}).format(d)
const da = new Intl.DateTimeFormat('en', {day: 'numeric'}).format(d)
let today = `${ye}-${mo}-${da}`;


/*con.connect(function (err) {
	if (err)
		throw err;
	con.query(`SELECT name,principle,interest,status FROM profit where rdate = ${today}`, function (err, result) {
		if (err)
			throw err;
		console.log(result);
	});
});
*/


let i = 0;
let element;
let stat = ``;
let res;
con.connect(function (err) {
	if (err)
		throw err;
	con.query(`SELECT name,principle,interest,status FROM loan `, function (err, result) {
		if (err)
			throw err;
		res = result
	});
});
function getData() {
		for (record of res) {
			console.log(record)
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
		console.log(res);


}
