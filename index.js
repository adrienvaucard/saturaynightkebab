let kebab = {
    ingredients: [
        "chicken",
        "tomato",
        "onions",
        "white sauce",
        "egg"
    ]
}

let meats = [
    "lamb",
    "egg",
    "chicken"
];

let pessis = [
    "fish",
    "shrimp"
]

let isVegan = true;
let isPessi = true;

kebab.ingredients.every(element => {
    if (meats.includes(element)) {
        isVegan = false;
    }
});

if (isVegan) {
    console.log("Kebab is vegan");
} else {
    console.log("Kebab is not vegan");
}

kebab.ingredients.every(element => {
    if (pessis.includes(element)) {
        pessis = false;
    }
});

if (isPessi) {
    console.log("Kebab is pessi");
} else {
    console.log("Kebab is not pessi");
}



  