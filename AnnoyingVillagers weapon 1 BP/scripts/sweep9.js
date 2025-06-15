import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:fj') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fysgfzscj') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyshjwd') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fysgfzsdrv2') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyszsdrv2') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyszsr') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyszscj') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:zzsxyj') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyszswd') {
        player.runCommand('function wind')
    }

    if (item?.typeId === 'xc:fyszskj') {
        player.runCommand('function wind')
    }
});
