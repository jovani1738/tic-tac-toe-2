// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = 0
var s1 = 0
var s2 = 0
var s3 = 0
var s4 = 0
var s5 = 0
var s6 = 0
var s7 = 0
var s8 = 0
var s9 = 0
var canvas = document.getElementById("game-board")

function kms() {
if(s1 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 70)
rect.setAttribute("y", 70)
canvas.appendChild(rect)
turn = turn + 1
s1 = s1 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 95)
  circle.setAttribute("cy", 95)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
s1 = s1 + 2
}

}
}
function hey() {
if(s2 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 70)
rect.setAttribute("y", 165)
canvas.appendChild(rect)
turn = turn + 1
s2 = s2 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 95)
  circle.setAttribute("cy", 190)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s2 = s2 + 2
}

}

}
function lol() {
if(s3 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 70)
rect.setAttribute("y", 260)
canvas.appendChild(rect)
turn = turn + 1
s3 = s3 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 95)
  circle.setAttribute("cy", 285)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s3 = s3 + 2
}

}

}

function bang() {
if(s4 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 165)
rect.setAttribute("y", 70)
canvas.appendChild(rect)
turn = turn + 1
s4 = s4 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 190)
  circle.setAttribute("cy", 95)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s4 = s4 + 2
}

}

}
function gang() {
if(s5 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 165)
rect.setAttribute("y", 165)
canvas.appendChild(rect)
turn = turn + 1
s5 = s5 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 190)
  circle.setAttribute("cy", 190)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s5 = s5 + 2
}

}

}
function lil() {
if(s6 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 165)
rect.setAttribute("y", 260)
canvas.appendChild(rect)
turn = turn + 1
s6 = s6 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 190)
  circle.setAttribute("cy", 285)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s6 = s6 + 2
}

}

}
function boat() {
if(s7 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 260)
rect.setAttribute("y", 70)
canvas.appendChild(rect)
turn = turn + 1
s7 = s7 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 285)
  circle.setAttribute("cy", 95)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s7 = s7 + 2
}

}

}
function haha() {
if(s8 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 260)
rect.setAttribute("y", 165)
canvas.appendChild(rect)
turn = turn + 1
s8 = s8 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 285)
  circle.setAttribute("cy", 190)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s8 = s8 + 2
}

}

}
function glenn() {
if(s9 == 0){
  if (turn == 0){
  var rect = document.createElementNS(namespace, "rect")
rect.setAttribute("width", 50)
rect.setAttribute("height", 50)
rect.setAttribute("x", 260)
rect.setAttribute("y", 260)
canvas.appendChild(rect)
turn = turn + 1
s9 = s9 + 1
} else if (turn == 1) {
    var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 285)
  circle.setAttribute("cy", 285)
  circle.setAttribute("r", 30)
  canvas.appendChild(circle)
turn = turn - 1
s9 = s9 + 2
}

}

}
