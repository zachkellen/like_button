var likeAmount = 3;
var likeStatement = document.querySelector("#like-counter");

function addLike() {
    likeAmount++;
    likeStatement.innerHTML = likeAmount + " like(s)"
}

var likeAmount2 = [9, 12, 9];
var likeStatement1 = document.querySelector("#like-counter1");
var likeStatement2 = document.querySelector("#like-counter2");
var likeStatement3 = document.querySelector("#like-counter3");

function addLike1() {
    likeAmount2[0]++;
    likeStatement1.innerHTML = likeAmount2[0] + " like(s)"
}

function addLike2() {
    likeAmount2[1]++;
    likeStatement2.innerHTML = likeAmount2[1] + " like(s)"
}

function addLike3() {
    likeAmount2[2]++;
    likeStatement3.innerHTML = likeAmount2[2] + " like(s)"
}