import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:hqbj') {
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:myzm') {
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:fhzszr') {
        player.runCommand('effect @s regeneration 2 4 true');
    }

    if (item?.typeId === 'xc:jxjxzr') {
        player.runCommand('effect @s health_boost 3 4 true');
        player.runCommand('effect @s absorption 3 2 true');
    }

    if (item?.typeId === 'xc:jxzr') {
        player.runCommand('effect @s health_boost 3 4 true');
        player.runCommand('effect @s absorption 3 2 true');
    }

    if (item?.typeId === 'xc:d') {
        player.runCommand('effect @s resistance 1 2 true');
    }

    if (item?.typeId === 'xc:dzk') {
        player.runCommand('effect @s resistance 1 2 true');
    }

    if (item?.typeId === 'xc:zkhd') {
        player.runCommand('effect @s resistance 1 2 true');
    }

    if (item?.typeId === 'xc:aycd') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:hkj') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:ayzf') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:ayhc') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:qyld') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:hszr') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:hd') {
        player.runCommand('effect @s strength 1 2 true');
    }

    if (item?.typeId === 'xc:hdv2') {
        player.runCommand('effect @s strength 1 3 true');
    }

    if (item?.typeId === 'xc:fgayhc') {
        player.runCommand('effect @s strength 1 3 true');
    }

    if (item?.typeId === 'xc:xyld') {
        player.runCommand('effect @s strength 1 3 true');
    }

    if (item?.typeId === 'xc:hzszr') {
        player.runCommand('effect @s strength 1 3 true');
    }

    if (item?.typeId === 'xc:jxjd') {
        player.runCommand('effect @s absorption 2 2 true');
    }
    if (item?.typeId === 'xc:jxpljd') {
        player.runCommand('effect @s absorption 2 2 true');
    }

    if (item?.typeId === 'xc:jxfj') {
        player.runCommand('effect @s absorption 2 2 true');
        player.runCommand('effect @s speed 2 3 true');
    }

    if (item?.typeId === 'xc:fj') {
        player.runCommand('effect @s speed 1 3 true');
    }

    if (item?.typeId === 'xc:dlfgfj') {
        player.runCommand('effect @s speed 2 2 true');
    }

    if (item?.typeId === 'xc:dlfj') {
        player.runCommand('effect @s speed 2 2 true');
    }

    if (item?.typeId === 'xc:jzszr') {
        player.runCommand('effect @s hunger 2 0 true');
    }

    if (item?.typeId === 'xc:zszr') {
        player.runCommand('effect @s hunger 2 0 true');
    }

    if (item?.typeId === 'xc:gzj') {
        player.runCommand('effect @s fire_resistance 2 0 true');
        player.runCommand('effect @s resistance 2 1 true');
        player.runCommand('effect @s regeneration 2 0 true');
        hitEntity.runCommand('effect @s poison 2 0 true');
        hitEntity.runCommand('effect @s wither 2 0 true');
        hitEntity.runCommand('effect @s slowness 2 3 true');
    }
});
