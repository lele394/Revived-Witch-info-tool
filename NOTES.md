Base character used to trace everything is Phileanosis
Phileanosis 
cwordrole : 502945
cworditem : 1803682
            1803681
            1803680
            1803679
cwordhead : 1200326
            1200325
cwordhandbk:1306224
            1306225
            1306217




Two datasets for dolls data :
 - roleconfig.json, linked to doll stats and skills
 - ccardroleconfig_handbook.json linked to backstory and other infos not related to gameplay





# Get backstory chunks

game_data/GLOBAL/data/exceldata/handbook/ccardroleconfig_handbook.json > Data.doll_ID.backStoryTextID => list of 4 backstory_ID
game_data/GLOBAL/data/exceldata/word/cwordhandbook.json > Data.backstory_ID.text

# Get Name
game_data/GLOBAL/data/exceldata/role/roleconfig.json > Data.dollID.nameTextID
game_data\GLOBAL\data\exceldata\word\cwordrole_en.json > Data.TextID.text




# Get skill names and text
game_data/GLOBAL/data/exceldata/role/roleconfig.json > Data.dollID.contractskillid
                                                       Data.dollID.contractskillid2
                                                       Data.dollID.contractskillid3
=> Get Skill IDs of the doll



# Skill notes

for skills with only 2 levels, registered with the full name of the first level, to get lvl2, do +1 to skill ID

For skills with 5 levels, only first part is registered, do * 100 + lvl_you_want


# For contractSkillid and 2
something about doing *100+1 to get the skill ID, skill ID is only start of skill ID, rest is related to levelsS







#### For contractSkillid3 :
\game_data\GLOBAL\data\exceldata\skill\cskillshow_soul.json > Data.skillID.exDiscribeTextID
                                                              Data.skillID.nameTextID
                                                              Data.skillID.typeTextID  
                                                                => SkillTextIDs

game_data/GLOBAL/data/exceldata/word/cwordskill_en.json > Data.skillTextID.text
=> Get Text of the Skill (name or description)



# Get vocation
roleconfig.json > Data.dollID.vocation => vocation ID

game_data\GLOBAL\data\exceldata\role\cvocationcfg.json > Data[vocationID].nameTextID => vocation name textID
OR
game_data\GLOBAL\data\exceldata\role\cvocationcfg.json > Data[vocationID].vocationDescribeTextID => vocation description textID

cwordrole_en.json > Data.textID
501805
501812


# Get unique equip
roleconfig.json > Data.dollID.uniqueequipid
game_data\GLOBAL\data\exceldata\item\citemattr.json > Data.uniqueequipid.destribeTextID
                                                    Data.uniqueequipid.nameTextID
game_data\GLOBAL\data\exceldata\word\cworditem_en.json > Data.textID.text

# Get Role line
***Not available for some apparently, not implemented***
> sometimes available in CN under roleLine property in rolecofing (Gameplay doll)
roleconfig.json > Data.dollID.roleLineTextID 



# Get artists
ID on ccarddrolecofig_handbook.json, use IDs in cwordhandbook_en.json
Related IDs :
- artistTextID
- cvTextIDChs
- cvTextIDJpn
- overseasArtistTextID





 ---
 Failed parsing













