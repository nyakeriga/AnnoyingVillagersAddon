import { world, system, ItemStack, EquipmentSlot } from '@minecraft/server';

system.runInterval(() => {
    const players = world.getAllPlayers();

    players.forEach(player => {
        let mainHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Mainhand);
        let offHandItem = player.getComponent('equippable')?.getEquipment(EquipmentSlot.Offhand);

        // Check if the player is holding one of the specified items
        const isHoldingSpecifiedItem = (item) => {
            if (!item) return false;
            const specifiedItems = [
                'xc:zbsjd', 'xc:tsf', 'xc:tqbj', 'xc:tcj', 'xc:twl', 'xc:tdd', 'xc:zsxyj', 'xc:zswd2', 'xc:zssj', 'xc:zskr', 
                'xc:zsjdv2', 'xc:zsjd', 'steve:zsj', 'pa:zsr', 'xc:zsdrv2', 'xc:xhkr', 'xc:lbscd', 'xc:lbswd', 'xc:ssf', 
                'xc:qbj', 'xc:cnzskr', 'xc:gfzscr', 'xc:gfzscd', 'xc:gfzsdrv2', 'xc:gfzsdr', 'xc:gfzscj', 'xc:gfzskr', 
                'xc:cxzsq', 'xc:gfcj', 'xc:gfjd', 'xc:fgzsj', 'xc:cnzsld', 'xc:lcjde', 'xc:bs', 'xc:tsrj', 'xc:zsld', 
                'xc:zsqq', 'xc:zshm', 'xc:zsdd', 'xc:zsjf', 'xc:zsq', 'xc:alice', 'xc:alexsword', 'xc:cnscj', 'xc:scj', 
                'xc:htj', 'xc:lemcqzj', 'xc:cbzsf', 'xc:cjde', 'xc:zsdr', 'xc:zsskf', 'xc:zscd', 'xc:zscr', 'xc:zscq', 
                'xc:zscj', 'xc:zzsxyj', 'xc:zswd', 'pa:zsw', 'pa:zszf', 'pa:zszj', 'xc:zskj', 'xc:tld', 'xc:dcjd', 
                'xc:cjde', 'xc:jzszr', 'xc:zszr', 'xc:hzscj', 'xc:hzscj', 'xc:hbscd', 'xc:hbstd', 'xc:hbsj', 'xc:zbsj', 
                'xc:hyzr', 'xc:gfhbscj', 'xc:hbsqbj', 'source:nljx', 'xc:hszsj', 'xc:hzszj', 'xc:hzsjd', 'xc:hbscj', 
                'xc:fhzscj', 'xc:zshj', 'xc:kyjj', 'xc:hjcq', 'xc:hshjcj', 'xc:hhjj', 'xc:qyld', 'pa:hjd', 'xc:hjskf', 
                'xc:hjjf', 'xc:hjcj', 'xc:hjjd', 'xc:hjwd', 'xc:hjzf', 'xc:ahjdrf', 'xc:ahjj', 'xc:gfhjwd', 'xc:lszsj', 
                'xc:lbsdcjd', 'xc:lbsdr', 'xc:lbsdrv2', 'xc:lbscj', 'xc:lbsxyj', 'xc:lbsj', 'xc:hkj', 'xc:303zr', 
                'xc:lmjd', 'xc:sjj', 'xc:jjcj', 'xc:jwl', 'xc:jxjxzr', 'xc:jxzr', 'xc:lysdzjzzf', 'xc:lysdcjd', 'xc:lyshjskf', 
                'xc:lyshjjf', 'xc:lyshjcq', 'xc:lyshzszj', 'xc:lyszsdrv2', 'xc:lyszsj', 'xc:lyszsjd', 'xc:lyszskr', 
                'xc:lysqbj', 'xc:lyszbscj', 'xc:ayzf', 'xc:d', 'xc:aycd', 'xc:ayhc', 'xc:hd', 'xc:hdv2', 'xc:hszr', 
                'xc:hzszr', 'xc:fgayhc', 'xc:dzk', 'xc:zkhd', 'xc:xyzsq', 'xc:rgd', 'xc:zlj', 'xc:gzj', 'xc:myzm', 
                'xc:hqbj', 'xc:fhzszr', 'xc:tyshjjf', 'xc:tyslfzjz', 'xc:tysahjskf', 'xc:jxfj', 'xc:jxpljd', 'xc:jxjd', 
                'xc:fj', 'xc:fysgfzscj', 'xc:fyshjwd', 'xc:fysgfzsdrv2', 'xc:fyszsdrv2', 'xc:fyszsr', 'xc:fyszscj', 
                'xc:zzsxyj', 'xc:fyszswd', 'xc:fyszskj', 'xc:hyshjd', 'xc:hyshjcj', 'xc:zhjwd', 'xc:hyshbscj', 
                'xc:hysgfhjwd', 'xc:hyszszj', 'xc:hyszbsj', 'xc:zbsxyj', 'xc:gfzbscj', 'xc:vipsword', 'xc:ygj', 
                'xc:zbsdr', 'xc:zbsdrv2', 'xc:zbscj'
            ];
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
