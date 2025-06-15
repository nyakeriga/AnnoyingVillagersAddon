import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:xyzsq') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:rgd') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:zlj') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:gzj') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:myzm') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:hqbj') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:fhzszr') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:tyshjjf') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:tyslfzjz') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:tysahjskf') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:jxfj') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:jxpljd') {
        player.runCommand('function goldREDsweep')
    }

    if (item?.typeId === 'xc:jxjd') {
        player.runCommand('function goldREDsweep')
    }
});
