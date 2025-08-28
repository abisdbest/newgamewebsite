//Must land between previous threshold and defined threshold to trigger



const battleChestConfiguration = {
    rangeMax: 1000,
    type: 3,
    rewards: [
        {
            rewards: [
                {
                    threshold: 400,
                    grantFunction: () => grantWeaponScrap(rand(35, 50))
                },
                {
                    threshold: 750,
                    grantFunction: () => grantWeapon(equipRarities.common)
                },
                {
                    threshold: 915,
                    grantFunction: () => grantWeapon(equipRarities.uncommon)
                },
                {
                    threshold: 990,
                    grantFunction: () => grantWeapon(equipRarities.rare)
                },
                {
                    threshold: 1000,
                    grantFunction: () => grantWeapon(equipRarities.legendary)
                }
            ]
        }
    ],
    defaultReward: () => grantWeaponScrap(rand(20, 25))
}

//Make sure to update display in black chest info UI if you change percentages
const blackChestConfiguration = {
    rangeMax: 1000,
    type: 2,
    rewards: [
        {
            condition: () => chestService.totalBlackChestsOpened == 0,
            grantFunction: () => grantSuperMiner(superMinerRarities.common)
        },
        {
            rewards: [
                {
                    threshold: 400,
                    grantFunction: () => grantSuperMinerSouls(rand(35, 50))
                },
                {
                    threshold: 750,
                    grantFunction: () => grantSuperMiner(superMinerRarities.common)
                },
                {
                    threshold: 915,
                    grantFunction: () => grantSuperMiner(superMinerRarities.uncommon)
                },
                {
                    threshold: 990,
                    grantFunction: () => grantSuperMiner(superMinerRarities.rare)
                },
                {
                    threshold: 1000,
                    grantFunction: () => grantSuperMiner(superMinerRarities.legendary)
                }
            ]
        }
    ],
    defaultReward: () => grantSuperMinerSouls(rand(20, 25))
}

const goldChestConfiguration = {
    rangeMax: 1000,
    type: 1,
    rewards: [
        {
            condition: () => isCandidateForFirstChestBlueprint(),
            grantFunction: () => grantAcceptableDrillBlueprint()
        },
        {
            rewards: [
                {
                    threshold: 380,
                    grantFunction: () => grantMoney(130 * chestService.rewardMultiplier(), 520 * chestService.rewardMultiplier(), true, 2)
                },
                {
                    threshold: 700,
                    condition: () => rollForDrillBlueprint(),
                    grantFunction: () => grantAcceptableDrillBlueprint(),
                    defaultReward: () => grantMoney(130 * chestService.rewardMultiplier(), 520 * chestService.rewardMultiplier(), true, 2)
                },
                {
                    threshold: 850,
                    grantFunction: () => grantMineral(levels[depth][0][0], goldenChestRewardRoller.rand(4, 8) * chestService.rewardMultiplier())
                },
                {
                    threshold: 885,
                    rewards: [
                        {
                            condition: () => depth >= 40 && depth < 899,
                            grantFunction: () => grantKmDepth(1)
                        },
                        {
                            rewards: [
                                {
                                    condition: () => depth < 899 && !isActiveScientistsFull(),
                                    grantFunction: grantRareScientist
                                },
                                {
                                    condition: () => !isOilRigFull(),
                                    grantFunction: grantOil(Math.ceil(oilGeneratedPerHour() * 4))
                                }
                            ],
                            defaultReward: () => grantTimelapse(240)
                        }
                    ]
                },
                {
                    threshold: 915,
                    condition: () => (needsBuildingMaterials() || goldenChestRewardRoller.boolean(0.20)),
                    grantFunction: grantTwentyBuildingMaterials,
                    defaultReward: () => grantMoney(130 * chestService.rewardMultiplier(), 520 * chestService.rewardMultiplier(), true, 2)
                },
                {
                    threshold: 945,
                    condition: () => metalDetectorStructure.level <= 3 && depth > 200 && (needsBuildingMaterials() || goldenChestRewardRoller.boolean(0.20)),
                    grantFunction: grantTwentyBuildingMaterials,
                    defaultReward: () => grantMoney(130 * chestService.rewardMultiplier(), 520 * chestService.rewardMultiplier(), true, 2)
                },
                {
                    threshold: 950,
                    condition: () => (needsBuildingMaterials() || goldenChestRewardRoller.boolean(0.20)),
                    grantFunction: grantFiftyBuildingMaterials,
                    defaultReward: () => grantTimelapse(360)
                },
                {
                    threshold: 975,
                    rewards: [
                        {
                            condition: () => tickets < 10,
                            grantFunction: () => grantTickets(20)
                        },
                        {
                            rewards: [
                                {
                                    condition: () => (cavesStartedSpawning()),
                                    grantFunction: grantSingleCaveConsumable,
                                },
                            ],
                            defaultReward: () => grantTimelapse(240)
                        }
                    ],
                    defaultReward: () => grantTimelapse(360)
                }
            ]
        }
    ],
    defaultReward: () => grantTimelapse(180)
};

