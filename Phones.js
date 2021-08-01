img = "";
status = "";

function preload(){
    img = loadImage('DSC00852.JPG');
}


function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}


function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

 function gotResult(error, results){
     if(error){
         console.log(error);
     }
     else{
     console.log(results);
     }
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ff0000");
    text("Mobile Phone", 75, 105);
    noFill();
    stroke("#ff0000");
    rect(60, 90, 400, 400);
}

function back(){
    window.location = "First index.html";
}