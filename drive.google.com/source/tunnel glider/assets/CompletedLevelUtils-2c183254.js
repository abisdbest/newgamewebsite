import { k as StorageKeyEnum } from "./FConfig-083e5ca7.js";
import { F as FStorage } from "./FStorage-9c5eaba7.js";
class CompletedLevelUtils {
  static async setPercentIfBigger(levelId, percent, didCollectAllCoins) {
    const completedLevels = await CompletedLevelUtils.getCompletedLevels();
    const completedLevel = completedLevels.find((completedLevel2) => completedLevel2.levelId === levelId);
    if (completedLevel != null && completedLevel.percent > percent)
      return;
    const didCollectAllCoinsAndBeatLevel = didCollectAllCoins && percent === 100;
    await CompletedLevelUtils.setPercent(levelId, percent, didCollectAllCoinsAndBeatLevel);
  }
  static async setPercent(levelId, percent, didCollectAllCoins) {
    const completedLevels = await CompletedLevelUtils.getCompletedLevels();
    const completedLevel = completedLevels.find((completedLevel2) => completedLevel2.levelId === levelId);
    if (completedLevel == null) {
      const newCompletedLevel = {
        levelId,
        percent,
        didCollectAllCoins
      };
      completedLevels.push(newCompletedLevel);
    } else {
      completedLevel.percent = percent;
      completedLevel.didCollectAllCoins = didCollectAllCoins;
    }
    const completedLevelIdsText = JSON.stringify(completedLevels);
    await FStorage.set(StorageKeyEnum.CompletedLevelIds, completedLevelIdsText);
  }
  static async getCompletedLevels() {
    const completedLevelsText = await FStorage.getString(StorageKeyEnum.CompletedLevelIds);
    if (completedLevelsText == null)
      return [];
    const completedLevels = JSON.parse(completedLevelsText);
    return completedLevels;
  }
}
export {
  CompletedLevelUtils as C
};
