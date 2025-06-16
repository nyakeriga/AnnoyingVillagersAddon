{
	"file_path": "C:\\Users\\elcha\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Raiyon's More Shields Addon\\functions\\wooden.mcfunction",
	"file_type": "function",
	"format_version": 0,
	"file_uuid": "ef664b31_9b96_4682_8143_3c025896462c",
	"file_version": 1,
	"cache_content": "scoreboard objectives add wood dummy\r\n \r\nscoreboard players random @s wood 1 5\r\n \r\nexecute @s[scores={wood=1}] ~ ~ ~ clear @s wooden:shield 0 1\r\nexecute @s[scores={wood=1}] ~ ~ ~ playsound random.break\r\nplaysound dig.wood @s ~ ~ ~ 1 0.6"
}