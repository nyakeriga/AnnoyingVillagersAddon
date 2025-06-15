import { world, Player } from "@minecraft/server";

// 定義武器的 ID 列表
const weaponIDs = [
    'xc:ayzf', 'xc:d', 'xc:aycd', 'xc:ayhc', 'xc:hd', 'xc:hdv2', 'xc:hszr', 'xc:hzszr',
    'xc:fgayhc', 'xc:dzk', 'xc:zkhd', 'xc:jxzr', 'xc:jxjxzr', 'xc:lemcqzj', 'xc:jzszr',
    'xc:zszr', 'xc:fhzszr'
];

// 偵測玩家攻擊事件
world.afterEvents.entityHitEntity.subscribe(({ damagingEntity: player, hitEntity }) => {
    // 確保攻擊者是玩家
    if (!(player instanceof Player)) return;

    // 獲取玩家的主手武器
    const weapon = player.getComponent('equippable')?.getEquipment('mainhand');

    // 檢查玩家的武器是否在列表中
    if (weapon && weaponIDs.includes(weapon.typeId)) {
        // 播放音效 big_sweep.ogg
        player.runCommandAsync("playsound sound.big_sweep @s");
    }
});
