let potentialRelics = [
    //0
    spareTank = {
        name: "Spare Fuel Tank",
        varName: "spareTankRelic",
        text: "Fully refills your fuel once if you run our of fuel",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.spareFuelTank += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/sparetank.png",
    },

    goldMaxInventory = {
        name: "Augmented Cargo Bay",
        varName: "goldMaxInvRelic",
        text: "Mining gold ore increases max inventory",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.goldMaxInventory += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/goldmaxinventory.png",
    },

    pauseEnemies = {
        name: "Enemy Disruptor",
        varName: "bronzeMaxFuelRelic",
        text: "Enemies on this level can't move",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.enemyArray = []
                newState.enemyMovementArray = [];
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/stoprelic.png",
    },

    dirtMaxFuel = {
        name: "Dirt-Fuel Converter",
        varName: "dirtToMaxFuelRelic",
        text: "Increase maximum fuel when dropping dirt",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.dirtToMaxFuel += 15;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/dirtmaxfuel.png",
    },

    enemiesDealLess = {
        name: "Armor Plating",
        varName: "halfDamageEnemiesRelic",
        text: "Take less damage from enemies",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.enemyDamageModifier -= 0.2;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/shield2.png",
    },

    //5
    halfDamageFuel = {
        name: "Fuel-Powered Shield",
        varName: "halfDamageFullFuelRelic",
        text: "Take less damage from enemies if fuel above 50%",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.halfDamageFullFuel *= 0.7;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/gasshield.png",
    },

    thornsRelic = {
        name: "Spikes",
        varName: "thornsRelic",
        text: "Kill enemies who damage you",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.thorns = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/thorns.png",
    },

    bronzeSilverBonusRelic = {
        name: "Basic Ore Refiner",
        varName: "bronzeSilverBonusRelic",
        text: "Bronze and silver ore is worth more",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bronzeSilverBonus += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/bronzesilverbonus.png",
    },

    remoteBombsRelic = {
        name: "Remote Detonator",
        varName: "remoteBombsRelic",
        text: "Trigger bombs remotely instead of on impact",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.remoteBombs = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/remotebomb.png",
    },

    weaponsPriceRelic = {
        name: "Weapons Merchant",
        varName: "weaponsPriceRelic",
        text: "Weapons are cheaper in the shop",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (newState.weaponsPriceModifier >= 0.5) {
                    newState.weaponsPriceModifier *= 0.5;
                } else {
                    newState.weaponsPriceModifier = 0
                }
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/gun1.png",
    },

    //10
    killEnemiesHullRelic = {
        name: "Scrap to Armor",
        varName: "killEnemiesHullRelic",
        text: "Killing Enemies increases max hull integrity",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.killEnemiesHullModifier += 5;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/killhull.png",
    },

    killEnemiesHealRelic = {
        name: "Scrap to Armor",
        varName: "killEnemiesHealRelic",
        text: "Killing Enemies repairs your hull if damaged",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.killEnemiesForHealing += 10;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/repairkill.png",
    },

    silverHealingRelic = {
        name: "Silver Wrench",
        varName: "silverHealingRelic",
        text: "Mining silver repairs your hull if damaged",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.silverHealing += 5;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/silverhealing.png",
    },

    bronzeMaxHullRelic = {
        name: "Bronze Armor",
        varName: "bronzeMaxHullRelic",
        text: "Mining bronze ore increases hull armor",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bronzeMaxHull += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/bronzemaxhull.png",
    },

    dirtRubyRelic = {
        name: "Ruby Producer",
        varName: "dirtRubyRelic",
        text: "Dropped dirt blocks contain a ruby",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.dirtRuby = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/dirtruby.png",
    },

    //15
    bombDistanceRelic = {
        name: "Stronger Bombs",
        varName: "bombDistanceRelic",
        text: "Bomb explosion radius is larger",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bombDistance += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/bombupgrader.png",
    },

    laserPiercingRelic = {
        name: "Piercing Laser",
        varName: "laserPiercingRelic",
        text: "Laser pierces through entire row",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.laserPiercing = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/laserpiercing.png",
    },

    bombRefillRelic = {
        name: "Scrap Bombmaker",
        varName: "bombRefillRelic",
        text: "Killing an enemy with a bomb refills that bomb slot",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bombRefill += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/bombrefill.png",
    },

    fuelToBlocksRelic = {
        name: "Fuel Compactor",
        varName: "fuelToBlocksRelic",
        text: "Can use fuel to drop blocks (costs a lot of fuel!)",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.fuelToBlocks += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/fueltoblocks.png",
    },

    upgradeDirtBlockRelic = {
        name: "Mining Efficiency",
        varName: "upgradeDirtBlockRelic",
        text: "Can drop blocks much more quickly",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (newState.dirtThresholdNeeded > 15) {
                    newState.dirtThresholdNeeded -= 15;
                    console.log("dirt threshold is now " + newState.dirtThresholdNeeded)
                }
            })
            await changeState(stateObj);
            console.log("dirth threshold is now " + stateObj.dirtThresholdNeeded)
            return stateObj
        },
        imgPath: "img/relics/drillupgrade.png",
    },

    //20
    fuelTeleporter = {
        name: "Fuel-powered Teleporter",
        varName: "fuelTeleporter",
        text: "Can press T to spend fuel to teleport back to the shop",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (newState.fuelTeleportCost === 0) {
                    newState.fuelTeleportCost = 40;
                } else if (newState.fuelTeleportCost >= 20) {
                    newState.fuelTeleportCost -= 20;
                } else {
                    newState.fuelTeleportCost = 0;
                }
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/teleporter.png",
    },

    dirtCompactor = {
        name: "Dirt Compactor",
        varName: "dirtCompactor",
        text: "Can collect infinite dirt",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.noDirtThreshold = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/infinitedirt.png",
    },

    magneticBlocks = {
        name: "Magetic Blocks",
        varName: "magneticBlocks",
        text: "Enemies stick to dropped dirt blocks",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.magneticBlocks = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/magnetblocks.png",
    },

    silverMaxFuel = {
        name: "Silver Tank",
        varName: "silverMaxFuelRelic",
        text: "Mining silver ore increases max fuel",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.silverMaxFuel += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/silvermaxfuel.png",
    },

    bronzeSilverConverter = {
        name: "Bronze Refiner",
        varName: "bronzeSilverRelic",
        text: "Mined bronze ore gets converted to silver",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bronzeSilverConverter = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/bronzesilverconverter.png",
    },

    //25
    dirtRefiller = {
        name: "Dirt Weapons",
        varName: "dirtRefillsWeapons",
        text: "Dropping dirt refills your weapons",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.dirtRefillsWeapons = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/dirtrefillsweapons.png",
    },

    laserCapacityRelic = {
        name: "Laser Storage",
        varName: "laserCapacityRelic",
        text: "Can carry two more lasers",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.numberLasers += 2;
                newState.laserCapacity += 2;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/lasercapacity.png",
    },

    laserRecaptureRelic = {
        name: "Laser Recapture",
        varName: "laserRecapture",
        text: "Mining a gem with a laser refills your lasers",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.laserGemRefill += 1;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/laserrecapture.png",
    },

    efficientConverter = {
        name: "Efficient Gold Converter",
        varName: "laserRecapture",
        text: "Only costs 2 gold to create a ruby",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.efficientGoldConverter = true;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/efficientgold.png",
    },

    rubyLocator = {
        name: "Ruby Locator",
        varName: "rubyLocator",
        text: "Rubies are more common on every level",
        relicFunc: async (stateObj) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.rubyIncrease += 0.01;
            })
            await changeState(stateObj);
            return stateObj
        },
        imgPath: "img/relics/rubyincrease.png",
    },

    //30
]


