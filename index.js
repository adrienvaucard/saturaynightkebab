const kebab = require('./kebab.json');

let meats = [
    "lamb",
    "egg",
    "chicken"
];

let pessis = [
    "fish",
    "shrimp"
]

let hasSauce = false;
let hasCheese = false;
let hasOnions = false;

let isVegan = true;
let isPessi = true;

kebab.ingredients.forEach(element => {
    if (meats.includes(element)) {
        isVegan = false;
    }
});

if (isVegan) {
    console.log("Kebab is vegan");
} else {
    console.log("Kebab is not vegan");
}

kebab.ingredients.forEach(element => {
    if (pessis.includes(element)) {
        pessis = false;
    }
});

if (isPessi) {
    console.log("Kebab is pessi");
} else {
    console.log("Kebab is not pessi");
}

kebab.ingredients.forEach(element => {
    if (element.includes("sauce")) {
        hasSauce = true;
    }
});

if (hasSauce) {
    console.log("Kebab has sauce");
} else {
    console.log("Kebab has not sauce");
}

kebab.ingredients.forEach(element => {
    if (element.includes("cheese")) {
        haveCheese = true;
    }
});

if (hasCheese) {
    console.log("Kebab has cheese");
} else {
    console.log("Kebab has not cheese");
}

kebab.ingredients.forEach(element => {
    if (element.includes("onions")) {
        hasOnions = true;
    }
});

if (hasOnions) {
    console.log("Kebab has onions");
} else {
    console.log("Kebab has not onions");
}



  