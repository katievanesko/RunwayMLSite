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

update_pics();

//COME UP WITH SOMETHING MORE: ANCHOR POINT LIKE TEXT-- name the animals or something
//FIX WHITE EDGES

function random_size(orientation) { //UPADATE BASED ON WINDOW SIZE SO IT DOESNT GO OVER
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;
    
    var orig_img = document.getElementById("original");
    var parsed_img = document.getElementById("parsed");
    var res_img = document.getElementById("result");

    if (orientation == "vert") {  //height < 100 %
        var h1 = Math.floor(Math.random() * 100) + 250;
        var h2 = Math.floor(Math.random() * 75) + 150;
        var h3 = Math.floor(Math.random() * 50) + 50;

        res_img.style.height = h1 + "px";
        res_img.style.width = (h1 * 1.2) + "px";

        parsed_img.style.height =  h2 + "px";
        parsed_img.style.width = (h2 * 1.2) + "px";

        orig_img.style.height =  h3 + "px";
        orig_img.style.width = (h3 * 1.2) + "px";

    }
    else if (orientation == "horz") { //width < 100%
        var w1 = Math.floor(Math.random() * 200) + 500; 
        var w2 = Math.floor(Math.random() * 150) + 300; 
        var w3 = Math.floor(Math.random() * 50) + 200; 

        res_img.style.height = (w1/1.2) + "px";
        res_img.style.width = w1 + "px";

        parsed_img.style.height =  (w2/1.2) + "px";
        parsed_img.style.width = w2 + "px";

        orig_img.style.height =  (w3/1.2) + "px";
        orig_img.style.width = w3 + "px";
    }
}

function random_spacing() {
    var spacing = "";
    var rand = Math.floor(Math.random() * 5);
    if (rand < 1) {
        spacing = "center-top";
        random_size("horz");
    }
    else if (rand >= 1 && rand < 2) {
        spacing = "center-center";
        random_size("horz");
    }
    else if (rand >= 2 && rand < 3) {
        spacing = "left-top"
        random_size("vert");
    }
    else if (rand >= 3 && rand < 4) {
        spacing = "right-bottom"
        random_size("vert");
    }
    else if (rand >= 4 && rand < 5) {
        spacing = "center-bottom"
        random_size("horz");
    }

    var image_div = document.getElementById("img-container");
    var curr = image_div.classList;

    if (curr.length > 0) {
        image_div.classList.replace(curr[0], spacing);
    }
    else {
        image_div.classList.add(spacing);
    }
}

function update_pics() {

    //update photos shown
    var idx = Math.floor(Math.random() * animalSets.length);
    var animalSet = animalSets[idx];
    document.getElementById("original").setAttribute('src', 'images/'.concat(animalSet[0]));
    document.getElementById("parsed").setAttribute('src', 'images/'.concat(animalSet[1]));
    document.getElementById("result").setAttribute('src', 'images/'.concat(animalSet[2]));

    random_spacing();
}