function buildRelicArray(stateObj) {
    let tempArray = [potentialRelics[0], potentialRelics[1], potentialRelics[2], potentialRelics[3],
    potentialRelics[4], potentialRelics[5], potentialRelics[7], potentialRelics[9], potentialRelics[10],
    potentialRelics[11], potentialRelics[12], potentialRelics[13], potentialRelics[15], potentialRelics[17],
    potentialRelics[18], potentialRelics[19], potentialRelics[20], potentialRelics[23], potentialRelics[26],
    potentialRelics[27], potentialRelics[29], 
    ]
    if (stateObj.laserPiercing === false) {
        tempArray.push(potentialRelics[16])
    }
    if (stateObj.thorns === false) {
        tempArray.push(potentialRelics[6])
    }
    if (stateObj.remoteBombs === false) {
        tempArray.push(potentialRelics[8])
    }
    if (stateObj.dirtRuby === false) {
        tempArray.push(potentialRelics[14])
    }
    if (stateObj.noDirtThreshold === false) {
        tempArray.push(potentialRelics[21])
    }
    if (stateObj.magneticBlocks === false) {
        tempArray.push(potentialRelics[22])
    }
    if (stateObj.bronzeSilverConverter === false) {
        tempArray.push(potentialRelics[24])
    }
    if (stateObj.dirtRefillsWeapons === false) {
        tempArray.push(potentialRelics[25])
    }
    if (stateObj.efficientGoldConverter === false) {
        tempArray.push(potentialRelics[28])
    }
    //let tempArray = [spareTank, spareTank, spareTank, spareTank]
    return tempArray
}