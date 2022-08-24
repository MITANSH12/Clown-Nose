noseX= 0;
noseY= 0;
function preload() {
clownNose = loadImage('https://i.postimg.cc/hvSDXfGz/clownnose-removebg-preview.png');
}
function setup () {
canvas = createCanvas(300 , 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300 , 300);
video.hide();
poseNet = ml5.poseNet(video , modelLoaded);
poseNet.on('pose', gotPoses);

}
function draw () {
 image(video , 0 , 0 , 300 , 300);
 
 image(clownNose , noseX , noseY , 40 , 40);
}
function take_snapshot () {
    save("filter_name.png");
}
function modelLoaded() {
    console.log("poseNet is Initialized");
}
function gotPoses (results) {
    if (results.length > 0)
 {
    
    console.log(results);
    noseX = results[0].pose.nose.x - 20;
    noseY = results[0].pose.nose.y - 20;
    console.log("nose x =" + noseX);
    console.log("nose y =" + noseY);
    

 }}