# Revived Witch info tool

This tool is being developped with the [Kimaris archive](https://github.com/lele394/Kimaris-archive). Its goal is to retrieve data from the archive.

It is work in progress, not really meant to be used by someone other than me.

---

## Current working feature

Usage example :
```javascript
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
```