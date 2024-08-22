const fs = require('fs');
const path = require('path');

// JSON file with dolls backstory config I guess?
const ccardroleconfig_handbook = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'handbook', 'ccardroleconfig_handbook.json');

// JSON file with dolls gameplay config I guess?
const roleconfig = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'role', 'roleconfig.json');

// JSON file with dolls skills ?? Only 2 level skills
const cskillshow_soul = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_soul.json');

// JSON file with dolls skills ?? Only 5 level skills
const cskillshow_role = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_role.json');

// JSON file with translated text??
const cwordhandbook_en = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordhandbook_en.json');

// JSON file with translated text??
const cwordrole_en = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordrole_en.json');

// JSON file with translated skill text??
const cwordskill_en = path.join(__dirname, 'Kimaris_dump', 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordskill_en.json');

// Function to get raw data of a doll by ID
function RAW_GetDollCardWithID(id) {
    // Read the JSON file synchronously
    const data = fs.readFileSync(ccardroleconfig_handbook, 'utf8');
    const jsonData = JSON.parse(data);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}

// Function to get backstory text by ID
function GetBackstoryWithTextID(id) {
    // Read the JSON file synchronously
    const data = fs.readFileSync(cwordhandbook_en, 'utf8');
    const jsonData = JSON.parse(data);
    // Access the field using the provided ID
    const dollData = jsonData?.Data?.[id];
    // Return the result 
    return dollData;
}

// Get doll name using Doll ID
function GetNameWithDollID(id) {
    // Read the JSON file synchronously
    let data = fs.readFileSync(roleconfig, 'utf8');
    let jsonData = JSON.parse(data);
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
    // Replace each $parameterX$ in the text with corresponding value from parameters
    for (let i = 0; i < parameters.length; i++) {
        const placeholder = `$parameter${i + 1}$`; // Dynamically create placeholder like $parameter1$, $parameter2$, etc.
        text = text.replace(placeholder, parameters[i]);
    }
    // Remove all HTML tags from the string
    text = text.replace(/<[^>]*>/g, '');
    return text;
}

// Get contractSkill 3 title and description
function GetSkill3withSkillID(id, level) {
    /* If ends in 01, then skill level 1, if in 02, skill level 2 */
    // Read the JSON file synchronously
    let data = fs.readFileSync(cskillshow_soul, 'utf8');
    let jsonData = JSON.parse(data);

    // Recomputes skill ID using level, needs to do -1+lvl
    const skillID = id-1+level;

    // Access the field using the provided ID
    const skillDescriptionID = jsonData?.Data?.[skillID].exDiscribeTextID;
    const skillNameID = jsonData?.Data?.[skillID].nameTextID;
    const skillTypeID = jsonData?.Data?.[skillID].typeTextID;

    // recover attributes of the skill
    const skillAttributes = jsonData?.Data?.[skillID].attr;

    // now get text from IDs
    data = fs.readFileSync(cwordskill_en, 'utf8');
    jsonData = JSON.parse(data);

    const skillDetails = {
        name: jsonData?.Data?.[skillNameID]?.text || "Unknown Name",
        type: jsonData?.Data?.[skillTypeID]?.text || "Unknown Type",
        description: processSkillText(jsonData?.Data?.[skillDescriptionID]?.text, skillAttributes) || "Unknown Description"
    };

    return skillDetails;
}

// Get contractSkill of type 1 or 2 title and description
function GetSkill1or2withSkillID(id, level) {
    // Read the JSON file synchronously
    let data = fs.readFileSync(cskillshow_role, 'utf8');
    let jsonData = JSON.parse(data);

    // Recomputes skill ID using level, needs to do *100 + lvl
    const skillID = id*100+level;

    // Access the field using the provided ID
    const skillDescriptionID = jsonData?.Data?.[skillID].exDiscribeTextID;
    const skillNameID = jsonData?.Data?.[skillID].nameTextID;
    const skillTypeID = jsonData?.Data?.[skillID].typeTextID;
    const skillRangeID = jsonData?.Data?.[skillID].rangeTextID;

    // recover attributes of the skill
    const skillAttributes = jsonData?.Data?.[skillID].attr;

    // now get text from IDs
    data = fs.readFileSync(cwordskill_en, 'utf8');
    jsonData = JSON.parse(data);

    const skillDetails = {
        name: jsonData?.Data?.[skillNameID]?.text || "Unknown Name",
        type: jsonData?.Data?.[skillTypeID]?.text || "Unknown Type",
        range: jsonData?.Data?.[skillRangeID]?.text || "Unknown Range",
        description: processSkillText(jsonData?.Data?.[skillDescriptionID]?.text, skillAttributes) || "Unknown Description"
    };

    return skillDetails;
}

// Get skill IDs of a doll
function GetSkillIDsWithDollID(id) {
    // Read the JSON file synchronously
    const data = fs.readFileSync(roleconfig, 'utf8');
    const jsonData = JSON.parse(data);
    // Access the field using the provided ID
    const skill1 = jsonData?.Data?.[id].contractskillid;
    const skill2 = jsonData?.Data?.[id].contractskillid2;
    const skill3 = jsonData?.Data?.[id].contractskillid3;
    // Return the result 
    return {skill1 : skill1, skill2: skill2, skill3 : skill3}
}








doll_num = 2
skill1_lvl = 5
skill2_lvl = 5
skill3_lvl = 2

// console.log("Doll Backstory")
// doll = RAW_GetDollCardWithID(doll_num)

// for (const text_ID of doll.backStoryTextID) {
//     console.log(text_ID);
//     console.log(GetBackstoryWithTextID(text_ID).text);
// }
// console.log("\n Doll name :")
// console.log(GetNameWithDollID(doll_num))

// console.log(GetSkill1or2withSkillID(60972, 1));
// console.log(GetSkill3withSkillID(509702));



doll_num = 97
skill1_lvl = 5
skill2_lvl = 5
skill3_lvl = 2

skillIDs = GetSkillIDsWithDollID(doll_num);

Doll = {
    name : GetNameWithDollID(doll_num),
    backstory : RAW_GetDollCardWithID(doll_num).backStoryTextID.map(text_ID => GetBackstoryWithTextID(text_ID).text),
    skill1 : GetSkill1or2withSkillID(skillIDs.skill1, skill1_lvl),
    skill2 : GetSkill1or2withSkillID(skillIDs.skill2, skill2_lvl),
    skill3 : GetSkill3withSkillID(skillIDs.skill3, skill3_lvl),
}

console.log(Doll)
