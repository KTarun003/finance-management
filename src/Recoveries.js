let mysql = require('mysql2')

const con = mysql.createConnection({
	host: 'localhost',
	user: 'con',
	password: 'root',
	database: 'finance'
});
function recoveriestable() {
	let element = document.getElementById('recoveries')
	let sql = "select name,date,principle,interest from recoveries"
	let res;
	let html=``;
	con.query(sql, function (err, result) {
		if (err)
			throw err;
		else {
			for (res of result) {
				let date = new Date(`${res.date}`);
				let dd1 = date.getDate();
				let mm1 = date.getMonth() + 1;
				//January is 0!
				const yyyy1 = date.getFullYear();
				if(dd1<10){
					dd1='0'+dd1
				}
				if(mm1<10){
					mm1='0'+mm1
				}
				date = dd1 + '/' + mm1 + '/' + yyyy1;
				html = html + `<tr><td class="text-center" >${res.name}</td><td class="text-center" >${date}</td><td class="text-center" >${res.principle}</td><td class="text-center" >${res.interest}</td></tr>`
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
	table = document.getElementById("recoveries");
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

recoveriestable()
