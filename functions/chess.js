function knightMoves(x, y) {
    // All possible moves a knight can make
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1], 
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    // Array to store valid moves
    let validMoves = [];
    
    // Loop through all potential moves
    for (let move of moves) {
        let newX = x + move[0];
        let newY = y + move[1];
        
        // Check if the new position is within the board limits
        if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
            validMoves.push(`(${newX},${newY})`);
        }
    }
    
    // Return valid moves as a string separated by commas
    return validMoves.join(", ");
}

console.log(`${ans}`);
knightMoves(4, 4);
knightMoves(1, 1);
knightMoves(8, 8);
knightMoves(5, 7);