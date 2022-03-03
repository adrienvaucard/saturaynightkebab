let kebab = {
    ingredients: [
        "salad",
        "tomato",
        "onions",
        "white sauce"
    ]
}

let meats = [
    "lamb",
    "egg",
];

let pessis = [
    "fish",
    "shrimp"
]

let isVegan = true;
let isPessi = true;

meats.every(element => {
    if (kebab.ingredients.includes(element)) {
        isVegan = false;
    }
});

if (isVegan) {
    console.log("Kebab is vegan");
} else {
    console.log("Kebab is not vegan");
}

pessis.every(element => {
    if (kebab.ingredients.includes(element)) {
        pessis = false;
    }
});

if (isPessi) {
    console.log("Kebab is pessi");
} else {
    console.log("Kebab is not pessi");
}



  