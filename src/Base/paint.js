export default `

<!DOCTYPE html>
<html>
    <head>
       
        
    </head>
    <body>
        
            <canvas id="canvas" width="300" height="300">
  Your browser does not support canvas element.
</canvas>

        
        
<script type="text/javascript">

var IdData = {};
document.body.addEventListener('touchmove' , function(e){
    e.preventDefault();
});
function PostMessage(msg){
  window.postMessage(msg);
};
function clearCanvas(){
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    el.height=el.height;
}
var el = document.getElementsByTagName("canvas")[0];
el.addEventListener("touchstart", handleStart, false);
el.addEventListener("touchend", handleEnd, false);
el.addEventListener("touchcancel", handleCancel, false);
el.addEventListener("touchmove", handleMove, false);
window.document.addEventListener('message', function (e) {
    const message = JSON.parse(e.data);
    if (message.command === 'clear') {
        clearCanvas();
    }
});
var ongoingTouches = [];
function handleStart(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        ongoingTouches.push(copyTouch(touches[i]));
        var color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 0.1 * Math.PI, false);
        ctx.fillStyle = color;
        ctx.fill();
        pos = touches[i].pageX + "_" + touches[i].pageY;
        IdData['ind'+i] = [];
        IdData['ind'+i].push(pos);
    }
}
function handleMove(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);
        if (idx >= 0) {
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.lineWidth = 4;
            ctx.strokeStyle = color;
            ctx.stroke();
            pos = touches[i].pageX + "_" + touches[i].pageY;
            IdData['ind'+idx].push(pos);
            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
        } else {
        }
    }
}
function handleEnd(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if (idx >= 0) {
            ctx.lineWidth = 4;
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
            ctx.lineTo(touches[i].pageX, touches[i].pageY);
            ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 0.1 * Math.PI, false);
            ongoingTouches.splice(idx, 1);
            pos = touches[i].pageX + "_" + touches[i].pageY;
            IdData['ind'+idx].push(pos);
            PostMessage(JSON.stringify(IdData['ind'+idx]));
        } else {
        }
    }
}
function handleCancel(evt) {
    evt.preventDefault();
    log("touchcancel.");
    var touches = evt.changedTouches;

    for (var i = 0; i < touches.length; i++) {
        var idx = ongoingTouchIndexById(touches[i].identifier);
        ongoingTouches.splice(idx, 1);
    }
}
function colorForTouch(touch) {
    var r = touch.identifier % 16;
    var g = Math.floor(touch.identifier / 3) % 16;
    var b = Math.floor(touch.identifier / 7) % 16;
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    var color = "#0A0A0A";
    return color;
}
function copyTouch(touch) {
    return {
        identifier: touch.identifier,
        pageX: touch.pageX,
        pageY: touch.pageY
    };
}
function ongoingTouchIndexById(idToFind) {
    for (var i = 0; i < ongoingTouches.length; i++) {
        var id = ongoingTouches[i].identifier;

        if (id == idToFind) {
            return i;
        }
    }
    return - 1;
}
            </script>

    </body>
</html>
`;