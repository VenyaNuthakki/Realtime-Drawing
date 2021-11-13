nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
difference=0;
function preload(){

}

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(560,100);
    video=createCapture(VIDEO);
    video.size(550,500);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',getposes)
}

function modelloaded(){
    console.log("modelloaded");
}

function getposes(results){
    if (results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}

function draw(){
    background("#baabff");
    fill("#0acaff");
    square(nosex,nosey,difference);
    document.getElementById("square_side").innerHTML="size of the square : "+difference+" px";
}