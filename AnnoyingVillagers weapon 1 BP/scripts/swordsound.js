import { world, Player } from "@minecraft/server";

// 定義武器的 ID 列表
const weaponIDs = [
    'xc:alexsword', 'xc:alice', 'xc:hzsjd', 'xc:zskj', 'xc:czj', 'xc:htj',
    'xc:hshjcj', 'xc:zsq', 'xc:zsjf', 'xc:zsdd', 'xc:zshm', 'xc:zswd',
    'xc:zsqq', 'xc:zsgr', 'xc:zsld', 'xc:zscq', 'xc:tsrj', 'xc:tld',
    'xc:hzszj', 'xc:hbscj', 'xc:hszsj', 'xc:vipsword', 'xc:ygj', 'source:nljx',
    'xc:fysgfzscj', 'xc:fyszskj', 'xc:fyszscj', 'xc:fysgfzsdrv2', 'xc:lyszsdrv2',
    'xc:lysqbj', 'xc:lyshjcq', 'xc:lyszbscj', 'xc:lcjde', 'xc:lysdcjd',
    'xc:cnhjwd', 'xc:cnzsld', 'xc:cnhzscj', 'xc:byslbsxyj', 'xc:byszsq',
    'xc:fgzsj', 'xc:hjjd', 'xc:hjwd', 'pa:hjzj', 'xc:hjcj', 'xc:hjcq',
    'xc:hbsqbj', 'xc:gfjd', 'xc:gfhjwd', 'xc:gfpljd', 'xc:gfcj', 'xc:cxzsq',
    'xc:gfzbscj', 'xc:gfhbscj', 'xc:gfzskr', 'xc:gfzscj', 'xc:gfzsdr',
    'xc:gfzsdrv2', 'xc:gfzscd', 'xc:gfzscr', 'xc:dcjd', 'xc:zlj',
    'xc:cnzskr', 'xc:sjj', 'xc:qbj', 'xc:hhjj', 'xc:ahjj', 'xc:ssf',
    'xc:hyshjcj', 'xc:hysgfhjwd', 'xc:hyszbsj', 'xc:hyshbscj', 'pa:hyszszj',
    'xc:rgd', 'xc:kyjj', 'xc:cjde', 'xc:fhzscj', 'xc:zbsdr', 'xc:zbsdrv2',
    'xc:zbsj', 'xc:zbsxyj', 'xc:zbscj', 'xc:hyzr', 'xc:hbsj', 'xc:hbstd',
    'xc:hbscd', 'xc:hzscj', 'xc:hzsqbj', 'xc:lbsdr', 'xc:lbsdrv2', 'xc:lbsj',
    'xc:lbsdcjd', 'xc:lbsxyj', 'xc:lbscj', 'xc:lszsj', 'xc:lbswd',
    'xc:lbscd', 'xc:xhkr', 'xc:jwl', 'xc:jjcj', 'xc:zsdr', 'xc:zsdrv2',
    'pa:zsr', 'steve:zsj', 'xc:zsjd', 'xc:zsjdv2', 'xc:xyzsq', 'xc:zskr',
    'xc:zswd2', 'pa:zsw', 'xc:zshj', 'xc:zssj', 'xc:zsxyj', 'pa:zszj',
    'xc:zscd', 'xc:zscr', 'xc:zscj', 'xc:tdd', 'xc:twl', 'xc:tcj',
    'xc:tqbj', 'xc:lysgfjd', 'xc:lysgfzbscj', 'xc:lyshzszj', 'xc:lyszsj',
    'xc:lyszsjd', 'xc:lyszskr', 'xc:fyshjwd', 'xc:fyszsdrv2', 'xc:fyszsr',
    'xc:fyszswd', 'xc:fyszsxyj', 'xc:hkj', 'xc:zbsjd'
];

// 偵測玩家攻擊事件
world.afterEvents.entityHitEntity.subscribe(({ damagingEntity: player, hitEntity }) => {
    // 確保攻擊者是玩家
    if (!(player instanceof Player)) return;

    // 獲取玩家的主手武器
    const weapon = player.getComponent('equippable')?.getEquipment('mainhand');

    // 檢查玩家的武器是否在列表中
    if (weapon && weaponIDs.includes(weapon.typeId)) {
        // 播放音效 pz.ogg
        player.runCommandAsync("playsound sound.slash @s");
    }
});
