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
var giraffes = ["giraffe_1.png", "giraffe_2.png", "giraffe_3.png"];
var foxes = ["fox_1.png", "fox_2.png", "fox_3.png"];
var ferrets = ["ferret_1.png", "ferret_2.png", "ferret_3.png"];
var frogs = ["frog_1.png", "frog_2.png", "frog_3.png"];
var fishies = ["fish_1.png", "fish_2.png", "fish_3.png"];
var dolphins = ["dolphin_1.png", "dolphin_2.png", "dolphin_3.png"];
var toucans = ["toucan_1.png", "toucan_2.png", "toucan_3.png"];
var raccoons = ["raccoon_1.png", "raccoon_2.png", "raccoon_3.png"];
var lemurs = ["lemur_1.png", "lemur_2.png", "lemur_3.png"];
var bears = ["bear_1.png", "bear_2.png", "bear_3.png"];
var cheetahs = ["cheetah_1.png", "cheetah_2.png", "cheetah_3.png"];
var pandas = ["panda_1.png", "panda_2.png", "panda_3.png"];
var sloths = ["sloth_1.png", "sloth_2.png", "sloth_3.png"];
var owls = ["owl_1.png", "owl_2.png", "owl_3.png"];
var snakes = ["snake_1.png", "snake_2.png", "snake_3.png"];
var cats = ["benji_1.png", "benji_2.png", "benji_3.png"];
var mice = ["mouse_1.png", "mouse_2.png", "mouse_3.png"];
var doggos = ["porter_1.png", "porter_2.png", "porter_3.png"];
var sheep = ["sheep_1.png", "sheep_2.png", "sheep_3.png"];
var hummingbirds = ["hummingbird_1.png", "hummingbird_2.png", "hummingbird_3.png"];

animalSets.push(rodents);
animalSets.push(pigs);
animalSets.push(monkies);
animalSets.push(lions);
animalSets.push(cows);
animalSets.push(giraffes);
animalSets.push(foxes);
animalSets.push(ferrets);
animalSets.push(frogs);
animalSets.push(fishies);
animalSets.push(dolphins);
animalSets.push(toucans);
animalSets.push(raccoons);
animalSets.push(lemurs);
animalSets.push(bears);
animalSets.push(cheetahs);
animalSets.push(pandas);
animalSets.push(sloths);
animalSets.push(owls);
animalSets.push(snakes);
animalSets.push(cats);
animalSets.push(mice);
animalSets.push(doggos);
animalSets.push(sheep);
animalSets.push(hummingbirds);


document.getElementById("refresh_btn").addEventListener("click", updatePics);

function updatePics() {
    idx = Math.floor(Math.random() * animalSets.length);
    var animalSet = animalSets[idx];
    document.getElementById("original").setAttribute('src', 'images/'.concat(animalSet[0]));
    document.getElementById("parsed").setAttribute('src', 'images/'.concat(animalSet[1]));
    document.getElementById("result").setAttribute('src', 'images/'.concat(animalSet[2]));
}



//variables:
//size -- small to large or large to small
//speed
