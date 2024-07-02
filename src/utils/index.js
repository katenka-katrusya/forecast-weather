const PRESSURE_UNITS = 0.750062;

export const capitalizeFirstLetter = (string) => {
  if (!string) return '';

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const getPressureMm = (hpa) => {
  return Math.round(hpa * PRESSURE_UNITS);
}

// в опциях прописываем город с часовым поясом 0
export const getTime = (seconds) => {
  return new Date(seconds * 1000).toLocaleTimeString('ru-RU', { timeZone: 'Atlantic/Reykjavik' });
}
