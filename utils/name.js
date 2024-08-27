import {cwordrole_en, roleconfig} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';

// Get doll name using Doll ID
export function GetNameWithDollID(id) {
    // Read the JSON file synchronously
    let jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const nameTextID = jsonData?.Data?.[id].nameTextID;

    // Get name with ID
    jsonData = UTILS_GetJSONData(cwordrole_en);

    const DollName = jsonData?.Data?.[nameTextID].text;
    // Return the result 
    return DollName;
}