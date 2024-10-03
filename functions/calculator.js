function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'substract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break; 
        case 'divide':
            if (num2 == 0) {
                return 'Error: Division by zero N/A';
                }
                result = num1 / num2;
                break;
        default:
            return 'Error: Invalid Operation';
            }
    return result;        
}



//example usage
calculate(10, 5, "add");
calculate(10, 5, "subtract");
calculate(10, 5, "multiply");
calculate(10, 5, "divide");