import {ccardroleconfig_handbook, roleconfig} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';


// Function to get raw data of a doll by ID
export function RAW_GetDollCardWithID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(ccardroleconfig_handbook);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}


export function RAW_GetDollGameplayWithID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}