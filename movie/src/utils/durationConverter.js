export default function convertingTime(value) {
  const hours = Math.trunc(value / 60);
  const minutes = value % 60;
  const result = [];
  if (hours) result.push(`${hours}ч`);
  if (minutes) result.push(`${minutes}м`);
  return result.join(" ");
}
