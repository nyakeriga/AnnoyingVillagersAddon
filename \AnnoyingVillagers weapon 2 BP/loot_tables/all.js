import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'lz:xhly') {
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'lz:xhly_cmqsj') {
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'lz:shadowobsidian') {
        player.runCommand('effect @s resistance 1 1 true');
    }

    if (item?.typeId === 'lz:jy') {
        player.runCommand('effect @s resistance 1 5 true');
    }

    if (item?.typeId === 'lz:potatoqz') {
        player.runCommand('summon lz:potato ~ ~1 ~');
    }

    if (item?.typeId === 'lz:jxzszr') {
        player.runCommand('effect @s absorption 1 3 true');
    }
});
