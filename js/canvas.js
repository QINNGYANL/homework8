// Variables!
var radius = 15;
var x = 50;
var y =150;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d");
var colorPicker = document.querySelector("input");


//I would add more variables for x, y, radius, and color
var isdefault = true;
var isdrawing = true;

// Listeners!!
// Add a listener for loading the window
window.addEventListener("load", ()=>{
	console.log("loading the window.");
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
});

// 1
window.addEventListener("resize", ()=>{
	resize();
});
function resize(){
	ctx.canvas.width = window.innerWidth * 0.75;
	ctx.canvas.height = window.innerHeight * 0.75;
}

// 2
//Add a listener for the mouse movement (started below)
var lastpoint = { x: 0, y: 0 };


canvas.addEventListener("mousemove", (e)=>{
	if (isdrawing){
		const x = e.clientX; // horizontal coordinate
		const y = e.clientY; // vertical coordinate
		lastpoint.x = x;
		lastpoint.y = y;
		// console.log(x);
		// console.log(y);
		draw(x, y, 5);
		changecolor();
	}

});

// 4
document.addEventListener("keydown", ()=>{
	if (event.key == "Backspace"){
		ctx.clearRect(0,0,canvas.width, canvas.height);
		console.log("clear canvas");
	}
});

// 5
document.addEventListener("keydown", ()=>{
	if (event.key == "ArrowUp"){
		console.log("up");
		isdrawing = false;
	}
	if (event.key == "ArrowDown"){
		console.log("down");
		isdrawing = true;
	}
});

// 3
function changecolor(){
	document.addEventListener('keydown', ()=>{
		isdefault = false;
		if (event.key == "b"){
			//ctx.save();
			ctx.fillStyle = "rgb(0,0,255)";
			console.log("change blue");
		}
		if (event.key == 'r'){
			ctx.fillStyle = "rgb(255,0,0)";
			console.log("change red");
		}
		if(event.key == 'g'){
			ctx.fillStyle = "rgb(0,128,0)";
			console.log("change green");
		}
		if(event.key == 'y'){
			ctx.fillStyle = "rgb(255,255,0)";
			console.log("change yellow");
		}
	});

	// 6
	colorPicker.addEventListener('change', ()=>{
		isdefault = false;
		console.log("color change");
		//console.log(colorPicker.value);
		ctx.fillStyle = colorPicker.value;
	});
}
// Functions!
// I would add a function for draw
function draw(x, y, radius){
	console.log("I am going to draw!!");
	//CHECK OUT beginPath()
	// draw circle
	ctx.beginPath(); // begin
	ctx.arc(x, y, radius, 0, Math.PI*2);
	if (isdefault) {
		ctx.fillStyle = "rgb(255,0,0)";
	}
	//ctx.fillStyle = "rgb(255,0,0)";
	ctx.fill();
}


//Add a listener for the keydown

//Add a listener for the color picker



//Add a listener for the key events (started below)


