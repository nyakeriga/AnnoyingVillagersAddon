import { system, world, EntityEquippableComponent, EquipmentSlot } from "@minecraft/server";

// 這個 function 用於應用效果
function addEffect(player, effectType, duration, level, particles) {
    player.addEffect(effectType, duration * 20, { amplifier: level, showParticles: false });
}

system.runInterval(() => {
    for (let p of world.getPlayers()) {
        try {
            let equip = p.getComponent(EntityEquippableComponent.componentId);
            let head = equip.getEquipment(EquipmentSlot.Head);
            let chest = equip.getEquipment(EquipmentSlot.Chest);
            let legs = equip.getEquipment(EquipmentSlot.Legs);
            let feet = equip.getEquipment(EquipmentSlot.Feet);

            // 頭盔效果
            if (head) {
                // lz:diamond_helmet_shadow 頭盔 - 抗性 I
                if (head.typeId.includes("lz:diamond_helmet_shadow")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }

                // lz:mfzstk 頭盔 - 生命增加 IV + 恢復 I
                if (head.typeId.includes("lz:mfzstk")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
            }

            // 胸甲效果
            if (chest) {
                // lz:diamond_chestplate_shadow 胸甲 - 抗性 I
                if (chest.typeId.includes("lz:diamond_chestplate_shadow")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }

                // lz:mfzsxj 胸甲 - 生命增加 IV + 恢復 I
                if (chest.typeId.includes("lz:mfzsxj")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
            }

            // 護腿效果
            if (legs) {
                // lz:mfzsht 護腿 - 生命增加 IV + 恢復 I
                if (legs.typeId.includes("lz:mfzsht")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
            }

            // 鞋子效果
            if (feet) {
                // lz:mfzsxz 鞋子 - 生命增加 IV + 恢復 I
                if (feet.typeId.includes("lz:mfzsxz")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
            }

        } catch (e) {
            // 錯誤處理
        }
    }
});
