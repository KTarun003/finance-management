module.exports = {
	setBadge: (l) => {
		{

			if(l.status === "NotPaid"){
				return  "badge badge-warning"
			}
			else if(l.status === "InterestPaid"){
				return  "badge badge-info"
			}
			else if(l.status === "Paid"){
				return  "badge badge-success"
			}
			else {
				l.status = "Error";
				return  "badge badge-danger";
			}
		}
	}
}