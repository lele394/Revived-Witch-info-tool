const fs = require('fs');
const path = require('path');

const working_directory = path.join(__dirname, 'Kimaris_dump')

// JSON file with dolls backstory config I guess?
const ccardroleconfig_handbook = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'handbook', 'ccardroleconfig_handbook.json');

// JSON file with dolls gameplay config I guess?
const roleconfig = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'role', 'roleconfig.json');

// JSON file with dolls skills ?? Only 2 level skills
const cskillshow_soul = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_soul.json');

// JSON file with dolls skills ?? Only 5 level skills
const cskillshow_role = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_role.json');

// JSON file with vocation infos
const cvocationcfg = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'role', 'cvocationcfg.json');

// JSON file with unique equip infos
const citemattr = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'item', 'citemattr.json');

// JSON file with translated text??
const cwordhandbook_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordhandbook_en.json');

// JSON file with translated text??
const cwordrole_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordrole_en.json');

// JSON file with translated skill text??
const cwordskill_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordskill_en.json');

// JSON file with translated skill text??
const cworditem_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cworditem_en.json');

// Function to get raw data of a doll by ID
function RAW_GetDollCardWithID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(ccardroleconfig_handbook);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}

function RAW_GetDollGameplayWithID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}

// Function to get backstory text by ID
function GetBackstoryWithTextID(id) {
    // Read the JSON file synchronously
    const jsonData = UTILS_GetJSONData(cwordhandbook_en);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}

// Get doll name using Doll ID
function GetNameWithDollID(id) {
    // Read the JSON file synchronously
    let jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const nameTextID = jsonData?.Data?.[id].nameTextID;

    // Get name with ID
    data = fs.readFileSync(cwordrole_en, 'utf8');
    jsonData = JSON.parse(data);

    const DollName = jsonData?.Data?.[nameTextID].text;
    // Return the result 
    return DollName;
}



// Function that gets rid of the HTML tag and replace all parameters with their corresponding values
function processSkillText(text, parameters) {
    try {
        // Replace each $parameterX$ in the text with corresponding value from parameters
        for (let i = 0; i < parameters.length; i++) {
            const placeholder = `$parameter${i + 1}$`; // Dynamically create placeholder like $parameter1$, $parameter2$, etc.
            text = text.replace(placeholder, parameters[i]);
        }
        
        // Remove all HTML tags from the string, comment that out to keep them (website DB?)
        text = text.replace(/<[^>]*>/g, '');

        return text;
    } catch (error) {
        console.error('Error:', error);
        return "JS error while processing skill text";
    }
}

// Get contractSkill 3 title and description
function GetSkill3withSkillID(id, level) {
    try {
        // Read the JSON file synchronously
        let jsonData = UTILS_GetJSONData(cskillshow_soul);

        // Recompute skill ID using level (-1 + level)
        const skillID = id - 1 + level;

        // Access the field using the provided ID
        const skillDescriptionID = jsonData?.Data?.[skillID]?.exDiscribeTextID;
        const skillNameID = jsonData?.Data?.[skillID]?.nameTextID;
        const skillTypeID = jsonData?.Data?.[skillID]?.typeTextID;

        // Recover attributes of the skill
        const skillAttributes = jsonData?.Data?.[skillID]?.attr;

        // Check if necessary IDs and attributes are defined
        if (!skillDescriptionID || !skillNameID || !skillTypeID || !skillAttributes) {
            throw new Error('Invalid skill ID or level');
        }

        // Get text data from cwordskill_en
        jsonData = UTILS_GetJSONData(cwordskill_en);

        // Construct the skill details object
        const skillDetails = {
            name: jsonData?.Data?.[skillNameID]?.text || "Unknown Name",
            type: jsonData?.Data?.[skillTypeID]?.text || "Unknown Type",
            description: processSkillText(jsonData?.Data?.[skillDescriptionID]?.text, skillAttributes) || "Unknown Description"
        };

        return skillDetails;

    } catch (error) {
        console.error('Error:', error);
        return "JS error while getting skill details";
    }
}

