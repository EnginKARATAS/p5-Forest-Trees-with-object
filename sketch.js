var tree;
var ciz;
var forest = [];

function setup() {
	createCanvas(600, 600);
	background(0);
	tree = new Tree();
	
 
 	for (i = 0; i < 10; i++) {
 		forest.push(new Tree());
 	}
		translate(50, 50);
	for (i = 0; i < 10; i++)
		forest[i].show();
}

function draw() {


}