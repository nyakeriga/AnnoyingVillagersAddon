import { world, Player } from "@minecraft/server";

world.afterEvents.entityHitEntity.subscribe(({ hitEntity, damagingEntity: player }) => {
    if (!(player instanceof Player)) return;

    const item = player.getComponent('equippable')?.getEquipment('Mainhand');

    if (item?.typeId === 'xc:tysahjskf') {
        player.runCommand('effect @s resistance 1 1 true');
    }

    if (item?.typeId === 'xc:tyslfzjz') {
        player.runCommand('effect @s resistance 1 1 true');
    }

    if (item?.typeId === 'xc:tyshjjf') {
        player.runCommand('effect @s resistance 1 1 true');
    }

    if (item?.typeId === 'xc:heih') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hyszbsj') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'pa:hyszszj') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hysgfhjwd') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hyshbscj') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hyshjcj') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hyshjd') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:hyshjzf') {
        player.runCommand('effect @s fire_resistance 1 1 true');
        player.runCommand('enchant @s fire_aspect 2');
    }

    if (item?.typeId === 'xc:byslbsxyj') {
        hitEntity.runCommand('effect @s slowness 5 1 true');
    }

    if (item?.typeId === 'xc:byszsq') {
        hitEntity.runCommand('effect @s slowness 5 1 true');
    }

    if (item?.typeId === 'xc:byszjzzf') {
        hitEntity.runCommand('effect @s slowness 5 1 true');
    }

    if (item?.typeId === 'xc:lysdcjd') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lcjde') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyszbscj') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyshjcq') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lysqbj') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyszsdrv2') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyshzszj') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lysgfzbscj') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lysgfjd') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyszsj') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyszsjd') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:lyszskr') {
        player.runCommand('effect @s regeneration 1 1 true');
        hitEntity.runCommand('effect @s poison 5 1 true');
    }

    if (item?.typeId === 'xc:fyszsr') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyszsxyj') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyszswd') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyszskj') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyszscj') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fysgfzsdrv2') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyshjwd') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fyszsdrv2') {
        player.runCommand('effect @s speed 5 2 true');
    }

    if (item?.typeId === 'xc:fysgfzscj') {
        player.runCommand('effect @s speed 5 2 true');
    }
});
