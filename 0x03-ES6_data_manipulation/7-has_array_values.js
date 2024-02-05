export default function hasValuesFromArray(setParams, arrParams) {
  for (const elem of arrParams) {
    if(!setParams.has(elem)) return false;
  }
  return true;
}
