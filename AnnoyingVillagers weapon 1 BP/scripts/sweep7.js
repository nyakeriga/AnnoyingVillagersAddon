import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:ayzf') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:d') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:aycd') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:ayhc') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:hd') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:hdv2') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:hszr') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:hzszr') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:fgayhc') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:dzk') {
        player.runCommand('function purplesweep')
    }

    if (item?.typeId === 'xc:zkhd') {
        player.runCommand('function purplesweep')
    }
});
