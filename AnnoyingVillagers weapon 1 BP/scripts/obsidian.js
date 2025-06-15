import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:bfxhysys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:bfxhys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:qtxkqdhys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:zjxkqdhys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:hys1') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:hys2') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'xc:shhys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }

    if (item?.typeId === 'pa:hys') {
        player.runCommand('effect @s resistance 1 1 true');
        hitEntity.runCommand('effect @s wither 3 1 true');
    }
});
