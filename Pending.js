let mysql = require('mysql')

const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});
function table() {
	let element = document.getElementById('pending-loans')
	let sql = 'select name,address,phone,principle,interest,idate,rdate,status from loan where (status = 3) and (rdate < CURRENT_DATE)';
	let i=0;
	let res;
	let html=``;
	con.query(sql, function (err, result) {
		if (err)
			throw err;
		else {
			for (res of result) {
				let idate = new Date(`${res.idate}`);
				let dd1 = idate.getDate();
				let mm1 = idate.getMonth() + 1;
				//January is 0!
				const yyyy1 = idate.getFullYear();
				if(dd1<10){
					dd1='0'+dd1
				}
				if(mm1<10){
					mm1='0'+mm1
				}
				idate = dd1 + '/' + mm1 + '/' + yyyy1;
				let rdate = new Date( `${res.rdate}`);
				let dd2 = rdate.getDate();
				let mm2 = rdate.getMonth() + 1;
				//January is 0!
				const yyyy2 = rdate.getFullYear();
				if(dd2<10){
					dd2='0'+dd2
				}
				if(mm2<10){
					mm2='0'+mm2
				}
				rdate = dd2 + '/' + mm2 + '/' + yyyy2;
				html = html + `<tr><td class="text-center" >${res.name}</td><td class="text-center" >${res.address}</td><td class="text-center" >${res.phone}</td><td class="text-center" >${res.principle}</td><td class="text-center" >${res.interest}</td><td class="text-center" >${idate}</td><td class="text-center" >${rdate}</td>`
				let stat = `${res.status}`;
				switch (stat) {
					case '0' : {
						html = html + '<td><div  class="badge badge-success" >Paid</div></td></tr>';
						break;
					}
					case '1' : {
						html = html + '<td><div  class="badge badge-info" >Principle Paid</div></td></tr>';
						break;
					}
					case '2' : {
						html = html + '<td><div  class="badge badge-warning" >Interest Paid</div></td></tr>';
						break;
					}
					case '3' : {
						html = html + '<td><div  class="badge badge-danger" >Not Paid</div></td></tr>';
						break;
					}
					default : {
						html = html + '<td><div  class="badge badge-danger" >Error</div></td></tr>';
						break;
					}
				}
				i++
			}
			element.innerHTML = html;
		}
		console.log(res)


	})
}

table()
