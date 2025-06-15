import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:zbsxyj') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:gfzbscj') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:vipsword') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:ygj') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:zbsdr') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:zbsdrv2') {
        player.runCommand('function dg')
    }

    if (item?.typeId === 'xc:zbscj') {
        player.runCommand('function dg')
    }
});
