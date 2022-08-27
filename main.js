alertsound = "";
sttatus = "";
objects = [];

function preload(){
    alertsound = loadSound("alarmsound.mp3");
}
function setup(){
    canvas = createCanvas(340,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(video, 0, 0,340, 280);

    if(objects[i].label  = "person")
    {
        r = random(255);
        g = random(255);
        b = random(255);
     objectDetector.detect(video, gotResult);

     document.getElementById("babyfound").innerHTML = "Baby Detected";
     for(i = 0; i < objects.length; i++)
    {
        document.getElementById("status").innerHTML = "Status: Object Detected";
        fill(r,g,b);
        percent = floor(objects[i].confidence*100);
        text(objects[i].label + "" + percent + "%", objects[i].x, objects[i].y);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
    }
    else{
        document.getElementById("babyfound").innerHTML = "Baby Not Found";
        alertsound.play();
    }
}


function modelLoaded(){
    console.log("Model Loaded!");
    sttatus = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}