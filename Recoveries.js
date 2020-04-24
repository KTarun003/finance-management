let mysql = require('mysql')

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

recoveriestable()
