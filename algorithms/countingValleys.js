function countingValleys(steps, path = []) {
  let seaLevel = 0;
  let visitsCount = 0;
  for (const step of path.split("")) {
    let seaLevelCopy = seaLevel;
    switch (step) {
      case "D":
        seaLevel -= 1;
        break;
      case "U":
        seaLevel += 1;
        break;
      default:
        break;
    }
    if (seaLevelCopy === 0 && seaLevel === -1) {
      visitsCount++;
    }
  }
  return visitsCount;
}
