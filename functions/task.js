const checkTaskStatus = (taskName, isCompleted) => {
    // Check if taskName is a valid string
    if (typeof taskName !== 'string' || taskName.trim() === "") {
        console.error("Error: taskName must be a non-empty string.");
        return;
    }

    // Check if isCompleted is a boolean
    if (typeof isCompleted !== 'boolean') {
        console.error("Error: isCompleted must be a boolean value (true or false).");
        return;
    }

    // Log the task status based on isCompleted value
    if (isCompleted) {
        console.log(`Task "${taskName}" is completed`);
    } else {
        console.log(`Task "${taskName}" is not completed yet`);
    }
};

// Assign the function to a variable named taskLogger
const taskLogger = checkTaskStatus;

// Example usage
taskLogger("Finish Homework", true);  
taskLogger("Clean Room", false);  
taskLogger("Go for a Run", true);            
taskLogger("Read Book", false);    

