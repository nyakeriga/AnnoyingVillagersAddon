import { world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe(({ deadEntity }) => {
    const entityType = deadEntity.typeId;

    switch (entityType) {
        case 'lz:villager_scout':
            deadEntity.runCommand('summon lz:villager_scout_fl ~ ~ ~');
            break;
        // 其他情況處理...
    }
});
