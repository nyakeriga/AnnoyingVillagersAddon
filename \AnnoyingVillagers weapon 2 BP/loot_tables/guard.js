import { world, system, ItemStack, EquipmentSlot } from '@minecraft/server';

system.runInterval(() => {
    const players = world.getAllPlayers();

    players.forEach(player => {
        let mainHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Mainhand);
        let offHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Offhand);

        // Check if the player is holding one of the specified items
        const isHoldingSpecifiedItem = (item) => {
            if (!item) return false;
            const specifiedItems = ['lz:error_sword', 'lz:xhly', 'lz:xhly_cmqsj', 'lz:table'];
            return specifiedItems.includes(item.typeId);
        };

        if (isHoldingSpecifiedItem(mainHandItem) || isHoldingSpecifiedItem(offHandItem)) {
            if (player.isSneaking) {
                // Apply the resistance effect
                player.runCommandAsync('effect @s resistance 1 1 true');
                // Apply the weakness effect with level 20
                player.runCommandAsync('effect @s weakness 1 20 true');
            }
        }
    });
}, 1);
