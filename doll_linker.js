import fs from 'fs';
import path from 'path';

import { cwordhandbook_en, cwordrole_en} from './config.js';



import { RAW_GetDollCardWithID, RAW_GetDollGameplayWithID } from './utils/raw_doll.js';
import { GetBackstoryWithTextID } from './utils/backstory.js';
import { GetNameWithDollID } from './utils/name.js';
import { GetSkill3withSkillID } from './utils/skill3.js';
import { GetSkillIDsWithDollID } from './utils/skill_id.js'; 
import { GetVocationWithID } from './utils/vocation.js';
import { GetUniqueEquipWithID } from './utils/unique_equip.js';
import { PullTextFromFile } from './utils/utils.js';
import { GetSkill1or2withSkillID } from './utils/skill1&2.js';

















export function CreateDollFromID(doll_id, skill1_lvl=5, skill2_lvl=5, skill3_lvl=2) {
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
        special_equip : GetUniqueEquipWithID(raw_gameplayDoll.uniqueequipid),

        // Art part
        // The following is a test for the wiki's data, not final
        profile_img: `/assets/profile_img/${doll_id}.png`
        
    }

    return Doll

}



// console.log(CreateDollFromID(58));