var mygallery=new fadeSlideShow({
	wrapperid: "img-1",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/keith-editing.jpg", "", "", ""],
				  ["images/cameraman-duke.jpg", "", "", ""], 
				  ["images/windmill-sunset.jpg", "", "", ""], 
				  ["images/camera-guy-5.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:2000, cycles:0, wraparound:false},
	fadeduration: 3500, //transition duration (milliseconds)
})

var mygallery=new fadeSlideShow({
	wrapperid: "img-2",
	dimensions: [250, 160], //width/height of gallery in pixels. Should reflect dimensions of largest image
	imagearray: [ ["images/camera-guy-2.jpg", "", "", ""],
				  ["images/st-micheals-sunset.jpg", "", "", ""],
				  ["images/betacam.jpg", "", "", ""],
				  ["images/boat-rudder.jpg", "", "", ""] ],
	displaymode: {type:'auto', pause:3000, cycles:0, wraparound:false},
	fadeduration: 4000, //transition duration (milliseconds)
})

