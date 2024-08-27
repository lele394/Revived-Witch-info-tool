import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename);
// console.log(__dirname);


export const working_directory = path.join(__dirname, 'Kimaris_dump')

// JSON file with dolls backstory config I guess?
export const ccardroleconfig_handbook = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'handbook', 'ccardroleconfig_handbook.json');

// JSON file with dolls gameplay config I guess?
export const roleconfig = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'role', 'roleconfig.json');

// JSON file with dolls skills ?? Only 2 level skills
export const cskillshow_soul = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_soul.json');

// JSON file with dolls skills ?? Only 5 level skills
export const cskillshow_role = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'skill', 'cskillshow_role.json');

// JSON file with vocation infos
export const cvocationcfg = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'role', 'cvocationcfg.json');

// JSON file with unique equip infos
export const citemattr = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'item', 'citemattr.json');

// JSON file with translated text??
export const cwordhandbook_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordhandbook_en.json');

// JSON file with translated text??
export const cwordrole_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordrole_en.json');

// JSON file with translated skill text??
export const cwordskill_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cwordskill_en.json');

// JSON file with translated skill text??
export const cworditem_en = path.join(working_directory, 'game_data', 'GLOBAL', 'data', 'exceldata', 'word', 'cworditem_en.json');
