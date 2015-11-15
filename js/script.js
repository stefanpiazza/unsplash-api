(function () {
	var photo = new UnsplashPhoto();

	photo.all()
	    .fromCategory("nature")
	    // .of(['wind'])
	    .size(1000, 1200)
	    .fetch();

	var image = new Image();
	image.addEventListener('load', function () {
		document.getElementById('spinner').style.opacity = '0';

		document.getElementById('image').style.backgroundImage = 'url(' + photo.url + ')';
		document.getElementById('image').style.opacity = '1';
		document.getElementById('image').style.width = '100%';
		document.getElementById('image').style.height = '100%';
	});

	image.src = photo.url;	
})()