const calculateAverageScore = (scores) => {
    // If the array is empty, return 0
    if (scores.length === 0) {
        return 0;
    }
   
    // Use reduce to calculate the sum of the scores
    const sum = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
   
    // Calculate the average by dividing the sum by the number of scores
    return sum / scores.length;
};


calculateAverageScore([80, 90, 70,60]);
calculateAverageScore([100, 90, 95]);
calculateAverageScore([50, 50, 50, 50, 50]);
calculateAverageScore([]);
