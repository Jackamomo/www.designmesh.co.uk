var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/production-kids-1.jpg", "", "", ""],
				  ["images/production-school-1.jpg", "", "", ""],
				  ["images/education-kids-250.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})
