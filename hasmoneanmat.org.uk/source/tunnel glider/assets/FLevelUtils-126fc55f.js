import { h as OCTAGON_SIDES_COUNT, o as ALL_OBJECT_TYPES } from "./FConfig-083e5ca7.js";
class FLevelUtils {
  static getObjectBlueprintsFromText(objectBlueprintGridText) {
    const textRows = objectBlueprintGridText.split("\n").map((row) => row.trim()).filter((row) => row.length > 0);
    if (textRows.length === 0)
      throw new Error("No rows detected");
    if (textRows.length > 100)
      throw new Error("Too many rows. Max 100");
    const blueprintGrid = [];
    for (let rowIndex = 0; rowIndex < textRows.length; rowIndex++) {
      const textRow = textRows[rowIndex];
      const blueprintRow = [];
      const textCells = textRow.split("	");
      if (textCells.length !== OCTAGON_SIDES_COUNT)
        throw new Error(`Row number ${rowIndex + 1} has ${textCells.length} cells. Expected ${OCTAGON_SIDES_COUNT} cells.`);
      for (const textCell of textCells) {
        const atSplit = textCell.split("@");
        if (atSplit.length > 2)
          throw new Error(`Invalid object blueprint text: ${textCell}`);
        const [objectType, objectSettingsText] = textCell.split("@");
        if (!ALL_OBJECT_TYPES.includes(objectType))
          throw new Error(`Invalid object type: ${objectType}`);
        blueprintRow.push({
          objectType,
          objectSettings: this.getObjectSettingsFromText(objectSettingsText)
        });
      }
      blueprintGrid.push(blueprintRow);
    }
    return blueprintGrid;
  }
  static getAngleFromEdgeIndex(index) {
    return index * Math.PI * 2 / OCTAGON_SIDES_COUNT;
  }
  static getObjectSettingsFromText(objectSettingsText) {
    if (objectSettingsText == null)
      return {};
    const commaSeparatedValues = objectSettingsText.split(",").map((value) => value.trim());
    const objectSettings = {};
    for (const commaSeparatedValue of commaSeparatedValues) {
      const equalSeparatedValues = commaSeparatedValue.split("=").map((value2) => value2.trim());
      if (equalSeparatedValues.length !== 2)
        throw new Error(`Invalid object settings text: ${objectSettingsText}`);
      const [key, value] = equalSeparatedValues;
      this.validateEqualSeparatedValues(key, value);
      objectSettings[key] = parseFloat(value);
    }
    return objectSettings;
  }
  static validateEqualSeparatedValues(key, value) {
    switch (key) {
      case "coin":
        if (value != "1")
          throw new Error(`Invalid object settings text: ${key}=${value} must be 1`);
        break;
      case "da":
      case "dz":
      case "dr":
        if (!this.isNumeric(value))
          throw new Error(`Invalid object settings text: ${key}=${value} is not a number`);
        break;
      case "dt":
      case "ds":
        if (!this.isNumeric(value))
          throw new Error(`Invalid object settings text: ${key}=${value} is not a number`);
        if (parseFloat(value) <= 0)
          throw new Error(`Invalid object settings text: ${key}=${value} must be positive`);
        break;
      default:
        throw new Error(`Invalid object settings text: ${key}=${value} is not a valid key`);
    }
  }
  static isNumeric(str) {
    if (typeof str != "string")
      return false;
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
}
export {
  FLevelUtils as F
};
