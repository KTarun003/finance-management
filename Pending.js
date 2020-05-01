let mysql = require('mysql')

const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});
function table() {
	let element = document.getElementById('pending-loans')
	let sql = 'select name,address,phone,principle,interest,idate,rdate,status,rate from loan where (status = 3) and (rdate < CURRENT_DATE)';
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
				html = html + `<tr>
									<td class="text-center" >${res.name}</td>
									<td class="text-center" >${res.address}</td>
									<td class="text-center" >${res.phone}</td>
									<td class="text-center" >${res.principle}</td>
									<td class="text-center" >${res.rate}</td>
									<td class="text-center" >${res.interest}</td>
									<td class="text-center" >${idate}</td>
									<td class="text-center" >${rdate}</td>`
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

document.getElementById('Search-Input').addEventListener("keyup", Search)

function Search(){
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("Search-Input");
	filter = input.value.toUpperCase();
	table = document.getElementById("pending-loans");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[0];
		if (td) {
			txtValue = td.textContent || td.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			}
			else {
				tr[i].style.display = "none";
			}
		}
	}
}

table()
