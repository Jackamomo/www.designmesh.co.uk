var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/56-sound-studio.jpg", "", "", ""],
				  ["images/camera-guy.jpg", "", "", ""],
				  ["images/london.jpg", "", "", ""],
				  ["images/camera-cliff.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})
