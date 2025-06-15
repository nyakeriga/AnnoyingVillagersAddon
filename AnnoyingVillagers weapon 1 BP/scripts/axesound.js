import { world, Player } from "@minecraft/server";

// 定義武器的 ID 列表
const weaponIDs = [
    'xc:dzjzzf', 'xc:dlfzjz', 'xc:hscnahjdrf', 'xc:ayzf', 'xc:tsf', 'xc:tcsf',
    'xc:tcf', 'xc:shdyzf', 'xc:dytf', 'xc:dlbszjzzf', 'xc:fhzjzzf', 'xc:zhf',
    'xc:hfdzf', 'xc:hldzf', 'xc:sdzf', 'xc:dfh', 'xc:af', 'xc:hjht', 'xc:shht',
    'xc:ztkf', 'xc:hht', 'xc:ayf', 'xc:mfzf', 'xc:szhzf', 'xc:tyr', 'xc:lsht',
    'xc:sldx', 'xc:azsht', 'xc:hqhzf', 'xc:jxsht', 'xc:cdhjht', 'xc:dlht',
    'xc:hsht', 'xc:hcs', 'xc:hdt', 'xc:llxtf', 'xc:jyzf'
];

// 偵測玩家攻擊事件
world.afterEvents.entityHitEntity.subscribe(({ damagingEntity: player, hitEntity }) => {
    // 確保攻擊者是玩家
    if (!(player instanceof Player)) return;

    // 獲取玩家的主手武器
    const weapon = player.getComponent('equippable')?.getEquipment('mainhand');

    // 檢查玩家的武器是否在列表中
    if (weapon && weaponIDs.includes(weapon.typeId)) {
        // 播放音效 pz6.ogg
        player.runCommandAsync("playsound sound.slash_pz6 @s");
    }
});
