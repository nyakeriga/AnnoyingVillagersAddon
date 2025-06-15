import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:lszsj') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbsdcjd') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbsdr') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbsdrv2') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbscj') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbsxyj') {
        player.runCommand('function emeraldsweep')
    }

    if (item?.typeId === 'xc:lbsj') {
        player.runCommand('function emeraldsweep')
    }
});
