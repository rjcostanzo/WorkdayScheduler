var dateObject = new Date();

dateObject = moment();
dateObject = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
document.querySelector('#currentDay').innerText = dateObject;

setInterval (function() { 
    dateObject = moment();
    dateObject = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
    document.querySelector('#currentDay').innerText = dateObject;
}, 1000);

    document.querySelector('#Row8AM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row9AM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row10AM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row11AM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row12PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row1PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row2PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row3PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row4PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row5PM').style.backgroundColor = '#77dd77';
    document.querySelector('#Row6PM').style.backgroundColor = '#77dd77';

if (moment().hour() >= 8) {
    document.querySelector('#Row8AM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 9) {
    document.querySelector('#Row8AM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row9AM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 10) {
    document.querySelector('#Row9AM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row10AM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 11) {
    document.querySelector('#Row10AM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row11AM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 12) {
    document.querySelector('#Row11AM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row12PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 13) {
    document.querySelector('#Row12PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row1PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 14) {
    document.querySelector('#Row1PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row2PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 15) {
    document.querySelector('#Row2PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row3PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 16) {
    document.querySelector('#Row3PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row4PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 17) {
    document.querySelector('#Row4PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row5PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 18) {
    document.querySelector('#Row5PM').style.backgroundColor = '#d3d3d3';
    document.querySelector('#Row6PM').style.backgroundColor = '#ff6961';
}

if (moment().hour() >= 19) {
    document.querySelector('#Row6PM').style.backgroundColor = '#d3d3d3';
}

console.log(localStorage.getItem('8AMTask'));
console.log(localStorage.getItem('9AMTask'));
console.log(localStorage.getItem('10AMTask'));
console.log(localStorage.getItem('11AMTask'));
console.log(localStorage.getItem('12PMTask'));
console.log(localStorage.getItem('1PMTask'));
console.log(localStorage.getItem('2PMTask'));
console.log(localStorage.getItem('3PMTask'));
console.log(localStorage.getItem('4PMTask'));
console.log(localStorage.getItem('5PMTask'));
console.log(localStorage.getItem('6PMTask'));

var task8AM = document.querySelector('#TaskQuery8AM').value;
document.querySelector('#TaskQuery8AM').value = localStorage.getItem('8AMTask');
var task9AM = document.querySelector('#TaskQuery9AM').value;
document.querySelector('#TaskQuery9AM').value = localStorage.getItem('9AMTask');
var task10AM = document.querySelector('#TaskQuery10AM').value;
document.querySelector('#TaskQuery10AM').value = localStorage.getItem('10AMTask');
var task11AM = document.querySelector('#TaskQuery11AM').value;
document.querySelector('#TaskQuery11AM').value = localStorage.getItem('11AMTask');
var task12PM = document.querySelector('#TaskQuery12PM').value;
document.querySelector('#TaskQuery12PM').value = localStorage.getItem('12PMTask');
var task1PM = document.querySelector('#TaskQuery1PM').value;
document.querySelector('#TaskQuery1PM').value = localStorage.getItem('1PMTask');
var task2PM = document.querySelector('#TaskQuery2PM').value;
document.querySelector('#TaskQuery2PM').value = localStorage.getItem('2PMTask');
var task3PM = document.querySelector('#TaskQuery3PM').value;
document.querySelector('#TaskQuery3PM').value = localStorage.getItem('3PMTask');
var task4PM = document.querySelector('#TaskQuery4PM').value;
document.querySelector('#TaskQuery4PM').value = localStorage.getItem('4PMTask');
var task5PM = document.querySelector('#TaskQuery5PM').value;
document.querySelector('#TaskQuery5PM').value = localStorage.getItem('5PMTask');
var task6PM = document.querySelector('#TaskQuery6PM').value;
document.querySelector('#TaskQuery6PM').value = localStorage.getItem('6PMTask');

function submitTasks() {
    alert("Submitted");
    localStorage.setItem('8AMTask', document.querySelector('#TaskQuery8AM').value);
    localStorage.setItem('9AMTask', document.querySelector('#TaskQuery9AM').value);
    localStorage.setItem('10AMTask', document.querySelector('#TaskQuery10AM').value);
    localStorage.setItem('11AMTask', document.querySelector('#TaskQuery11AM').value);
    localStorage.setItem('12PMTask', document.querySelector('#TaskQuery12PM').value);
    localStorage.setItem('1PMTask', document.querySelector('#TaskQuery1PM').value);
    localStorage.setItem('2PMTask', document.querySelector('#TaskQuery2PM').value);
    localStorage.setItem('3PMTask', document.querySelector('#TaskQuery3PM').value);
    localStorage.setItem('4PMTask', document.querySelector('#TaskQuery4PM').value);
    localStorage.setItem('5PMTask', document.querySelector('#TaskQuery5PM').value);
    localStorage.setItem('6PMTask', document.querySelector('#TaskQuery6PM').value);
    console.log(localStorage.getItem('8AMTask'));
    console.log(localStorage.getItem('9AMTask'));
    console.log(localStorage.getItem('10AMTask'));
    console.log(localStorage.getItem('11AMTask'));
    console.log(localStorage.getItem('12PMTask'));
    console.log(localStorage.getItem('1PMTask'));
    console.log(localStorage.getItem('2PMTask'));
    console.log(localStorage.getItem('3PMTask'));
    console.log(localStorage.getItem('4PMTask'));
    console.log(localStorage.getItem('5PMTask'));
    console.log(localStorage.getItem('6PMTask'));
}

function resetAll() {
    let confirmed = confirm("Are you sure you want to reset all?");
    if (confirmed == true) {
        localStorage.clear;
        alert("Reset All Tasks");
        localStorage.setItem('8AMTask', ' ');
        localStorage.setItem('9AMTask', ' ');
        localStorage.setItem('10AMTask', ' ');
        localStorage.setItem('11AMTask', ' ');
        localStorage.setItem('12PMTask', ' ');
        localStorage.setItem('1PMTask', ' ');
        localStorage.setItem('2PMTask', ' ');
        localStorage.setItem('3PMTask', ' ');
        localStorage.setItem('4PMTask', ' ');
        localStorage.setItem('5PMTask', ' ');
        localStorage.setItem('6PMTask', ' ');
        document.querySelector('#TaskQuery8AM').value = localStorage.getItem('8AMTask');
        document.querySelector('#TaskQuery9AM').value = localStorage.getItem('9AMTask');
        document.querySelector('#TaskQuery10AM').value = localStorage.getItem('10AMTask');
        document.querySelector('#TaskQuery11AM').value = localStorage.getItem('11AMTask');
        document.querySelector('#TaskQuery12PM').value = localStorage.getItem('12PMTask');
        document.querySelector('#TaskQuery1PM').value = localStorage.getItem('1PMTask');
        document.querySelector('#TaskQuery2PM').value = localStorage.getItem('2PMTask');
        document.querySelector('#TaskQuery3PM').value = localStorage.getItem('3PMTask');
        document.querySelector('#TaskQuery4PM').value = localStorage.getItem('4PMTask');
        document.querySelector('#TaskQuery5PM').value = localStorage.getItem('5PMTask');
        document.querySelector('#TaskQuery6PM').value = localStorage.getItem('6PMTask');
    }
    else {
        alert('Aborted');
    }
}