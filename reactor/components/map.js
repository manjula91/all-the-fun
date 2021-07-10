export const initMap = () => {
	const position = {
		lat: 15.316871,
		lng: 73.901903
	}
	// Styles a map in night mode.
	const map = new google.maps.Map(document.getElementById('map'), {
		center: position,
		zoom: 15
	})
	// Let's also add a marker while we're at it
	const marker = new google.maps.Marker({
		position,
		map,
		animation: google.maps.Animation.DROP
	})
}

export const addMap = () => {
	addScript({
		async: true,
		defer: true,
		src: '//maps.googleapis.com/maps/api/js?key=AIzaSyA-OJo_BS_LEeMdzIwq30RE7ZUnE6uuDW4',
		onload: initMap
	})
}

const addScript = options => {
	const s = document.createElement('script') // Create a script element
	s.type = 'text/javascript' // optional in html5
	s.async = options.async // asynchronous? true/false
	s.defer = options.defer
	s.src = options.src
	s.onload = options.onload
	const fs = document.getElementsByTagName('script')[0] // Get the first script
	fs.parentNode.insertBefore(s, fs)
}
