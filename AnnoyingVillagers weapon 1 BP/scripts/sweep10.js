import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:hyshjd') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:hyshjcj') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:zhjwd') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:hyshbscj') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:hysgfhjwd') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:hyszszj') {
        player.runCommand('function fire')
    }

    if (item?.typeId === 'xc:hyszbsj') {
        player.runCommand('function fire')
    }
});