Test discord embed :
https://embed.dan.onl/?data=eyJhdXRob3IiOnsibmFtZSI6IlBoaWxlYW5vc2lzIiwiaWNvblVybCI6Imh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzEyMDk4OTI0MTUxMzgxNjg4NjYvMTI3NTk0MzE2NTYwNTU3NjcwNC85Ny53ZWJwP2V4PTY2YzdiYTJjJmlzPTY2YzY2OGFjJmhtPTFhZGNlNmQ2MGEzYjFiODVmMDc0YTUxYTI2YjBlNTFhZjkxOTIzMGMwOTFjODY3YTIzZmNkMzhmMTgwM2QyNzcmIiwidXJsIjoiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTIwOTg5MjQxNTEzODE2ODg2Ni8xMjc1OTQzMTY1NjA1NTc2NzA0Lzk3LndlYnA%2FZXg9NjZjN2JhMmMmaXM9NjZjNjY4YWMmaG09MWFkY2U2ZDYwYTNiMWI4NWYwNzRhNTFhMjZiMGU1MWFmOTE5MjMwYzA5MWM4NjdhMjNmY2QzOGYxODAzZDI3NyYifSwiZmllbGRzIjpbeyJuYW1lIjoiRGVzY3JpcHRpb24iLCJ2YWx1ZSI6IioqQWdlKiogOiAyMSB5ZWFycyBvbGRcbioqR2VuZGVyKiogOiBGZW1hbGVcbioqV2VpZ2h0KiogOiA1MGtnc1xuKipoZWlnaHQqKiA6IDEuNzBtXG4qKkFmZmlsaWF0aW9uKiogOiBTb21ld2hlcmUgb3ZlciB0aGUgcmFpbmJvd1xuKipIb2JieSoqIDogd2F0Y2htYWtpbmdcbn4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiJ9LHsibmFtZSI6IlNraWxscyIsInZhbHVlIjoiKipTa2lsbCAxIG5hbWUqKiA6IFNraWxsIDEgZGVzY3JpcHRpb25cbioqU2tpbGwgMiBuYW1lKiogOiBTa2lsbCAyIGRlc2NyaXB0aW9uXG4qKlNraWxsIDMgbmFtZSoqIDogU2tpbGwgMyBkZXNjcmlwdGlvblxufiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIH4gfiB%2BIn0seyJuYW1lIjoiKipCYWNrc3RvcnkqKiIsInZhbHVlIjoiUGhpbGVhbm9zaXMgdXNlZCB0byBiZSBhIGxveWFsIGZvbGxvd2VyIG9mIHRoZSBDaHJvbm9zcGFjZSBQcm90ZWN0b3IgdW50aWwgdGhlIGxhdHRlciB3YXMgc2VhbGVkLiBUaGF0J3Mgd2hlbiBzaGUgbG9zdCBoZXIgZmFpdGggYW5kIHN0YXJ0ZWQgdHJhdmVsaW5nIHRoZSB3b3JsZC4gU2hlIHdpdG5lc3NlZCB0aGUgcGFzc2FnZSBvZiB0aW1lIGFuZCB0aGUgdW5mb2xkaW5nIG9mIGhpc3RvcnkuIFxuXG5XaGVuIFBoaWxlYW5vc2lzIGxlYXJuZWQgb2YgdGhlIHJlZW1lcmdlbmNlIG9mIHRoZSBDaHJvbm8gVG93ZXIsIGl0IHJla2luZGxlZCBoZXIgbG9uZy1kZWFkIGhvcGUgb2Ygc2VlaW5nIHRoZSBDaHJvbm9zcGFjZSBQcm90ZWN0b3IgYWdhaW4uIEhhcmJvcmluZyB0aGF0IGhvcGUsIGhlIGVudGVyZWQgdGhlIHRvd2VyLlxuXG5PcmlnaW5hbGx5IGEgaHVtYW4gc2Nob2xhciwgaGVyIGFjYWRlbWljIGN1cmlvc2l0eSBicm91Z2h0IGhlciBpbnRvIGNvbnRhY3Qgd2l0aCB0aGUgQ2hyb25vc3BhY2UgUHJvdGVjdG9yLiBPdmVyIHRpbWUsIHNoZSBiZWNhbWUgdGhlIGxhdHRlcidzIGRpc2NpcGxlLiBEZWVwbHkgdHJ1c3RlZCBieSB0aGUgQ2hyb25vc3BhY2UgUHJvdGVjdG9yLCBzaGUgbGVhcm5lZCB0aW1lIG1hZ2ljLCB3aGljaCBhbGxvd2VkIGhlciB0byBzdG9wIGhlciBvd24gdGltZSBhbmQgYWx3YXlzIHJlbWFpbiBhcyB5b3VuZyBhcyBzaGUgd2FzIHdoZW4gc2hlIGZpcnN0IG1ldCB0aGUgQ2hyb25vc3BhY2UgUHJvdGVjdG9yLiJ9LHsidmFsdWUiOiIqKkFydGlzdCoqIDogc29tZW9uZVxuKipPdmVyc2VhcyBhcnRpc3QqKiA6IHNvbWVvbmVcbioqQ04gdm9pY2UqKiA6IHNvbWVvbmUgXG4qKkpQIHZvaWNlKiogOiBzb21lb25lIn1dLCJpbWFnZSI6Imh0dHBzOi8vY2RuLmRpc2NvcmRhcHAuY29tL2F0dGFjaG1lbnRzLzEyMDg3MzU4MjIyNzUxNTgwMzYvMTI3NTk0Mzc0MjY3NDcwMjM4Ny9ldmVybmlnaHRub2N0dXJuYTQud2VicD9leD02NmM3YmFiNiZpcz02NmM2NjkzNiZobT1mNDZlNTc5ODNlOWRlZTRlOGZjYjg1MTZmMzFlNjQ0ZDAwMGQ4ODJiYjBhNDJkYjVjNzRhY2FlMTI0ODU0YTYyJiIsImNvbG9yIjoiIzdkMzFjNCIsImZvb3RlciI6eyJ0ZXh0IjoiSSBtYWRlIHRoYXQiLCJpY29uVXJsIjoiaHR0cHM6Ly9jZG4uZGlzY29yZGFwcC5jb20vYXR0YWNobWVudHMvMTIwOTg5MjQxNTEzODE2ODg2Ni8xMjc1OTQzMTY1NjA1NTc2NzA0Lzk3LndlYnA%2FZXg9NjZjN2JhMmMmaXM9NjZjNjY4YWMmaG09MWFkY2U2ZDYwYTNiMWI4NWYwNzRhNTFhMjZiMGU1MWFmOTE5MjMwYzA5MWM4NjdhMjNmY2QzOGYxODAzZDI3NyYifSwidGltZXN0YW1wIjoxNzI0Mjc5MDkyODQ3fQ%3D%3D