const basicChestConfiguration = {
    rangeMax: 1000,
    type: 0,
    rewards: [
        {
            condition: () => (depth >= 50 || (depth >= 12 && unlockScientistsEarly)) && hasUnlockedScientists == 0,
            grantFunction: grantRandomScientist
        },
        {
            condition: () => depth >= 50 && !isActiveScientistsFull() && basicChestRewardRoller.rand(0, 80) < 3 - numActiveScientists(),
            grantFunction: grantRandomScientist
        },
        {
            condition: () => depth >= 20 && (needsBuildingMaterials() || basicChestRewardRoller.boolean(0.20)) && basicChestRewardRoller.rand(0, 1000) < Math.round(80 * STAT.increasedRateOfFindingBuildingMaterials()),
            grantFunction: grantSingleBuildingMaterial
        },
        {
            condition: () => basicChestRewardRoller.rand(0, 100) < 3 - buffs.numActiveChestBuffs(),
            grantFunction: grantStaticBuff
        },
        {
            rewards: [
                {
                    threshold: 400,
                    condition: () => depth > 40 && playtime > 1800,
                    grantFunction: () => grantTimelapse(basicChestRewardRoller.rand(3, 10) * limitedTimeEventManager.basicChestEventMultiplier),
                    defaultReward: () => grantTimelapse(basicChestRewardRoller.rand(3, 6) * limitedTimeEventManager.basicChestEventMultiplier)
                },
                {
                    threshold: 800,
                    condition: () => depth > 50 && playtime > 1800,
                    grantFunction: () => grantMoney(6 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier, 11 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier, false, 1),
                    defaultReward: () => grantMoney(3 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier, 6 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier, false, 1)
                },
                {
                    threshold: 900,
                    condition: () => depth > 60 && playtime > 3600,
                    grantFunction: () => grantMineral(getMineralDepositType(basicChestRewardRoller.rand(Math.floor(depth / 2), depth)), .36 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier),
                    defaultReward: () => grantMineral(getMineralDepositType(basicChestRewardRoller.rand(Math.floor(depth / 2), depth)), .12 * chestService.rewardMultiplier() * limitedTimeEventManager.basicChestEventMultiplier)
                },
                {
                    threshold: 970,
                    condition: () => depth >= 303 && !isOilRigFull(),
                    grantFunction: () => grantOil(Math.ceil(oilGeneratedPerHour()))
                }
            ]
        }
    ],
    defaultReward: () => grantTimelapse(basicChestRewardRoller.rand(3, 10) * limitedTimeEventManager.basicChestEventMultiplier)
};

const battleChestRewards = new Reward(battleChestConfiguration);
const blackChestRewards = new Reward(blackChestConfiguration);
const goldChestRewards = new Reward(goldChestConfiguration);
const basicChestRewards = new Reward(basicChestConfiguration);