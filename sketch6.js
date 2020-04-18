
var drops = [];
var bird;
var pipes;
var parallax = 0.8;
var score = 0;
var maxScore = 0;
var birdSprite;
var pipeBodySprite;
var pipePeakSprite;
var bgImg;
var bgX;
var gameoverFrame = 0;
var isOver = false;

var touched = false;
var prevTouched = touched;

let video;
let poseNet;
let pose;
let skeleton;
var person;
let brain;
let poseLabel = "N";


function setup() {
	 createCanvas(800, 600);
  for (var i = 0; i < 1; i++) {
    drops[i] = new Drop();
  }
  person = new Person();
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);

}

function draw() {
  background(230, 230, 250);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
person.show();

 push();
  translate(video.width, 0);
  scale(-1/3, 1/3);
  image(video, 0, 0, video.width, video.height);

  if (pose) {
    for (let i = 0; i < skeleton.length; i++) {
      let a = skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(0);

      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
    for (let i = 0; i < pose.keypoints.length; i++) {
      let x = pose.keypoints[i].position.x;
      let y = pose.keypoints[i].position.y;
      fill(0);
      stroke(255);
      ellipse(x, y, 16, 16);
	  
	  if(pose.keypoints[i].part === 'leftShoulder'){
		  person.leftShoulder_x = pose.keypoints[i].position.x;
		  person.leftShoulder_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'rightShoulder'){
		  person.rightShoulder_x = pose.keypoints[i].position.x;
		  person.rightShoulder_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'rightWrist'){
		  person.rightWrist_x = pose.keypoints[i].position.x;
		  person.rightWrist_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'leftWrist'){
		  person.leftWrist_x = pose.keypoints[i].position.x;
		  person.leftWrist_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'rightHip'){
		  person.rightHip_x = pose.keypoints[i].position.x;
		  person.rightHip_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'leftHip'){
		  person.leftHip_x = pose.keypoints[i].position.x;
		  person.leftHip_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'rightKnee'){
		  person.rightKnee_x = pose.keypoints[i].position.x;
		  person.rightKnee_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'leftKnee'){
		  person.leftKnee_x = pose.keypoints[i].position.x;
		  person.leftKnee_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'leftElbow'){
		  person.leftElbow_x = pose.keypoints[i].position.x;
		  person.leftElbow_y = pose.keypoints[i].position.y;
	  }else if(pose.keypoints[i].part === 'rightElbow'){
		  person.rightElbow_x = pose.keypoints[i].position.x;
		  person.rightElbow_y = pose.keypoints[i].position.y;
	  }
	  
	  
    }
	
	
  }
  pop();

  

  
}



function gameover() {
  textSize(64);
  textAlign(CENTER, CENTER);
  text('GAMEOVER', width / 2, height / 2);
  textAlign(LEFT, BASELINE);
  maxScore = max(score, maxScore);
  isOver = true;
  noLoop();
}

function reset() {
 
  isOver = false;
  score = 0;
  bgX = 0;
  person = new Person();
  drops = [];
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
  
  gameoverFrame = frameCount - 1;
  loop();
}

function keyPressed() {
  if (key === ' ') {
    if (isOver) reset(); //you can just call reset() in Machinelearning if you die, because you cant simulate keyPress with code.
  }
}


function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}
