{
	"file_path": "C:\\Users\\elcha\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Raiyon'sMo\\functions\\crimson.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "a8a6654b_24fd_49d7_8270_082e983f326c",
	"file_version": 3,
	"cache_content": "scoreboard objectives add crimson dummy\r\nscoreboard players random @s crimson 1 4 \r\n\r\nexecute @s[scores={crimson=1}] ~ ~ ~ function fire\r\nexecute @s[scores={crimson=1}] ~ ~ ~ execute @e[c=1,family=!player,r=5,type=!item] ~ ~ ~ summon minecraft:small_fireball\r\nexecute @s[scores={crimson=1}] ~ ~ ~ playsound mob.blaze.shoot"
}