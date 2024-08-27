import fs from 'fs';

// Function that gets rid of the HTML tag and replace all parameters with their corresponding values
export function processSkillText(text, parameters) {
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
        console.error('Error:', error.message);
        return "JS error while processing skill text";
    }
}

export function UTILS_GetJSONData(file) {
    let data = fs.readFileSync(file, 'utf8');
    return JSON.parse(data);
}


export function PullTextFromFile(jsonfile, id) {
    return UTILS_GetJSONData(jsonfile).Data?.[id].text
}
