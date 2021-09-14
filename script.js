function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    // console.log(bgColor);

    document.body.style.background = bgColor;
}

random_bg_color();

function random_text_size(min, max) {
    min = Math.ceil(1);
    max = Math.floor(20);
    var txt = Math.floor(Math.random() * (max - min) + min);

    var txtSize = txt + "px";
    console.log(txtSize);
    document.getElementById("txt").style.fontSize = txtSize;
}

random_text_size();

// function random_img_size(id) {
//   var sideLen = Math.floor(Math.radom()*30);
//   sideLen += "px";
//   console.log(sideLen)
//   document.getElementById(id).style.width = sideLen;
//   document.getElementById(id).style.length = sideLen;
// }

// random_img_size("original");
// random_img_size("parsed");
// random_img_size("result");

// function random_speed() {
//     var imgIds = ["original", "parsed", "result"];
//     var idx = 0;

//     document.getElementById(imgIds[1]).style.display = "none";
//     document.getElementById(imgIds[2]).style.display = "none";

//     var speed = Math.floor(Math.random() * 1000);

//     while (true) {
//         if (idx == 0) {
//             setTimeout(() => { document.getElementById(imgIds[0]).style.display = "none"; }, speed);
//             document.getElementById(imgIds[1]).style.display = "block";
//             idx = 1;
//         }
//         else if (idx == 1) {
//             setTimeout(() => { document.getElementById(imgIds[1]).style.display = "none"; }, speed);
//             document.getElementById(imgIds[2]).style.display = "block";
//             idx = 2;
//         }
//         else {
//             setTimeout(() => { document.getElementById(imgIds[2]).style.display = "none"; }, speed);
//             document.getElementById(imgIds[0]).style.display = "block";
//             idx = 0;
//         }
//     }
// }

// random_speed();


var animalSets = []
var rodents = ["rodent_1.png", "rodent_2.png", "rodent_3.png"];
var pigs = ["pig_1.jpeg", "pig_2.png", "pig_3.png"];
var monkies = ["monkey_1.jpeg", "monkey_2.png", "monkey_3.png"];
var lions = ["lion_1.jpeg", "lion_2.png", "lion_3.png"];
var cows = ["cow_1.jpeg", "cow_2.png", "cow_3.png"];

animalSets.push(rodents);
animalSets.push(pigs);
animalSets.push(monkies);
animalSets.push(lions);
animalSets.push(cows);

document.getElementById("refresh_btn").addEventListener("click", updatePics);


var idx = 0;
function updatePics() {
    var animalSet = animalSets[idx];
    document.getElementById("original").setAttribute('src', 'images/'.concat(animalSet[0]));
    document.getElementById("parsed").setAttribute('src', 'images/'.concat(animalSet[1]));
    document.getElementById("result").setAttribute('src', 'images/'.concat(animalSet[2]));

    if (idx < animalSets.length - 1) {
        idx += 1;
    }
    else {
        idx = 0;
    }
}

