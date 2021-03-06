let mysql = require('mysql')

const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});

function table() {
	let element = document.getElementById('Edit')
	let sql = 'select name,address,phone,principle,interest,idate,rdate,status,id,penalty,rate from loan where status = 3';
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
				idate = yyyy1 + '-' + mm1 + '-' + dd1 ;
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
				rdate = yyyy2 + '-' + mm2 + '-' + dd2 ;
				html = html + `<tr><td class="text-center" ><input class="editable-cell" type="text" class="editable-cell" value="${res.name}"></td>
								   <td class="text-center" ><input class="editable-cell" type="text" value="${res.address}"></td>
								   <td class="text-center" ><input class="editable-cell" type="text" value="${res.phone}"></td>
								   <td class="text-center" ><input class="editable-cell" type="number" value="${res.principle}"></td>
								   <td class="text-center" ><input class="editable-cell" type="number" value="${res.rate}"></td>
								   <td class="text-center" ><input class="editable-cell" type="number" value="${res.interest}"></td>
								   <td class="text-center" ><input class="editable-cell" type="number" value="${res.penalty}"></td>
								   <td class="text-center" ><input class="editable-cell" type="date" value="${idate}"></td>
								   <td class="text-center" ><input class="editable-cell" type="date" value="${rdate}"></td>`;
				let stat = `${res.status}`;
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
				html += `<td class="uid"><input type="text" value="${res.id}"></td></tr>`
				i++
			}
			element.innerHTML = html;
		}


	})
}

document.getElementById('Search-Input').addEventListener("keyup", Search)
function Search(){
	let input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("Search-Input");
	filter = input.value.toUpperCase();
	table = document.getElementById("Edit");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("input")[0];
		if (td) {
			txtValue = td.value.toUpperCase() ;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			}
			else {
				tr[i].style.display = "none";
			}
		}
	}
}

document.getElementById('updateButton').addEventListener('click',Update)

function Update(){
	let table,tr;
	table = document.getElementById("Edit");
	tr = table.getElementsByTagName("tr");
	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("input");
		if (td) {
			let uid,name,address,phone,principle,interest,issue_date,return_date,amount,rate,penalty;
			name = td[0].value;
			address = td[1].value;
			phone = td[2].value;
			principle = td[3].value;
			rate = td[4].value
			interest = td[5].value;
			penalty = td[6].value;
			amount = principle + interest;
			issue_date = td[7].value;
			return_date = td[8].value;
			uid = td[9].value;
			console.log(td)
			let sql = `update  loan set
									name = '${name}',
									idate = '${issue_date}',
									address ='${address}',
									phone = '${phone}',
									principle = ${principle},
									rate = ${rate},
									interest = ${interest},
									penalty = ${penalty},
									amount = ${amount},
									rdate = '${return_date}'
					where id = '${uid}' `
			con.query(sql,function (err) {
				if (err)
					throw err;
			})
		}
	}
}
table()
