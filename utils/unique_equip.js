import {citemattr, cworditem_en} from '../config.js'
import { UTILS_GetJSONData } from './utils.js';

export function GetUniqueEquipWithID(id) {
    try {
        // Read the JSON file for item attributes
        let jsonData = UTILS_GetJSONData(citemattr);

        // Get the unique equipment name and description IDs
        const uniqueNameID = jsonData?.Data?.[id]?.nameTextID;
        const uniqueDescriptionID = jsonData?.Data?.[id]?.destribeTextID;

        // If either ID is undefined, throw an error
        if (!uniqueNameID || !uniqueDescriptionID) {
            throw new Error(`Invalid equipment ID ${id}`);
        }

        // Get the text data from cworditem_en
        jsonData = UTILS_GetJSONData(cworditem_en);

        // Construct the data object
        const data = {
            name: jsonData?.Data?.[uniqueNameID]?.text || "Unknown name",
            description: jsonData?.Data?.[uniqueDescriptionID]?.text || "Unknown description",
        };

        return data;

    } catch (error) {
        console.error('Error:', error.message);
        return {
            name: "JS error while getting attributes",
            description: "JS error while getting attributes"
        }
    }
}