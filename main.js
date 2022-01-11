noseX = 0;
noseY = 0;

function preload() {
    clown_face = loadImage('https://i.postimg.cc/g2hwQG4b/clown-face.png',);
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 75;
        noseY = results[0].pose.nose.y - 100;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clown_face, noseX, noseY, 150, 150);
}


function take_snapshot() {
    save('myFilterImage.png');
}