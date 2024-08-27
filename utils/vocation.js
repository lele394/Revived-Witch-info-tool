import {cvocationcfg, cwordrole_en} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';


export function GetVocationWithID(id) {
    try {
        // Read the JSON file synchronously
        let jsonData = UTILS_GetJSONData(cvocationcfg);

        // Get the vocation name and description IDs
        const vocationNameID = jsonData?.Data?.[id]?.nameTextID;
        const vocationDescriptionID = jsonData?.Data?.[id]?.vocationDescribeTextID;

        // If either ID is undefined, throw an error
        if (!vocationNameID || !vocationDescriptionID) {
            throw new Error(`Invalid vocation ID ${id}`);
        }

        // Get text from cwordrole
        jsonData = UTILS_GetJSONData(cwordrole_en);

        // Construct the vocation object
        const vocation = {
            name: jsonData?.Data?.[vocationNameID]?.text || "Unknown name",
            description: jsonData?.Data?.[vocationDescriptionID]?.text || "Unknown description",
        };

        return vocation;

    } catch (error) {
        console.error('Error:', error.message);
        return {
            name: "JS error while getting attributes",
            description: "JS error while getting attributes",
        };
    }
}