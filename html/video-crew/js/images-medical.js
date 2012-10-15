var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/medical-surgery.jpg", "", "", ""],
				  ["images/doctor-stethascope.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-2",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/medical-tummy.jpg", "", "", ""],
				  ["images/medical-foot.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:3000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-3",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/medical-learning-diff.jpg", "", "", ""],
				  ["images/medical-glasses.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:1750, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})