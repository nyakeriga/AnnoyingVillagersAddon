import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:hkj') {
        player.runCommand('function errorsweep')
    }

    if (item?.typeId === 'xc:303zr') {
        player.runCommand('function errorsweep')
    }

    if (item?.typeId === 'xc:lmjd') {
        player.runCommand('function errorsweep')
    }

    if (item?.typeId === 'xc:sjj') {
        player.runCommand('function errorsweep')
    }
});
