var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/farmer.jpg", "", "", ""],
				  ["images/nurse-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-2",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/science-student-250.jpg", "", "", ""],
				  ["images/dentist-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:3000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})
