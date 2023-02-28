alert("Hello and Welcome! Let's create a profile for you!");

var fname = prompt("Please type in your full name:");
document.getElementById("fname").innerHTML = fname;

var username = prompt("Please type in your username:");
document.getElementById("username").innerHTML = username;

if (confirm("What is your gender? Please press \n OK if you are MALE \n Cancel if you are FEMALE") == true) {
    alert("Your profile gender is set to MALE.");
    document.getElementById("gender").innerHTML = "M";
} else {
    alert("Your profile gender is set to FEMALE.");
    document.getElementById("gender").innerHTML = "F";
}

var desc = prompt("Please type in a brief description of yourself:");
document.getElementById("desc").innerHTML = desc;

var year = prompt("Please enter your birth year:");
document.getElementById("year").innerHTML = year;

var age = 2023 - year;
document.getElementById("age").innerHTML = age;

if (confirm("Would you like a custom profile picture?")) {
    var ppic = prompt("Please type in the file name of the picture. (Example: wow.jpg)");
    document.getElementById("ppic").src = ppic;
    alert("Your profile picture has been updated!");
} else {
    alert("No profile picture has been set.");
}