var http = {}

http.get = function(url, callback){
	var xhr = new XMLHttpRequest
	xhr.open('GET', url, true)
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			callback(eval('('+xhr.responseText+')'))
		}
	}

	xhr.send()
}

var availabilityJson = 'https://reserve.cdn-apple.com/FR/fr_FR/reserve/iPhone/availability.json'

function fetchStores(){
	$.ajax({
		url: storesUrl,
		type: 'GET',
		timeout: 5,
		dataType: 'JSON',
		success: function(rsp){
			if(rsp && !$.isPlainObject(rsp)){
				
			}
		}
	})
}
