var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/studio-250.jpg", "", "", ""],
				  ["images/camera-guy-2.jpg", "", "", ""],
				  ["images/windmill-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-2",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/presenter.jpg", "", "", ""],
				  ["images/dentist-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:3000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-3",
	dimensions: [250, 380], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/editing-desk.jpg", "", "", ""],
				  ["images/lighthouse-250.jpg", "", "", ""],
				  ["images/studio-camera.jpg", "", "", ""],
				  ["images/big-edit-console.jpg", "", "", ""],
				  ["images/cheshire-fields-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2500, cycles:0, wraparound:false},
	fadeduration: 3500, //transition duration (milliseconds)
})
