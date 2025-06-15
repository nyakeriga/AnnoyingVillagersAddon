import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:kyjj') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjcq') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hshjcj') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hhjj') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:qyld') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'pa:hjd') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjskf') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjjf') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjcj') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjjd') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjwd') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:hjzf') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:ahjdrf') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:ahjj') {
        player.runCommand('function blacksweep')
    }

    if (item?.typeId === 'xc:gfhjwd') {
        player.runCommand('function blacksweep')
    }
});
