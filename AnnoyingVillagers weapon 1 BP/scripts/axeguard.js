import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;
    if (!player.isSneaking) return; // 玩家未潛行則不觸發效果

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:dzjzzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:dlfzjz') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hscnahjdrf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:ayzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:tsf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:tcsf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:tcf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:shdyzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:dytf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:dlbszjzzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:fhzjzzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:zhf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hfdzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hldzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:sdzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:dfh') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:af') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hjht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:shht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:ztkf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:ayf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:mfzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:szhzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:tyr') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:lsht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:sldx') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:azsht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hqhzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:jxsht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:cdhjht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:dlht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hsht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hcs') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hdt') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:hjht') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:llxtf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }

    if (item?.typeId === 'xc:jyzf') {
        player.runCommand('effect @s resistance 1 2 true');
        player.runCommand('effect @s weakness 1 5 true');
    }
});
