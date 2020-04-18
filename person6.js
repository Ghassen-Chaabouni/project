
function Person() {
  
  this.rightShoulder_x = 100;
  this.rightShoulder_y = 450;
  
  this.leftShoulder_x = 150;
  this.leftShoulder_y = 450;
  
  this.rightWrist_x = 50;
  this.rightWrist_y = 450;
  
  this.leftWrist_x = 200;
  this.leftWrist_y = 450;
  
  this.rightHip_x = 100;
  this.rightHip_y = 500;
  
  this.leftHip_x = 150;
  this.leftHip_y = 500;
  
  this.rightKnee_x = 100;
  this.rightKnee_y = 550;
  
  this.leftKnee_x = 150;
  this.leftKnee_y = 550;
  
  this.leftElbow_x = 150;
  this.leftElbow_y = 550;
  
  this.rightElbow_x = 150;
  this.rightElbow_y = 550;
  

  this.show = function() {
	
    strokeWeight(15);
	
   stroke(0);
   line(this.leftShoulder_x, this.leftShoulder_y, this.rightShoulder_x, this.rightShoulder_y);
   line(this.rightElbow_x, this.rightElbow_y, this.rightShoulder_x, this.rightShoulder_y);
   line(this.leftElbow_x, this.leftElbow_y, this.leftShoulder_x, this.leftShoulder_y);
   line(this.leftWrist_x, this.leftWrist_y, this.leftElbow_x, this.leftElbow_y);
   line(this.rightWrist_x, this.rightWrist_y, this.rightElbow_x, this.rightElbow_y);
   line(this.leftHip_x, this.leftHip_y, this.leftShoulder_x, this.leftShoulder_y);
   line(this.rightHip_x, this.rightHip_y, this.rightShoulder_x, this.rightShoulder_y);
   line(this.leftHip_x, this.leftHip_y, this.rightHip_x, this.rightHip_y);
   line(this.leftKnee_x, this.leftKnee_y, this.leftHip_x, this.leftHip_y);
   line(this.rightKnee_x, this.rightKnee_y, this.rightHip_x, this.rightHip_y);
  
   
   stroke("red");
    line(this.leftShoulder_x, this.leftShoulder_y, this.leftShoulder_x, this.leftShoulder_y);
	line(this.rightShoulder_x, this.rightShoulder_y, this.rightShoulder_x, this.rightShoulder_y);
	line(this.leftWrist_x, this.leftWrist_y, this.leftWrist_x, this.leftWrist_y);
	line(this.rightWrist_x, this.rightWrist_y, this.rightWrist_x, this.rightWrist_y);
	line(this.leftHip_x, this.leftHip_y, this.leftHip_x, this.leftHip_y);
	line(this.rightHip_x, this.rightHip_y, this.rightHip_x, this.rightHip_y);
	line(this.leftKnee_x, this.leftKnee_y, this.leftKnee_x, this.leftKnee_y);
	line(this.rightKnee_x, this.rightKnee_y, this.rightKnee_x, this.rightKnee_y);
	line(this.rightElbow_x, this.rightElbow_y, this.rightElbow_x, this.rightElbow_y);
	line(this.leftElbow_x, this.leftElbow_y, this.leftElbow_x, this.leftElbow_y);
	
  
   
   
  };
}
