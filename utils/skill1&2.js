import {cskillshow_role, cwordskill_en} from '../config.js'
import { processSkillText } from './utils.js';
import { UTILS_GetJSONData } from './utils.js';

// Get contractSkill of type 1 or 2 title and description
export function GetSkill1or2withSkillID(id, level) {
    try {
        // Read the JSON file synchronously
        let jsonData = UTILS_GetJSONData(cskillshow_role);

        // Recompute skill ID using level (*100 + level)
        const skillID = id * 100 + level;

        // Access the field using the provided ID
        const skillDescriptionID = jsonData?.Data?.[skillID]?.exDiscribeTextID;
        const skillNameID = jsonData?.Data?.[skillID]?.nameTextID;
        const skillTypeID = jsonData?.Data?.[skillID]?.typeTextID;
        const skillRangeID = jsonData?.Data?.[skillID]?.rangeTextID;

        // Recover attributes of the skill
        const skillAttributes = jsonData?.Data?.[skillID]?.attr;

        // Check if necessary IDs and attributes are defined
        if (!skillDescriptionID || !skillNameID || !skillTypeID || !skillRangeID || !skillAttributes) {
            throw new Error(`Invalid skill ID ${id} or level ${level}`);
        }

        // Now get text from IDs
        jsonData = UTILS_GetJSONData(cwordskill_en);

        // Construct the skill details object
        const skillDetails = {
            name: jsonData?.Data?.[skillNameID]?.text || "Unknown Name",
            type: jsonData?.Data?.[skillTypeID]?.text || "Unknown Type",
            range: jsonData?.Data?.[skillRangeID]?.text || "Unknown Range",
            description: processSkillText(jsonData?.Data?.[skillDescriptionID]?.text, skillAttributes) || "Unknown Description"
        };

        return skillDetails;

    } catch (error) {
        console.error('Error:', error.message);
        return "JS error while getting skill details";
    }
}