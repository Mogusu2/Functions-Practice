function calculateVelocity(initialVelocity, accelaration, time) {
    return initialVelocity + (accelaration * time);
}

let ans = initialVelocity + (accelaration * time)

//console.log(`${ans}`);

calculateVelocity(5, 2, 3);
calculateVelocity(0, 10, 5);
calculateVelocity(20, -3, 4);
calculateVelocity(15, 1, 10);