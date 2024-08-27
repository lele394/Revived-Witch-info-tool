import {roleconfig} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';


// Get skill IDs of a doll
export function GetSkillIDsWithDollID(id) {
    // Read the JSON file synchronously

    let jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const skill1 = jsonData?.Data?.[id].contractskillid;
    const skill2 = jsonData?.Data?.[id].contractskillid2;
    const skill3 = jsonData?.Data?.[id].contractskillid3;
    // Return the result 
    return {skill1 : skill1, skill2: skill2, skill3 : skill3}
}
