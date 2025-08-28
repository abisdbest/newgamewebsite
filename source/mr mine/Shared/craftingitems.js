// Interface for crafting items
// Crafting items act as ingredients or rewards in crafting
class CraftingItem {
    id;
    constructor() { }

    getQuantityOwned() { }
    hasQuantity() { }
    canCraft() { }
    getNotCraftableReason() { }
    spendQuantity() { }
    grantQuantity() { }
    upgradeToLevel() { }
    getCurrentLevel() { }
    getMaxLevel() { }
    getIcon() { }
    getName() { }
    getDescription() { }
    getFormattedQuantity() { }
}

class BackpackCraftingItem extends CraftingItem {
    id;

    constructor(backpackItemId) {
        super();
        this.id = backpackItemId;
    }

    getQuantityOwned() {
        return getQuantityOfItemInBackpack(this.id);
    }

    hasQuantity(quantity) {
        return quantity <= getQuantityOfItemInBackpack(this.id, quantity);
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, quantity / getQuantityOfItemInBackpack(this.id, quantity))
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        if (this.hasQuantity(quantity)) {
            removeItemFromBackpackById(this.id, quantity);
            return true;
        }
        return false;
    }

    grantQuantity(quantity) {
        addItemToBackpack(this.id, quantity);
    }

    getIcon() {
        return getItemById(this.id).icon;
    }

    getName() {
        return _(getItemById(this.id).name);
    }

    getDescription() {
        var item = getItemById(this.id);
        if (item && item.description) {
            return item.description;
        }
        return "";
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

class MineralCraftingItem extends CraftingItem {
    id;

    constructor(mineralId) {
        super();
        this.id = mineralId;
    }

    getQuantityOwned() {
        return worldResources[this.id].numOwned;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned();
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        if (this.hasQuantity(quantity)) {
            worldResources[this.id].numOwned -= quantity;
            return true;
        }
        return false;
    }

    grantQuantity(quantity) {
        worldResources[this.id].numOwned += quantity;
    }

    getIcon() {
        if (worldResources[this.id].isIsotope) {
            var isotopeIndex = worldResources[this.id].isotopeIndex || 0;
            if (this.id - isotopeIndex > highestIsotopeUnlocked) {
                return worldResources[this.id].largeIconHidden;
            }
            else {
                return worldResources[this.id].largeIcon;
            }
        }
        else {
            if (this.id > highestOreUnlocked) {
                return worldResources[this.id].largeIconHidden;
            }
            else {
                return worldResources[this.id].largeIcon;
            }
        }
    }

    getName() {
        return getLockedMineralName(this.id);
    }

    getDescription() {
        if (!worldResources[this.id].isIsotope && this.id > highestOreUnlocked && worldResources[this.id].sellValue.greaterThan(0)) {
            return "<br><br>" + _("Found around depth {0}km", beautifynum(Math.ceil(getDepthMineralIsFoundAt(this.id) / 5) * 5));
        }
        else if (worldResources[this.id].isIsotope) {
            var description = ""
            FUEL_ROD_TYPES.forEach((fuelRod) => {
                reactorComponents[fuelRod].rewardOutput.forEach((reward) => {
                    if (reactorComponents[fuelRod].totalEnergyOutput < 0) {
                        if (reward.item.id == this.id) {
                            description = "<br><br>" + _("Rewarded from {0} in the Reactor", reactorComponents[fuelRod].name)
                        }
                    }
                })
            })
            return description;
        }
        else {
            return "";
        }
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }

}

class DrillCraftingItem extends CraftingItem {
    id;

    constructor(drillPartId) {
        super();
        this.id = drillPartId;
    }

    getQuantityOwned() {
        if (getDrillEquipById(this.id).isCrafted) {
            return 1;
        }
        return 0;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned();
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return !this.hasQuantity(1);
    }

    getNotCraftableReason() {
        return _("You already own this drill part");
    }

    spendQuantity(quantity) {
        return false;
    }

    grantQuantity(quantity) {
        getDrillEquipById(this.id).craftAndEquip();
    }

    getIcon() {
        return getDrillEquipById(this.id).icon;
    }

    getName() {
        return getDrillEquipById(this.id).translatedName;
    }

    getCostRelativeToIncrease() {
        var drillEquipStats = getDrillEquipById(this.id);
        var percentageIncrease = drillEquipStats.wattagePercentIncrease();
        var moneyCost = getDrillBlueprintByEquipId(this.id).price;

        return doBigNumberDecimalMultiplication(moneyCost, percentageIncrease / 100);
    }

    getDescription() {
        var drillEquipStats = getDrillEquipById(this.id);
        var level = drillEquipStats.level;
        var baseWatts = drillEquipStats.baseWatts;
        var wattMultiplier = drillEquipStats.wattMultiplier;
        var capacity = drillEquipStats.capacity;
        var description = "";

        var wattageChange = parseFloat(drillEquipStats.wattagePercentIncrease().toFixed(2));
        if (wattageChange != 0) {
            description += _("Drill speed {0}%", (wattageChange >= 0 ? "+" : "") + beautifynum(wattageChange)) + " <br> ";
        }

        if (level) {
            description += _("Level: {0}", level) + " <br> ";
        }
        if (baseWatts) {
            description += _("Base Watts: {0}", beautifynum(baseWatts)) + " <br> ";
        }
        if (wattMultiplier > 1) {
            description += _("Total Watts Multiplier: {0}", beautifynum(wattMultiplier)) + " <br> ";
        }
        if (capacity) {
            description += _("Capacity: {0}", beautifynum(capacity));
        }
        return description;
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

//************************************************************************
//************************************************************************
//DEPRECATED (not sure if removing this will cause issues with saves)
//************************************************************************
//************************************************************************
class WeaponCraftingItem extends CraftingItem {
    id;

    constructor(weaponId) {
        super();
        this.id = weaponId;
    }

    getNotCraftableReason() {
        return _("You already own this weapon");
    }

    getQuantityOwned() {
        return battleEquipsManager.getActiveEquipById(this.id) != undefined;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned();
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        if (this.hasQuantity(quantity)) {
            battleInventory[this.id] = [];
            return true;
        }
        return false;
    }

    grantQuantity(quantity) {

    }

    upgradeToLevel(level) {
        var activeWeapon = battleEquipsManager.getActiveEquipById(this.id);
        if (activeWeapon == undefined) throw new "Error: Cannot upgrade a weapon that isn't owned.";
        activeWeapon.level = level;
    }

    getCurrentLevel() {
        var activeWeapon = battleEquipsManager.getActiveEquipById(this.id);
        if (activeWeapon == undefined) return -1;
        return activeWeapon.level;
    }

    getMaxLevel() {
        return battleEquipsManager.getActiveEquipById(this.id).maxLevel + 1;
    }

    isAtMaxLevel() {
        return this.getCurrentLevel() + 1 >= this.getMaxLevel();
    }

    getIcon() {
        return battleEquipsManager.getActiveEquipById(this.id).icon;
    }

    getName() {
        return _(battleEquipsManager.getActiveEquipById(this.id).name);
    }

    getAttack() {
        return battleEquipsManager.getActiveEquipById(this.id).getDamage();
    }

    getDPS() {
        return battleEquipsManager.getActiveEquipById(this.id).getDPS();
    }

    getCooldown() {
        return; //battleEquipsManager.getActiveEquipById(this.id).getSpeed();
    }

    getDescription() {
        console.log(battleEquipsManager.getActiveEquipById(this.id));
        return battleEquipsManager.getActiveEquipById(this.id).getDescription();
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

class GemCraftingItem extends MineralCraftingItem {
    grantQuantity(quantity) {
        //do nothing
    }

    onForged() {
        worldResources[this.id].numOwned++;
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

class MoneyCraftingItem extends CraftingItem {
    constructor() {
        super();
    }

    getNotCraftableReason() {
        return _("You don't have enough money");
    }

    getQuantityOwned() {
        return money;
    }

    hasQuantity(quantity) {
        return money.greaterThanOrEqualTo(quantity);
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, money.divide(quantity).toFloat())
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        if (this.hasQuantity(quantity)) {
            subtractMoney(quantity);
            return true;
        }
        return false;
    }

    grantQuantity(quantity) {
        addMoney(quantity);
    }

    getIcon() {
        return moneyicon;
    }

    getName() {
        return _("Money");
    }

    getDescription() {
        return "";
    }

    getFormattedQuantity(quantity) {
        return "$" + shortenNum(quantity);
    }
}

class ReactorCraftingItem extends CraftingItem {
    id;

    constructor(componentId) {
        super();
        this.id = componentId;
    }

    getQuantityOwned() {
        return reactorComponents[this.id].numOwned;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned() && quantity <= reactor.numOfTypeInInventory(this.id);
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        if (this.hasQuantity(quantity)) {
            reactorComponents[this.id].numOwned -= quantity;
            return true;
        }
        return false;
    }

    grantQuantity(quantity) {
        reactorComponents[this.id].numOwned += quantity;
    }

    getIcon() {
        return reactorComponents[this.id].craftIcon;
    }

    getName() {
        return _(reactorComponents[this.id].name);
    }

    getDescription() {
        return reactorComponents[this.id].craftDescription;
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

class StructureCraftingItem extends CraftingItem {
    id;

    constructor(structureId) {
        super();
        this.id = structureId;
    }

    getNotCraftableReason() {
        return _("Not enough materials");
    }

    getQuantityOwned() {
        return 1;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned();
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        return false;
    }

    grantQuantity(quantity) {
        //structures[this.id].level += quantity;
        return false;
    }

    upgradeToLevel(level) {
        if (this.hasQuantity(1)) {
            structures[this.id].level = level;
            structures[this.id].onUpgrade();
        }
    }

    getCurrentLevel() {
        return structures[this.id].level;
    }

    getMaxLevel() {
        return structures[this.id].maxLevel;
    }

    isAtMaxLevel() {
        return this.getCurrentLevel() >= this.getMaxLevel();
    }

    getIcon() {
        return structures[this.id].icon;
    }

    getName() {
        return _(structures[this.id].translatedName);
    }

    getDescription() {
        var currentLevel = this.getCurrentLevel();

        var description = "";
        if (structures[this.id].structureDescription[currentLevel]) {
            description = structures[this.id].structureDescription[currentLevel];
        }
        else {
            description = structures[this.id].structureDescription[0]
        }

        if (description != "") {
            description += " <br> ";
        }

        let arrowString = String.fromCharCode(8201) + String.fromCharCode(8594) + String.fromCharCode(8201);
        if (this.getCurrentLevel() >= this.getMaxLevel()) {
            description += _("MAX LEVEL") + " <br> ";
            description += _("Level: {0}", currentLevel) + " <br> ";

            structures[this.id].leveledStats.forEach((stat, index) => {
                if (stat.name && stat.perLvlValue) {
                    description += stat.name + ": " + structures[this.id].statValueForCurrentLevel(index);
                }
            })

        }
        else {
            var nextLevel = this.getCurrentLevel() + 1;
            if (this.getCurrentLevel() == 0) {
                description += _("Level: {0}", nextLevel) + " <br> ";

                structures[this.id].leveledStats.forEach((stat, index) => {
                    if (stat.name && stat.perLvlValue) {
                        description += stat.name + ": " + structures[this.id].statValueForNextLevel(index);
                    }
                })
            }
            else if (nextLevel) {
                description += _("Level: {0}", currentLevel) + arrowString + nextLevel + " <br> ";

                structures[this.id].leveledStats.forEach((stat, index) => {
                    if (stat.name && stat.perLvlValue) {
                        description += stat.name + ": " + structures[this.id].statValueForCurrentLevel(index) + arrowString + structures[this.id].statValueForNextLevel(index) + " <br> ";
                    }
                })
            }
        }
        return description;
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}


class ReactorLevelCraftingItem extends StructureCraftingItem {
    upgradeToLevel(level) {
        super.upgradeToLevel(level);

        craftBlueprint(5, 0, reactorStructure.level);
        reactor.grid.isGridDirty = true;
        reactor.learnReactorBlueprintsForLevel();
        newNews(_("New components are available in your reactor"), true);
    }
}

class DroneCraftingItem extends CraftingItem {
    id;

    constructor(droneId) {
        super();
        this.id = droneId;
    }

    getNotCraftableReason() {
        return _("Not enough materials");
    }

    getQuantityOwned() {
        return 1;
    }

    hasQuantity(quantity) {
        return quantity <= this.getQuantityOwned();
    }

    percentageOfQuantity(quantity) {
        return Math.min(1, this.getQuantityOwned() / quantity)
    }

    canCraft() {
        return true;
    }

    spendQuantity(quantity) {
        return false;
    }

    grantQuantity(quantity) {
        return false;
    }

    upgradeToLevel(level) {
        if (this.hasQuantity(1)) {
            drones[this.id].level = level;
        }
    }

    getCurrentLevel() {
        return parseInt(drones[this.id].level);
    }

    getMaxLevel() {
        return drones[this.id].maxLevel;
    }

    isAtMaxLevel() {
        return this.getCurrentLevel(this.statName) >= this.getMaxLevel(this.statName);
    }

    getIcon() {
        return drones[this.id].icon;
    }

    getName() {
        return _(drones[this.id].translatedName);
    }

    getDescription() {
        var description = drones[this.id].description;
        var currentLevel = this.getCurrentLevel();
        if (description != "") {
            description += " <br> ";
        }

        if (currentLevel >= this.getMaxLevel()) {
            description += _("MAX LEVEL") + " <br> ";
        }
        else {
            description += _("Level: {0}", currentLevel) + " <br> ";
        }
        var currentLevel = this.getCurrentLevel();
        var totalHealth = drones[this.id].totalHealthLevels[currentLevel];
        var totalFuel = drones[this.id].totalFuel;
        var fuelUse = drones[this.id].fuelUseLevels[currentLevel];
        var speedMultiplier = drones[this.id].speedMultiplierLevels[currentLevel];
        var rewardCapacity = drones[this.id].rewardCapacityLevels[currentLevel];
        description += _("Health: {0}", totalHealth) + " <br> ";
        description += _("Total Fuel: {0}", totalFuel) + " <br> ";
        description += _("Fuel Use: {0}", fuelUse) + " <br> ";
        description += _("Speed Multiplier: {0}", speedMultiplier) + " <br> ";
        description += _("Capacity: {0}", rewardCapacity) + " <br> ";
        return description;
    }

    getFormattedQuantity(quantity) {
        return shortenNum(quantity);
    }
}

class DroneUpgradeCraftingItem extends DroneCraftingItem {
    getDescription() {
        var description = drones[this.id].description;
        var currentLevel = this.getCurrentLevel();
        var currentLevel = this.getCurrentLevel();
        var totalHealth = drones[this.id].totalHealthLevels[currentLevel];
        var fuelUse = drones[this.id].fuelUseLevels[currentLevel];
        var speedMultiplier = drones[this.id].speedMultiplierLevels[currentLevel];
        var rewardCapacity = drones[this.id].rewardCapacityLevels[currentLevel];
        if (description != "") {
            description += " <br> ";
        }

        if (this.getCurrentLevel() >= this.getMaxLevel()) {
            description += _("MAX LEVEL") + " <br> ";
            description += _("Level: {0}", currentLevel) + " <br> ";
            description += _("Health: {0}", totalHealth) + " <br> ";
            description += _("Fuel Use: {0}", fuelUse) + " <br> ";
            description += _("Speed Multiplier: {0}", speedMultiplier) + " <br> ";
            description += _("Capacity: {0}", rewardCapacity);
        }
        else {
            var nextLevel = this.getCurrentLevel() + 1;
            var nextTotalHealth = drones[this.id].totalHealthLevels[nextLevel];
            var nextFuelUse = drones[this.id].fuelUseLevels[nextLevel];
            var nextSpeedMultiplier = drones[this.id].speedMultiplierLevels[nextLevel];
            var nextRewardCapacity = drones[this.id].rewardCapacityLevels[nextLevel];
            var arrowText = String.fromCharCode(8201) + String.fromCharCode(8594) + String.fromCharCode(8201);
            description += _("Level: {0}", currentLevel) + arrowText + nextLevel + " <br> ";
            description += _("Health: {0}", totalHealth) + arrowText + nextTotalHealth + this.getPercentageUpgrade(totalHealth, nextTotalHealth) + " <br> ";
            description += _("Fuel Use: {0}", fuelUse) + arrowText + nextFuelUse + this.getPercentageUpgrade(fuelUse, nextFuelUse) + " <br> ";
            description += _("Speed Multiplier: {0}", speedMultiplier) + arrowText + nextSpeedMultiplier + this.getPercentageUpgrade(speedMultiplier, nextSpeedMultiplier) + " <br> ";
            description += _("Capacity: {0}", rewardCapacity) + arrowText + nextRewardCapacity + this.getPercentageUpgrade(rewardCapacity, nextRewardCapacity) + " <br> ";
        }
        return description;
    }

    getPercentageUpgrade(currentLevel, nextLevel) {
        if (currentLevel == 0) return "";
        var percentage = (((nextLevel / currentLevel) - 1) * 100).toFixed(1);
        var text = "(" + percentage + "%)";

        if (percentage != 0) {
            return text;
        }
        else {
            return "";
        }
    }
}

class minerCraftingItem extends CraftingItem {
    id;

    constructor(worldId) {
        super();
        this.id = worldId;
    }

    getQuantityOwned() {
        return worlds[this.id].workersHired;
    }

    canCraft() {
        return worlds[this.id].workersHired < 10;
    }

    upgradeToLevel(level) {
        worlds[this.id].workersHired = level;
    }

    getCurrentLevel() {
        return worlds[this.id].workersHired;
    }

    isAtMaxLevel() {
        return worlds[this.id].workersHired == 10;
    }

    getIcon() {
        let allMinerAssets = [minerImages, lunarMinerImages, titanMinerImages];
        let asset = allMinerAssets[this.id][0];

        return getImageFromMergedImages("minerLevel_" + this.id + "_" + 0,
            icontemplate,
            { "x": 0, "y": 0, "width": 50, "height": 50 },
            { "x": 0, "y": 0, "width": 50, "height": 50 },
            asset,
            { "x": 0, "y": 0, "width": 32, "height": 48 },
            { "x": 1, "y": 1, "width": 48, "height": 48 },
        )
    }
}

class minerLevelCraftingItem extends CraftingItem {
    id;

    constructor(worldId) {
        super();
        this.id = worldId;
    }

    canCraft() {
        return worlds[this.id].workerLevel < this.getMaxLevel() && worlds[this.id].workersHired >= 10;
    }

    getCurrentLevel() {
        return worlds[this.id].workerLevel;
    }

    getMaxLevel() {
        return 10;
    }

    getCurrentLevel() {
        return worlds[this.id].workerLevel;
    }

    upgradeToLevel(level) {
        worlds[this.id].workerLevel = level;
    }

    isAtMaxLevel() {
        return this.getCurrentLevel() >= this.getMaxLevel();
    }

    getIcon(level) {
        level = Math.min(this.getMaxLevel(), level);
        let allMinerAssets = [minerImages, lunarMinerImages, titanMinerImages];
        let asset = allMinerAssets[this.id][level];

        return getImageFromMergedImages("minerLevel_" + this.id + "_" + level,
            icontemplate,
            { "x": 0, "y": 0, "width": 50, "height": 50 },
            { "x": 0, "y": 0, "width": 50, "height": 50 },
            asset,
            { "x": 0, "y": 0, "width": 32, "height": 48 },
            { "x": 1, "y": 1, "width": 48, "height": 48 },
        )
    }
}