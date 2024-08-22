const fs = require('fs');
const CreateDollFromID = require('./doll_linker');

const Doll_IDs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27,
    28, 29, 30, 32, 33, 34, 35, 36, 38, 39, 40, 41, 42,
    43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82,
    83, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 97,
    98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
    110, 111, 112, 113, 115, 116, 117, 119, 120, 121, 122,
    123, 124
  ]


// Create an object to store the results
const dollsCollection = {};

// Iterate over each ID in Doll_IDs and populate the object
Doll_IDs.forEach(id => {
    try {
        // Try to run CreateDollFromID and assign the result
        dollsCollection[id] = CreateDollFromID(id);
    } catch (error) {
        // If it fails, assign "Failed parsing"
        dollsCollection[id] = "Failed parsing";
        console.error(`Error parsing doll with ID ${id}:`, error);
    }
});

// Convert the dollsCollection object to a JSON string
const jsonString = JSON.stringify(dollsCollection, null, 2);  // Pretty print with 2-space indentation

// Write the JSON string to a file called "dolls.json"
fs.writeFile('dolls.json', jsonString, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('JSON saved to dolls.json');
    }
});