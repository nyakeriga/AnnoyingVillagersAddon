import { system, world, EntityEquippableComponent, EquipmentSlot } from "@minecraft/server";

// 這個 function 用於應用效果
function addEffect(player, effectType, duration, level, particles) {
    player.addEffect(effectType, duration * 40, { amplifier: level, showParticles: false });
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
                if (head.typeId.includes("xc:hbstk")) {
                    addEffect(p, "speed", 2, 0, true);  // 速度 I
                }
                if (head.typeId.includes("xc:gflbstk") || head.typeId.includes("xc:lbstk")) {
                    addEffect(p, "jump_boost", 2, 0, true);  // 跳躍增強 I
                }
                if (head.typeId.includes("xc:stevetk")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (head.typeId.includes("xc:cmwtk")) {
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
                if (head.typeId.includes("xc:mfzstk") || head.typeId.includes("xc:fgzstk")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                }
                if (head.typeId.includes("xc:wzbooptt")) {
                    addEffect(p, "village_hero", 2, 0, true);  // 村莊英雄
                }
                if (head.typeId.includes("xc:ahjtk")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (head.typeId.includes("xc:booptt")) {
                    addEffect(p, "slow_falling", 2, 0, true);  // 緩速掉落 I
                }
                if (head.typeId.includes("xc:dm")) {
                    addEffect(p, "strength", 2, 0, true);  // 力量 I
                }
            }

            // 胸甲效果
            if (chest) {
                if (chest.typeId.includes("xc:hbsxj") || chest.typeId.includes("xc:pfhbsxj")) {
                    addEffect(p, "speed", 2, 0, true);  // 速度 I
                }
                if (chest.typeId.includes("xc:lbsjj") || chest.typeId.includes("xc:sdlbsxj") || chest.typeId.includes("xc:glfj") || chest.typeId.includes("xc:gflbsxj")) {
                    addEffect(p, "jump_boost", 2, 0, true);  // 跳躍增強 I
                }
                if (chest.typeId.includes("xc:stevexj")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (chest.typeId.includes("xc:cmwxj")) {
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
                if (chest.typeId.includes("xc:mfzsxj") || chest.typeId.includes("xc:fgzsxj") || chest.typeId.includes("xc:mfzsjj") || chest.typeId.includes("xc:fgzsjj")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                }
                if (chest.typeId.includes("xc:ahjjj") || chest.typeId.includes("xc:ahjxj") || chest.typeId.includes("xc:pfahjxj")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (chest.typeId.includes("xc:hjsxj") || chest.typeId.includes("pa:hjs")) {
                    addEffect(p, "water_breathing", 2, 0, true);  // 水下呼吸 I
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
                if (chest.typeId.includes("xc:tklsb")) {
                    addEffect(p, "strength", 2, 0, true);  // 力量 I
                }
                if (chest.typeId.includes("xc:nochtyf")) {
                    addEffect(p, "slow_falling", 2, 0, true);  // 緩速摔落
                }
            }

            // 護腿效果
            if (legs) {
                if (legs.typeId.includes("xc:hbsht")) {
                    addEffect(p, "speed", 2, 0, true);  // 速度 I
                }
                if (legs.typeId.includes("xc:lbsht") || legs.typeId.includes("xc:gflbsht")) {
                    addEffect(p, "jump_boost", 2, 0, true);  // 跳躍增強 I
                }
                if (legs.typeId.includes("xc:steveht")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (legs.typeId.includes("xc:cmwht")) {
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
                if (legs.typeId.includes("xc:mfzsht") || legs.typeId.includes("xc:fgzsht")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                }
                if (legs.typeId.includes("xc:ahjht")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
            }

            // 鞋子效果
            if (feet) {
                if (feet.typeId.includes("xc:hbsxz")) {
                    addEffect(p, "speed", 2, 0, true);  // 速度 I
                }
                if (feet.typeId.includes("xc:lbsxz") || feet.typeId.includes("xc:gflbsxz")) {
                    addEffect(p, "jump_boost", 2, 0, true);  // 跳躍增強 I
                }
                if (feet.typeId.includes("xc:stevexz")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
                if (feet.typeId.includes("xc:cmwxz")) {
                    addEffect(p, "regeneration", 2, 0, true);  // 恢復 I
                }
                if (feet.typeId.includes("xc:mfzsxz") || feet.typeId.includes("xc:fgzsxz")) {
                    addEffect(p, "health_boost", 2, 4, true);  // 生命增加 IV
                }
                if (feet.typeId.includes("xc:ahjxz")) {
                    addEffect(p, "resistance", 2, 0, true);  // 抗性 I
                }
            }

        } catch (e) {
            // 錯誤處理
        }
    }
});
