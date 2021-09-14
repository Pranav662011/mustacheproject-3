mouthX=0;
mouthY=0;

function preload(){

face=loadImage("https://i.postimg.cc/j2G32bdS/istockphoto-485318064-612x612-removebg-preview-1.png");
}

function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(500,500);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);

    poseNet.on("pose", gotPoses);

}

function draw(){
image(video,0,0,500,500);
//circle(noseX,noseY,20);
//fill(255,0,0);
//stroke(255,0,0);
image(face,mouthX,mouthY,50,50);
}
function take_snapshot(){
    save("MyFilterImage.png");
}

function modelLoaded(){
    console.log("poseNet is initiated");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("mouth x = "+results[0].pose.nose.x);
        console.log("mouth y = "+results[0].pose.nose.y);
      mouthX=results[0].pose.nose.x-20;
      mouthY=results[0].pose.nose.y-5;
    }
}


    

