let text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
let dinosaur = 'triceratops';
let bigDinosaur = dinosaur.toUpperCase();
let rightDinosaur = text.replace('Velociraptor', bigDinosaur);
let half = rightDinosaur.length/2;
let finalDinosaur = rightDinosaur.substr(0,half);
console.log(finalDinosaur);