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
let cheese = 0;
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
    if (element.includes("double cheese")) {
        cheese = cheese*2;
    } else if (element.includes("cheese")) {
        cheese++;
    }
});

if (cheese > 0) {
    console.log(`Kebab has ${cheese} cheese`);
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



  