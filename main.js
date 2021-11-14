noseX=0;
noseY=0;

function preload(){
clown=loadImage("https://i.postimg.cc/5t0cW86M/kisspng-clip-art-illustration-clown-nose-vector-graphics-logos-business-jay-rumple-designs-5c4ffd2bc.png");
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(525,220);
video=createCapture(VIDEO);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', getPose)
}



function modelLoaded(){
    console.log("model loaded");
}

function getPose(results){
if(results.length>0){
    console.log(results);

    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;
}
}

function draw(){
    image(video, 0,0,500,400);
    image(clown, noseX-140, noseY-120, 150, 130);
    }

function takepic(){
save('WHATISTHISTOMFOOLERY.png');
}



