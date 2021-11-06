function preload(){

}

function draw(){
    background("#baabff");
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
    }
}