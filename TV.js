img = "";
status = "";

function preload(){
    img = loadImage('20210730_204833.jpg');
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
    text("Television", 45, 75);
    noFill();
    stroke("#ff0000");
    rect(30, 60, 450, 350);

    fill("#ff0000");
    text("Speaker", 315, 115);
    noFill();
    stroke("#ff0000");
    rect(300, 100, 450, 350);
}

function back(){
    window.location = "First index.html";
}
