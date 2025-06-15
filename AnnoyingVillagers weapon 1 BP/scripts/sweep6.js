import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:jjcj') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:jwl') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:jxjxzr') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:jxzr') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lysdzjzzf') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lysdcjd') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyshjskf') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyshjjf') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyshjcq') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyshzszj') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyszsdrv2') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyszsj') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyszsjd') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyszskr') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lysqbj') {
        player.runCommand('function goldsweep')
    }

    if (item?.typeId === 'xc:lyszbscj') {
        player.runCommand('function goldsweep')
    }
});
