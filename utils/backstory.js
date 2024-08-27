import {cwordhandbook_en} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';

// Function to get backstory text by ID
export function GetBackstoryWithTextID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(cwordhandbook_en);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}