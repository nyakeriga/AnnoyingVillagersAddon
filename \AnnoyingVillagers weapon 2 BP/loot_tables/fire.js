import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'lz:xhly') {
        player.runCommand('particle lz:slow_fire ^ ^1.5 ^')
    }

    if (item?.typeId === 'lz:xhly_cmqsj') {
        player.runCommand('particle lz:slow_fire ^ ^1.5 ^')
    }
});