// Get contractSkill of type 1 or 2 title and description
function GetSkill1or2withSkillID(id, level) {
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
            throw new Error('Invalid skill ID or level');
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
        console.error('Error:', error);
        return "JS error while getting skill details";
    }
}

// Get skill IDs of a doll
function GetSkillIDsWithDollID(id) {
    // Read the JSON file synchronously

    jsonData = UTILS_GetJSONData(roleconfig);
    // Access the field using the provided ID
    const skill1 = jsonData?.Data?.[id].contractskillid;
    const skill2 = jsonData?.Data?.[id].contractskillid2;
    const skill3 = jsonData?.Data?.[id].contractskillid3;
    // Return the result 
    return {skill1 : skill1, skill2: skill2, skill3 : skill3}
}


function GetVocationWithID(id) {
    try {
        // Read the JSON file synchronously
        let jsonData = UTILS_GetJSONData(cvocationcfg);

        // Get the vocation name and description IDs
        const vocationNameID = jsonData?.Data?.[id]?.nameTextID;
        const vocationDescriptionID = jsonData?.Data?.[id]?.vocationDescribeTextID;

        // If either ID is undefined, throw an error
        if (!vocationNameID || !vocationDescriptionID) {
            throw new Error('Invalid vocation ID');
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
        console.error('Error:', error);
        return {
            name: "JS error while getting attributes",
            description: "JS error while getting attributes",
        };
    }
}

function UTILS_GetJSONData(file) {
    let data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
}


function GetUniqueEquipWithID(id) {
    try {
        // Read the JSON file for item attributes
        let jsonData = UTILS_GetJSONData(citemattr);

        // Get the unique equipment name and description IDs
        const uniqueNameID = jsonData?.Data?.[id]?.nameTextID;
        const uniqueDescriptionID = jsonData?.Data?.[id]?.destribeTextID;

        // If either ID is undefined, throw an error
        if (!uniqueNameID || !uniqueDescriptionID) {
            throw new Error('Invalid equipment ID');
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
        console.error('Error:', error);
        return "JS error while getting attributes";
    }
}


function PullTextFromFile(jsonfile, id) {
    return UTILS_GetJSONData(jsonfile).Data?.[id].text
}








function CreateDollFromID(doll_id, skill1_lvl=5, skill2_lvl=5, skill3_lvl=2) {
    const skillIDs = GetSkillIDsWithDollID(doll_id);
    
    const raw_gameplayDoll = RAW_GetDollGameplayWithID(doll_id);
    const raw_cardDoll = RAW_GetDollCardWithID(doll_id);
    
    const Doll = {
        name : GetNameWithDollID(doll_id),
        title : PullTextFromFile(cwordrole_en, raw_gameplayDoll.titleTextID), 
        vocation : GetVocationWithID(raw_gameplayDoll.vocation),
    
        gender : PullTextFromFile(cwordhandbook_en, raw_cardDoll.sexTextID),
        age : raw_cardDoll.age,
        birthday : PullTextFromFile(cwordhandbook_en, raw_cardDoll.birthday),
        height : raw_cardDoll.height,
        weight : raw_cardDoll.weight,
    
        original_artist : PullTextFromFile(cwordhandbook_en, raw_cardDoll.artistTextID),
        overseas_artist : PullTextFromFile(cwordhandbook_en, raw_cardDoll.overseasArtistTextID),
        CN_voice : PullTextFromFile(cwordhandbook_en, raw_cardDoll.cvTextIDChs),
        JP_voice : PullTextFromFile(cwordhandbook_en, raw_cardDoll.cvTextIDJpn),
    
        backstory : raw_cardDoll.backStoryTextID.map(text_ID => GetBackstoryWithTextID(text_ID).text),
        skills : {
            skill1 : GetSkill1or2withSkillID(skillIDs.skill1, skill1_lvl),
            skill2 : GetSkill1or2withSkillID(skillIDs.skill2, skill2_lvl),
            skill3 : GetSkill3withSkillID(skillIDs.skill3, skill3_lvl),
        },
        special_equip : GetUniqueEquipWithID(raw_gameplayDoll.uniqueequipid)
    }

    return Doll

}

module.exports = CreateDollFromID;

console.log(CreateDollFromID(58));