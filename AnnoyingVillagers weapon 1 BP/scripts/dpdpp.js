import { world, system, ItemStack, EquipmentSlot } from '@minecraft/server';

system.runInterval(() => {
    const players = world.getAllPlayers();

    players.forEach(player => {
        let mainHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Mainhand);
        let offHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Offhand);

        // Check if the player is holding one of the custom shields
        const isHoldingCustomShield = (item) => {
            if (!item) return false;
            const shieldTypes = ['xc:gflbsdp', 'xc:lbsdp', 'xc:ytdp', 'xc:tdp', 'xc:zsdp', 'xc:ad', 'xc:adv2', 'xc:jdp', 'xc:ahjdp', 'xc:hjdp', 'xc:xjhjdp'];
            return shieldTypes.includes(item.typeId);
        };

        if (isHoldingCustomShield(mainHandItem) || isHoldingCustomShield(offHandItem)) {
            if (player.isSneaking) {
                // Simulate blocking with custom shield
                player.runCommandAsync('effect @s resistance 1 2 true');
            }
        }
    });
}, 1);
