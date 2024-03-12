// Apologies, this is some old code taken from an old 01337 bg, though cleaned up a little
let cvs = document.querySelector('canvas');
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
document.body.appendChild(cvs);
let ctx = cvs.getContext("2d");
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, cvs.width, cvs.height);
let stars = [];
function createStar(){
    stars.push({
        y: Math.floor(Math.random()*cvs.height),
        x: Math.floor(Math.random()*cvs.width),
        xspeed: Math.floor(Math.random()*5)+1,
        yspeed: Math.floor(Math.random()*10)+3,
        size: 50
    });
}
function draw(){
    ctx.fillStyle = '#0004';
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, cvs.width, cvs.height);
    for (let z in stars){
        let s = stars[z];
        s.x+=s.xspeed;
        s.y+=s.yspeed;
        if (s.x>(cvs.width+20)||s.y>(cvs.height+20)){
            let z = Math.floor(Math.random()*3);
            if (z===0){
                s.x=-(Math.floor(Math.random()*50)+20);
                s.y=Math.floor(Math.random()*cvs.height);
            }else if (z==1){
                s.x=-(Math.floor(Math.random()*50)+20);
                s.y=-(Math.floor(Math.random()*50)+20);
            }else if (z==2){
                s.x=Math.floor(Math.random()*cvs.width);
                s.y=-(Math.floor(Math.random()*50)+20);
            }
            s.xspeed=Math.floor(Math.random()*5)+1;
            s.yspeed=Math.floor(Math.random()*10)+3;
        };
        ctx.drawImage(img1, s.x, s.y);
    }
}
let started = false;
function start(){
    if (started) return;
    if (cvs.width === 0 || cvs.height === 0) return;
    started = true;
    onResize();
    for (var i = 0; i < 40; i++) {
        createStar();
    }
    setInterval(draw, 30); draw();
}
let grd;
function grad(){
    grd = ctx.createLinearGradient(0, 0, 0, cvs.height);
    grd.addColorStop(0, "#0000");
    grd.addColorStop(1, "#0aa9");
}
function onResize(){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    start();
    grad();
}
window.onresize = onResize;
grad();
let img1 = new Image();
img1.onload = function () {
    start();
};
img1.src = '/system/resource/cursors/default.png';

