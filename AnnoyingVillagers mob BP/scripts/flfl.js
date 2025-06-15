import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe(({ deadEntity }) => {
    const entityType = deadEntity.typeId;

    switch (entityType) {
        case 'xc:blue_villager':
            deadEntity.runCommand('summon xc:villagerfl ~ ~ ~');
            break;
        case 'xc:red_villager':
            deadEntity.runCommand('summon xc:red_villagerfl ~ ~ ~');
            break;
        case 'xc:green_villager':
            deadEntity.runCommand('summon xc:green_villagerfl ~ ~ ~');
            break;
        case 'xc:purple_villager':
            deadEntity.runCommand('summon xc:purple_villagerfl ~ ~ ~');
            break;
        case 'xc:black_villager':
            deadEntity.runCommand('summon xc:black_villagerfl ~ ~ ~');
            break;
    }
});
