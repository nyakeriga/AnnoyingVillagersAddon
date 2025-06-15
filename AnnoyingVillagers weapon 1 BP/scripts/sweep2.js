import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:hzscj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hzscj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hbscd') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hbstd') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hbsj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:zbsj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hyzr') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:gfhbscj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hbsqbj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'source:nljx') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hszsj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hzszj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hzsjd') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:hbscj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:fhzscj') {
        player.runCommand('function redsweep')
    }

    if (item?.typeId === 'xc:zshj') {
        player.runCommand('function redsweep')
    }
});
