export function randomInteger(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getColorForPercentage(percent: number) {
  if (percent > 0 && percent <= 25) return "rating-bad";
  if (percent > 25 && percent <= 50) return "rating-average";
  if (percent > 50 && percent <= 75) return "rating-good";
  if (percent > 75) return "rating-excellent";
}
